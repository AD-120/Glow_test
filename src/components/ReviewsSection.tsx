import React, { useState } from 'react';
import { Star, CheckCircle, ThumbsUp, Sparkles, Filter } from 'lucide-react';
import { Language, SkinType } from '../types';

interface ReviewsSectionProps {
  language: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ language }) => {
  const [filterType, setFilterType] = useState<string>('all');

  const reviews = [
    {
      author: 'Min-ji K. (김민지)',
      location: 'Seoul, KR',
      skinType: 'dry',
      skinLabelEn: 'Dry / Dehydrated',
      skinLabelKo: '건성 / 속건조',
      rating: 5,
      date: '2026.03.02',
      verified: true,
      titleEn: 'Literal glass skin in 3 days! Never flaking anymore.',
      titleKo: '3일 만에 진짜 유리알 속광이 차올랐어요. 속당김 박멸!',
      commentEn:
        'I work in dry air-conditioned offices in Gangnam. Most serums vanish or leave an oily film. SEOUL GLOW feels like drinking a cold cup of water for my skin cells. My makeup glides over seamlessly!',
      commentKo:
        '강남 사무실 히터와 에어컨 때문에 항상 속당김으로 고생했는데, 이 세럼 바르고 나서 겉돌지 않고 피부 깊숙이 쫀쫀하게 흡수돼요. 쿠션 밀림도 전혀 없고 오후까지 촉촉합니다.',
      helpful: 84,
    },
    {
      author: 'Elena S.',
      location: 'New York, US',
      skinType: 'sensitive',
      skinLabelEn: 'Sensitive & Redness',
      skinLabelKo: '민감성 / 붉은기',
      rating: 5,
      date: '2026.02.26',
      verified: true,
      titleEn: 'Zero redness flare-ups. The Cica + Rice blend is magic.',
      titleKo: '붉은기 바로 진정되고 자극 전혀 없어요. 시카+쌀 조합 최고!',
      commentEn:
        'My skin barrier was broken from harsh retinol. After 4 days using 3 drops of this morning and night, all stinging ceased and the flushed redness calmed down completely. The fragrance-free formula is so pure.',
      commentKo:
        '레티놀 부작용으로 장벽이 무너져서 따가웠는데, 4일간 아침저녁 3방울씩 발라주니 열감이랑 붉은기가 싹 가라앉았어요. 무향이라 더 안심됩니다.',
      helpful: 62,
    },
    {
      author: 'Ji-hoon P. (박지훈)',
      location: 'Busan, KR',
      skinType: 'oily',
      skinLabelEn: 'Oily & Combination',
      skinLabelKo: '지성 / 복합성',
      rating: 5,
      date: '2026.02.19',
      verified: true,
      titleEn: 'Pores look blurred and T-zone shines with clean hydration, not oil.',
      titleKo: '모공이 쫀쫀해지고 개기름 대신 맑은 수분광만 남아요.',
      commentEn:
        '5% Niacinamide formula is perfect. I hate heavy greasy serums that clog pores. This absorbs in 5 seconds and leaves a soft satin velvet touch.',
      commentKo:
        '나이아신아마이드 5% 함유라 그런지 피지 조절이 확실히 됩니다. 끈적이는 세럼 질색인데 5초 만에 흡수되어 번들거림 없이 매끈해요.',
      helpful: 47,
    },
    {
      author: 'Chloe M.',
      location: 'London, UK',
      skinType: 'dull',
      skinLabelEn: 'Dull / Uneven Tone',
      skinLabelKo: '칙칙함 / 결 개선',
      rating: 5,
      date: '2026.02.10',
      verified: true,
      titleEn: 'The authentic Korean glow everyone talks about.',
      titleKo: '모두가 감탄하는 진짜 한국식 물광 피니시입니다.',
      commentEn:
        'I mix one single drop into my tinted sunscreen every morning. My colleagues kept asking if I had a professional facial! It gives that lit-from-within porcelain finish.',
      commentKo:
        '선크림 바를 때 한 방울 섞어 바르는데 회사 동료들이 피부과 다녀왔냐고 물어봐요. 은은하게 비치는 속광이 정말 예술입니다.',
      helpful: 95,
    },
  ];

  const filteredReviews = filterType === 'all'
    ? reviews
    : reviews.filter((r) => r.skinType === filterType);

  return (
    <section className="w-full bg-[#FAF9F6] border border-[#E5D3C5] p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5D3C5] pb-5">
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#D1B39E]">
            {language === 'en' ? 'VERIFIED COMMUNITY EXPERIENCES' : '실구매자 리얼 후기'}
          </span>
          <h3 className="text-xl sm:text-2xl font-light tracking-wide text-[#2D2D2D] mt-1">
            {language === 'en' ? 'Loved by 40,000+ Glass Skin Seekers' : '4만 명의 선택, 감동 리뷰'}
          </h3>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs uppercase tracking-wider text-[#4A4A4A]/70 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3 stroke-[1.5]" />
            {language === 'en' ? 'Skin:' : '피부:'}
          </span>
          {[
            { id: 'all', en: 'All', ko: '전체' },
            { id: 'dry', en: 'Dry', ko: '건성' },
            { id: 'sensitive', en: 'Sensitive', ko: '민감성' },
            { id: 'oily', en: 'Oily', ko: '지성' },
            { id: 'dull', en: 'Dull', ko: '칙칙함' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilterType(f.id)}
              className={`text-xs px-3 py-1 uppercase tracking-wider transition-colors cursor-pointer border ${
                filterType === f.id
                  ? 'bg-[#2D2D2D] text-[#FAF9F6] border-[#2D2D2D]'
                  : 'bg-[#FAF9F6] text-[#4A4A4A] border-[#E5D3C5] hover:border-[#D1B39E]'
              }`}
            >
              {language === 'en' ? f.en : f.ko}
            </button>
          ))}
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredReviews.map((rev, idx) => (
          <div
            key={idx}
            className="bg-[#FAF9F6] p-5 border border-[#E5D3C5] space-y-3 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1 text-[#D1B39E]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current stroke-none" />
                  ))}
                </div>
                <span className="text-[10px] font-mono tracking-wider text-[#4A4A4A]/60">{rev.date}</span>
              </div>

              <h4 className="text-xs sm:text-sm font-medium tracking-wide text-[#2D2D2D] mb-1.5">
                {language === 'en' ? rev.titleEn : rev.titleKo}
              </h4>
              <p className="text-xs text-[#4A4A4A] leading-relaxed font-light">
                {language === 'en' ? rev.commentEn : rev.commentKo}
              </p>
            </div>

            <div className="pt-3 border-t border-[#E5D3C5] flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-2">
                <span className="font-medium text-[#2D2D2D]">{rev.author}</span>
                <span className="text-[10px] text-[#4A4A4A]/60 font-light">({rev.location})</span>
                <span className="bg-[#FAF9F6] px-2 py-0.5 text-[9px] uppercase tracking-wider text-[#2D2D2D] font-medium border border-[#E5D3C5]">
                  {language === 'en' ? rev.skinLabelEn : rev.skinLabelKo}
                </span>
              </div>
              <span className="text-[10px] text-[#4A4A4A]/70 flex items-center gap-1 font-mono">
                <ThumbsUp className="w-2.5 h-2.5 stroke-[1.5]" />
                {rev.helpful}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
