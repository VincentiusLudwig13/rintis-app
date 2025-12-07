'use client';

import Card from '@/components/Card';
import { MultipleLineChart } from '@/components/chart/MultipleLineChart';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import Typography from '@/components/Typography';
import { lightPalette } from '@/core/theme/styleGuide/color';
import ChartData from '@/types/ChartTypes';
import { Brain, RefreshCw, ThumbsUp, ThumbsDown } from 'lucide-react';
import { DailyInsight } from '@/types/DailyInsightTypes';

interface DailyInsightSectionProps {
  chartData: ChartData[] | null;
  dailyInsight: DailyInsight[] | null;
  isDailyInsightLoading: boolean;
  onRefreshInsight: () => void;
}

export function DailyInsightSection({
  chartData,
  dailyInsight,
  isDailyInsightLoading,
  onRefreshInsight,
}: DailyInsightSectionProps) {
  return (
    <>
      <Card type="outlined" className="w-full mt-5">
        {chartData && <MultipleLineChart data={chartData} />}
      </Card>

      <StyledFlex align="center" className="mt-5 mb-2" gap={10}>
        <Brain size={24} color={lightPalette.primary.main} />
        <Typography
          variant={'bodyMedium'}
          weight="bold"
          color={lightPalette.primary.main}
        >
          AI Daily Insight
        </Typography>
        <button
          onClick={onRefreshInsight}
          disabled={isDailyInsightLoading}
          className="ml-auto flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          title="Refresh insight"
        >
          <RefreshCw
            size={20}
            color={lightPalette.primary.main}
            className={isDailyInsightLoading ? 'animate-spin' : ''}
          />
          <Typography variant={'caption'} color={lightPalette.primary.main}>
            Refresh
          </Typography>
        </button>
      </StyledFlex>

      <div className="overflow-x-auto flex space-x-4 mt-5">
        {isDailyInsightLoading ? (
          <InsightSkeletonLoader />
        ) : dailyInsight && dailyInsight.length > 0 ? (
          dailyInsight.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))
        ) : null}
      </div>
    </>
  );
}

interface InsightCardProps {
  insight: DailyInsight;
}

function InsightCard({ insight }: InsightCardProps) {
  return (
    <Card type="fill" color="#F0EEFA" className="shrink-0 w-80">
      <StyledFlex direction="column" gap={10}>
        <StyledFlex justify="space-between" align="start" gap={10}>
          <Typography
            variant={'bodyMedium'}
            weight="bold"
            color={lightPalette.primary.main}
          >
            {insight.headline}
          </Typography>
          <div>
            {insight.type === 'GOOD' ? (
              <ThumbsUp size={24} color={lightPalette.primary.main} />
            ) : (
              <ThumbsDown size={24} color={lightPalette.primary.main} />
            )}
          </div>
        </StyledFlex>
        <Typography
          variant={'caption'}
          weight="regular"
          style={{ lineHeight: '1.2' }}
        >
          {insight.explanation}
        </Typography>
        <Typography variant={'pixie'} weight="regular">
          <b>Solusi: </b>
          {insight.solution}
        </Typography>
      </StyledFlex>
    </Card>
  );
}

function InsightSkeletonLoader() {
  return (
    <>
      {[1, 2, 3].map((index) => (
        <div key={index} className="shrink-0 w-80">
          <Card type="fill" color="#F0EEFA">
            <StyledFlex direction="column" gap={10}>
              <StyledFlex justify="space-between" align="center">
                <div className="h-6 bg-gray-300 rounded animate-pulse flex-1 mr-2"></div>
                <div className="h-6 w-24 bg-gray-300 rounded animate-pulse"></div>
              </StyledFlex>
              <div className="h-12 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-8 bg-gray-300 rounded animate-pulse"></div>
            </StyledFlex>
          </Card>
        </div>
      ))}
    </>
  );
}
