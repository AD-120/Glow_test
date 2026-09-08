import React from 'react';
import { X, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Language, SkinType } from '../types';
import { skinTypeProfiles } from '../data/productData';
import bottleImg from '../assets/images/seoul_serum_bottle_1788846964783.jpg';

interface CartItem {
  size: string;
  quantity: number;
  price: number;
  skinType: SkinType;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  items: CartItem[];
  onRemoveItem: (index: number) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  language,
  items,
  onRemoveItem,
  onCheckout,
}) => {
  if (!isOpen) return null;

  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
      />

      {/* Slide-out Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF9F6] border-l border-[#E5D3C5] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#E5D3C5] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-4 h-4 text-[#2D2D2D] stroke-[1.5]" />
              <h2 className="text-xs font-medium tracking-widest uppercase text-[#2D2D2D]">
                {language === 'en' ? 'Shopping Bag' : '장바구니'}
              </h2>
              <span className="text-xs text-[#4A4A4A]/60 font-mono">({items.length})</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 hover:opacity-60 text-[#2D2D2D] transition-opacity cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="p-6 flex-1 overflow-y-auto space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-12 h-12 border border-[#E5D3C5] mx-auto flex items-center justify-center text-[#4A4A4A]">
                  <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
                </div>
                <p className="text-xs uppercase tracking-wider font-medium text-[#2D2D2D]">
                  {language === 'en' ? 'Your bag is empty' : '장바구니가 비어 있습니다'}
                </p>
                <p className="text-xs text-[#4A4A4A]/70 max-w-xs mx-auto leading-relaxed font-light">
                  {language === 'en'
                    ? 'Discover your custom skin formulation and add SEOUL GLOW serum to your bag.'
                    : '내 피부 맞춤 처방을 확인하고 서울 글로우 세럼을 담아보세요.'}
                </p>
              </div>
            ) : (
              items.map((item, idx) => {
                const profile = skinTypeProfiles[item.skinType] || skinTypeProfiles['dry'];
                return (
                  <div
                    key={idx}
                    className="bg-[#FAF9F6] p-4 border border-[#E5D3C5] space-y-3"
                  >
                    <div className="flex gap-3.5">
                      <img
                        src={bottleImg}
                        alt="SEOUL GLOW Serum"
                        className="w-16 h-16 object-cover border border-[#E5D3C5]"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <h4 className="text-xs font-medium tracking-wide text-[#2D2D2D] truncate">
                            {language === 'en'
                              ? 'SEOUL GLOW Barrier Dew Serum'
                              : '서울 글로우 배리어 듀 세럼'}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(idx)}
                            className="text-[#4A4A4A]/60 hover:text-[#2D2D2D] p-1 cursor-pointer"
                            aria-label="Remove item"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-[11px] text-[#4A4A4A]/70 uppercase tracking-wider">
                          <span>{item.size}</span>
                          <span>•</span>
                          <span>Qty: {item.quantity}</span>
                        </div>
                        <div className="mt-1 font-medium text-xs text-[#2D2D2D]">
                          {language === 'en' ? `$${item.price}` : `₩${item.price.toLocaleString()}`}
                        </div>
                      </div>
                    </div>

                    {/* Skin Type Badge & Tailored Note */}
                    <div className="bg-[#FAF9F6] p-2 text-[10px] text-[#4A4A4A] border border-[#E5D3C5] flex items-center justify-between">
                      <span className="flex items-center gap-1 font-light">
                        <Sparkles className="w-3 h-3 text-[#D1B39E]" />
                        {language === 'en' ? 'Matched for:' : '맞춤 처방:'}{' '}
                        <strong className="font-medium text-[#2D2D2D]">{language === 'en' ? profile.titleEn : profile.titleKo}</strong>
                      </span>
                      <span className="text-[#4A4A4A]/70 font-mono">
                        {language === 'en' ? `${profile.recommendedDrops} drops/use` : `1회 ${profile.recommendedDrops}방울`}
                      </span>
                    </div>
                  </div>
                );
              })
            )}

            {/* Free Gift Card in Cart */}
            {items.length > 0 && (
              <div className="bg-[#FAF9F6] p-3.5 text-xs text-[#4A4A4A] border border-[#E5D3C5] space-y-1">
                <span className="font-medium text-[#D1B39E] block text-[10px] uppercase tracking-widest">
                  {language === 'en' ? '🎁 Complimentary Samples Included' : '🎁 사은품 자동 지급'}
                </span>
                <p className="text-[11px] leading-relaxed font-light">
                  {language === 'en'
                    ? 'Includes Yeoju Fermented Rice Toner (20ml) & Barrier Balm (15ml) with your shipment.'
                    : '여주 발효 쌀 토너(20ml)와 장벽 밤(15ml) 디럭스 미니어처 2종이 동봉됩니다.'}
                </p>
              </div>
            )}
          </div>

          {/* Footer Checkout Controls */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#E5D3C5] bg-[#FAF9F6] space-y-4">
              <div className="flex justify-between items-baseline text-xs uppercase tracking-wider">
                <span className="text-[#4A4A4A]/70">
                  {language === 'en' ? 'Subtotal' : '합계'}:
                </span>
                <span className="font-light text-xl text-[#2D2D2D]">
                  {language === 'en' ? `$${total}` : `₩${total.toLocaleString()}`}
                </span>
              </div>

              <button
                onClick={onCheckout}
                className="w-full py-3.5 px-4 bg-[#2D2D2D] hover:opacity-90 text-[#FAF9F6] text-xs font-medium uppercase tracking-widest flex items-center justify-center gap-2 transition-opacity cursor-pointer border border-[#2D2D2D]"
              >
                <span>{language === 'en' ? 'Proceed to Checkout' : '주문서 작성 및 결제'}</span>
                <ArrowRight className="w-4 h-4 stroke-[1.5]" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] tracking-wider uppercase text-[#4A4A4A]/60">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D1B39E]" />
                <span>
                  {language === 'en'
                    ? 'Encrypted Checkout • Free Global Shipping'
                    : '안전 암호화 결제 • 전 세계 무료 배송'}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
