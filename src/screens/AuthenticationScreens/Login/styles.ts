import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
    LinearGradient: {
      position: 'relative',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
    rocketIcon: {
      width: width * 0.6,
      height: height * 0.35,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    title: {
      color: '#fff',
      fontSize: 15,
      fontWeight: 'bold',
      margin: 0,
    },
    buttonContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    LoginBtn: {
      backgroundColor: '#000000',
      width: 150,
      height: 200,
      borderRadius: 16,
      elevation: 8,
    },
    LoginBtnText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      alignSelf: 'center',
      top: 80,
    },
    SignUp: {
      backgroundColor: '#DDCECD',
      width: 150,
      height: 200,
      borderRadius: 16,
      elevation: 8,
    },
    welcomeText: {
      fontWeight: '100',
      fontSize: 16,
      color: '#fff',
      alignSelf: 'center',
      marginTop: 0,
      lineHeight: 37,
      textAlign: 'center',
    },
    loginText: {
      fontWeight: '900',
      width: 600,
      fontSize: 34,
      color: '#fff',
      alignSelf: 'center',
      lineHeight: 41,
      textAlign: 'center',
    },
    inputContainer: {
      width: '100%',
      marginTop: 10,
      alignItems: 'center',
      alignContent: 'center',
    },
    input: {
      backgroundColor: '#fff',
      width: 342,
      height: 60,
      borderRadius: 20,
      elevation: 8,
      paddingLeft: 20,
      marginTop: 10,
      alignItems: 'center',
      flexDirection: 'row',
    },
    formContainer: {
      alignSelf: 'flex-end',
      marginRight: 25,
    },
    forgotPasswordText: {
      fontWeight: '100',
      fontSize: 14,
      color: '#fff',
      lineHeight: 37,
    },
    CreatAccount: {
      marginBottom: 30,
    },
    orText: {
      fontWeight: '400',
      fontSize: 12,
      color: '#fff',
      lineHeight: 37,
      alignSelf: 'center',
      marginTop: 5,
    },
  });

export default createStyles;
