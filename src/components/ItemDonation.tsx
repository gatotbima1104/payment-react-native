import { View, Text, Image } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface IItemDonationProps {
    uriImage: string;
    name: string;
    price: number;
}

const ItemDonation: React.FC<IItemDonationProps> = ({ uriImage, name, price }) => {
    return (
        <View className="mt-5 p-2 rounded " style={{ width: wp(35) }}>
            <View className="bg-slate-200 rounded">
                <View className="bg-green-700 rounded-full p-2 w-2/3">
                    <Text className="text-white font-bold text-center" style={{fontSize: wp(2.5)}}>Environment</Text>
                </View>
                <Image source={{ uri: uriImage }} style={{ width: wp(30), height: hp(10) }} className="border" />
            </View>
            <Text className="font-bold tracking-wide" style={{ fontSize: 15 }}>{name.length > 13 ? name.slice(0, 13) + ('...') : name}</Text>
            <Text className="text-blue-500">${price}</Text>
        </View>
    )
}

export default ItemDonation