import { useContext, useEffect, useState, useRef, } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from "../../../../components/Buttons/Button";
import { IoMdImages } from "react-icons/io";
import Select from "react-select";
import { TOTAL_AMENITIES, propertyOptions, neighborhoods } from "../../../../data";
import { createClient } from '@supabase/supabase-js';
import { toast } from 'react-toastify';
import { AppContent } from '../../../../context/AppContext';
import FilePreview from "../AddProperties/FilePreview";
import LoadingScreen from '../../../../components/LoadingScreen/LoadingScreen';


export default function UpdateListing() {
    const params = useParams()
    const { userData, supaAPIKey, supaURL } = useContext(AppContent)
    const supabase = createClient(supaURL, supaAPIKey)

    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const [files, setFiles] = useState([])
    const [loading, setLoading] = useState(false);


    const [formData, setFormData] = useState({
        address: '',
        amenities: [],
        approval: "Pending",
        bedrooms: '1',
        bathrooms: '1',
        country: '',
        description: '',
        file_attachment: [],
        floor_plan: [],
        garage_size: '100',
        images: [],
        map_location: [],
        neighborhood: "",
        no_of_garage: '2',
        price: '40000',
        size: '110',
        sold: false,
        state: '',
        status: 'rent',
        title: '',
        type: [],
        video_url: [],
        virtual_tour_360: "",
        whats_nearby: [],
        yearBuilt: '1999',
        zip_code: '',

    });

    useEffect(() => {
        const fetchListing = async () => {
            setLoading(true)
            const listingId = params.listingId
            const { data } = await axios.get(`http://localhost:3000/api/listing/get/${listingId}`,)
            if (data.success) {
                setFormData(data.listing)
                // Update setFiles with image URLs from data.listing
                const files = await Promise.all(data.listing.images.map(async image => {
                    const response = await fetch(image.url);
                    const blob = await response.blob();
                    return new File([blob], image.url, {
                        type: blob.type,
                    });
                }));
                setFiles(files)
                setLoading(false)
                return
            }
            else {
                console.log(data.message);
                navigate('/')
                setLoading(false)
            }
        }

        fetchListing()
    }, [])

    const inputImageRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    };

    // const [imageUploadError, setImageUploadError] = useState(false);
    // const [uploading, setUploading] = useState(false);
    // const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        const allowedEmptyFields = ['images', 'virtual_tour_360', "video_url", "floor_plan", 'file_attachment'];

        try {
            const emptyFields = [];
            Object.keys(formData).forEach((key) => {
                if (!allowedEmptyFields.includes(key)) {
                    if (typeof formData[key] === 'string' && formData[key] === '') {
                        emptyFields.push(key);
                    } else if (Array.isArray(formData[key]) && formData[key].length === 0) {
                        emptyFields.push(key);
                    }
                }
            });

            if (emptyFields.length > 0) {
                return setError(`Please fill in the following fields: ${emptyFields.join(', ')}`);
            }
            if (files.length < 1) return setError('You must upload at least one image');
            if (files.length > 10) return setError('You can only upload a maximum of 10 images');

            setError(false);
            console.log("THE FILES ARE---->", files);

            // Upload images and wait for all promises to resolve
            const urls = await Promise.all(files.map(file => storeImage(file)));
            const images = urls.map(url => ({ url }));

            // Create a new updatedFormData object
            const updatedFormData = {
                ...formData,
                images: images
            };

            console.log("THE FORMDATA AFTER SUBMIT IS--->", updatedFormData);

            // Now call submitForm with the correct updated data
            await submitForm(updatedFormData);
            setLoading(false)
        } catch (error) {
            setError(error.message);
            console.log(error);
            setLoading(false)
        }
    }

    const storeImage = async (file) => {
        return new Promise(async (resolve, reject) => {
            try {
                const fileName = new Date().getTime() + file.name; // Unique file name                
                const { data, error } = await supabase.storage.from('images').upload(fileName, file)
                if (error) {
                    setError(error); // Handle upload error
                    reject(error);

                }
                // Get the public URL of the uploaded file
                const { data: urlData } = supabase.storage
                    .from('images')
                    .getPublicUrl(fileName);
                console.log("the address is :", urlData.publicUrl); // Return the public URL
                resolve(urlData.publicUrl); // Return the public URL

            } catch (error) {
                console.log(file)
                toast.error('Error uploading file');
                toast.error(error); // Handle upload error
                reject(error);
            }
        })
    };

    const submitForm = async (updatedFormData) => {
        try {
            axios.defaults.withCredentials = true;

            const { data } = await axios.post(`http://localhost:3000/api/listing/update/${params.listingId}`, { ...updatedFormData, userRef: userData._id })

            if (data.success) {
                navigate("/");
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError(error.message);
            console.log(error);
            setLoading(false)
        }
    };
    if (loading) {
        return <LoadingScreen />;
    }
    return (
        <div className="bg-white p-6 rounded-lg shadow border border-blue-300">
            <h2 className="text-lg font-bold text-gray-700 mb-4 mt-20">Update Property</h2>

            <div className="mt-2" >
                <h2 className="text-2xl font-semibold mb-2">Upload Media</h2>
                <label className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-6 cursor-pointer">
                    <input
                        ref={inputImageRef}
                        type="file"
                        multiple
                        accept="image/*"
                        className="hidden"
                        onChange={(event) => {
                            setFiles((prevFiles) => [...prevFiles, ...event.target.files]);

                        }}
                    />
                    <Button leftIcon={<IoMdImages className="inline w-5 h-5" />} onClick={() => { inputImageRef.current.click(); }} text="Select photos" className="bg-blue-600 text-white px-4 py-2 rounded-md" />
                    <p className="text-sm text-gray-500 mt-2">or drag photos here (Up to 10 photos)</p>
                </label>
                {/* <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
            {files.length > 0 && files.map((file, index) => (
                <div key={index} className="relative group">
                    <img src={URL.createObjectURL(file)} alt={`Preview ${index}`} className="w-full h-24 object-cover rounded-md" />
                    <button
                        className="absolute top-0 right-0 bg-black bg-opacity-50 p-2 rounded-full text-white hidden group-hover:block "
                        onClick={() => {
                            setFiles(files.filter((_, i) => i !== index));
                        }}
                    >
                        <FaTrash className="hover:fill-red-600" size={16} />
                    </button>
                </div>
            ))}
        </div> */}
                <FilePreview files={files} setFiles={setFiles} />
                <h2 className="text-2xl font-semibold my-2">Information</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-medium">Title:<span className="text-red-700">*</span></label>
                        <input type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Choose"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Description:<span className="text-red-700">*</span></label>
                        <textarea rows="4"
                            style={{ resize: "none" }}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Your Description"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                    <div>
                        <label className="block font-medium">Price:<span className="text-red-700">*</span></label>
                        <input type="text"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="Enter price of house"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium">Bedrooms:<span className="text-red-700">*</span></label>
                            <input type="number"
                                name="bedrooms"
                                value={formData.bedrooms}
                                onChange={handleChange}
                                placeholder="Number of bedrooms"
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                        </div>
                        <div>
                            <label className="block font-medium">Bathrooms:<span className="text-red-700">*</span></label>
                            <input type="number"
                                name="bathrooms"
                                value={formData.bathrooms}
                                onChange={handleChange}
                                placeholder="Number of bathrooms"
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium">Size (sq ft):<span className="text-red-700">*</span></label>
                            <input type="number"
                                name="size"
                                value={formData.size}
                                onChange={handleChange}
                                placeholder="Enter size in square feet"
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                        </div>
                        <div>
                            <label className="block font-medium">Year Built:<span className="text-red-700">*</span></label>
                            <input type="number"
                                name="yearBuilt"
                                value={formData.yearBuilt}
                                onChange={handleChange}
                                placeholder="Enter year built"
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium">Number of Garage:<span className="text-red-700">*</span></label>
                            <input type="number"
                                name="no_of_garage"
                                value={formData.no_of_garage}
                                onChange={handleChange}
                                placeholder="Enter number of garages"
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                        </div>
                        <div>
                            <label className="block font-medium">Garage Size (sq ft):<span className="text-red-700">*</span></label>
                            <input type="text"
                                name="garage_size"
                                value={formData.garage_size}
                                onChange={handleChange}
                                placeholder="Enter garage size"
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                        </div>
                    </div>

                    <div>
                        <label className="block font-medium">Status:<span className="text-red-700">*</span></label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
                            <option>For Sale</option>
                            <option>For Rent</option>
                            <option>For PG</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium">Type of Property:<span className="text-red-700">*</span></label>
                        <Select
                            isMulti
                            options={propertyOptions}
                            value={formData.type}
                            onChange={(selectedOptions) => {
                                setFormData((prevFormData) => ({ ...prevFormData, type: selectedOptions }));
                            }}
                            className="w-full"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Amenities and Features:<span className="text-red-700">*</span></label>
                        <Select
                            placeholder="What's Included? (Specify amenities and features that will attract buyers):"
                            isMulti
                            options={TOTAL_AMENITIES}
                            value={formData.amenities}
                            onChange={(selectedOptions) => {
                                setFormData((prevFormData) => ({ ...prevFormData, amenities: selectedOptions }));
                            }}
                            className="w-full"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Full Address:<span className="text-red-700">*</span></label>
                        <input type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter property full address"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label className="block font-medium">Zip Code:<span className="text-red-700">*</span></label>
                            <input type="text"
                                name="zip_code"
                                value={formData.zip_code}
                                onChange={handleChange}
                                placeholder="Enter property zip code"
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                        </div>

                        <div>
                            <label className="block font-medium">Country:<span className="text-red-700">*</span></label>
                            <input type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                placeholder="United States"
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium">Province/State:<span className="text-red-700">*</span></label>
                            <select
                                name="state"
                                value={formData.state}
                                onChange={(e) => {
                                    setFormData((prevFormData) => ({ ...prevFormData, state: e.target.value }));
                                }}
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
                                <option value="">Select State</option>
                                <option value="Delhi">Delhi</option>
                            </select>
                        </div>

                        <div>
                            <label className="block font-medium">Neighborhood:<span className="text-red-700">*</span></label>
                            <select
                                name="neighborhood"
                                value={formData.neighborhood}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
                                <option value="">Select Neigborhood</option>
                                {neighborhoods.map(({ name, mapCoordinates }) => (
                                    <option value={name} key={mapCoordinates}>{name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block font-medium">What's Nearby:<span className="text-red-700">*</span></label>
                        <textarea rows="4"
                            style={{ resize: "none" }}
                            name="whats_nearby"
                            value={formData.whats_nearby}
                            onChange={handleChange}
                            placeholder="Enter nearby places" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
                    </div>
                    <div>
                        <label className="block font-medium">Map Location:<span className="text-red-700">*</span></label>
                        <input type="text"
                            name="map_location"
                            value={formData.map_location}
                            onChange={handleChange}
                            placeholder="Enter location Coordinates"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>

                    <div>
                        <label className="block font-medium">Video URL:</label>
                        <input type="text"
                            name="video_url"
                            value={formData.video_url}
                            onChange={handleChange}
                            placeholder="Enter video link" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>

                    <div>
                        <label className="block font-medium">File Attachments:</label>
                        <input type="file"
                            multiple
                            name="file_attachment"
                            onChange={(e) => {
                                setFormData((prevFormData) => ({
                                    ...prevFormData,
                                    file_attachment: e.target.files,
                                }));
                            }}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>

                    <div>
                        <label className="block font-medium">Floor Plans:</label>
                        <input type="file"
                            name="floor_plan"
                            onChange={(e) => {
                                setFormData((prevFormData) => ({
                                    ...prevFormData,
                                    floor_plan: e.target.files,
                                }));
                            }}
                            multiple className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>

                    <div>
                        <label className="block font-medium">360 Virtual Tour:</label>
                        <input type="text"
                            name="virtual_tour_360"
                            value={formData.virtual_tour_360}
                            onChange={handleChange}
                            placeholder="Enter 360 Virtual Tour link" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>



                    <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                        Update Property
                    </button>
                    <p className='text-red-700 text-sm'>
                        {error && error.toString()}
                    </p>
                </form>
            </div>
        </div>
    );
}