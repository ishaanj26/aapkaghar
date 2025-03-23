import { useContext, useRef, useState, useEffect } from "react";
import { Button } from "../../../../components/Buttons/Button";
import { IoMdImages } from "react-icons/io";
import Select from "react-select";
import { TOTAL_AMENITIES, propertyOptions, neighborhoods } from "../../../../data";
import { createClient } from '@supabase/supabase-js';
import { toast } from 'react-toastify';
import { AppContent } from '../../../../context/AppContext';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import FilePreview from "./FilePreview";
import NearbyPlace from "./NearbyPlace";
import LoadingScreen from '../../../../components/LoadingScreen/LoadingScreen'

export default function AddProperties() {
    const navigate = useNavigate()
    const { userData, supaAPIKey, supaURL, getUserListings } = useContext(AppContent)
    const supabase = createClient(supaURL, supaAPIKey)

    const [formData, setFormData] = useState({
        address: '',
        amenities: [],
        approval: "Pending",
        bedrooms: '',
        bathrooms: '',
        country: '',
        description: '',
        file_attachment: [],
        no_of_parking_spaces: '',
        images: [],
        map_location: [],
        neighborhood: "",
        no_of_service_quarter: '',
        price: '',
        size: '',
        sold: false,
        state: '',
        furnishing_status: '',
        construction_status: "",
        status: '',
        title: '',
        type: [],
        video_url: [],
        whats_nearby: [],
        yearBuilt: '',
        floor_number: '',
        zip_code: '',

    });

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const [files, setFiles] = useState([]);


    const inputImageRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    };

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

    const handleSubmit = async (e) => {
        console.log("REACHED HERE")
        e.preventDefault();
        const allowedEmptyFields = ['images', "video_url", 'file_attachment'];

        try {
            setLoading(true)
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
                setLoading(false)
                return setError(`Please fill in the following fields: ${emptyFields.join(', ')}`);
            }
            if (files.length < 1) {
                setLoading(false)
                return setError('You must upload at least one image')
            }
            if (files.length > 10) {
                setLoading(false)
                return setError('You can only upload a maximum of 10 images');
            }
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
        } catch (error) {
            setLoading(false)
            setError(error.message);
            console.log(error);
        }
    };

    const submitForm = async (updatedFormData) => {
        try {
            setLoading(true)
            console.log("SUBMITTING FORM DATA WITH IMAGES", updatedFormData);
            axios.defaults.withCredentials = true;

            const { data } = await axios.post('http://localhost:3000/api/listing/create', {
                ...updatedFormData,
                userRef: userData._id
            });

            if (data.success) {
                setLoading(false)
                navigate("/");
                getUserListings()
            } else {
                setError(data.message);
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            setError(error.message);
            console.log(error);
        }
    };



    // Store the categories state here
    const [categories, setCategories] = useState([]);

    // Sync categories with formData.whats_nearby
    useEffect(() => {
        setFormData((prev) => ({
            ...prev,
            whats_nearby: categories.map(category => ({
                category: category.name,
                locations: category.locations
            }))
        }));
    }, [categories]);
    console.log(formData.whats_nearby)

    if (loading) {
        return <LoadingScreen />;
    }
    return (
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
                <div className="grid grid-cols-3 gap-4">
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
                    <div>
                        <label className="block font-medium">Floor Number:<span className="text-red-700">*</span></label>
                        <input type="number"
                            name="floor_number"
                            value={formData.floor_number}
                            onChange={handleChange}
                            placeholder="Enter Floor Number"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium">Number of Service Quarter:<span className="text-red-700">*</span></label>
                        <input type="number"
                            name="no_of_service_quarter"
                            value={formData.no_of_service_quarter}
                            onChange={handleChange}
                            placeholder="Enter number of Service Quarter"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                    <div>
                        <label className="block font-medium">Number of Parking Spaces:<span className="text-red-700">*</span></label>
                        <input type="text"
                            name="no_of_parking_spaces"
                            value={formData.garage_size}
                            onChange={handleChange}
                            placeholder="Enter Number of Parking Spaces"
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
                        <option value="">Select Status</option>
                        <option value="sale" >For Sale</option>
                        <option value="rent">For Rent</option>
                        <option value='pg'> PG</option>
                    </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium">Furnishing Status:<span className="text-red-700">*</span></label>
                        <select
                            name="furnishing_status"
                            value={formData.furnishing_status}
                            onChange={(e) => {
                                setFormData((prevFormData) => ({ ...prevFormData, furnishing_status: e.target.value }));
                            }}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
                            <option value="">Select Furnishing Status</option>
                            <option value="Furnished">Furnished</option>
                            <option value="Unfurnished">Unfurnished</option>
                            <option value="Semi-Furnished">Semi-Furnished</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium">Construction Status:<span className="text-red-700">*</span></label>
                        <select
                            name="construction_status:"
                            value={formData.construction_status}
                            onChange={(e) => {
                                setFormData((prevFormData) => ({ ...prevFormData, construction_status: e.target.value }));
                            }}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
                            <option value="">Select Construction Status:</option>
                            <option value="Ready To Move">Ready To Move</option>
                            <option value="Resale">Resale</option>
                            <option value="Under Construction">Under Construction</option>
                        </select>
                    </div>
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
                            placeholder="India"
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

                    {/*  <textarea rows="4"
                        style={{ resize: "none" }}
                        name="whats_nearby"
                        value={formData.whats_nearby}
                        onChange={handleChange}
                        placeholder="Enter nearby places" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
               */}
                    <NearbyPlace categories={categories} setCategories={setCategories} />

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
                <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                    Submit Property
                </button>
                <p className='text-red-700 text-sm'>
                    {error && error.toString()}
                </p>
            </form>
        </div>
    );
}