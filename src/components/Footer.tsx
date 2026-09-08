import React, { useState } from 'react';
import { Mail, Check, Sparkles, Heart } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="mt-20 bg-[#FAF9F6] text-[#4A4A4A] border-t border-[#E5D3C5]">
      {/* Newsletter / Glass Skin Club Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 border-b border-[#E5D3C5]">
        <div className="max-w-xl mx-auto text-center space-y-3">
          <span className="text-[10px] tracking-[0.25em] font-medium text-[#D1B39E] uppercase">
            {language === 'en' ? 'SEOUL GLASS SKIN CLUB' : '서울 글래스 스킨 클럽'}
          </span>
          <h3 className="text-2xl sm:text-3xl font-light tracking-wide text-[#2D2D2D]">
            {language === 'en'
              ? 'Receive 15% Off Your First Ritual'
              : '첫 구매 15% 할인 혜택 및 K-뷰티 루틴 안내'}
          </h3>
          <p className="text-xs text-[#4A4A4A] leading-relaxed font-light">
            {language === 'en'
              ? 'Join our private newsletter for bespoke Korean seasonal skin prescriptions, new harvest ingredient stories, and VIP access.'
              : '계절별 맞춤 피부 처방전과 신선한 원료 수확 스토리, 회원 전용 시크릿 혜택을 가장 먼저 받아보세요.'}
          </p>

          <form onSubmit={handleSubmit} className="pt-2 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            {subscribed ? (
              <div className="w-full py-3 px-4 bg-[#FAF9F6] border border-[#2D2D2D] text-xs font-medium flex items-center justify-center gap-2 text-[#2D2D2D]">
                <Check className="w-4 h-4 stroke-[1.5]" />
                <span className="uppercase tracking-wider text-[11px]">
                  {language === 'en'
                    ? 'Welcome to the Club. Check your inbox.'
                    : '가입을 환영합니다. 이메일을 확인해 주세요.'}
                </span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={language === 'en' ? 'Enter your email address' : '이메일 주소를 입력하세요'}
                  className="flex-1 px-4 py-3 bg-[#FAF9F6] text-xs text-[#2D2D2D] border border-[#E5D3C5] focus:outline-hidden focus:border-[#2D2D2D] placeholder:text-[#4A4A4A]/50"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#2D2D2D] hover:opacity-90 text-[#FAF9F6] text-xs font-medium uppercase tracking-widest transition-opacity cursor-pointer border border-[#2D2D2D]"
                >
                  {language === 'en' ? 'Subscribe' : '구독하기'}
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* Main Footer Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
          {/* Brand Col */}
          <div className="space-y-2 md:col-span-1">
            <span className="text-base text-[#2D2D2D] tracking-[0.25em] uppercase font-medium block">
              SEOUL GLOW
            </span>
            <p className="text-[11px] leading-relaxed text-[#4A4A4A] font-light">
              {language === 'en'
                ? 'Minimalist bio-fermented K-beauty skincare inspired by centuries of Korean apothecary traditions and modern dermatology.'
                : '한국 전통 옹기 발효의 지혜와 현대 피부과학의 정밀함을 결합한 미니멀리스트 K-뷰티 브랜드.'}
            </p>
            <p className="text-[10px] text-[#4A4A4A]/60 pt-1 font-mono">
              Dosan-daero 45-gil, Gangnam-gu, Seoul, Republic of Korea
            </p>
          </div>

          {/* Nav Col 1 */}
          <div className="space-y-3">
            <h4 className="font-medium text-xs tracking-widest uppercase text-[#2D2D2D]">
              {language === 'en' ? 'Formulations' : '포뮬러 라인업'}
            </h4>
            <ul className="space-y-2 text-[11px] font-light">
              <li className="hover:text-[#2D2D2D] cursor-pointer transition-colors">
                {language === 'en' ? 'Barrier Dew Serum' : '배리어 듀 세럼'}
              </li>
              <li className="hover:text-[#2D2D2D] cursor-pointer transition-colors">
                {language === 'en' ? 'Rice Essence Toner' : '발효 쌀겨 에센스 토너'}
              </li>
              <li className="hover:text-[#2D2D2D] cursor-pointer transition-colors">
                {language === 'en' ? 'Ceramide Barrier Cream' : '세라마이드 장벽 크림'}
              </li>
              <li className="hover:text-[#2D2D2D] cursor-pointer transition-colors">
                {language === 'en' ? 'Hydra Daily Sun Fluid SPF50+' : '하이드라 데일리 선 플루이드'}
              </li>
            </ul>
          </div>

          {/* Nav Col 2 */}
          <div className="space-y-3">
            <h4 className="font-medium text-xs tracking-widest uppercase text-[#2D2D2D]">
              {language === 'en' ? 'Science & Ethics' : '과학과 가치'}
            </h4>
            <ul className="space-y-2 text-[11px] font-light">
              <li className="hover:text-[#2D2D2D] cursor-pointer transition-colors">
                {language === 'en' ? 'Onggi Fermentation Method' : '전통 옹기 발효 공법'}
              </li>
              <li className="hover:text-[#2D2D2D] cursor-pointer transition-colors">
                {language === 'en' ? 'KDRI Clinical Trials' : '공인 인체적용 임상 시험'}
              </li>
              <li className="hover:text-[#2D2D2D] cursor-pointer transition-colors">
                {language === 'en' ? '100% PETA Vegan Certified' : 'PETA 비건 인증'}
              </li>
              <li className="hover:text-[#2D2D2D] cursor-pointer transition-colors">
                {language === 'en' ? 'Zero Waste Glass Project' : '친환경 유리 패키징'}
              </li>
            </ul>
          </div>

          {/* Nav Col 3 */}
          <div className="space-y-3">
            <h4 className="font-medium text-xs tracking-widest uppercase text-[#2D2D2D]">
              {language === 'en' ? 'Customer Care' : '고객 지원'}
            </h4>
            <ul className="space-y-2 text-[11px] font-light">
              <li className="hover:text-[#2D2D2D] cursor-pointer transition-colors">
                {language === 'en' ? 'Global Shipping FAQ' : '해외 배송 및 통관 안내'}
              </li>
              <li className="hover:text-[#2D2D2D] cursor-pointer transition-colors">
                {language === 'en' ? '30-Day Happiness Guarantee' : '30일 안심 교환/환불 정책'}
              </li>
              <li className="hover:text-[#2D2D2D] cursor-pointer transition-colors">
                {language === 'en' ? 'Skin Consultation Chat' : '1:1 피부 맞춤 상담'}
              </li>
              <li className="hover:text-[#2D2D2D] cursor-pointer transition-colors font-mono">
                care@seoulglow.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#E5D3C5] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#4A4A4A]/60 gap-2 font-light">
          <p>© 2026 SEOUL GLOW Co., Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-[#2D2D2D] cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-[#2D2D2D] cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-[#2D2D2D] cursor-pointer">Seoul, KR</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
