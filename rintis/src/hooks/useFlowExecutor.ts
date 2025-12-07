'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';
import { localStorageFlowUtils } from '@/common/utils/localStorageFlow';
import { localStorageKelolaFlowUtils } from '@/common/utils/localStorageKelolaFlowUtils';

export function useFlowExecutor() {
  useEffect(() => {
    if (window.__FLOW_EXECUTED__) return;
    window.__FLOW_EXECUTED__ = true;

    const flow = localStorageFlowUtils.getFlow();
    const kelolaFlow = localStorageKelolaFlowUtils.getFlow();

    // ================
    // 1. BUSINESS FLOW
    // ================
    if (flow) {
      const toastId = toast.loading('Memproses rekomendasi bisnismu...');

      fetch('/api/flow/execute', {
        method: 'POST',
        body: JSON.stringify(flow),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(async (res) => {
          if (!res.ok) throw new Error();

          toast.success('Rekomendasi berhasil diproses!', { id: toastId });
          localStorageFlowUtils.clearFlow();

          setTimeout(() => window.location.reload(), 600);
        })
        .catch(() => {
          toast.error('Gagal memproses data. Coba lagi ya 🙏', { id: toastId });
        });

      return;
    }

    // ================
    // 2. KELOLA FLOW
    // ================
    if (kelolaFlow) {
      const toastId = toast.loading('Menyimpan data kelola harian...');

      fetch('/api/flow/execute-kelola', {
        method: 'POST',
        body: JSON.stringify(kelolaFlow),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(async (res) => {
          if (!res.ok) throw new Error();

          toast.success('Data kelola berhasil disimpan!', { id: toastId });
          localStorageKelolaFlowUtils.clearFlow();

          setTimeout(() => window.location.reload(), 600);
        })
        .catch(() => {
          toast.error('Gagal menyimpan data kelola. Coba lagi ya 🙏', {
            id: toastId,
          });
        });
    }
  }, []);
}
