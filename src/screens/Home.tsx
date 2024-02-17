import { FlatList, Pressable, Text, View, Image } from "react-native";
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
            {/* Header */}
            <Header greeting="Hello," icon={HandThumbUpIcon} name="Bobby Kartanegara" />

            {/* Search bar  */}
            <SearchBar placeholder="Search for anything" onSearch={(value)=> console.log(value)}/>

            {/* Item Donation */}
            <ItemDonation name="Tree Cactus Images" uriImage={require('../../assets/img.png')} price={49}/>
        </SafeAreaView>
    )

}

export default Home;