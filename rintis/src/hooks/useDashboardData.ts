'use client';

import { useEffect, useState, useRef } from 'react';
import { UserInfo } from '@/types/UserInfoTypes';
import ChartData from '@/types/ChartTypes';
import ItemList from '@/types/ItemListTypes';
import { DailyInsight } from '@/types/DailyInsightTypes';
import { getUserInfoAction } from '@/lib/feature/user/user.action';
import { getBalanceAction } from '@/lib/feature/balance/balance.action';
import { getLabaRugiAction } from '@/lib/feature/labaRugi/labaRugi.action';
import { fetchChartData } from '@/lib/feature/chartData/chart.data';
import { fetchItemList } from '@/lib/feature/itemList/itemList.data';
import { fetchDailyInsight } from '@/lib/feature/insight/insight.data';

interface UseDashboardDataReturn {
  userInfo: UserInfo | null;
  userBalance: number;
  labaRugi: number;
  chartData: ChartData[] | null;
  itemList: ItemList[] | null;
  dailyInsight: DailyInsight[] | null;
  isLoading: boolean;
  isDailyInsightLoading: boolean;
  refetchDailyInsight: () => Promise<void>;
}

export function useDashboardData(): UseDashboardDataReturn {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [userBalance, setUserBalance] = useState<number>(0);
  const [labaRugi, setLabaRugi] = useState<number>(0);
  const [chartData, setChartData] = useState<ChartData[] | null>(null);
  const [itemList, setItemList] = useState<ItemList[] | null>(null);
  const [dailyInsight, setDailyInsight] = useState<DailyInsight[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDailyInsightLoading, setIsDailyInsightLoading] = useState(true);
  const hasLoadedRef = useRef(false);

  const refetchDailyInsight = async () => {
    setIsDailyInsightLoading(true);
    try {
      const insight = await fetchDailyInsight();
      setDailyInsight(insight);
    } catch (error) {
      console.error('Failed to fetch daily insight:', error);
    } finally {
      setIsDailyInsightLoading(false);
    }
  };

  useEffect(() => {
    async function loadUserInfo() {
      try {
        const data = await getUserInfoAction();
        setUserInfo(data);
      } catch (error) {
        console.error('Failed to load user info:', error);
      }
    }

    async function loadUserBalance() {
      try {
        const balance = await getBalanceAction();
        setUserBalance(balance || 0);
      } catch (error) {
        console.error('Failed to load user balance:', error);
      }
    }

    async function loadLabaRugi() {
      try {
        const labaRugiData = await getLabaRugiAction();
        setLabaRugi(labaRugiData || 0);
      } catch (error) {
        console.error('Failed to load laba rugi:', error);
      }
    }

    async function loadChartData() {
      try {
        const data = await fetchChartData();
        setChartData(data);
      } catch (error) {
        console.error('Failed to load chart data:', error);
      }
    }

    async function loadItemList() {
      try {
        const data = await fetchItemList();
        setItemList(data);
      } catch (error) {
        console.error('Failed to load item list:', error);
      }
    }

    async function loadAllData() {
      try {
        await Promise.all([
          loadUserInfo(),
          loadUserBalance(),
          loadLabaRugi(),
          loadChartData(),
          loadItemList(),
        ]);
      } finally {
        setIsLoading(false);
      }
    }

    if (!hasLoadedRef.current) {
      hasLoadedRef.current = true;
      loadAllData();
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refetchDailyInsight();
  }, []);

  return {
    userInfo,
    userBalance,
    labaRugi,
    chartData,
    itemList,
    dailyInsight,
    isLoading,
    isDailyInsightLoading,
    refetchDailyInsight,
  };
}
