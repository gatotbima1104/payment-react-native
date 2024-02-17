import { useRef, useState } from "react";
import { Pressable, TextInput } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

interface ISearchBarProps {
    placeholder: string;
    onSearch?: (text: string) => void;
}

const SearchBar: React.FC<ISearchBarProps> = ({ placeholder, onSearch }) => {

    const inputRef = useRef<TextInput>(null)
    const [search, setSearch] = useState<string>('')

    const handleFocus = () => {
        inputRef.current?.focus()
    }

    const handleChangeSearch = (text: string) => {
        setSearch(text)
        onSearch && onSearch(text)
    }

    return (
        <Pressable className="bg-slate-200 p-3 rounded-full mt-5 flex-row space-x-5" onPress={handleFocus}>
            <MagnifyingGlassIcon color={'black'} strokeWidth={3} />
            <TextInput ref={inputRef} placeholder={placeholder} placeholderTextColor={'grey'} onChangeText={handleChangeSearch} value={search} />
        </Pressable>
    );
}

export default SearchBar;