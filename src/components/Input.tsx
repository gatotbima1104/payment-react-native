import { useState } from "react";
import { TextInput, View, Text, KeyboardTypeOptions } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface IInputForm {
    label?: string;
    placeholder?: string;
    onChangeText?: (val: string) => void
    keyboardType?: KeyboardTypeOptions
    isPassword?: boolean
}

const InputForm: React.FC<IInputForm> = ({ label, placeholder, onChangeText, keyboardType, isPassword }) => {

    const [value, setValue] = useState<string>('');

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
                secureTextEntry={isPassword}
                keyboardType={keyboardType}
                className="placeholder:pb-2"
                value={value}
                onChangeText={(val) => {
                    setValue(val);
                    onChangeText?.(val);
                }}
            />
        </View>
    );
};

export default InputForm;
