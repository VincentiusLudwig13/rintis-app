'use client';

export interface BusinessRecommendationFlow {
  insertTransactionPayload: any;
  getItemRecommendationPayload: any;
  expiresAt: number;
}

export const localStorageFlowUtils = {
  /**
   * Set business recommendation flow di localStorage
   */
  setFlow(data: Omit<BusinessRecommendationFlow, 'expiresAt'>) {
    try {
      const expiresAt = Date.now() + 15 * 60 * 1000; // 15 menit
      const flowData: BusinessRecommendationFlow = {
        ...data,
        expiresAt,
      };
      localStorage.setItem(
        'business_recommendation_flow',
        JSON.stringify(flowData)
      );
    } catch (error) {
      console.error('Failed to set business recommendation flow:', error);
    }
  },

  /**
   * Get business recommendation flow dari localStorage
   */
  getFlow(): BusinessRecommendationFlow | null {
    try {
      const flowRaw = localStorage.getItem('business_recommendation_flow');
      if (!flowRaw) return null;

      const flowData: BusinessRecommendationFlow = JSON.parse(flowRaw);

      // Check if expired
      if (Date.now() > flowData.expiresAt) {
        this.clearFlow();
        return null;
      }

      return flowData;
    } catch (error) {
      console.error('Failed to get business recommendation flow:', error);
      return null;
    }
  },

  /**
   * Clear business recommendation flow
   */
  clearFlow() {
    try {
      localStorage.removeItem('business_recommendation_flow');
    } catch (error) {
      console.error('Failed to clear business recommendation flow:', error);
    }
  },
};
