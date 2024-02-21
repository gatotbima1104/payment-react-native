import { View, Image, Text } from "react-native"
import { useSelector } from "react-redux";
import { IRootState } from "../redux/store";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BackButton from "../components/BackButton";
import CategoriesBadges from "../components/CategoryBadges";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../components/Button";

const SingleDonation = ({ route, navigation }: any) => {
    const donationInformation = useSelector((state: IRootState) => state.donations.selectedInformationId)

    const categories = route.params.titleBadge

    return (
        <SafeAreaView>
            <ScrollView className="mx-4 space-y-5">
                <View>
                    <BackButton onPress={() => navigation.goBack()} />
                    <Image source={{ uri: donationInformation.imageUrl }} style={{ width: wp('91%'), height: hp(60), objectFit: 'cover', borderRadius: 30, marginBottom: 10 }} />
                    <CategoriesBadges title={categories} />
                </View>
                <View className="space-y-5 mx-2">
                    <Text className="font-bold" style={{ fontSize: wp(4) }}>
                        {donationInformation.name}
                    </Text>

                    <Text style={{ fontSize: wp(3) }}>
                        {donationInformation.desc}
                    </Text>
                </View>

                <Button text="Donate" onPress={() => console.log('donated')} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default SingleDonation;
