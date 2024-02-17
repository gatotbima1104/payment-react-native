import { Pressable, View, Text } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface IButtonProps {
    text: string;
    disable?: boolean;
    onPress?: () => void;
}

const Button: React.FC<IButtonProps> = ({ text, disable, onPress }) => {
    return (
        <View className="mt-5">
            <Pressable className="bg-blue-300 p-5 rounded-full" disabled={disable} onPress={onPress}>
                <Text className="text-center text-white font-bold" style={{ fontSize: hp(2) }}>{text}</Text>
            </Pressable>
        </View>
    )
}

export default Button;