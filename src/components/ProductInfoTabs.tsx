import React, { useState } from 'react';
import { Sparkles, Check, Leaf, Shield, Award, Droplets, Info } from 'lucide-react';
import { Language, TabType } from '../types';
import { keyIngredients, usageSteps, clinicalMetrics } from '../data/productData';

interface ProductInfoTabsProps {
  language: Language;
}

export const ProductInfoTabs: React.FC<ProductInfoTabsProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<TabType>('ingredients');

  const tabs: { id: TabType; labelEn: string; labelKo: string; icon: React.ReactNode }[] = [
    {
      id: 'ingredients',
      labelEn: 'Key Ingredients',
      labelKo: '핵심 성분',
      icon: <Leaf className="w-3.5 h-3.5" />,
    },
    {
      id: 'usage',
      labelEn: 'How to Use',
      labelKo: '사용 방법 (리추얼)',
      icon: <Droplets className="w-3.5 h-3.5" />,
    },
    {
      id: 'clinical',
      labelEn: 'Clinical Results',
      labelKo: '임상 결과',
      icon: <Award className="w-3.5 h-3.5" />,
    },
    {
      id: 'clean',
      labelEn: 'Clean Standards',
      labelKo: '클린 뷰티 기준',
      icon: <Shield className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <div id="formula-tabs" className="w-full bg-[#FAF9F6] border border-[#E5D3C5] p-6 sm:p-8">
      {/* Tab Navigation Header */}
      <div className="flex border-b border-[#E5D3C5] overflow-x-auto no-scrollbar gap-2 sm:gap-6 pb-px">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 px-2 text-xs uppercase tracking-widest transition-all duration-200 flex items-center gap-2 whitespace-nowrap cursor-pointer relative ${
                isActive
                  ? 'text-[#2D2D2D] font-medium border-b-2 border-[#2D2D2D] -mb-px'
                  : 'text-[#4A4A4A]/60 hover:text-[#2D2D2D]'
              }`}
            >
              {tab.icon}
              <span>{language === 'en' ? tab.labelEn : tab.labelKo}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Panel */}
      <div className="pt-6">
        {/* 1. KEY INGREDIENTS TAB */}
        {activeTab === 'ingredients' && (
          <div className="space-y-5 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1">
              <p className="text-xs text-[#4A4A4A] leading-relaxed font-light">
                {language === 'en'
                  ? 'Formulated with cold-fermented Korean botanicals & bio-identical peptides for cellular radiance.'
                  : '전통 옹기 저온 발효 여과물과 피부 친화적 바이오 펩타이드로 완성한 고농축 포뮬러.'}
              </p>
              <span className="text-[10px] tracking-widest uppercase font-medium text-[#2D2D2D] bg-[#E5D3C5] px-3 py-1 self-start">
                {language === 'en' ? 'EWG Green Grade 100%' : 'EWG 올 그린 등급'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {keyIngredients.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF9F6] p-4 border border-[#E5D3C5] hover:border-[#D1B39E] transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="text-xs sm:text-sm font-medium tracking-wide text-[#2D2D2D]">
                      {language === 'en' ? item.nameEn : item.nameKo}
                    </h4>
                    <span className="text-xs font-mono font-medium text-[#2D2D2D] bg-[#FAF9F6] px-2 py-0.5 border border-[#E5D3C5]">
                      {item.percentage}
                    </span>
                  </div>
                  <span className="text-[10px] font-medium text-[#D1B39E] uppercase tracking-widest block mb-2">
                    {language === 'en' ? item.categoryEn : item.categoryKo}
                  </span>
                  <p className="text-xs text-[#4A4A4A] leading-relaxed font-light">
                    {language === 'en' ? item.descriptionEn : item.descriptionKo}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-3.5 bg-[#FAF9F6] border border-[#E5D3C5] text-[11px] text-[#4A4A4A] flex items-center gap-2.5 leading-relaxed">
              <Info className="w-4 h-4 text-[#D1B39E] shrink-0 stroke-[1.5]" />
              <span>
                {language === 'en'
                  ? 'Full INCi list: Oryza Sativa (Rice) Bran Water (68%), Niacinamide (5%), Glycerin, Butylene Glycol, Centella Asiatica Extract, 1,2-Hexanediol, Copper Tripeptide-1, Palmitoyl Pentapeptide-4, Acetyl Hexapeptide-8, Sodium Hyaluronate, Madecassoside, Allantoin.'
                  : '전성분 표기: 쌀겨수(68%), 나이아신아마이드(5%), 글리세린, 부틸렌글라이콜, 병풀추출물, 1,2-헥산다이올, 카퍼트라이펩타이드-1, 팔미토일펜타펩타이드-4, 아세틸헥사펩타이드-8, 소듐하이알루로네이트, 마데카소사이드, 알란토인.'}
              </span>
            </div>
          </div>
        )}

        {/* 2. HOW TO USE / RITUAL TAB */}
        {activeTab === 'usage' && (
          <div id="ritual-guide" className="space-y-5 animate-in fade-in duration-300">
            <p className="text-xs text-[#4A4A4A] leading-relaxed font-light">
              {language === 'en'
                ? 'Follow the signature Seoul 4-Step "Chok-Chok" layered glow ritual morning and night.'
                : '아침과 저녁, 피부 본연의 빛을 깨우는 4단계 서울 글로우 촉촉 리추얼을 경험해보세요.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {usageSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-[#FAF9F6] p-4 border border-[#E5D3C5] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-medium w-6 h-6 border border-[#2D2D2D] bg-[#2D2D2D] text-[#FAF9F6] flex items-center justify-center">
                        {step.step}
                      </span>
                      <span className="text-[10px] uppercase font-medium tracking-widest text-[#D1B39E]">
                        {language === 'en' ? step.phaseEn : step.phaseKo}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-medium tracking-wide text-[#2D2D2D] mb-1.5">
                      {language === 'en' ? step.titleEn : step.titleKo}
                    </h4>
                    <p className="text-xs text-[#4A4A4A] leading-relaxed font-light">
                      {language === 'en' ? step.instructionsEn : step.instructionsKo}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#FAF9F6] p-4 border border-[#E5D3C5] flex items-center gap-3">
              <span className="text-base">💡</span>
              <div className="text-xs text-[#4A4A4A] leading-relaxed">
                <strong className="font-medium uppercase tracking-wider text-[#2D2D2D] block mb-0.5">
                  {language === 'en' ? 'Pro K-Beauty Tip' : 'K-뷰티 전문가 팁'}
                </strong>
                {language === 'en'
                  ? 'For intensive barrier reset on dehydrated days: soak two thin cotton pads with toner, add 3 drops of serum onto each, and rest on cheeks for 5 minutes as a soothing flash mask.'
                  : '속건조가 유난히 심한 날: 얇은 화장솜에 토너를 적신 뒤 세럼 3방울을 떨어뜨려 양 볼에 5분간 올려두면 즉각적인 퀵 수분 진정 팩 효과를 누릴 수 있습니다.'}
              </div>
            </div>
          </div>
        )}

        {/* 3. CLINICAL RESULTS TAB */}
        {activeTab === 'clinical' && (
          <div className="space-y-5 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1">
              <p className="text-xs text-[#4A4A4A] leading-relaxed font-light">
                {language === 'en'
                  ? 'Independent 4-week clinical trial conducted by the Korean Dermatology Research Institute (KDRI).'
                  : '한국 피부과학연구원(KDRI)에서 4주간 진행된 객관적 인체적용 임상 시험 결과.'}
              </p>
              <span className="text-[10px] tracking-widest uppercase font-medium text-[#2D2D2D] bg-[#E5D3C5] px-3 py-1 self-start">
                {language === 'en' ? 'KDRI Certified' : '공인 임상 완료'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {clinicalMetrics.map((metric, i) => (
                <div
                  key={i}
                  className="bg-[#FAF9F6] p-5 border border-[#E5D3C5]"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <h4 className="text-xs sm:text-sm font-medium tracking-wide text-[#2D2D2D]">
                      {language === 'en' ? metric.labelEn : metric.labelKo}
                    </h4>
                    <span className="text-xl font-light text-[#2D2D2D]">
                      {metric.percentage > 0 ? `${metric.percentage}%` : '0.00'}
                    </span>
                  </div>
                  {/* Visual Bar */}
                  <div className="w-full bg-[#E5D3C5]/40 h-1 overflow-hidden mb-2.5">
                    <div
                      className="bg-[#2D2D2D] h-full transition-all duration-1000"
                      style={{ width: `${metric.percentage > 0 ? metric.percentage : 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-[#4A4A4A] leading-relaxed font-light">
                    {language === 'en' ? metric.detailEn : metric.detailKo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. CLEAN STANDARDS TAB */}
        {activeTab === 'clean' && (
          <div className="space-y-5 animate-in fade-in duration-300">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {[
                {
                  icon: '🌱',
                  titleEn: '100% Vegan',
                  titleKo: '100% 비건 인증',
                  descEn: 'PETA certified cruelty-free with zero animal derived ingredients.',
                  descKo: 'PETA 비건 인증 및 동물성 원료 0% 배제.',
                },
                {
                  icon: '🌿',
                  titleEn: 'EWG Green',
                  titleKo: 'EWG 올 그린 등급',
                  descEn: 'All 24 ingredients scored in safe hazard-free zones.',
                  descKo: '전 성분 안전 등급 처방으로 민감성 피부 안심.',
                },
                {
                  icon: '✨',
                  titleEn: 'Fragrance Free',
                  titleKo: '인공 향료 무첨가',
                  descEn: 'Naturally unscented formula without synthetic perfumes or essential oil allergens.',
                  descKo: '알레르기 유발 인공향료 및 합성 색소 완전 배제.',
                },
                {
                  icon: '♻️',
                  titleEn: 'Sustainable Glass',
                  titleKo: '지속 가능한 패키징',
                  descEn: 'Infinite recyclability frosted glass bottle & FSC certified paper carton.',
                  descKo: '재활용 가능한 유리 용기 및 친환경 FSC 인증 지류.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#FAF9F6] p-4 border border-[#E5D3C5] text-center"
                >
                  <span className="text-xl mb-2 block">{item.icon}</span>
                  <h4 className="text-xs font-medium uppercase tracking-wider text-[#2D2D2D] mb-1.5">
                    {language === 'en' ? item.titleEn : item.titleKo}
                  </h4>
                  <p className="text-[11px] text-[#4A4A4A]/80 leading-relaxed font-light">
                    {language === 'en' ? item.descEn : item.descKo}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#FAF9F6] border border-[#E5D3C5] text-xs text-[#4A4A4A] flex items-center justify-between flex-wrap gap-2.5">
              <span className="font-light">
                {language === 'en'
                  ? 'Excludes 20 common irritants: Parabens, Mineral Oils, Sulfates, Phenoxyethanol, Phthalates, Artificial Colorants.'
                  : '20가지 주의 성분 무첨가: 파라벤 6종, 미네랄오일, 인공색소, 페녹시에탄올, 설페이트계 계면활성제 배제.'}
              </span>
              <span className="text-[10px] font-medium text-[#2D2D2D] uppercase tracking-widest bg-[#E5D3C5] px-2.5 py-1">
                pH 5.5 Balanced
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
