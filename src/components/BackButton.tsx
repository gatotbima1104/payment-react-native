import React from "react";
import { Pressable } from "react-native"
import { ArrowLeftIcon } from "react-native-heroicons/outline"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";


interface IBackButtonProps {
    onPress: () => void
}

const BackButton: React.FC<IBackButtonProps> = ({ onPress }) => {
    return (
        <Pressable className="w-[40px] p-2 items-center rounded-full bg-slate-200" onPress={onPress}>
            <ArrowLeftIcon size={wp(6)} color={'black'} />
        </Pressable>
    )
}

export default BackButton;