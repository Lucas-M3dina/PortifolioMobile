import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet } from "react-native";

export default function StyleContainer() {
    const insets = useSafeAreaInsets();

    return StyleSheet.create({
        alignCode:{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
            display: 'flex',
            flexDirection: 'column'
        }
    })
}