import { ClinicalMetric, Ingredient, ProductImage, SkinTypeDetail, StepGuide } from '../types';

import bottleImg from '../assets/images/seoul_serum_bottle_1788846964783.jpg';
import textureImg from '../assets/images/serum_texture_droplet_1788846978906.jpg';
import modelImg from '../assets/images/glass_skin_model_1788846993681.jpg';
import ingredientsImg from '../assets/images/kbeauty_ingredients_1788847007060.jpg';

export const productImages: ProductImage[] = [
  {
    id: 'bottle',
    src: bottleImg,
    alt: 'SEOUL GLOW Barrier Dew Serum bottle on travertine pedestal',
    labelEn: 'Glass Dropper',
    labelKo: '보틀 & 드롭퍼',
    descriptionEn: 'Frosted apothecary glass bottle engineered with UV-protective coating and precision dosage pipette.',
    descriptionKo: 'UV 차단 특수 코팅 반투명 보틀과 정밀한 1회 도포를 돕는 마이크로 피펫 드롭퍼.',
  },
  {
    id: 'texture',
    src: textureImg,
    alt: 'Dewy serum texture droplet with microscopic hydration bubbles',
    labelEn: 'Dewy Texture',
    labelKo: '앰플 텍스처',
    descriptionEn: 'Ultra-plumping honey-dew viscous essence that melts weightlessly into skin with zero sticky residue.',
    descriptionKo: '끈적임 없이 피부에 닿는 순간 사르르 녹아드는 고농축 꿀물 제형의 산뜻한 포뮬러.',
  },
  {
    id: 'model',
    src: modelImg,
    alt: 'Luminous Korean glass skin complexion model',
    labelEn: 'Glass Skin Result',
    labelKo: '물광 피부 결과',
    descriptionEn: 'Natural lit-from-within glow achieved through multi-molecular hydration and cellular rice fermentation.',
    descriptionKo: '발효 쌀겨수와 펩타이드 복합체가 선사하는 맑고 투명한 한국식 유리알 광채 피니시.',
  },
  {
    id: 'ingredients',
    src: ingredientsImg,
    alt: 'Botanical ingredients: fermented rice, cica leaves and ginseng',
    labelEn: 'Pure Botanicals',
    labelKo: '자연 유래 원료',
    descriptionEn: 'Locally sourced Yeoju fermented rice extract, clean Jeju cica, and biocompatible peptides.',
    descriptionKo: '국내산 여주 발효 쌀겨수, 청정 제주 병풀(Cica) 및 피부 친화적 5중 펩타이드 블렌딩.',
  },
];

