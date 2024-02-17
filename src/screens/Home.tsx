import { FlatList, Pressable, Text, View, Image, ScrollView } from "react-native";
import { HandThumbUpIcon } from "react-native-heroicons/outline";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Tab from "../components/Tab";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemDonation from "../components/ItemDonation";

const Home = ({ navigation }: any) => {
    return (
        <SafeAreaView className="flex-1 mx-4 mt-5 space-y-10">
            <ScrollView>

                {/* Header */}
                <Header greeting="Hello," icon={HandThumbUpIcon} name="Bobby Kartanegara" />

                {/* Search bar  */}
                <SearchBar placeholder="Search for anything" onSearch={(value) => console.log(value)} />

                {/* Item Donation */}
                <View className="flex-row flex-wrap justify-between mx-2">
                    <ItemDonation name="Tree Cactus Images" uriImage={require('../../assets/cactus.jpeg')} price={49} titleBadge={'lifestyle'} />
                    <ItemDonation name="Tree Cactus Images" uriImage={require('../../assets/cactus.jpeg')} price={49} titleBadge={'lifestyle'} />
                    <ItemDonation name="Tree Cactus Images" uriImage={require('../../assets/cactus.jpeg')} price={49} titleBadge={'lifestyle'} />
                    <ItemDonation name="Tree Cactus Images" uriImage={require('../../assets/cactus.jpeg')} price={49} titleBadge={'lifestyle'} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}

export default Home;