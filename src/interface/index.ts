export interface ICategory {
  id: number;
  categoryTitle: string;
}

export interface ICategoryState {
  categories: number[];
  selectedId: number;
  name: string;
  desc: string;
  totalDonation: number;
}
