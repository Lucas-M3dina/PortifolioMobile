import { Text, View, StyleSheet, Platform } from 'react-native'
import { useFonts, TitilliumWeb_400Regular, TitilliumWeb_700Bold } from '@expo-google-fonts/titillium-web';


export default function Certificates() {

    let [fontsLoaded] = useFonts({
        TitilliumWeb_400Regular,
        TitilliumWeb_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.certificateCard}>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    certificateCard:{
        height: 400,
        width: '80%',
        borderRadius: 10,
        ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 3,
            },
            android: {
                shadowOpacity: 0.5,
                shadowRadius: 3,
            },
          }),
    }
})
