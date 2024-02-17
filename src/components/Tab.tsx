import { useRef, useState } from "react";
import { Pressable, View, Text } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface ITabProps {
    text: string;
    disable?: boolean;
    onPress?: () => void;
    isActive?: boolean;
}

const Tab: React.FC<ITabProps> = ({ text, disable, onPress, isActive }) => {

    const [width, setWidth] = useState(0)
    const textRef = useRef(null)
    const paddingHorizontal = 33;

    const tabWidth = {
        width: width + paddingHorizontal * 2
    }

    const setIsActive = isActive ? " bg-blue-300" : " bg-white"

    return (
        <View className="mt-5">
            <Pressable className={"p-5 rounded-full border" + setIsActive} style={tabWidth} disabled={disable} onPress={onPress}>
                <Text
                    onTextLayout={(e) => {
                        setWidth(e.nativeEvent.lines[0].width)
                    }}
                    ref={textRef} className="text-center text-black font-bold" style={{ fontSize: hp(2) }}>{text}</Text>
            </Pressable>
        </View>
    )
}

export default Tab;