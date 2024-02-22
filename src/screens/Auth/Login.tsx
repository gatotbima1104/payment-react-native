import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import InputForm from "../../components/Input";
import Button from "../../components/Button";
import { Routes } from "../../navigation/Route";
import { useState } from "react";

const Login = ({ navigation }: any) => {

  const [email, setEmail] = useState<string>("");
  const handleValue = (val: string) => {
    setEmail(val)
  }

  return (
    <SafeAreaView className="flex-1 justify-center mx-4">
      <View className="space-y-5">
        <Text className="font-bold mb-5" style={{ fontSize: wp(5) }}>
          Welcome Back
        </Text>

        <InputForm
          label="Email"
          placeholder="gatotbima123@gmail.com"
          onChange={handleValue}
        />
        <InputForm label="Password" placeholder="******" />

        <Button text="Login" />

        <Text className="text-center font-bold text-blue-500">
          Don't have an account?
          <Text
            className="underline"
            onPress={() => navigation.navigate(Routes.Register)}
          >
            {" "}
            Sign Up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