export const skinTypeProfiles: Record<string, SkinTypeDetail> = {
  dry: {
    id: 'dry',
    titleEn: 'Dry & Dehydrated',
    titleKo: '건성 / 속건조',
    subtitleEn: 'Deep 72-Hour Moisture Reservoir',
    subtitleKo: '72시간 촘촘한 속보습 충전',
    benefitEn:
      'Penetrates 10 epidermal layers to replenish natural lipid reserves and eliminate flakiness. Seals moisture deep within the dermal matrix without heavy occlusive oils.',
    benefitKo:
      '각질층 10층까지 침투하는 저분자 히알루론산과 발효 쌀겨수가 속건조를 즉각 해결하고 들뜬 각질을 잠재우며 부드러운 수분 보호막을 형성합니다.',
    routineTipEn:
      'Apply 4 drops onto freshly dampened skin. Gently press with warm palms and layer once more over dry cheek zones.',
    routineTipKo:
      '세안 직후 토너로 가볍게 결을 정돈한 후 4방울을 떨어뜨려 따뜻한 손바닥으로 감싸 흡수시키고 건조한 부위에 덧발라주세요.',
    metricLabelEn: 'Hydration Recovery',
    metricLabelKo: '수분 보유력 개선',
    metricValue: '+98%',
    recommendedDrops: 4,
  },
  sensitive: {
    id: 'sensitive',
    titleEn: 'Sensitive & Reactive',
    titleKo: '민감성 / 진정 케어',
    subtitleEn: 'Instant Barrier Soothing & Flush Relief',
    subtitleKo: '즉각적인 장벽 진정 및 붉은기 완화',
    benefitEn:
      'High-potency Centella Asiatica (Jeju Cica) and Madecassoside rapidly alleviate micro-inflammation, lowering surface heat by 2.4°C and fortifying weakened skin barriers.',
    benefitKo:
      '고순도 제주 병풀(시카)과 마데카소사이드가 자극받아 민감해진 피부를 즉각 진정시키고 피부 표면 열감을 2.4°C 낮추어 무너진 장벽을 탄탄하게 복구합니다.',
    routineTipEn:
      'Warm 2-3 drops between clean fingers and gently press into facial contours without pulling or rubbing sensitive skin.',
    routineTipKo:
      '손가락 끝에 2-3방울을 가볍게 덜어 피부를 문지르지 않고 지그시 누르듯 흡수시켜 자극 없는 편안함을 유지하세요.',
    metricLabelEn: 'Redness Reduction',
    metricLabelKo: '자극 붉은기 감소',
    metricValue: '92%',
    recommendedDrops: 3,
  },
  oily: {
    id: 'oily',
    titleEn: 'Oily & Combination',
    titleKo: '지성 / 복합성',
    subtitleEn: 'Weightless Sebum Balance & Pore Refinement',
    subtitleKo: '모공 정돈 및 산뜻한 유수분 밸런스',
    benefitEn:
      'Formulated with 5% Niacinamide and zinc-bound botanicals to balance excess T-zone sebum production while restoring pure non-greasy water hydration.',
    benefitKo:
      '고순도 나이아신아마이드 5%가 과도한 T존 피지를 조절하고 늘어진 모공을 탄탄하게 정돈하여 끈적임이나 번들거림 없는 산뜻한 결을 완성합니다.',
    routineTipEn:
      'Dispense 2 drops across forehead and T-zone. Absorbs completely within 5 seconds for a clean, velvety finish.',
    routineTipKo:
      '이마와 T존을 중심으로 2방울을 가볍게 펴 바르세요. 5초 만에 흡수되어 번들거림 없이 보송하고 맑은 피부결을 선사합니다.',
    metricLabelEn: 'Pore Tightening & Balance',
    metricLabelKo: '유수분 밸런스 개선',
    metricValue: '89%',
    recommendedDrops: 2,
  },
  dull: {
    id: 'dull',
    titleEn: 'Dull & Uneven Tone',
    titleKo: '칙칙함 / 결 개선',
    subtitleEn: 'Translucent Korean Glass Glow Reset',
    subtitleKo: '투명하고 화사한 유리알 물광 리셋',
    benefitEn:
      'Harnesses traditional bio-fermented Yeoju rice and peptide boosters to brighten stubborn hyperpigmentation, restoring natural bounce and translucent radiance.',
    benefitKo:
      '전통 여주 발효 쌀 추출물과 펩타이드 복합체가 칙칙하고 지친 피부 톤을 화사하게 밝히고 균일한 피부결과 고급스러운 속광을 되살려줍니다.',
    routineTipEn:
      'Apply 3-4 drops morning and night. Mix 1 drop directly into your daytime cushion or moisturizer for an effortless dewy sheen.',
    routineTipKo:
      '아침/저녁 3-4방울을 결을 따라 발라주세요. 아침 베이스 메이크업 시 쿠션에 1방울 블렌딩하면 하루 종일 촉촉한 물광 피부가 유지됩니다.',
    metricLabelEn: 'Radiance Glow Index',
    metricLabelKo: '피부 투명도/광채율',
    metricValue: '+95%',
    recommendedDrops: 4,
  },
};

export const keyIngredients: Ingredient[] = [
  {
    nameEn: 'Yeoju Fermented Rice Filtrate',
    nameKo: '여주 발효 쌀겨수',
    percentage: '68%',
    categoryEn: 'Core Radiance Elixir',
    categoryKo: '광채 핵심 여과물',
    descriptionEn:
      'Cold-fermented for 120 hours using traditional Korean earthenware pots (Onggi). Rich in amino acids and ferulic acid for natural glass-skin clarity.',
    descriptionKo:
      '전통 옹기에서 120시간 저온 발효한 국내산 여주 쌀겨수로 아미노산과 페룰산이 풍부하여 맑고 투명한 피부 바탕을 만들어줍니다.',
  },
  {
    nameEn: '5-Peptide Architecture Complex',
    nameKo: '5중 멀티 펩타이드 복합체',
    percentage: '3,000 ppm',
    categoryEn: 'Barrier Rebuilding',
    categoryKo: '장벽 밀도 강화',
    descriptionEn:
      'A synergistic matrix of Copper Tripeptide-1, Palmitoyl Pentapeptide-4, and Oligopeptides that fortify epidermal resilience and smooth fine lines.',
    descriptionKo:
      '카퍼 트라이펩타이드-1, 팔미토일 펜타펩타이드-4 등 5가지 펩타이드가 무너진 피부 코어를 탄탄하게 지지하고 매끄러운 탄력을 부여합니다.',
  },
  {
    nameEn: 'High-Purity Niacinamide (Vitamin B3)',
    nameKo: '고순도 나이아신아마이드',
    percentage: '5.0%',
    categoryEn: 'Tone & Pore Refining',
    categoryKo: '모공 및 톤 케어',
    descriptionEn:
      'Clinically calibrated concentration to visibly smooth uneven texture, gently fade dark spots, and regulate oil balance without skin sensitivity.',
    descriptionKo:
      '피부 자극 없는 최적의 5% 배합으로 칙칙한 잡티를 완화하고 거칠어진 피부결과 모공을 섬세하게 정돈합니다.',
  },
  {
    nameEn: 'Centella Asiatica & Madecassoside',
    nameKo: '제주 청정 병풀 & 마데카소사이드',
    percentage: '2.5%',
    categoryEn: 'Calm & Repair',
    categoryKo: '급속 진정 리페어',
    descriptionEn:
      'Harvested sustainably from clean Jeju volcanic soil. Quenches inflammation, calms sensitized patches, and accelerates barrier lipid synthesis.',
    descriptionKo:
      '제주 화산토에서 자란 유기농 병풀 추출물로 외부 자극으로 붉어지고 예민해진 피부를 빠르게 진정시키고 장벽 회복을 촉진합니다.',
  },
  {
    nameEn: 'Triple Low-Molecular Hyaluronic Acid',
    nameKo: '저분자 3중 히알루론산',
    percentage: '1.8%',
    categoryEn: 'Deep Hydration',
    categoryKo: '다차원 수분 잠금',
    descriptionEn:
      'Three molecular weights (Micro, Medium, Macro) designed to deliver water molecules from the deepest subcutaneous level up to the outer stratum corneum.',
    descriptionKo:
      '고·중·저분자 3단계 히알루론산이 피부 겉은 촉촉하게 감싸고 속은 틈새 없이 수분으로 꽉 채워줍니다.',
  },
];

