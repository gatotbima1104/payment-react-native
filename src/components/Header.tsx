import React from "react";
import { View, Text, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface IHeaderProps {
    greeting: string;
    name: string;
    icon: React.ComponentType<any>;
}

const Header: React.FC<IHeaderProps> = ({ greeting, icon: IconProps, name }) => {
    return (
        <View>
            <Text className="text-slate-500">
                {greeting}
            </Text>
            <View className="justify-between flex-row items-center">
                <View className="flex-row items-center space-x-3">
                    <Text className="font-bold tracking-wider" style={{ fontSize: wp(5) }}>
                        {name}
                    </Text>
                    {/* <IconProps color={'black'} strokeWidth={2} /> */}
                </View>
                <View>
                    <Image source={require('../../assets/donation.jpeg')} style={{ width: wp(10), height: hp(5), objectFit: 'cover', borderRadius: 100 }} />
                </View>
            </View>
        </View>
    )
}

export default Header;