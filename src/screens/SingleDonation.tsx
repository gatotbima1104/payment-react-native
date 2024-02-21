import { View, Text, Pressable, TouchableOpacity } from "react-native"
import { useSelector } from "react-redux";
import { IRootState } from "../redux/store";
import { IDonationItem } from "../interface";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon, BackspaceIcon } from "react-native-heroicons/outline";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BackButton from "../components/BackButton";

const SingleDonation = ({ navigation }: any) => {
    const donationInformation = useSelector((state: IRootState) => state.donations.selectedInformationId)

    console.log(donationInformation)

    return (
        <SafeAreaView>
            <View className="mx-4 space-y-5">
                <BackButton onPress={() => navigation.goBack()} />
                
            </View>
        </SafeAreaView>
    )
}

export default SingleDonation;
