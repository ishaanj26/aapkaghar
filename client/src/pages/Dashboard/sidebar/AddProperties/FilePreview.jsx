import React, { useState } from 'react';
import { FaTrash, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const FilePreview = ({ files, setFiles }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleDeleteFile = (index) => {
        const newFiles = files.filter((_, i) => i !== index);
        setFiles(newFiles);
        if (index === selectedIndex && newFiles.length > 0) {
            setSelectedIndex(0);
        }
    };

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData('text/plain', index);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, targetIndex) => {
        e.preventDefault();
        const sourceIndex = e.dataTransfer.getData('text/plain');
        const newFiles = [...files];
        const [removed] = newFiles.splice(sourceIndex, 1);
        newFiles.splice(targetIndex, 0, removed);
        setFiles(newFiles);
    };

    const handlePrev = () => {
        setSelectedIndex((selectedIndex + files.length - 1) % files.length);
    };

    const handleNext = () => {
        setSelectedIndex((selectedIndex + 1) % files.length);
    };

    return (
        <div className="mt-4 flex flex-col items-center">
            {files.length > 0 && (
                <div className="flex items-center w-full xl:w-[70%]">
                    <button
                        className="bg-black bg-opacity-50 p-2 rounded-full text-white"
                        onClick={handlePrev}
                    >
                        <FaChevronLeft size={16} className='hover:cursor-pointer' />
                    </button>
                    <div className="relative w-full h-[20rem] mx-4">
                        <img
                            src={URL.createObjectURL(files[selectedIndex])}
                            alt={`Preview ${selectedIndex}`}
                            className="w-full h-full object-cover rounded-md"
                        />
                        <button
                            className="absolute top-2 right-2 bg-black bg-opacity-50 p-2 rounded-full text-white"
                            onClick={() => handleDeleteFile(selectedIndex)}
                        >
                            <FaTrash className="hover:fill-red-300" size={16} />
                        </button>
                    </div>
                    <button
                        className="bg-black bg-opacity-50 p-2 rounded-full text-white"
                        onClick={handleNext}
                    >
                        <FaChevronRight size={16} className=' hover:cursor-pointer' />
                    </button>
                </div>
            )}
            <div className="mt-4 flex gap-2 overflow-x-auto" onDragOver={handleDragOver}>
                {files.map((file, index) => (
                    <img
                        key={index}
                        src={URL.createObjectURL(file)}
                        alt={`Thumbnail ${index}`}
                        className={`w-16 h-16 object-cover rounded-md cursor-pointer ${selectedIndex === index ? 'border-2 border-blue-500' : ''}`}
                        onClick={() => setSelectedIndex(index)}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDrop={(e) => handleDrop(e, index)}
                    />
                ))}
            </div>

            {files.length>1 && <p className="text-gray-600 text-sm font-medium my-4">
                Prioritize your photos by dragging them in order of importance.
            </p>}
        </div>
    );
};

export default FilePreview;