import { useRef, useState } from "react";
import { Pressable, View, Text } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface ITabProps {
    text: string;
    disable?: boolean;
    isActive?: boolean;
    onPress: () => void;
    tabId?: any;
}

const Tab: React.FC<ITabProps> = ({ text, disable, tabId, isActive }) => {
    const [width, setWidth] = useState(0);
    const textRef = useRef(null);
    const paddingHorizontal = 33;

    const tabWidth = {
        width: width + paddingHorizontal * 2,
    };

    const setIsActive = isActive ? " bg-blue-500" : " bg-slate-200";
    const setTextActive = isActive ? " text-white" : " text-black";

    return (
        <Pressable
            className={"p-4 rounded-full mr-1" + setIsActive}
            style={tabWidth}
            disabled={disable}
            onPress={() => { tabId }}
        >
            <Text
                onTextLayout={(e) => {
                    setWidth(e.nativeEvent.lines[0].width);
                }}
                ref={textRef}
                className={"text-center" + setTextActive}
                style={{ fontSize: hp(2) }}
            >
                {text}
            </Text>
        </Pressable>
    );
};

export default Tab;
