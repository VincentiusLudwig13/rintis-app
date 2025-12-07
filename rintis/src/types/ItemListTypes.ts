export default interface ItemList {
  id: number;
  item_name: string;
  description: string;
  estimated_prices: number;
  source_of_price_data: string;
  isAdded: boolean | null;
}
