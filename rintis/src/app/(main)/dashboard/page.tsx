'use client';

import { Loader2 } from 'lucide-react';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import Typography from '@/components/Typography';
import { lightPalette } from '@/core/theme/styleGuide/color';
import { useDashboardData } from '@/hooks/useDashboardData';
import { useItemListManagement } from '@/hooks/useItemListManagement';
import { UserHeader } from '@/components/dashboard/UserHeader';
import { BalanceCard } from '@/components/dashboard/BalanceCard';
import { ItemListSection } from '@/components/dashboard/ItemListSection';
import { ActionCards } from '@/components/dashboard/ActionCards';
import { DailyInsightSection } from '@/components/dashboard/DailyInsightSection';
import { useEffect } from 'react';
import { useFlowExecutor } from '@/hooks/useFlowExecutor';

export default function DashboardPage() {
  const {
    userInfo,
    userBalance,
    labaRugi,
    chartData,
    itemList,
    dailyInsight,
    isLoading,
    isDailyInsightLoading,
    refetchDailyInsight,
  } = useDashboardData();

  const {
    itemList: managedItemList,
    selectedItems,
    selectAll,
    showAddItemCard,
    newItemName,
    newItemPrice,
    editingItemId,
    isAddingItem,
    isSubmittingItems,
    isDeletingItems,
    setItemList: setManagedItemList,
    handleItemCheckboxChange,
    handleSelectAllChange,
    calculateTotalPrice,
    handleSubmitCheckedItems,
    handleDeleteSelectedItems,
    handleAddNewItem,
    handleEditItem,
    handleCloseAddItemCard,
    setShowAddItemCard,
    setNewItemName,
    setNewItemPrice,
  } = useItemListManagement({
    initialItemList: itemList,
  });

  // Sync itemList with managedItemList when itemList changes
  useEffect(() => {
    setManagedItemList(itemList);
  }, [itemList, setManagedItemList]);

  useFlowExecutor();

  const displayName = userInfo?.name || 'User';
  const displayUsername = userInfo?.username || 'username';

  if (isLoading) {
    return (
      <StyledFlex
        direction="column"
        gap={20}
        justify="center"
        align="center"
        height="100%"
      >
        <Loader2
          size={48}
          className="animate-spin"
          color={lightPalette.primary.main}
        />
        <Typography variant={'bodyMedium'} color={lightPalette.text.primary}>
          Tunggu sebentar, memuat data...
        </Typography>
      </StyledFlex>
    );
  }

  return (
    <>
      <UserHeader
        userInfo={userInfo!}
        name={displayName}
        username={displayUsername}
      />
      <BalanceCard balance={userBalance} labaRugi={labaRugi} />
      {managedItemList && managedItemList.length > 0 && (
        <ItemListSection
          itemList={managedItemList}
          selectedItems={selectedItems}
          selectAll={selectAll}
          showAddItemCard={showAddItemCard}
          newItemName={newItemName}
          newItemPrice={newItemPrice}
          editingItemId={editingItemId}
          isAddingItem={isAddingItem}
          isSubmittingItems={isSubmittingItems}
          isDeletingItems={isDeletingItems}
          onAddItemClick={() => setShowAddItemCard(!showAddItemCard)}
          onSelectAllChange={handleSelectAllChange}
          onItemCheckboxChange={handleItemCheckboxChange}
          onEditItem={handleEditItem}
          onCloseAddItemCard={handleCloseAddItemCard}
          onNewItemNameChange={setNewItemName}
          onNewItemPriceChange={setNewItemPrice}
          onAddNewItem={handleAddNewItem}
          onSubmitCheckedItems={handleSubmitCheckedItems}
          onDeleteSelectedItems={handleDeleteSelectedItems}
          calculateTotalPrice={calculateTotalPrice}
        />
      )}
      <ActionCards />
      <DailyInsightSection
        chartData={chartData}
        dailyInsight={dailyInsight}
        isDailyInsightLoading={isDailyInsightLoading}
        onRefreshInsight={refetchDailyInsight}
      />
    </>
  );
}
