import React, { useState } from 'react';
import { ShoppingBag, Check, Star, ShieldCheck, Truck, Sparkles, Gift } from 'lucide-react';
import { Language, SkinType } from '../types';

interface ProductPurchaseBarProps {
  language: Language;
  selectedSkinType: SkinType;
  onAddToCart: (size: string, quantity: number, price: number) => void;
}

export const ProductPurchaseBar: React.FC<ProductPurchaseBarProps> = ({
  language,
  selectedSkinType,
  onAddToCart,
}) => {
  const [selectedSize, setSelectedSize] = useState<'30ml' | '50ml'>('30ml');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const priceUSD = selectedSize === '30ml' ? 38 : 52;
  const priceKRW = selectedSize === '30ml' ? 48000 : 66000;
  const originalUSD = selectedSize === '50ml' ? 68 : null;
  const originalKRW = selectedSize === '50ml' ? 84000 : null;

  const handleAdd = () => {
    setIsAdded(true);
    const activePrice = language === 'en' ? priceUSD : priceKRW;
    onAddToCart(selectedSize, quantity, activePrice * quantity);
    setTimeout(() => setIsAdded(false), 2200);
  };

  return (
    <div className="w-full bg-[#FAF9F6] border border-[#E5D3C5] p-6 sm:p-8 space-y-5">
      {/* Title & Reviews Header */}
      <div className="space-y-3 border-b border-[#E5D3C5] pb-5">
        {/* Sub-label */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-medium tracking-[0.25em] text-[#D1B39E] uppercase">
            {language === 'en' ? 'AWARD-WINNING FORMULATION' : '2026 글로우픽 1위 세럼'}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-[#4A4A4A]">
            <span className="flex text-[#D1B39E]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current stroke-none" />
              ))}
            </span>
            <span className="font-medium text-[#2D2D2D]">4.9</span>
            <span className="text-[11px] text-[#4A4A4A]/60 underline decoration-dotted cursor-pointer">
              (1,248 {language === 'en' ? 'reviews' : '리뷰'})
            </span>
          </span>
        </div>

        {/* Product Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#2D2D2D] leading-tight font-light tracking-wide">
          {language === 'en'
            ? 'Barrier Dew 5-Peptide Radiance Serum'
            : '배리어 듀 5-펩타이드 광채 세럼'}
        </h1>

        {/* Product Subtitle */}
        <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed font-light">
          {language === 'en'
            ? 'Bio-fermented Yeoju rice water & cellular peptide barrier fortifier for bouncy, radiant glass skin.'
            : '여주 발효 쌀겨수 68%와 5중 펩타이드로 피부 장벽을 강화하고 맑고 투명한 유리알 광채를 완성하는 세럼.'}
        </p>

        {/* Price Tag */}
        <div className="flex items-baseline gap-3 pt-1">
          <span className="text-2xl sm:text-3xl font-light text-[#2D2D2D]">
            {language === 'en' ? `$${priceUSD * quantity}` : `₩${(priceKRW * quantity).toLocaleString()}`}
          </span>
          {originalUSD && (
            <span className="text-sm text-[#4A4A4A]/50 line-through font-light">
              {language === 'en' ? `$${originalUSD * quantity}` : `₩${(originalKRW! * quantity).toLocaleString()}`}
            </span>
          )}
          {selectedSize === '50ml' && (
            <span className="text-[9px] uppercase tracking-widest text-[#2D2D2D] bg-[#E5D3C5] px-2 py-0.5 font-medium">
              {language === 'en' ? 'Save 25%' : '대용량 25% 할인'}
            </span>
          )}
        </div>
      </div>

      {/* Size Selection */}
      <div className="space-y-2.5">
        <div className="flex justify-between text-xs tracking-wider uppercase text-[#4A4A4A]">
          <span>{language === 'en' ? 'Select Volume' : '용량 선택'}:</span>
          <span className="font-semibold text-[#2D2D2D]">
            {selectedSize === '30ml'
              ? language === 'en'
                ? '30ml (Standard)'
                : '30ml (표준 용량)'
              : language === 'en'
              ? '50ml (Jumbo Value)'
              : '50ml (점보 대용량)'}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setSelectedSize('30ml')}
            className={`py-3 px-4 text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-between cursor-pointer border ${
              selectedSize === '30ml'
                ? 'border-[#2D2D2D] bg-[#2D2D2D] text-[#FAF9F6]'
                : 'border-[#E5D3C5] bg-[#FAF9F6] text-[#4A4A4A] hover:border-[#D1B39E]'
            }`}
          >
            <span>30ml Standard</span>
            <span className="font-medium">{language === 'en' ? '$38' : '₩48,000'}</span>
          </button>

          <button
            onClick={() => setSelectedSize('50ml')}
            className={`py-3 px-4 text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-between cursor-pointer border relative ${
              selectedSize === '50ml'
                ? 'border-[#2D2D2D] bg-[#2D2D2D] text-[#FAF9F6]'
                : 'border-[#E5D3C5] bg-[#FAF9F6] text-[#4A4A4A] hover:border-[#D1B39E]'
            }`}
          >
            <span>50ml Jumbo</span>
            <div className="text-right">
              <span className="font-medium">{language === 'en' ? '$52' : '₩66,000'}</span>
            </div>
            {selectedSize !== '50ml' && (
              <span className="absolute -top-2 right-2 text-[8px] font-bold tracking-widest uppercase bg-[#D1B39E] text-[#2D2D2D] px-1.5 py-0.5">
                BEST
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Quantity & Add to Bag Row */}
      <div className="space-y-4 pt-1">
        <div className="flex gap-3">
          {/* Stepper Quantity */}
          <div className="inline-flex items-center border border-[#E5D3C5] bg-[#FAF9F6] px-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
              className="w-8 h-12 flex items-center justify-center text-sm font-medium text-[#4A4A4A] hover:text-[#2D2D2D] disabled:opacity-20 cursor-pointer"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="w-8 text-center text-xs font-semibold text-[#2D2D2D]">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-12 flex items-center justify-center text-sm font-medium text-[#4A4A4A] hover:text-[#2D2D2D] cursor-pointer"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          {/* Add to Bag Button */}
          <button
            onClick={handleAdd}
            className={`flex-1 h-12 text-xs font-medium tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
              isAdded
                ? 'bg-[#2D2D2D] text-[#E5D3C5] border border-[#2D2D2D]'
                : 'bg-[#2D2D2D] hover:opacity-90 text-[#FAF9F6] border border-[#2D2D2D]'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4 stroke-[2]" />
                <span>{language === 'en' ? 'Added to Bag' : '장바구니 담김'}</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
                <span>
                  {language === 'en'
                    ? `Add to Bag • $${priceUSD * quantity}`
                    : `장바구니 담기 • ₩${(priceKRW * quantity).toLocaleString()}`}
                </span>
              </>
            )}
          </button>
        </div>

        {/* Free Gifts & Trust Callouts */}
        <div className="bg-[#FAF9F6] p-4 border border-[#E5D3C5] space-y-2.5 text-xs text-[#4A4A4A]">
          <div className="flex items-center gap-2 text-[11px] leading-relaxed">
            <Gift className="w-4 h-4 text-[#D1B39E] shrink-0 stroke-[1.5]" />
            <span>
              {language === 'en'
                ? 'Bonus: 2 Deluxe Travel Samples (Rice Toner 20ml + Barrier Balm 15ml) included.'
                : '특별 증정: 여주 쌀 토너 20ml + 장벽 밤 15ml 디럭스 미니어처 2종 포함.'}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-[#E5D3C5]">
            <div className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#4A4A4A]/60 stroke-[1.5]" />
              <span>{language === 'en' ? 'Fast Global Shipping' : '전 세계 빠른 안전 배송'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#4A4A4A]/60 stroke-[1.5]" />
              <span>{language === 'en' ? '30-Day Happiness Guarantee' : '30일 안심 환불 보장'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
