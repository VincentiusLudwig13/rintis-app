'use client';

import Card from '@/components/Card';
import { Chip } from '@/components/Chip';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import { StyledLabel } from '@/components/input/InputLabel.styled';
import { StyledFilledInput } from '@/components/input/Input.styled';
import Typography from '@/components/Typography';
import { Checkbox } from '@/components/ui/checkbox';
import { lightPalette } from '@/core/theme/styleGuide/color';
import ItemList from '@/types/ItemListTypes';
import {
  PlusIcon,
  Loader2,
  EllipsisVertical,
  XIcon,
  Trash,
} from 'lucide-react';
import { StyledPrimaryButton } from '@/components/button/primary/PrimaryButton.styled';

interface ItemListSectionProps {
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
  onAddItemClick: () => void;
  onSelectAllChange: (checked: boolean) => void;
  onItemCheckboxChange: (itemId: number, checked: boolean) => void;
  onEditItem: (item: ItemList) => void;
  onCloseAddItemCard: () => void;
  onNewItemNameChange: (value: string) => void;
  onNewItemPriceChange: (value: string) => void;
  onAddNewItem: () => void;
  onSubmitCheckedItems: () => void;
  onDeleteSelectedItems: () => void;
  calculateTotalPrice: () => number;
}

export function ItemListSection({
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
  onAddItemClick,
  onSelectAllChange,
  onItemCheckboxChange,
  onEditItem,
  onCloseAddItemCard,
  onNewItemNameChange,
  onNewItemPriceChange,
  onAddNewItem,
  onSubmitCheckedItems,
  onDeleteSelectedItems,
  calculateTotalPrice,
}: ItemListSectionProps) {
  if (!itemList) return null;

  return (
    <StyledFlex direction="column" gap={10} className="mt-5">
      <Typography variant={'caption'} color={lightPalette.text.primary}>
        Daftar item yang wajib untuk jualanmu
      </Typography>

      <StyledFlex justify="space-between">
        <div
          onClick={onAddItemClick}
          className="cursor-pointer transition-all hover:scale-105 active:scale-95"
        >
          <Chip
            labelWeight="bold"
            type="badge"
            label="Tambah Item"
            iconLeft={<PlusIcon />}
          />
        </div>
        <StyledFlex align="center" gap={5} className="mr-5">
          <StyledLabel htmlFor="select-all">Pilih Semua</StyledLabel>
          <div
            style={{ transform: 'scale(1.5)', transformOrigin: 'left center' }}
          >
            <Checkbox
              id="select-all"
              checked={selectAll}
              onCheckedChange={onSelectAllChange}
            />
          </div>
        </StyledFlex>
      </StyledFlex>

      {showAddItemCard && (
        <AddItemCard
          editingItemId={editingItemId}
          newItemName={newItemName}
          newItemPrice={newItemPrice}
          isAddingItem={isAddingItem}
          onCloseAddItemCard={onCloseAddItemCard}
          onNewItemNameChange={onNewItemNameChange}
          onNewItemPriceChange={onNewItemPriceChange}
          onAddNewItem={onAddNewItem}
        />
      )}

      <ItemListDisplay
        itemList={itemList}
        selectedItems={selectedItems}
        onItemCheckboxChange={onItemCheckboxChange}
        onEditItem={onEditItem}
      />

      <ItemListActions
        selectedItems={selectedItems}
        isSubmittingItems={isSubmittingItems}
        isDeletingItems={isDeletingItems}
        onSubmitCheckedItems={onSubmitCheckedItems}
        onDeleteSelectedItems={onDeleteSelectedItems}
        calculateTotalPrice={calculateTotalPrice}
      />
    </StyledFlex>
  );
}

interface AddItemCardProps {
  editingItemId: number | null;
  newItemName: string;
  newItemPrice: string;
  isAddingItem: boolean;
  onCloseAddItemCard: () => void;
  onNewItemNameChange: (value: string) => void;
  onNewItemPriceChange: (value: string) => void;
  onAddNewItem: () => void;
}

