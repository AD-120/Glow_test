export type Language = 'en' | 'ko';

export type SkinType = 'dry' | 'sensitive' | 'oily' | 'dull';

export type TabType = 'ingredients' | 'usage' | 'clinical' | 'clean';

export interface ProductImage {
  id: string;
  src: string;
  alt: string;
  labelEn: string;
  labelKo: string;
  descriptionEn: string;
  descriptionKo: string;
}

export interface SkinTypeDetail {
  id: SkinType;
  titleEn: string;
  titleKo: string;
  subtitleEn: string;
  subtitleKo: string;
  benefitEn: string;
  benefitKo: string;
  routineTipEn: string;
  routineTipKo: string;
  metricLabelEn: string;
  metricLabelKo: string;
  metricValue: string;
  recommendedDrops: number;
}

export interface Ingredient {
  nameEn: string;
  nameKo: string;
  percentage: string;
  categoryEn: string;
  categoryKo: string;
  descriptionEn: string;
  descriptionKo: string;
}

export interface StepGuide {
  step: number;
  phaseEn: string;
  phaseKo: string;
  titleEn: string;
  titleKo: string;
  instructionsEn: string;
  instructionsKo: string;
}

export interface ClinicalMetric {
  percentage: number;
  labelEn: string;
  labelKo: string;
  detailEn: string;
  detailKo: string;
}
