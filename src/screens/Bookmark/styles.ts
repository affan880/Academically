import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6360FF',
      justifyContent: 'center',
      marginBottom: 70,
    },
    headerContainer: {
      height: height * 0.15,
      width: width,
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexDirection: 'row',
      paddingHorizontal: 20,
      position: 'relative',
      paddingBottom: 30,
    },
    body: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      width: width,
    },
    bodyContent: {
      flex: 1,
      paddingTop: 35,
    },
    categoryBtns: {
      width: width * 0.4,
      height: height * 0.25,
      backgroundColor: '#fff',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 0,
      // marginVertical: 10,
      //change btn position on hover
      transform: [{scale: 1}],
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    categoryBtnClicked: {
      transform: [{scale: 1.1}],
      borderColor: '#6360FF',
      borderWidth: 2,
    },
    selectBtn: {
      width: width,
      height: height * 0.25,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 120,
    },
    btnText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#161719',
      textAlign: 'center',
      lineHeight: 20,
      marginTop: 10,
    },
    disabledBtn: {
      width: width * 0.4,
      height: height * 0.25,
      backgroundColor: '#D3D3D3',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 0,
      marginVertical: 10,
      //change btn position on hover
      transform: [{scale: 1}],
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 3.84,
      elevation: 2,
    },
    disabledBtnClicked: {
      transform: [{scale: 1.1}],
      borderColor: '#FF8181',
      borderWidth: 2,
      backgroundColor: '#fff',
    },

    reccomendationContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      width: width / 1.1,
      height: height / 7,
      alignSelf: 'center',
      borderRadius: 10,
      marginBottom: 20,
    },
    reccomendationStyle: {
      width: width / 1.1,
      height: height / 7,
      backgroundColor: '#FCFCFF',
      borderColor: '#0000000',
      borderRadius: 10,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    containerText: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
      backgroundColor: 'rgba(255, 255, 255, 0.17)',
      width: 30,
      height: 30,
      borderRadius: 2,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      transform: [{rotate: '45deg'}],
    },
    containerBox: {
      backgroundColor: '#6360FF',
      width: 80,
      height: 80,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      shadowColor: '#000',
    },
    subjectName: {
      fontSize: 14,
      fontWeight: '600',
      color: '#161719',
      fontFamily: 'DM Sans',
      fontStyle: 'normal',
      width: '100%',
    },
    subjectContainer: {
      width: width / 1.1,
      height: height / 7,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      shadowColor: '#000',
      borderRadius: 10,
      paddingHorizontal: 15,
    },
    categoryBtnsContainer: {
      flex: 1,
      justifyContent: 'space-around',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    notesListHeaderContainer: {
      width: width,
      height: height * 0.08,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 20,
    },
    notesListHeaderText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#161719',
    },
    notesListValueText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#91919F',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFFFFF',
      textAlign: 'center',
      paddingLeft: 5,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    fileName: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#161719',
    },
  });

export default createStyles;
