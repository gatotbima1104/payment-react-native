export interface ICategory {
  id: number;
  categoryTitle: string;
}

export interface IDonationItem {
  id: number;
  name: string;
  totalDonation: number;
  categories: number[];
  desc: string;
  imageUrl: string;
}