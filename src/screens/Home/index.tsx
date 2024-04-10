import { ScrollView} from "react-native";
import StyleContainer from "../../themes/StyleContainer";
import IntroduceMyself from "./components/IntroduceMyself";
import Certificates from "./components/Certificates";

export default function Home() {
    const styles = StyleContainer();

    return (
        <ScrollView style={styles.alignCode}>
            <IntroduceMyself/>
            <Certificates/>
        </ScrollView>
    )
}


