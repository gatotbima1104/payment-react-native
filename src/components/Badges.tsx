import React from "react";
import { Pressable, Image, ImageSourcePropType } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface IBadgesProps {
    uriImage: ImageSourcePropType;
    text?: string;
}

const Badges: React.FC<IBadgesProps> = ({ uriImage, text }) => {
    return (
        <Pressable className="mt-5">
            <Image source={uriImage} style={{ width: wp(91), height: hp(20), objectFit: 'cover' }} className="rounded-lg" />
        </Pressable>
    )
}

export default Badges;