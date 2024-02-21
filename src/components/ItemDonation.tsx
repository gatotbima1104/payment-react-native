import {
    View,
    Text,
    Image,
    ImageSourcePropType,
    Pressable,
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface IItemDonationProps {
    donationId: number;
    name: string;
    uriImage?: ImageSourcePropType;
    totalDonation?: number;
    titleBadge?: string;
    onPress: (donationId: number) => void;
}

const ItemDonation: React.FC<IItemDonationProps> = ({
    uriImage,
    name,
    totalDonation,
    titleBadge,
    onPress,
    donationId,
}) => {
    return (
        <Pressable
            className="p-2 rounded space-y-1"
            style={{ width: wp(43) }}
            onPress={() => onPress(donationId)}
        >
            <View className="rounded">
                <View
                    className="bg-green-700 rounded-full absolute z-10 top-1 left-1"
                    style={{ padding: wp(2) }}
                >
                    <Text
                        className="text-white font-bold text-center"
                        style={{ fontSize: wp(2.5) }}
                    >
                        {titleBadge}
                    </Text>
                </View>
                <Image
                    source={uriImage}
                    style={{ width: wp(39), height: hp(20), objectFit: "cover" }}
                    className="rounded"
                />
            </View>
            <Text className="font-bold tracking-wide"
                style={{ fontSize: wp(3.5) }}
                numberOfLines={1}
            >
                {/* {name.length > 13 ? name.slice(0, 13) + "..." : name} */}
                {name}
            </Text>
            <Text className="text-blue-500">{totalDonation}</Text>
        </Pressable>
    );
};

export default ItemDonation;
