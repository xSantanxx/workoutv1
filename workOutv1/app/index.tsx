import {StyleSheet, Text, View, TouchableWithoutFeedback, Animated, TextInput, Button, Alert} from "react-native";
import React, {useState, useEffect, useRef} from "react";


const WelcomeScreen = () => {

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnimate = useRef(new Animated.Value(0)).current;
    const [isToggle, setToggle] = useState(false);

    const scaleInterpolate = scaleAnimate.interpolate({
        inputRange: [0, 1],
        outputRange: [2, 3],
    });

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 4000,
            useNativeDriver: true,
        }).start();
    }

    const animateElement = () => {
        const toValue = isToggle ? 0 : 1;

        Animated.timing(scaleAnimate, {
            toValue: toValue,
            duration: 2000,
            useNativeDriver: true,
        }).start(() => {setToggle(!isToggle);});

    }

    const animationStyle = {transform: [{ scale: scaleInterpolate }]};

    useEffect(() => {
        const timer = setTimeout(() => {
            animateElement();
        }, 3000)


        return () => clearTimeout(timer);
    }, [animateElement]);

    useEffect(() => {
        const timer = setTimeout(() => {
            fadeIn();
        }, 3000)

        return () => clearTimeout(timer);
    }, [fadeIn]);

    // Fix the animation of movement between left and right
    return(
        <View style={[styles.container]}>
            <Animated.Text style={[styles.begText, animationStyle]}>Welcome👋</Animated.Text>
            <Animated.View style={[styles.subContainer,{opacity: fadeAnim}]}>
                <Animated.Text style={[styles.subText,animationStyle]}>This is beta 1.0 of the Work Out App</Animated.Text>
                <Animated.Text style={[styles.subText,animationStyle]}>Hope you enjoy using it</Animated.Text>
            </Animated.View>
        </View>

    );
};


const MainScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Hey Let`s do this!</Text>
        </View>
    )
}


const LoginScreen = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const submitInfo = () => {
        Alert.alert('Submitted')

        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    return(
        <View style={styles.formContainer}>
            <View style={[styles.mainFormContainer]}>
                <Text style={styles.titleFormText}>Registration Form</Text>
                <TextInput autoCorrect={true} value={firstName} onChangeText={text => setFirstName(text)} style={[styles.entryPoints]} placeholder={"First Name"}></TextInput>
                <TextInput autoCorrect={true} value={lastName} onChangeText={text => setLastName(text)} style={styles.entryPoints} placeholder={"Last Name"}></TextInput>
                <TextInput autoCorrect={true} value={email} onChangeText={text => setEmail(text)} style={styles.entryPoints} placeholder={"Email"}></TextInput>
                <TextInput maxLength={50} value={password} onChangeText={text => setPassword(text)} style={styles.entryPoints} secureTextEntry={true} placeholder={"Password"}></TextInput>
                <TextInput maxLength={50} value={confirmPassword} onChangeText={text => setConfirmPassword(text)} style={styles.entryPoints} secureTextEntry={true} placeholder={"Confirm Password"}></TextInput>
                <View style={styles.buttonContainer}>
                    <Button title="Enter"  color="white" onPress={() => submitInfo()}></Button>
                </View>
            </View>
        </View>
    )
}



export default function Index() {

  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setShowWelcome(false);
      }, 10000)

      return () => clearTimeout(timer);
  }, [])

    return showWelcome ? <WelcomeScreen /> : <LoginScreen />;
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
        height: 100,
        width: 100,
    },
    subText: {
        fontSize: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
    subContainer: {
        flexDirection: "column",
        gap: 10,
    },
    formContainer: {
        flex: 1,
        borderColor: "red",
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
    },
    mainFormContainer: {
        backgroundColor: "red",
        height: "50%",
        width: "65%",
        borderRadius: 5,
        alignItems: "center",
    },
    titleFormText :{
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 15,
    },
    entryPoints : {
        backgroundColor: "white",
        height: 40,
        width: "65%",
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        margin: 12,
        borderColor: "#000",
    },
    buttonContainer: {
        backgroundColor: "blue",
        width: "55%",
        borderRadius: 5,
    }
})


