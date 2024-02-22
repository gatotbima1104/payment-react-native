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

export interface IInitialStateDonation {
  items: {
    id: number;
    name: string;
    totalDonation: number;
    categories: number[];
    desc: string;
    imageUrl: string;
  }[];
  selectedItem: number | null;
  selectedInformationId: {
    id?: number;
    name?: string;
    totalDonation?: number;
    categories?: number[];
    desc?: string;
    imageUrl?: string;
  };
}

export enum Categories {
  Environment = 1,
  Lifestyle = 2,
  Sociality = 3,
  Charity = 4,
  Education = 5,
  Media = 6,
  Football = 7,
  Basketball = 8,
  Soccer = 9,
  Baseball = 10,
  Hockey = 11,
  Golf = 12,
}
