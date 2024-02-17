import { View, Text, Image, ImageSourcePropType } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface IItemDonationProps {
    uriImage: ImageSourcePropType;
    name: string;
    price: number;
    titleBadge?: string;
}

const ItemDonation: React.FC<IItemDonationProps> = ({ uriImage, name, price, titleBadge }) => {
    return (
        <View className="mt-5 p-2 rounded space-y-1" style={{ width: wp(40) }}>
            <View className="bg-slate-200 rounded">
                <View className="bg-green-700 rounded-full p-2 w-2/3 absolute z-10 top-1">
                    <Text className="text-white font-bold text-center" style={{ fontSize: wp(2.5) }}>{titleBadge}</Text>
                </View>
                <Image source={uriImage} style={{ width: wp(35), height: hp(15), objectFit: 'cover' }} className="rounded" />
            </View>
            <Text className="font-bold tracking-wide" style={{ fontSize: 15 }}>{name.length > 13 ? name.slice(0, 13) + ('...') : name}</Text>
            <Text className="text-blue-500">${price}</Text>
        </View>
    )
}

export default ItemDonation