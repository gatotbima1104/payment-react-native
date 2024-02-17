import { FlatList, Pressable, Text, View, Image, ScrollView } from "react-native";
import { HandThumbUpIcon } from "react-native-heroicons/outline";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from "react-native-safe-area-context";
import ItemDonation from "../components/ItemDonation";
import { useSelector } from "react-redux";
import { IRootState } from "../redux/store";

const Home = ({ navigation }: any) => {

    const user = useSelector((state: IRootState) => state.user)

    return (
        <SafeAreaView className="flex-1 mx-4 mt-5 space-y-10">
            <ScrollView>

                {/* Header */}
                <Header greeting="Hello," icon={HandThumbUpIcon} name={user.firstName + ' ' + user.lastName} />

                {/* Search bar  */}
                <SearchBar placeholder="Search for anything" onSearch={(value) => console.log(value)} />

                {/* Item Donation */}
                <View className="flex-row flex-wrap justify-between mx-2">
                    <ItemDonation name="Tree Cactus Images" uriImage={require('../../assets/cactus.jpeg')} price={49} titleBadge={'lifestyle'} />
                    <ItemDonation name="Tree Cactus Images" uriImage={require('../../assets/cactus.jpeg')} price={49} titleBadge={'Environment'} />
                    <ItemDonation name="Tree Cactus Images" uriImage={require('../../assets/cactus.jpeg')} price={49} titleBadge={'lifestyle'} />
                    <ItemDonation name="Tree Cactus Images" uriImage={require('../../assets/cactus.jpeg')} price={49} titleBadge={'lifestyle'} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}

export default Home;