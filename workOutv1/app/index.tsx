import { StyleSheet ,Text, View, TouchableWithoutFeedback, Animated} from "react-native";
import React, {useState, useEffect, useRef} from "react";



const MainScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Hey Let`s do this!</Text>
        </View>
    )
}

const WelcomeScreen = () => {

    const scaleAnimate = useRef(new Animated.Value(0)).current;
    const [isToggle, setToggle] = useState(false);

    const scaleInterpolate = scaleAnimate.interpolate({
        inputRange: [0, 1],
        outputRange: [2, 10],
    });

    const animateElement = () => {
        const toValue = isToggle ? 0 : 1;

        Animated.timing(scaleAnimate, {
            toValue: toValue,
            duration: 2000,
            useNativeDriver: true,
        }).start(() => {setToggle(!isToggle);});

    }

    const animationStyle = {transform: [{ translateY: scaleInterpolate }]};

    // Fix the animation of movement between left and right
    return(
        <View style={[styles.container]}>
            <TouchableWithoutFeedback onPress={() => animateElement()}>
                    <Text style={styles.begText}>Welcome👋</Text>
            </TouchableWithoutFeedback>
        </View>

    );
};


export default function Index() {

  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setShowWelcome(true);
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
        fontSize: 12,
        fontWeight: "bold",
        height: 100,
        width: 100,
    }
})