export const usageSteps: StepGuide[] = [
  {
    step: 1,
    phaseEn: 'PREPARE',
    phaseKo: '준비 단계',
    titleEn: 'Gentle Cleanse & Essence Toner',
    titleKo: '순한 세안 및 토너 결 정돈',
    instructionsEn:
      'Wash face with a low pH cleanser. While skin is still slightly damp from your toner, prepare the dropper.',
    instructionsKo:
      '약산성 클렌저로 깨끗이 세안 후, 토너로 피부결을 정돈하고 수분이 살짝 남아있는 상태에서 준비합니다.',
  },
  {
    step: 2,
    phaseEn: 'DISPENSE',
    phaseKo: '도포 단계',
    titleEn: 'Precision Dropper Application',
    titleKo: '정밀 드롭퍼 3~4방울 도포',
    instructionsEn:
      'Depress the ergonomic dropper to release 3-4 drops directly onto cheeks and forehead without touching the skin with the pipette.',
    instructionsKo:
      '드롭퍼를 눌러 양 볼과 이마에 3~4방울을 떨어뜨립니다. (위생을 위해 팁이 피부에 직접 닿지 않도록 합니다)',
  },
  {
    step: 3,
    phaseEn: 'ABSORB',
    phaseKo: '흡수 단계',
    titleEn: 'K-Beauty Chok-Chok Press & Pat',
    titleKo: '체온 흡수 & 촉촉 두드림',
    instructionsEn:
      'Spread outward along the grain of your skin. Warm your palms together and gently press over the face for 10 seconds to activate bio-ferments.',
    instructionsKo:
      '피부결을 따라 안쪽에서 바깥쪽으로 부드럽게 펴 바른 뒤, 따뜻한 손바닥으로 10초간 감싸며 지그시 눌러 흡수시킵니다.',
  },
  {
    step: 4,
    phaseEn: 'LOCK',
    phaseKo: '잠금 단계',
    titleEn: 'Barrier Cream & SPF 50+',
    titleKo: '장벽 크림 & 선케어 마무리',
    instructionsEn:
      'Seal in the peptide dewy glow with your favorite moisturizer. In the morning, always follow with broad-spectrum sunscreen.',
    instructionsKo:
      '세럼이 충분히 흡수된 후 수분크림으로 보습막을 씌워주고, 아침에는 자외선 차단제로 마무리합니다.',
  },
];

export const clinicalMetrics: ClinicalMetric[] = [
  {
    percentage: 98.4,
    labelEn: 'Instant Dewy Elasticity',
    labelKo: '즉각적인 수분 탄력 체감',
    detailEn: 'Users reported noticeable dewy bounce and relief from tightness within 15 minutes of initial use.',
    detailKo: '1회 사용 후 15분 이내 피부 속당김 해소 및 탄력 있는 수분광 체감.',
  },
  {
    percentage: 96.2,
    labelEn: 'Skin Barrier Recovery',
    labelKo: '피부 손상 장벽 개선율',
    detailEn: 'Transepidermal water loss (TEWL) decreased markedly after 7 days of consecutive morning and evening application.',
    detailKo: '7일 연속 사용 후 경피 수분 손실량(TEWL) 현저한 감소 및 장벽 보호 효과 입증.',
  },
  {
    percentage: 94.7,
    labelEn: 'Refined Porcelain Glow',
    labelKo: '피부 투명도 및 결 개선',
    detailEn: 'Visible improvement in overall skin luminance, clarity, and smoothing of bumpy dry micro-textures in 14 days.',
    detailKo: '14일 후 칙칙했던 피부 톤의 맑은 개선 및 거친 요철 완화 확인.',
  },
  {
    percentage: 0.0,
    labelEn: 'Skin Irritation Index',
    labelKo: '피부 자극 지수 (무자극)',
    detailEn: 'Dermatologically evaluated under Korean Dermatology Research Institute protocols on 50 sensitive subjects.',
    detailKo: '한국 피부과학연구원 임상 테스트 완료: 민감성 피부 대상 저자극 0.00 판정.',
  },
];
