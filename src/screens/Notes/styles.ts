import { Dimensions, StyleSheet } from 'react-native';

const {width, height} = Dimensions.get('window');
const createStyles = (theme: any, sizes: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.primary,
    },
    headerContainer: {
      height: height * 0.14,
      width: width,
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexDirection: 'row',
      paddingHorizontal: width * 0.05,
      position: 'relative',
      paddingBottom: height * 0.015,
    },
    body: {
      flex: 1,
      backgroundColor: theme.secondary,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      width: width,
    },
    bodyContent: {
      flex: 1,
      paddingTop: height * 0.02,
    },

    categoryBtns: {
      width: width * 0.4,
      height: height * 0.25,
      backgroundColor: theme.categoryBtn,
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
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    categoryBtnClicked: {
      transform: [{scale: 1.1}],
      borderColor: theme.primary,
      borderWidth: 2,
    },
    selectBtn: {
      width: width,
      height: height * 0.25,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: height * 0.05,
    },
    btnText: {
      fontSize: sizes.text,
      fontWeight: '600',
      color: theme.black,
      textAlign: 'center',
      lineHeight: 20,
      marginTop: 10,
    },
    disabledBtn: {
      width: width * 0.4,
      height: height * 0.25,
      backgroundColor: theme.disabledCategoryBtn,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 0,
      marginVertical: 10,
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
      borderColor: theme.tertiary,
      borderWidth: 2,
      backgroundColor: theme.disabledCategoryBtn,
    },
    containerText: {
      fontSize: 18,
      color: theme.primaryText,
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
      fontWeight: '400',
      color: '#161719',
      fontFamily: 'DM Sans',
      fontStyle: 'normal',
      width: '80%',
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
      alignSelf: 'center',
    },
    notesListHeaderContainer: {
      width: width,
      height: height * 0.055,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: height * 0.03,
    },
    notesListHeaderText: {
      fontSize: sizes.text,
      fontWeight: '500',
      color: theme.primaryText,
    },
    notesListValueText: {
      fontSize: sizes.text,
      fontWeight: 'bold',
      color: '#91919F',
    },
    header: {
      width: width,
      height: height * 0.08,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: height * 0.02,
    },
    headerText: {
      fontSize: sizes.title,
      fontWeight: 'bold',
      color: theme.primaryText,
    },
    btn: {
      position: 'absolute',
      bottom: 10,
      alignSelf: 'center',
      backgroundColor: theme.tertiary,
      width: '90%',
      height: height * 0.07,
      borderRadius: height * 0.015,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 0,
      shadowOpacity: 0.5,
    },
    uploadBtnText: {
      color: '#fff',
      fontSize: sizes.text,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: 10,
    },
  });

export default createStyles;
