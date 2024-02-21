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
import { IRootState } from "../redux/store";
import Badges from "../components/Badges";
import Tab from "../components/Tab";
import { updateCategoryId } from "../redux/reducers/Categories";
import { useEffect, useState } from "react";
import { ICategory, IDonationItem } from "../interface";
import { updateDonationId } from "../redux/reducers/Donations";

const Home = ({ navigation }: any) => {
    const [categoryPage, setCategoryPage] = useState<number>(1);
    const [categoryList, setCategoryList] = useState<ICategory[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const user = useSelector((state: IRootState) => state.user);
    const categories = useSelector((state: IRootState) => state.categories);
    const donation = useSelector((state: IRootState) => state.donations);
    const [items, setItems] = useState<IDonationItem[]>([])

    const categoryPageSize = 4;
    const dispatch = useDispatch();


    // run this whenever state changes
    useEffect(() => {
        const items = donation.items.filter((item) => {
            return item.categories.includes(categories.selectedId)
        })
        setItems(items)

    }, [categories.selectedId])

    // run the pagination badges
    useEffect(() => {
        setCategoryList(pagination(categories.categories, categoryPage, categoryPageSize))
        setCategoryPage(prev => prev + 1)
    }, [])

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
            <ScrollView showsVerticalScrollIndicator={false} className="space-y-5">
                
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
                    {items.length > 0 && items.map((item) => {
                        const selectedCategory = categories.categories.find((cat) => {
                            return cat.id == categories.selectedId
                        })
                        const titleBadge = selectedCategory ? selectedCategory.categoryTitle : ''
                        return (
                            <ItemDonation
                                key={item.id}
                                donationId={item.id}
                                name={item.name}
                                titleBadge={titleBadge}
                                totalDonation={item.totalDonation}
                                uriImage={{ uri: item.imageUrl }}
                                onPress={(selectedItemId) => {
                                    dispatch(updateDonationId(selectedItemId))
                                    navigation.navigate('SingleDonation', {
                                        titleBadge,
                                    })
                                }}
                            />
                        )
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
