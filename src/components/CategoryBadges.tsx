import { View, Text, Image, ImageSourcePropType } from "react-native"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface ICategoryBadges {
    title: string | undefined
}


const CategoriesBadges: React.FC<ICategoryBadges> = ({ title }) => {
    return (

        <View
            className="bg-green-700 rounded-full" 
            style={{ padding: wp(2), width: wp(20)}}
        >
            <Text
                className="text-white font-bold text-center"
                style={{ fontSize: wp(2.5) }}
            >
                {title}
            </Text>
        </View>

    )
}

export default CategoriesBadges;