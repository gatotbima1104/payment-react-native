import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Image } from "react-native";

interface IImageData {
  uri: string;
}

export const CachedImage = ({ uri }: { uri: string }) => {
  const [cachedImage, setCachedImage] = useState<IImageData | null>(null);

  useEffect(() => {
    const getImages = async () => {
      try {
        const cachedImagesData = await AsyncStorage.getItem(uri);
        if (cachedImagesData) {
          setCachedImage({ uri: cachedImagesData });
        } else {
          const res = await fetch(uri);
          const imageBlob = await res.blob();
          const base64 = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(imageBlob);
            reader.onloadend = () => {
              resolve(reader.result as string);
            };
          });

          await AsyncStorage.setItem(uri, base64 as string);
          setCachedImage({ uri: base64 as string });
        }
      } catch (error) {
        console.log(error);
        setCachedImage(null); // Set cachedImage to null if error occurs
      }
    };

    getImages(); // Call the function when the component mounts and whenever `uri` changes
  }, [uri]);

  // Return the Image component with conditional rendering
  return cachedImage ? <Image source={{ uri: cachedImage.uri }} /> : null;
};
