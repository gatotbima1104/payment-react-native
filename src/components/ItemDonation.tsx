import { View, Text, Image, ImageSourcePropType } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface IItemDonationProps {
    uriImage?: ImageSourcePropType;
    name: string;
    totalDonation?: number;
    titleBadge?: string;
}

const ItemDonation: React.FC<IItemDonationProps> = ({ uriImage, name, totalDonation, titleBadge }) => {
    return (
        <View className="mt-5 p-2 rounded space-y-1" style={{ width: wp(43)}}>
            <View className="bg-slate-200 rounded">
                <View className="bg-green-700 rounded-full absolute z-10 top-1 left-1" style={{ padding: wp(2) }}>
                    <Text className="text-white font-bold text-center" style={{ fontSize: wp(2.5) }}>{titleBadge}</Text>
                </View>
                <Image source={uriImage} style={{ width: wp(39), height: hp(20), objectFit: 'cover' }} className="rounded" />
            </View>
            <Text className="font-bold tracking-wide" style={{ fontSize: wp(3.5) }}>{name.length > 13 ? name.slice(0, 13) + ('...') : name}</Text>
            <Text className="text-blue-500">{totalDonation}</Text>
        </View>
    )
}

export default ItemDonation