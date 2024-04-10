import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import LottieView from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, TitilliumWeb_400Regular, TitilliumWeb_700Bold } from '@expo-google-fonts/titillium-web';
import { FontAwesome6 } from '@expo/vector-icons';

const Banner = require('../../../../assets/banner-principal.jpg')

export default function IntroduceMyself() {

    let [fontsLoaded] = useFonts({
        TitilliumWeb_400Regular,
        TitilliumWeb_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
    <ImageBackground style={styles.banner} source={Banner}>
            <LottieView
                style={styles.animation}
                source={require('../../../../assets/Animations/Astronauta.json')}
                autoPlay
                loop
            />
            <LinearGradient 
                colors={['rgba(251,189,97,0.8)','rgba(224,133,0,0.8)']}
                style={styles.welcomeCard}
            >
                <Text style={styles.titleWelcomeCard}>Bem vindo ao meu portfólio !</Text>
            </LinearGradient>

            <View style={styles.boxText}>
                <Text style={styles.titleApresentation}>Meu nome é Lucas e sou  desenvolvedor Full Stack</Text>
                <Text style={styles.textApresentation}>Tenho 19 anos e sou um apaixonado por tecnologia, fui aluno de Desenvolvimento de Sistemas no Senai de Informática lugar onde percebi que dentro da infinidade de coisas que tecnologia abrange a paixão por programação era muito mais intensa do que as demais.</Text>
                <TouchableOpacity style={styles.containerLinkContact}>
                    <Text style={styles.linkContact}>Entre em contato</Text>
                    <FontAwesome6 name="arrow-alt-circle-right" size={24} color="white" />
                </TouchableOpacity>
            </View>
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
    banner:{
        flex: 1,
        height: 700,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 15
    },

    animation:{
        flex: 1,
        width: '70%',
        maxHeight: 300,
    },

    welcomeCard:{
        opacity: 0.90,
        borderWidth: 2, 
        borderColor: '#fff', 
        borderRadius: 2, 
        borderStyle: 'solid', 
        width: '65%',
        padding: 5,
        alignItems: 'center'
    },

    titleWelcomeCard:{
        fontFamily: 'TitilliumWeb_700Bold',
        color: '#fff',
        fontSize: 18,
        opacity: 1
    },

    boxText:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 15
    },

    titleApresentation: {
        fontFamily: 'TitilliumWeb_700Bold',
        color: '#fff',
        fontSize: 28,
        textAlign: 'center',
        maxWidth: '80%'
    },

    textApresentation: {
        fontFamily: 'TitilliumWeb_400Regular',
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
        maxWidth: '80%'
    },

    containerLinkContact: {
        maxWidth: '80%',
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        marginTop: 30
    },

    linkContact:{
        fontFamily: 'TitilliumWeb_700Bold',
        color: '#fff',
        fontSize: 16,
    }
})

