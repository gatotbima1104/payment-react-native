import { useState } from "react";
import { TextInput, View, Text } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface IInputForm {
    label?: string;
    placeholder?: string;
    onChange?: (val: string) => void
}

const InputForm: React.FC<IInputForm> = ({ label, placeholder, onChange }) => {
    const [value, setValue] = useState<string>("");

    return (
        <View className="space-y-2 my-3">
            <Text style={{ fontSize: wp(3), color: "grey" }}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                style={{
                    borderBottomWidth: 1,
                    borderColor: "grey",
                    marginVertical: hp(1),
                }}
                className="placeholder:pb-2"
                value={value}
                onChangeText={(val) => {
                    setValue(val);
                    onChange
                }}
            />
        </View>
    );
};

export default InputForm;
