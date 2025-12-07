export interface IGetBusinessRecommendationRequest {
  business_model: string;
  budget: string;
  hour: string;
  location: string;
}

export interface IGetBusinessRecommendationResponse {
  data: {
    rekomendasi: IBusinessRecommendation[];
  };
  response_code: number;
}

export interface IBusinessRecommendation {
  nama_bisnis: string;
  description: string;
  explanation: string;
  estimasi_modal: number;
  info_lain: IBusinessDetail;
}

export interface IBusinessDetail {
  pro: string;
  kontra: string;
  simulasi_roi: string;
  estimasi_omset_harian: number;
  estimasi_hpp: number;
  profit_harian: number;
}
