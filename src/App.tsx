import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ProductGallery } from './components/ProductGallery';
import { SkinTypeSelector } from './components/SkinTypeSelector';
import { ProductPurchaseBar } from './components/ProductPurchaseBar';
import { ProductInfoTabs } from './components/ProductInfoTabs';
import { ReviewsSection } from './components/ReviewsSection';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { Language, SkinType } from './types';
import { productImages } from './data/productData';
import { Sparkles, Leaf, Award, ShieldCheck, Heart } from 'lucide-react';

interface CartItem {
  size: string;
  quantity: number;
  price: number;
  skinType: SkinType;
}

export default function App() {
  // Application State
  const [language, setLanguage] = useState<Language>('en');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [selectedSkinType, setSelectedSkinType] = useState<SkinType>('dry');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleSelectSkinType = (type: SkinType) => {
    setSelectedSkinType(type);
    const feedback =
      language === 'en'
        ? `Formulation matched for ${type.toUpperCase()} skin`
        : `선택하신 피부 타입에 맞춤 조제되었습니다`;
    showToast(feedback);
  };

  const handleAddToCart = (size: string, quantity: number, price: number) => {
    const newItem: CartItem = {
      size,
      quantity,
      price,
      skinType: selectedSkinType,
    };
    setCartItems((prev) => [...prev, newItem]);
    showToast(
      language === 'en'
        ? `Added ${quantity}x (${size}) to your bag!`
        : `장바구니에 ${size} ${quantity}개가 담겼습니다!`
    );
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    showToast(
      language === 'en'
        ? 'Redirecting to secure Seoul courier dispatch...'
        : '안전한 주문 결제 페이지로 이동합니다...'
    );
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#4A4A4A] selection:bg-[#E5D3C5] selection:text-[#2D2D2D]">
      {/* Navigation Header */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        setIsCartOpen={setIsCartOpen}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Interactive Product Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-12 pt-8 sm:pt-12 pb-20 space-y-14">
        {/* Breadcrumbs & Origin Badge */}
        <div className="flex items-center justify-between text-xs tracking-widest uppercase text-[#4A4A4A]/60">
          <div className="flex items-center gap-2">
            <span>{language === 'en' ? 'Skincare' : '스킨케어'}</span>
            <span className="opacity-40">/</span>
            <span>{language === 'en' ? 'Serums & Ampoules' : '세럼 & 앰플'}</span>
            <span className="opacity-40">/</span>
            <span className="font-semibold text-[#2D2D2D]">
              {language === 'en' ? 'Barrier Dew Serum' : '배리어 듀 세럼'}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 bg-[#FAF9F6] px-3.5 py-1 text-[10px] tracking-widest uppercase font-medium text-[#4A4A4A] border border-[#E5D3C5]">
            <Sparkles className="w-3 h-3 text-[#D1B39E]" />
            <span>{language === 'en' ? 'Crafted in Seoul, Korea' : '대한민국 서울 제조'}</span>
          </div>
        </div>

        {/* Product Interactive Dual Panel (Gallery & Purchase / Skin Match) */}
        <section id="product-overview" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Interactive Product Gallery */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <ProductGallery
              images={productImages}
              selectedImageIndex={selectedImageIndex}
              onSelectImage={setSelectedImageIndex}
              language={language}
            />

            {/* Quick Feature Strip beneath gallery */}
            <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs text-[#4A4A4A]">
              <div className="bg-[#FAF9F6] p-3 border border-[#E5D3C5]">
                <span className="text-sm font-semibold tracking-wider text-[#2D2D2D] block">68%</span>
                <span className="text-[10px] tracking-wider uppercase opacity-70">
                  {language === 'en' ? 'Yeoju Ferment' : '여주 쌀 발효물'}
                </span>
              </div>
              <div className="bg-[#FAF9F6] p-3 border border-[#E5D3C5]">
                <span className="text-sm font-semibold tracking-wider text-[#2D2D2D] block">5-Peptides</span>
                <span className="text-[10px] tracking-wider uppercase opacity-70">
                  {language === 'en' ? 'Barrier Fortifier' : '5중 장벽 펩타이드'}
                </span>
              </div>
              <div className="bg-[#FAF9F6] p-3 border border-[#E5D3C5]">
                <span className="text-sm font-semibold tracking-wider text-[#2D2D2D] block">0.00</span>
                <span className="text-[10px] tracking-wider uppercase opacity-70">
                  {language === 'en' ? 'Irritation Score' : '저자극 임상 완료'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Purchase Options & Skin Matching Engine */}
          <div className="lg:col-span-6 space-y-6">
            {/* Purchase Control Bar */}
            <ProductPurchaseBar
              language={language}
              selectedSkinType={selectedSkinType}
              onAddToCart={handleAddToCart}
            />

            {/* Skin Type Real-Time Matching Engine */}
            <SkinTypeSelector
              selectedSkinType={selectedSkinType}
              onSelectSkinType={handleSelectSkinType}
              language={language}
            />
          </div>
        </section>

        {/* Brand Authenticity Trust Badges */}
        <section className="bg-[#FAF9F6] border border-[#E5D3C5] p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center space-y-1.5">
            <Leaf className="w-5 h-5 text-[#4A4A4A] stroke-[1.5]" />
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#2D2D2D]">
              {language === 'en' ? '100% Vegan & Pure' : '100% 비건 포뮬러'}
            </h4>
            <p className="text-[11px] text-[#4A4A4A]/70 leading-relaxed">
              {language === 'en' ? 'Cruelty-free PETA certified' : '동물 실험 반대 PETA 인증'}
            </p>
          </div>
          <div className="flex flex-col items-center space-y-1.5">
            <Award className="w-5 h-5 text-[#D1B39E] stroke-[1.5]" />
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#2D2D2D]">
              {language === 'en' ? 'Dermatologist Tested' : '피부과 전문의 임상'}
            </h4>
            <p className="text-[11px] text-[#4A4A4A]/70 leading-relaxed">
              {language === 'en' ? 'Zero irritation on sensitive skin' : '민감성 피부 자극 0.00'}
            </p>
          </div>
          <div className="flex flex-col items-center space-y-1.5">
            <Sparkles className="w-5 h-5 text-[#D1B39E] stroke-[1.5]" />
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#2D2D2D]">
              {language === 'en' ? '120h Cold Ferment' : '120시간 저온 발효'}
            </h4>
            <p className="text-[11px] text-[#4A4A4A]/70 leading-relaxed">
              {language === 'en' ? 'Maximized nutrient absorption' : '유효 성분 피부 흡수율 극대화'}
            </p>
          </div>
          <div className="flex flex-col items-center space-y-1.5">
            <ShieldCheck className="w-5 h-5 text-[#4A4A4A] stroke-[1.5]" />
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#2D2D2D]">
              {language === 'en' ? 'Clean Glass Guarantee' : '클린 패키징'}
            </h4>
            <p className="text-[11px] text-[#4A4A4A]/70 leading-relaxed">
              {language === 'en' ? 'FSC paper & frosted glass' : '친환경 종이 및 반투명 유리'}
            </p>
          </div>
        </section>

        {/* Information Tabs (Key Ingredients / How to Use / Clinical Proof / Clean Standards) */}
        <section>
          <ProductInfoTabs language={language} />
        </section>

        {/* Customer Reviews & Experiences */}
        <section>
          <ReviewsSection language={language} />
        </section>
      </main>

      {/* Slide-out Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        language={language}
        items={cartItems}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {/* Global Minimalist Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2D2D2D] text-[#FAF9F6] text-xs font-normal tracking-wide px-4 py-3 shadow-xl border border-[#E5D3C5]/40 flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <Sparkles className="w-3.5 h-3.5 text-[#E5D3C5]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}
