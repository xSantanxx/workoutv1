import { StyleSheet ,Text, View, Animated, Easing } from "react-native";
import React, {useState, useEffect} from "react";



const MainScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Hey Let`s do this!</Text>
        </View>
    )
}


const WelcomeScreen = () => {
    return(
        <View style={[styles.container]}>
            <Text style={styles.begText}>Welcomee👋</Text>
        </View>

    );
};

export default function Index() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setShowWelcome(false);
      }, 3500)

      return () => clearTimeout(timer);
  }, [])

    return showWelcome ? <WelcomeScreen /> : <MainScreen />;
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    begText: {
        fontSize: 18,
        fontWeight: "bold",
    }
})


