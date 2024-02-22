import { createSlice } from "@reduxjs/toolkit";
import { IInitialStateDonation } from "../../interface";
import { DonationData } from "../../constants/DonationData";

const initialState: IInitialStateDonation = {
  items: DonationData,
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
