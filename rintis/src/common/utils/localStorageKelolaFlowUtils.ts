'use client';

export interface KelolaFlow {
  insertTransactionPayload: any;
  expiresAt: number;
}

export const localStorageKelolaFlowUtils = {
  /**
   * Simpan flow kelola harian di localStorage
   */
  setFlow(data: Omit<KelolaFlow, 'expiresAt'>) {
    try {
      const expiresAt = Date.now() + 15 * 60 * 1000; // 15 menit
      const flowData: KelolaFlow = {
        ...data,
        expiresAt,
      };

      localStorage.setItem('kelola_flow', JSON.stringify(flowData));
    } catch (error) {
      console.error('Failed to set kelola flow:', error);
    }
  },

  /**
   * Ambil flow kelola harian dari localStorage
   */
  getFlow(): KelolaFlow | null {
    try {
      const raw = localStorage.getItem('kelola_flow');
      if (!raw) return null;

      const flowData: KelolaFlow = JSON.parse(raw);

      // cek expired
      if (Date.now() > flowData.expiresAt) {
        this.clearFlow();
        return null;
      }

      return flowData;
    } catch (error) {
      console.error('Failed to get kelola flow:', error);
      return null;
    }
  },

  /**
   * Hapus kelola flow dari localStorage
   */
  clearFlow() {
    try {
      localStorage.removeItem('kelola_flow');
    } catch (error) {
      console.error('Failed to clear kelola flow:', error);
    }
  },
};
