export interface GoodsState {
  listOfGoods: any[];
}

export interface GoodsStore {
  fetchGoods: () => Promise<void>;
}
