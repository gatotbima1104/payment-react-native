import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      name: "Safari",
      totalDonation: 548,
      categories: [2, 10],
      desc: "Exploring the wild lands of Africa.",
    },
    {
      id: 2,
      name: "Savanna",
      totalDonation: 769,
      categories: [4, 8],
      desc: "Vast grasslands teeming with life.",
    },
    {
      id: 3,
      name: "Jungle",
      totalDonation: 316,
      categories: [6, 11],
      desc: "Dense forests filled with mysteries.",
    },
    {
      id: 4,
      name: "Desert",
      totalDonation: 173,
      categories: [1, 9],
      desc: "Harsh landscapes of sand and heat.",
    },
    {
      id: 5,
      name: "Mountains",
      totalDonation: 659,
      categories: [3, 12],
      desc: "Tower peaks reaching for the sky.",
    },
    {
      id: 6,
      name: "Waterfalls",
      totalDonation: 821,
      categories: [5, 7],
      desc: "Majestic cascades of pure beauty.",
    },
    {
      id: 7,
      name: "Wildlife",
      totalDonation: 494,
      categories: [2, 8],
      desc: "A diverse array of creatures in their natural habitat.",
    },
    {
      id: 8,
      name: "Sunset",
      totalDonation: 235,
      categories: [1, 6],
      desc: "The sky painted with hues of orange and red.",
    },
    {
      id: 9,
      name: "River",
      totalDonation: 402,
      categories: [3, 10],
      desc: "Flowing waters carving through the land.",
    },
    {
      id: 10,
      name: "Elephants",
      totalDonation: 987,
      categories: [4, 9],
      desc: "Gentle giants roaming the savanna.",
    },
    {
      id: 11,
      name: "Zebras",
      totalDonation: 153,
      categories: [5, 11],
      desc: "Striped wonders grazing on the plains.",
    },
    {
      id: 12,
      name: "Lions",
      totalDonation: 633,
      categories: [2, 7],
      desc: "Majestic rulers of the African wilderness.",
    },
    {
      id: 13,
      name: "Giraffes",
      totalDonation: 278,
      categories: [1, 12],
      desc: "Graceful creatures with long necks reaching for the leaves.",
    },
    {
      id: 14,
      name: "Rhinos",
      totalDonation: 569,
      categories: [3, 8],
      desc: "Powerful guardians of the savanna.",
    },
    {
      id: 15,
      name: "Leopards",
      totalDonation: 731,
      categories: [6, 10],
      desc: "Sleek predators blending into the shadows.",
    },
    {
      id: 16,
      name: "Cheetahs",
      totalDonation: 316,
      categories: [2, 7],
      desc: "Fastest land animals racing across the plains.",
    },
    {
      id: 17,
      name: "Flamingos",
      totalDonation: 856,
      categories: [4, 9],
      desc: "Pink beauties wading through shallow waters.",
    },
    {
      id: 18,
      name: "Crocodiles",
      totalDonation: 422,
      categories: [5, 11],
      desc: "Stealthy predators lurking beneath the surface.",
    },
    {
      id: 19,
      name: "Hippos",
      totalDonation: 599,
      categories: [1, 8],
      desc: "Massive creatures basking in the cool waters.",
    },
    {
      id: 20,
      name: "Chimpanzees",
      totalDonation: 179,
      categories: [3, 12, 2],
      desc: "Curious primates swinging through the trees.",
    },
  ],
  selectedItem: null,
};

const Donations = createSlice({
  name: "donation",
  initialState: initialState,
  reducers: {
    resetDonation: () => {
      return initialState;
    },
    updateDonationId: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
});

export default Donations.reducer;
export const { resetDonation, updateDonationId } = Donations.actions;
