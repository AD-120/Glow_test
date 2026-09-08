import React from 'react';
import { Globe, ShoppingBag, Sparkles, Heart } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  cartCount: number;
  setIsCartOpen: (open: boolean) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  setLanguage,
  cartCount,
  setIsCartOpen,
  onNavigateSection,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E5D3C5] transition-colors duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#2D2D2D] text-[#FAF9F6] text-xs py-2 px-4 tracking-widest uppercase flex items-center justify-between">
        <div className="hidden sm:flex items-center gap-2 text-[10px] tracking-widest text-[#E5D3C5] mx-auto">
          <Sparkles className="w-3 h-3 text-[#D1B39E]" />
          {language === 'en' ? (
            <span>Complimentary Seoul-to-World Express Delivery over $50 • 2 Deluxe K-Beauty Samples Included</span>
          ) : (
            <span>50,000원 이상 구매 시 전 세계 무료 특급 배송 • 프리미엄 K-뷰티 미니어처 2종 증정</span>
          )}
        </div>
        <div className="sm:hidden text-center w-full text-[10px] tracking-widest font-medium">
          {language === 'en' ? 'Free Express Shipping over $50' : '전 세계 무료 특급 배송 ($50 이상)'}
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 h-20 flex items-center justify-between">
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-[#4A4A4A]">
          <button
            onClick={() => onNavigateSection('product-overview')}
            className="hover:opacity-50 transition-opacity cursor-pointer"
          >
            {language === 'en' ? 'The Serum' : '세럼 소개'}
          </button>
          <button
            onClick={() => onNavigateSection('skin-match')}
            className="hover:opacity-50 transition-opacity flex items-center gap-1.5 cursor-pointer"
          >
            <span>{language === 'en' ? 'Skin Match' : '맞춤 진단'}</span>
            <span className="w-1 h-1 rounded-full bg-[#D1B39E]"></span>
          </button>
          <button
            onClick={() => onNavigateSection('formula-tabs')}
            className="hover:opacity-50 transition-opacity cursor-pointer"
          >
            {language === 'en' ? 'Formulation' : '성분 & 임상'}
          </button>
          <button
            onClick={() => onNavigateSection('ritual-guide')}
            className="hover:opacity-50 transition-opacity cursor-pointer"
          >
            {language === 'en' ? 'Ritual' : '사용 리추얼'}
          </button>
        </nav>

        {/* Brand Logo */}
        <div className="flex flex-col items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="font-light tracking-[0.3em] text-2xl text-[#2D2D2D] uppercase">
            SEOUL GLOW
          </span>
          <span className="text-[10px] tracking-widest uppercase opacity-60 text-[#4A4A4A] -mt-0.5">
            {language === 'en' ? 'Traditional Wisdom • Modern Science' : '전통의 지혜 • 현대 피부과학'}
          </span>
        </div>

        {/* Language Switcher & Action Controls */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Clean Minimalist Language Toggle */}
          <div className="flex items-center gap-2.5 text-xs tracking-widest pl-2 sm:pl-4 sm:border-l border-[#E5D3C5]">
            <button
              onClick={() => setLanguage('en')}
              className={`transition-opacity cursor-pointer ${
                language === 'en'
                  ? 'font-bold opacity-100 text-[#2D2D2D]'
                  : 'opacity-40 text-[#4A4A4A] hover:opacity-75'
              }`}
              title="English"
            >
              EN
            </button>
            <span className="opacity-25 text-[#4A4A4A] select-none">/</span>
            <button
              onClick={() => setLanguage('ko')}
              className={`transition-opacity cursor-pointer ${
                language === 'ko'
                  ? 'font-bold opacity-100 text-[#2D2D2D]'
                  : 'opacity-40 text-[#4A4A4A] hover:opacity-75'
              }`}
              title="한국어 (Korean)"
            >
              KR
            </button>
          </div>

          {/* Cart Icon with Counter */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-[#2D2D2D] hover:opacity-60 transition-opacity cursor-pointer"
            aria-label="View shopping bag"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#2D2D2D] text-white text-[9px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
