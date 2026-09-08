import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { Language, ProductImage } from '../types';

interface ProductGalleryProps {
  images: ProductImage[];
  selectedImageIndex: number;
  onSelectImage: (index: number) => void;
  language: Language;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  selectedImageIndex,
  onSelectImage,
  language,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const currentImage = images[selectedImageIndex] || images[0];

  const handlePrev = () => {
    onSelectImage(selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1);
  };

  const handleNext = () => {
    onSelectImage(selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Central Main Featured Image Panel */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#FAF9F6] border border-[#E5D3C5] group">
        {/* Main Product Image */}
        <img
          key={currentImage.id}
          src={currentImage.src}
          alt={currentImage.alt}
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover transition-all duration-500 ease-out ${
            isZoomed ? 'scale-125 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] tracking-widest uppercase font-medium bg-[#FAF9F6]/90 backdrop-blur-sm text-[#2D2D2D] border border-[#E5D3C5]">
            <Sparkles className="w-3 h-3 text-[#D1B39E]" />
            {language === 'en' ? 'SEOUL PATENT FORMULA' : '특허 발효 포뮬러'}
          </span>
          <span className="hidden sm:inline-block px-2.5 py-1 text-[10px] tracking-widest uppercase font-medium bg-[#2D2D2D]/90 text-[#FAF9F6] backdrop-blur-sm">
            {language === 'en' ? currentImage.labelEn : currentImage.labelKo}
          </span>
        </div>

        {/* Zoom Hint Icon */}
        <button
          onClick={() => setIsZoomed(!isZoomed)}
          aria-label="Toggle zoom view"
          className="absolute top-4 right-4 p-2 bg-[#FAF9F6]/85 backdrop-blur-sm hover:bg-[#FAF9F6] text-[#2D2D2D] border border-[#E5D3C5] transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </button>

        {/* Navigation Arrow Controls */}
        <button
          onClick={handlePrev}
          aria-label="Previous product image"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#FAF9F6]/90 hover:bg-[#FAF9F6] text-[#2D2D2D] flex items-center justify-center backdrop-blur-sm border border-[#E5D3C5] transition-all duration-200 opacity-70 group-hover:opacity-100 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next product image"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#FAF9F6]/90 hover:bg-[#FAF9F6] text-[#2D2D2D] flex items-center justify-center backdrop-blur-sm border border-[#E5D3C5] transition-all duration-200 opacity-70 group-hover:opacity-100 cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Bottom Image Caption Overlay */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#2D2D2D]/85 via-[#2D2D2D]/40 to-transparent p-4 pt-10 text-[#FAF9F6] flex items-end justify-between">
          <div className="text-xs max-w-[80%] font-light leading-relaxed">
            <p className="font-medium text-xs tracking-widest uppercase text-[#FAF9F6]">
              {language === 'en' ? currentImage.labelEn : currentImage.labelKo}
            </p>
            <p className="text-[#E5D3C5] text-[11px] mt-0.5 line-clamp-1 opacity-90">
              {language === 'en' ? currentImage.descriptionEn : currentImage.descriptionKo}
            </p>
          </div>
          <span className="text-xs font-mono tracking-widest text-[#E5D3C5]">
            0{selectedImageIndex + 1} / 0{images.length}
          </span>
        </div>
      </div>

      {/* Thumbnails Row */}
      <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
        {images.map((img, index) => {
          const isSelected = index === selectedImageIndex;
          return (
            <button
              key={img.id}
              onClick={() => onSelectImage(index)}
              className={`relative aspect-square overflow-hidden transition-all duration-200 text-left cursor-pointer group ${
                isSelected
                  ? 'border-2 border-[#2D2D2D] shadow-xs'
                  : 'border border-[#E5D3C5] opacity-60 hover:opacity-100 hover:border-[#D1B39E]'
              }`}
              aria-label={`View image ${index + 1}: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div
                className={`absolute inset-0 bg-black/10 transition-opacity ${
                  isSelected ? 'opacity-0' : 'opacity-15 group-hover:opacity-0'
                }`}
              />
              <div className="absolute bottom-1 inset-x-1 text-center">
                <span className="inline-block px-1.5 py-0.5 text-[9px] tracking-wider uppercase font-medium bg-[#FAF9F6]/95 text-[#2D2D2D] border border-[#E5D3C5]/60 backdrop-blur-xs truncate max-w-full">
                  {language === 'en' ? img.labelEn : img.labelKo}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
