export const API_BASE_URL = 'https://rintis.cloud/api';

export const API_ENDPOINTS = {
  AUTH: {
    REGISTER: '/user/auth/register',
    LOGIN: '/user/auth/login',
  },
  USERINFO: '/user/info',
  BALANCE: '/getBalance',
  LABA_RUGI: '/getLabaRugi',
  TRANSAKSI: '/insertTransaksi',
  GETALLTRANSAKSI: '/getAll',
  DAILYINSIGHT: '/getInsight',
  GET_BUSINESS_RECOMMENDATIONS: '/getRekomendasiBisnis',
  GETCHARTDATA: '/getDataBar',
  INSERT_TRANSAKSI: '/insertTransaksi',
  GET_ITEM_RECOMMENDATIONS: '/getRekomendasiItem',
  GETITEMLIST: '/getItemList',
  INTEGRATIONEXPENSES: '/integrationExpense',
  DELETEITEMLIST: '/deleteItem',
  UPSERTITEMLIST: '/upsertDataItem',
} as const;
