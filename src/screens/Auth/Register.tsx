import { Pressable, SafeAreaView, Text, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import InputForm from "../../components/Input";
import Button from "../../components/Button";
import { Routes } from "../../navigation/Route";
import { useState } from "react";

const Register = ({ navigation }: any) => {

    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')


    return (
        <SafeAreaView className="flex-1 justify-center mx-6">
            <View className="space-y-5">
                <Text className="font-bold mb-5" style={{ fontSize: wp(5) }}>
                    Hello and Welcome !
                </Text>

                <InputForm label="Username" placeholder="Enter your username ..." />
                <InputForm label="Email" placeholder="example@gmail.com" keyboardType="email-address" />
                <InputForm label="Password" placeholder="******" isPassword={true} keyboardType="visible-password" />

                <Button text="Register" />

                <Text className="text-center font-bold text-blue-500">
                    Already have an account?
                    <Text
                        className="underline"
                        onPress={() => navigation.navigate(Routes.Login)}
                    >
                        {" "}
                        Login
                    </Text>
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default Register;
