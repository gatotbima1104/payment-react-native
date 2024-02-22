import { Pressable, SafeAreaView, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import InputForm from "../../components/Input";
import Button from "../../components/Button";
import { Routes } from "../../navigation/Route";
import { useState } from "react";

const Login = ({ navigation }: any) => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <SafeAreaView className="flex-1 justify-center mx-6">
      <View className="space-y-5">
        {/* Title */}
        <Text
          className="text-center font-bold mb-5"
          style={{ fontSize: wp(5) }}>
          Welcome Back
        </Text>

        {/* input form */}
        <InputForm
          label="Email"
          placeholder="example@gmail.com"
          keyboardType="email-address"
          onChangeText={(val) => setEmail(val)}
        />
        <InputForm
          isPassword={true}
          label="Password"
          placeholder="******"
          onChangeText={(val) => setPassword(val)}
        />

        {/* button */}
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
