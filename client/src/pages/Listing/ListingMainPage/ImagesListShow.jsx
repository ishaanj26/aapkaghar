import { useState } from "react";
import { motion } from "framer-motion";

export default function ImageListShow({ imagesList }) {
    const [mainImage, setMainImage] = useState(imagesList[0].url);
    const [selectedImage, setSelectedImage] = useState('');
    
    return (
        <div className="p-4">
        {/* Main Featured Image */}
        <div className="mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] overflow-hidden rounded-xl shadow-lg"
          >
            <motion.img
              src={mainImage}
              alt="Main"
              className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImage(mainImage)}
            />
          </motion.div>
        </div>
  
        {/* Thumbnail Row */}
        <div className="flex gap-2 sm:gap-4 justify-center">
          {imagesList
            .filter((src) => src.url !== mainImage)
            .map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-lg shadow-md w-16 sm:w-20 md:w-24"
              >
                <motion.img
                  src={src.url}
                  alt={`Thumbnail ${index}`}
                  className="w-full h-16 sm:h-20 md:h-24 object-cover rounded-lg transition-transform duration-300 cursor-pointer opacity-50 brightness-50 hover:border-2 hover:border-black-900"
                  onClick={() => setMainImage(src.url)}
                />
              </motion.div>
            ))}
        </div>
  
        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <img
                src={selectedImage}
                alt="Expanded"
                className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        )}
      </div>
    );
}