function AddItemCard({
  editingItemId,
  newItemName,
  newItemPrice,
  isAddingItem,
  onCloseAddItemCard,
  onNewItemNameChange,
  onNewItemPriceChange,
  onAddNewItem,
}: AddItemCardProps) {
  return (
    <Card type="outlined">
      <StyledFlex
        justify="space-between"
        gap={10}
        className="w-full"
        direction="column"
      >
        <StyledFlex justify="space-between" align="center">
          <Typography
            variant={'bodyMedium'}
            weight="bold"
            color={lightPalette.primary.main}
          >
            {editingItemId ? 'Edit Item' : 'Tambah Item Baru'}
          </Typography>
          <button
            onClick={onCloseAddItemCard}
            className="hover:opacity-70 transition-opacity"
          >
            <XIcon size={20} />
          </button>
        </StyledFlex>

        <StyledFlex grow={1} shrink={1} basis="0%" direction="column" gap={5}>
          <StyledLabel htmlFor="nama-item">Item</StyledLabel>
          <StyledFilledInput
            id="nama-item"
            placeholder="Nama item"
            value={newItemName}
            onChange={(e) => onNewItemNameChange(e.target.value)}
            required
          />
        </StyledFlex>

        <StyledFlex grow={1} shrink={1} basis="0%" direction="column" gap={5}>
          <StyledLabel htmlFor="est-harga">Harga</StyledLabel>
          <StyledFilledInput
            id="est-harga"
            placeholder="Rp"
            type="number"
            value={newItemPrice}
            onChange={(e) => onNewItemPriceChange(e.target.value)}
            required
          />
        </StyledFlex>

        <StyledPrimaryButton
          onClick={onAddNewItem}
          disabled={isAddingItem || !newItemName.trim() || !newItemPrice.trim()}
          className="w-full"
        >
          <Typography
            variant={'pixie'}
            color={lightPalette.text.inverse}
            weight="bold"
          >
            {isAddingItem ? (
              <>
                <Loader2 size={16} className="inline mr-2 animate-spin" />
                {editingItemId ? 'Mengubah...' : 'Menambah...'}
              </>
            ) : editingItemId ? (
              'Simpan Perubahan'
            ) : (
              'Tambah Item'
            )}
          </Typography>
        </StyledPrimaryButton>
      </StyledFlex>
    </Card>
  );
}

interface ItemListDisplayProps {
  itemList: ItemList[];
  selectedItems: Set<number>;
  onItemCheckboxChange: (itemId: number, checked: boolean) => void;
  onEditItem: (item: ItemList) => void;
}

function ItemListDisplay({
  itemList,
  selectedItems,
  onItemCheckboxChange,
  onEditItem,
}: ItemListDisplayProps) {
  return (
    <div className="max-h-80 overflow-y-auto rounded-lg border border-gray-200">
      <StyledFlex direction="column" gap={10} className="p-2">
        {itemList.map((item) => (
          <Card key={item.id} type="outlined">
            <StyledFlex align="center" justify="space-between">
              <StyledFlex align="center" gap={10}>
                <button
                  onClick={() => onEditItem(item)}
                  className="hover:opacity-70 transition-opacity cursor-pointer"
                >
                  <EllipsisVertical />
                </button>
                <StyledFlex direction="column">
                  <Typography
                    weight="bold"
                    variant={'caption'}
                    color={lightPalette.text.primary}
                  >
                    {item.item_name}
                  </Typography>
                  <Typography
                    variant={'caption'}
                    color={lightPalette.text.primary}
                  >
                    Est. Harga: Rp{' '}
                    {item.estimated_prices.toLocaleString('id-ID')}
                  </Typography>
                </StyledFlex>
              </StyledFlex>
              <div
                style={{
                  transform: 'scale(1.5)',
                  transformOrigin: 'right center',
                }}
              >
                <Checkbox
                  id={`item-${item.id}`}
                  checked={selectedItems.has(item.id)}
                  onCheckedChange={(checked) => {
                    if (checked !== 'indeterminate') {
                      onItemCheckboxChange(item.id, checked);
                    }
                  }}
                />
              </div>
            </StyledFlex>
          </Card>
        ))}
      </StyledFlex>
    </div>
  );
}

interface ItemListActionsProps {
  selectedItems: Set<number>;
  isSubmittingItems: boolean;
  isDeletingItems: boolean;
  onSubmitCheckedItems: () => void;
  onDeleteSelectedItems: () => void;
  calculateTotalPrice: () => number;
}

function ItemListActions({
  selectedItems,
  isSubmittingItems,
  isDeletingItems,
  onSubmitCheckedItems,
  onDeleteSelectedItems,
  calculateTotalPrice,
}: ItemListActionsProps) {
  return (
    <StyledFlex gap={10} align="center">
      <StyledPrimaryButton
        className="w-full"
        onClick={onSubmitCheckedItems}
        disabled={selectedItems.size === 0 || isSubmittingItems}
      >
        <Typography
          variant={'pixie'}
          color={lightPalette.text.inverse}
          weight="bold"
        >
          {isSubmittingItems ? (
            <>
              <Loader2 size={16} className="inline mr-2 animate-spin" />
              Mengirim...
            </>
          ) : (
            <>
              Check ({selectedItems.size}) item, Rp{' '}
              {calculateTotalPrice().toLocaleString('id-ID')}
            </>
          )}
        </Typography>
      </StyledPrimaryButton>
      {selectedItems.size > 0 && (
        <button
          onClick={onDeleteSelectedItems}
          disabled={isDeletingItems}
          className="flex items-center justify-center hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isDeletingItems ? (
            <Loader2
              size={35}
              className="animate-spin"
              color={lightPalette.error.main}
            />
          ) : (
            <Trash size={35} color={lightPalette.error.main} />
          )}
        </button>
      )}
    </StyledFlex>
  );
}
