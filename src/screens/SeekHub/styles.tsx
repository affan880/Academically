import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
const createStyles = (theme: any, sizes: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.primary,
        },
        headerContainer: {
            height: height * 0.08,
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
            // paddingBottom: height * 0.08,
        },
        bodyContent: {
            flex: 1,
            paddingTop: height * 0.01,
            paddingBottom: height * 0.005,
        },
        containerText: {
            color: 'white',
            fontWeight: 'bold',
            backgroundColor: 'rgba(255, 255, 255, 0.17)',
            width: width * 0.08,
            height: width * 0.08,
            borderRadius: 2,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{ rotate: '45deg' }],
        },
        subjectItemText: {
            fontSize: sizes.title,
            fontWeight: 'bold',
            color: theme.primaryText,
            textAlign: 'left',
        },
        subjectItemBranch: {
            fontSize: sizes.subtitle,
            fontWeight: 'bold',
            color: theme.primaryText,
            textAlign: 'center',
        },
        subjectItemBranchText: {
            fontSize: sizes.subtitle,
            fontWeight: '600',
            color: theme.primaryText,
            textAlign: 'center',
            paddingLeft: 5,
        },
        subjectItemSem: {
            fontSize: sizes.subtitle,
            fontWeight: 'bold',
            color: theme.primaryText,
            textAlign: 'center',
        },
        mainContainer: {
            width: width * 0.95,
            height: height * 0.15,
            backgroundColor: theme.quaternary,
            borderRadius: 10,
            justifyContent: 'center',
            alignSelf: 'center',
            borderWidth: 0,
        },
        containerBox: {
            backgroundColor: '#FF8181',
            width: height * 0.1,
            height: height * 0.1,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            shadowColor: '#161719',
            borderWidth: 0,
        },
        subjectItem: {
            backgroundColor: theme.quaternary,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: height * 0.2,
            width: width * 0.95,
            alignSelf: 'center',
            paddingHorizontal: height * 0.015,
            marginTop: height * 0.015,
        },
        subjectItemTextContainer: {
            width: '60%',
            height: height * 0.1,
            backgroundColor: theme.quaternary,
            borderRadius: 10,
            flexDirection: 'column',
            justifyContent: 'center',
            paddingHorizontal: height * 0.015,
            alignSelf: 'center',
            borderWidth: 0,
        },
        subjectName: {
            fontSize: sizes.subtitle,
            fontWeight: '600',
            color: theme.text,
            fontFamily: 'DM Sans',
            fontStyle: 'normal',
        },
        headerText: {
            fontSize: sizes.title,
            fontWeight: 'bold',
            color: theme.white,
            textAlign: 'center',
            paddingLeft: 5,
        },
        header: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        name: {
            fontSize: sizes.title,
            fontWeight: 'bold',
            color: theme.primaryText,
            textAlign: 'left',
        },
        itemContainer: {
            width: width / 3.5,
            height: width * 0.25 ,
            flexDirection: "column",
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        notesIconContainer: {
            width: '70%',
            height: "70%",
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center'
        },
        iconLabel: {
            color: theme.text,
            fontSize: sizes.subtitle,
            fontWeight: 'bold'
        },
    });

export default createStyles;
