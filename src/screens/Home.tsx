import {
    FlatList,
    Pressable,
    Text,
    View,
    Image,
    ScrollView,
} from "react-native";
import { HandThumbUpIcon } from "react-native-heroicons/outline";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemDonation from "../components/ItemDonation";
import { useDispatch, useSelector } from "react-redux";
import store, { IRootState } from "../redux/store";
import { updateFirstName } from "../redux/reducers/User";
import Badges from "../components/Badges";
import Tab from "../components/Tab";
import { updateCategoryId } from "../redux/reducers/Categories";
import { useEffect, useState } from "react";

const Home = ({ navigation }: any) => {
    // user store
    const user = useSelector((state: IRootState) => state.user);
    const dispatch = useDispatch();

    // categories store
    const categories = useSelector((state: IRootState) => state.categories);

    // console.log(categories.categories)

    interface ICategory {
        id: number;
        categoryTitle: string;
    }

    // pagination
    const [categoryPage, setCategoryPage] = useState<number>(1);
    const [categoryList, setCategoryList] = useState<ICategory[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const categoryPageSize = 4;

    useEffect(() => {
        setCategoryList(pagination(categories.categories, categoryPage, categoryPageSize))
        setCategoryPage(prev => prev + 1)
    }, [])

    // console.log(categories.categories.length)

    const pagination = (items: ICategory[], pageNumber: number, pageSize: number) => {
        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        if (startIndex >= items.length) {
            return [];
        }

        return items.slice(startIndex, endIndex);
    }

    return (
        <SafeAreaView className="flex-1 mx-4 mt-5 space-y-10">
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header */}
                <Header
                    greeting="Hello,"
                    icon={HandThumbUpIcon}
                    name={user.firstName + " " + user.lastName}
                />

                {/* Search bar  */}
                <SearchBar onSearch={(value) => console.log(value)} />

                {/* badges */}
                <Badges uriImage={require("../../assets/charity.jpeg")} />

                {/* Categories */}
                <View className="mt-5 mx-1 space-y-3">
                    <Text className="font-bold" style={{ fontSize: wp(4) }}>Select Category</Text>
                    <FlatList
                        onEndReachedThreshold={0.5}
                        onEndReached={() => {
                            console.log("end reached", categoryPage)
                            let newData = pagination(
                                categories.categories,
                                categoryPage,
                                categoryPageSize
                            )

                            if (newData.length > 0) {
                                setCategoryList(prevState => [...prevState, ...newData])
                                setCategoryPage(prevState => prevState + 1)
                            }
                        }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={categories.categories}
                        renderItem={({ item }) => {
                            return (
                                <View key={item.id}>
                                    <Tab
                                        tabId={item.id}
                                        text={item.categoryTitle}
                                        isActive={item.id == categories.selectedId}
                                        onPress={(value) => dispatch(updateCategoryId(value))}
                                    />
                                </View>
                            );
                        }}
                    />
                </View>

                {/* Item Donation */}
                <View className="flex-row flex-wrap justify-between">
                    <ItemDonation
                        name="Tree Cactus Images"
                        uriImage={require("../../assets/afrika.jpeg")}
                        price={49}
                        titleBadge={"lifestyle"}
                    />
                    <ItemDonation
                        name="Tree Cactus Images"
                        uriImage={require("../../assets/ethopia.jpeg")}
                        price={49}
                        titleBadge={"lifestyle"}
                    />

                    <ItemDonation
                        name="Tree Cactus Images"
                        uriImage={require("../../assets/papua.jpeg")}
                        price={49}
                        titleBadge={"lifestyle"}
                    />
                    <ItemDonation
                        name="Tree Cactus Images"
                        uriImage={require("../../assets/mali.jpeg")}
                        price={49}
                        titleBadge={"lifestyle"}
                    />
                </View>

                <Pressable
                    onPress={() => dispatch(updateFirstName({ firstName: "Harry" }))}
                >
                    <Text className="text-center text-blue-500 font-bold text-lg">
                        Click me
                    </Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
