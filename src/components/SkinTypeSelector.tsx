import React from 'react';
import { Droplet, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { Language, SkinType } from '../types';
import { skinTypeProfiles } from '../data/productData';

interface SkinTypeSelectorProps {
  selectedSkinType: SkinType;
  onSelectSkinType: (type: SkinType) => void;
  language: Language;
}

export const SkinTypeSelector: React.FC<SkinTypeSelectorProps> = ({
  selectedSkinType,
  onSelectSkinType,
  language,
}) => {
  const currentProfile = skinTypeProfiles[selectedSkinType] || skinTypeProfiles['dry'];

  const skinTypeButtons: { id: SkinType; labelEn: string; labelKo: string; iconLabel: string }[] = [
    { id: 'dry', labelEn: 'Dry & Dehydrated', labelKo: '건성 / 속건조', iconLabel: '💧' },
    { id: 'sensitive', labelEn: 'Sensitive & Redness', labelKo: '민감성 / 진정', iconLabel: '🌿' },
    { id: 'oily', labelEn: 'Oily & Combination', labelKo: '지성 / 복합성', iconLabel: '✨' },
    { id: 'dull', labelEn: 'Dull & Uneven Tone', labelKo: '칙칙함 / 결 개선', iconLabel: '🌸' },
  ];

  return (
    <div id="skin-match" className="w-full bg-[#FAF9F6] p-5 sm:p-6 border border-[#E5D3C5] transition-all duration-300">
      {/* Header Label */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D1B39E]"></span>
          <h3 className="text-xs tracking-widest uppercase text-[#4A4A4A] font-medium">
            {language === 'en' ? 'Step 1: Select Your Skin Concern' : '1단계: 내 피부 타입 및 고민 선택'}
          </h3>
        </div>
        <span className="text-[10px] tracking-widest uppercase text-[#4A4A4A]/60">
          {language === 'en' ? 'Live Formulation Matching' : '실시간 맞춤 처방'}
        </span>
      </div>

      {/* Skin Type Selection Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
        {skinTypeButtons.map((type) => {
          const isSelected = selectedSkinType === type.id;
          return (
            <button
              key={type.id}
              onClick={() => onSelectSkinType(type.id)}
              className={`py-3 px-3 text-xs tracking-wider transition-all duration-200 flex flex-col items-center justify-center gap-1.5 cursor-pointer text-center relative border ${
                isSelected
                  ? 'bg-[#2D2D2D] text-[#FAF9F6] border-[#2D2D2D]'
                  : 'bg-[#FAF9F6] text-[#4A4A4A] border-[#E5D3C5] hover:border-[#D1B39E]'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-xs">{type.iconLabel}</span>
                <span className="font-normal text-[11px] uppercase tracking-wider">
                  {language === 'en' ? type.labelEn : type.labelKo}
                </span>
              </div>
              {isSelected && (
                <span className="w-1 h-1 rounded-full bg-[#E5D3C5]"></span>
              )}
            </button>
          );
        })}
      </div>

      {/* Real-time Dynamic Skin Explanation Box */}
      <div className="bg-[#FAF9F6] p-4 sm:p-5 border border-[#E5D3C5] space-y-3.5 transition-all duration-300">
        {/* Dynamic Title & Subtitle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E5D3C5] pb-3">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-medium text-[#D1B39E]">
              {language === 'en' ? 'Custom Cellular Action' : '세포 맞춤 작용 원리'}
            </span>
            <h4 className="text-sm font-medium tracking-wide text-[#2D2D2D] mt-0.5">
              {language === 'en' ? currentProfile.subtitleEn : currentProfile.subtitleKo}
            </h4>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF9F6] border border-[#E5D3C5] text-[#2D2D2D] text-xs self-start sm:self-center">
            <Sparkles className="w-3 h-3 text-[#D1B39E]" />
            <span>
              {language === 'en' ? currentProfile.metricLabelEn : currentProfile.metricLabelKo}:{' '}
              <strong className="text-[#2D2D2D] font-semibold">{currentProfile.metricValue}</strong>
            </span>
          </div>
        </div>

        {/* Live Benefit Text */}
        <p className="text-xs sm:text-[13px] text-[#4A4A4A] leading-relaxed font-light">
          {language === 'en' ? currentProfile.benefitEn : currentProfile.benefitKo}
        </p>

        {/* Dynamic Routine Prescription and Droplet Gauge */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {/* Custom Routine Tip */}
          <div className="bg-[#FAF9F6] p-3 border border-[#E5D3C5] flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#D1B39E] shrink-0 mt-0.5 stroke-[1.5]" />
            <div className="text-[11px] leading-relaxed">
              <span className="font-medium uppercase tracking-wider text-[#2D2D2D] block mb-0.5">
                {language === 'en' ? 'Prescribed Ritual' : '맞춤 도포법'}
              </span>
              <span className="text-[#4A4A4A]/80">
                {language === 'en' ? currentProfile.routineTipEn : currentProfile.routineTipKo}
              </span>
            </div>
          </div>

          {/* Recommended Droplet Dosage */}
          <div className="bg-[#FAF9F6] p-3 border border-[#E5D3C5] flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#4A4A4A]/70 block">
                {language === 'en' ? 'Optimal Dosage' : '권장 도포량'}
              </span>
              <span className="text-xs font-medium text-[#2D2D2D]">
                {language === 'en'
                  ? `${currentProfile.recommendedDrops} Drops / Application`
                  : `1회 ${currentProfile.recommendedDrops}방울 도포`}
              </span>
            </div>
            {/* Visual Droplet Icons */}
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4].map((drop) => {
                const isActive = drop <= currentProfile.recommendedDrops;
                return (
                  <span
                    key={drop}
                    className={`transition-colors duration-200 ${
                      isActive ? 'text-[#2D2D2D]' : 'text-[#E5D3C5]'
                    }`}
                    title={`${drop} drop`}
                  >
                    <Droplet className={`w-3.5 h-3.5 ${isActive ? 'fill-current' : ''}`} />
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
