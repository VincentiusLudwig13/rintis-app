'use client';

import { useState, useCallback } from 'react';
import ItemList from '@/types/ItemListTypes';
import {
  submitCheckedItemsAction,
  deleteSelectedItemsAction,
  addNewItemAction,
} from '@/lib/feature/itemList/itemList.action';
import { fetchItemList } from '@/lib/feature/itemList/itemList.data';

interface UseItemListManagementProps {
  initialItemList: ItemList[] | null;
}

interface UseItemListManagementReturn {
  itemList: ItemList[] | null;
  selectedItems: Set<number>;
  selectAll: boolean;
  showAddItemCard: boolean;
  newItemName: string;
  newItemPrice: string;
  editingItemId: number | null;
  isAddingItem: boolean;
  isSubmittingItems: boolean;
  isDeletingItems: boolean;
  setItemList: (items: ItemList[] | null) => void;
  handleItemCheckboxChange: (itemId: number, checked: boolean) => void;
  handleSelectAllChange: (checked: boolean) => void;
  calculateTotalPrice: () => number;
  handleSubmitCheckedItems: () => Promise<void>;
  handleDeleteSelectedItems: () => Promise<void>;
  handleAddNewItem: () => Promise<void>;
  handleEditItem: (item: ItemList) => void;
  handleCloseAddItemCard: () => void;
  setShowAddItemCard: (show: boolean) => void;
  setNewItemName: (name: string) => void;
  setNewItemPrice: (price: string) => void;
}

export function useItemListManagement({
  initialItemList,
}: UseItemListManagementProps): UseItemListManagementReturn {
  const [itemList, setItemList] = useState<ItemList[] | null>(initialItemList);
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const [showAddItemCard, setShowAddItemCard] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');
  const [editingItemId, setEditingItemId] = useState<number | null>(null);
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [isSubmittingItems, setIsSubmittingItems] = useState(false);
  const [isDeletingItems, setIsDeletingItems] = useState(false);

  const handleItemCheckboxChange = useCallback(
    (itemId: number, checked: boolean) => {
      const newSelectedItems = new Set(selectedItems);
      if (checked) {
        newSelectedItems.add(itemId);
      } else {
        newSelectedItems.delete(itemId);
      }
      setSelectedItems(newSelectedItems);

      if (itemList) {
        setSelectAll(newSelectedItems.size === itemList.length);
      }
    },
    [selectedItems, itemList]
  );

  const handleSelectAllChange = useCallback(
    (checked: boolean) => {
      setSelectAll(checked);
      if (checked && itemList) {
        const allItemIds = new Set(itemList.map((item) => item.id));
        setSelectedItems(allItemIds);
      } else {
        setSelectedItems(new Set());
      }
    },
    [itemList]
  );

  const calculateTotalPrice = useCallback(() => {
    if (!itemList) return 0;
    return itemList
      .filter((item) => selectedItems.has(item.id))
      .reduce((sum, item) => sum + item.estimated_prices, 0);
  }, [itemList, selectedItems]);

  const handleSubmitCheckedItems = async () => {
    if (selectedItems.size === 0) {
      console.warn('No items selected');
      return;
    }

    setIsSubmittingItems(true);
    try {
      const itemIds = Array.from(selectedItems);
      await submitCheckedItemsAction(itemIds);

      if (itemList) {
        const updatedList = itemList.filter(
          (item) => !selectedItems.has(item.id)
        );
        setItemList(updatedList);
      }

      setSelectedItems(new Set());
      setSelectAll(false);
    } catch (error) {
      console.error('Failed to submit items:', error);
    } finally {
      setIsSubmittingItems(false);
    }
  };

  const handleDeleteSelectedItems = async () => {
    if (selectedItems.size === 0) {
      console.warn('No items selected');
      return;
    }

    setIsDeletingItems(true);
    try {
      const itemIds = Array.from(selectedItems).map((id) => Number(id));
      await deleteSelectedItemsAction(itemIds);

      if (itemList) {
        const updatedList = itemList.filter(
          (item) => !selectedItems.has(item.id)
        );
        setItemList(updatedList);
      }

      setSelectedItems(new Set());
      setSelectAll(false);
    } catch (error) {
      console.error('Failed to delete items:', error);
    } finally {
      setIsDeletingItems(false);
    }
  };

  const handleAddNewItem = async () => {
    if (!newItemName.trim() || !newItemPrice.trim()) {
      console.warn('Item name and price are required');
      return;
    }

    setIsAddingItem(true);
    try {
      await addNewItemAction(
        editingItemId || '',
        newItemName,
        parseInt(newItemPrice)
      );

      setNewItemName('');
      setNewItemPrice('');
      setEditingItemId(null);
      setShowAddItemCard(false);

      const updatedList = await fetchItemList();
      setItemList(updatedList);
    } catch (error) {
      console.error('Failed to add/update item:', error);
    } finally {
      setIsAddingItem(false);
    }
  };

  const handleEditItem = (item: ItemList) => {
    setEditingItemId(item.id);
    setNewItemName(item.item_name);
    setNewItemPrice(item.estimated_prices.toString());
    setShowAddItemCard(true);
  };

  const handleCloseAddItemCard = () => {
    setShowAddItemCard(false);
    setNewItemName('');
    setNewItemPrice('');
    setEditingItemId(null);
  };

  return {
    itemList,
    selectedItems,
    selectAll,
    showAddItemCard,
    newItemName,
    newItemPrice,
    editingItemId,
    isAddingItem,
    isSubmittingItems,
    isDeletingItems,
    setItemList,
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
  };
}
