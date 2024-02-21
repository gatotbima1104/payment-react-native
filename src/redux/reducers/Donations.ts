import { createSlice } from "@reduxjs/toolkit";

interface IDonationItem {
  items: {
    id: number;
    name: string;
    totalDonation: number;
    categories: number[];
    desc: string;
    imageUrl: string;
  }[],
  selectedItem: number | null,
  selectedInformationId: {
    id?: number;
    name?: string;
    totalDonation?: number;
    categories?: number[];
    desc?: string;
    imageUrl?: string;
  },
}

const initialState: IDonationItem = {
  items: [
    {
      id: 1,
      name: "Safari",
      totalDonation: 548,
      categories: [2, 10],
      desc: "Exploring the wild lands of Africa.",
      imageUrl:
        "https://cf.ltkcdn.net/charity/images/orig/221797-2121x1414-Health-Worker.jpg",
    },
    {
      id: 2,
      name: "Savanna",
      totalDonation: 769,
      categories: [4, 8],
      desc: "Vast grasslands teeming with life.",
      imageUrl:
        "https://cdn-dbbjonb.nitrocdn.com/jjqxbcsHjQJMkiRSkNUOWRWBjEHrBkgd/assets/images/optimized/rev-14982a0/africanrelief.org/wp-content/uploads/2021/12/BWA-BREAD-AND-WATER-FOR-AFRICA-Basic-Relief-Support-.jpeg",
    },
    {
      id: 3,
      name: "Jungle",
      totalDonation: 316,
      categories: [6, 11],
      desc: "Dense forests filled with mysteries.",
      imageUrl:
        "https://news.stv.tv/wp-content/uploads/2020/02/pjimage-5-7.jpg",
    },
    {
      id: 4,
      name: "Desert Amazon daily deals for food and drink",
      totalDonation: 173,
      categories: [1, 9],
      desc: "Harsh landscapes of sand and heat.",
      imageUrl:
        "https://ywamships.org/wp-content/uploads/2019/11/IMG_0613-1-scaled-468x468.jpg",
    },
    {
      id: 5,
      name: "Mountains",
      totalDonation: 659,
      categories: [3, 12],
      desc: "Tower peaks reaching for the sky.",
      imageUrl:
        "https://www.shutterstock.com/image-photo/kenya-rusinga-island-utajo-village-600nw-1180465816.jpg",
    },
    {
      id: 6,
      name: "Waterfalls",
      totalDonation: 821,
      categories: [5, 7],
      desc: "Majestic cascades of pure beauty.",
      imageUrl:
        "https://www.shutterstock.com/image-photo/abuja-nigeria-june-6-2022-600nw-2169606681.jpg",
    },
    {
      id: 7,
      name: "Wildlife",
      totalDonation: 494,
      categories: [2, 8],
      desc: "A diverse array of creatures in their natural habitat.",
      imageUrl:
        "https://www.betootaadvocate.com/wp-content/uploads/2017/04/sad-day.jpg",
    },
    {
      id: 8,
      name: "Sunset",
      totalDonation: 235,
      categories: [1, 6],
      desc: "The sky painted with hues of orange and red.",
      imageUrl:
        "https://www.shutterstock.com/image-photo/charity-close-diverse-people-holding-600nw-1154653396.jpg",
    },
    {
      id: 9,
      name: "River",
      totalDonation: 402,
      categories: [3, 10],
      desc: "Flowing waters carving through the land.",
      imageUrl:
        "https://africanimpact.com/wp-content/uploads/2022/12/2023-medical-and-healthcare-volunteer-768x513.jpg",
    },
    {
      id: 10,
      name: "Elephants",
      totalDonation: 987,
      categories: [4, 9],
      desc: "Gentle giants roaming the savanna.",
      imageUrl: "https://muslimhands.org.uk/_ui/images/e5943a776ade.jpg",
    },
    {
      id: 11,
      name: "Zebras",
      totalDonation: 153,
      categories: [5, 11],
      desc: "Striped wonders grazing on the plains.",
      imageUrl:
        "https://dropinthebucket.org/wp-content/uploads/2016/08/Drop-in-the-Bucket-Charity-Africa-Uganda-Lugazi-Primary-School-Water-Well-Photos-49.jpg",
    },
    {
      id: 12,
      name: "Lions",
      totalDonation: 633,
      categories: [2, 7],
      desc: "Majestic rulers of the African wilderness.",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/59700782f7e0ab9e89035ffe/1539366420966-3WFIO51P58WFN61P3YEK/Kenya_Jan201605132016_0026.jpg",
    },
    {
      id: 13,
      name: "Giraffes",
      totalDonation: 278,
      categories: [1, 12],
      desc: "Graceful creatures with long necks reaching for the leaves.",
      imageUrl:
        "https://acecharityafrica.org/wp-content/uploads/2023/05/Screen-Shot-2023-05-11-at-10.28.24.png",
    },
    {
      id: 14,
      name: "Rhinos",
      totalDonation: 569,
      categories: [3, 8],
      desc: "Powerful guardians of the savanna.",
      imageUrl:
        "https://edutorial.ng/wp-content/uploads/2018/10/GIRL-CHILD-EDUCATION-edutorial.jpg",
    },
    {
      id: 15,
      name: "Leopards",
      totalDonation: 731,
      categories: [6, 10],
      desc: "Sleek predators blending into the shadows.",
      imageUrl:
        "https://english.ahram.org.eg/Media/News/2022/6/23/41_2022-637916073301346535-134.jpg",
    },
    {
      id: 16,
      name: "Cheetahs",
      totalDonation: 316,
      categories: [2, 7],
      desc: "Fastest land animals racing across the plains.",
      imageUrl:
        "https://www.oursundayvisitor.com/wp-content/uploads/2023/03/20230308T1300-POPE-CONGO-MASS-1756986.jpg",
    },
    {
      id: 17,
      name: "Flamingos",
      totalDonation: 856,
      categories: [4, 9],
      desc: "Pink beauties wading through shallow waters.",
      imageUrl:
        "https://www.islamic-relief.org.uk/wp-content/uploads/2022/11/water-hero.jpg",
    },
    {
      id: 18,
      name: "Crocodiles",
      totalDonation: 422,
      categories: [5, 11],
      desc: "Stealthy predators lurking beneath the surface.",
      imageUrl:
        "https://www.unicef.org/southafrica/sites/unicef.org.southafrica/files/styles/hero_tablet/public/ZAF-BEC9590.jpg.webp?itok=X5Q63kib",
    },
    {
      id: 19,
      name: "Hippos",
      totalDonation: 599,
      categories: [1, 8],
      desc: "Massive creatures basking in the cool waters.",
      imageUrl:
        "https://static.wixstatic.com/media/3f4876_2ac07b7dea3544afbade58033169a87f~mv2.png/v1/crop/x_81,y_269,w_418,h_301/fill/w_575,h_421,al_c,lg_1,q_85,enc_auto/Africa4.png",
    },
    {
      id: 20,
      name: "Chimpanzees",
      totalDonation: 179,
      categories: [3, 12, 2],
      desc: "Curious primates swinging through the trees.",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/010/434/749/large_2x/group-of-happy-african-volunteers-planting-tree-in-park-africa-volunteering-charity-people-and-ecology-concept-photo.jpg",
    },
  ],
  selectedItem: null,
  selectedInformationId: {},
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
      state.selectedInformationId =
        state.items.find((value) => value.id == action.payload) || {};
    },
  },
});

export default Donations.reducer;
export const { resetDonation, updateDonationId } = Donations.actions;
