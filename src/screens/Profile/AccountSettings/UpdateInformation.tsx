import {StyleSheet, View, Dimensions, Image, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import NavigationLayout from '../../../interfaces/navigationLayout';
import {
  CustomBtn,
  NavBtn,
} from '../../../components/CustomFormComponents/CustomBtn';
import {CustomTextInput} from '../../../components/CustomFormComponents/CustomTextInput';
import Form from '../../../components/Forms/form';
import DropdownComponent from '../../../components/CustomFormComponents/Dropdown';
import {updatevalidationSchema} from '../../../utilis/validation';
import createStyles from './styles';
import {Actionsheet, Avatar, useDisclose, Toast, Stack, Text} from 'native-base';
import auth from '@react-native-firebase/auth';
import {
  getFirestoreData,
  logOut,
  updateFirestoreData,
} from '../../../Modules/auth/firebase/firebase';
import {useSelector, useDispatch} from 'react-redux';
import {setUsersData, setUserProfile} from '../../../redux/reducers/usersData';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {StackNavigationProp} from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type MyStackParamList = {
  'BottomTabBar': any;
  'Home': undefined;
};

const screenWidth = Dimensions.get('screen').width;

  type MyScreenNavigationProp = StackNavigationProp<
    MyStackParamList,
    'BottomTabBar'
  >;

const UpdateInformation = () => {
    const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();
  const navigation = useNavigation<MyScreenNavigationProp>();
  const dispatch = useDispatch();
  const formRef: any = useRef();
  const uid = auth().currentUser?.uid;
  const userFirestoreData = useSelector((state: any) => {
    return state.usersData;
  });
    const userImage = useSelector((state: any) => {
    return state.usersData.userProfile;
  });
  const user = auth().currentUser;
  const styles = createStyles();
  const initialValues :any = {
    name: userFirestoreData.usersData.name,
    course: userFirestoreData.usersData.course,
    sem: userFirestoreData.usersData.sem,
    branch: userFirestoreData.usersData.branch,
    Year: userFirestoreData.usersData.Year,
    college: userFirestoreData.usersData.college,
  };
const [selectedAvatar, setSelectedAvatar] = React.useState<any>(auth().currentUser?.photoURL);
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedSem, setSelectedSem] = useState('');
  const avatarsList = [
    {
      id: 1,
      image: 'https://firebasestorage.googleapis.com/v0/b/academic-ally-app.appspot.com/o/Avatars%2FAvatar.png?alt=media&token=e2eb7fb7-88f0-4a9f-9033-e1d9f42027ec',
    },
    {
      id: 2,
      image: 'https://firebasestorage.googleapis.com/v0/b/academic-ally-app.appspot.com/o/Avatars%2FAvatar2.png?alt=media&token=61ae44eb-bc9c-4140-b908-6b904f45be65',
    },
    {
      id: 3,
      image: 'https://firebasestorage.googleapis.com/v0/b/academic-ally-app.appspot.com/o/Avatars%2FAvatar3.png?alt=media&token=5a38de8a-5892-422a-823c-69493a19d210',
    },
    {
      id: 4,
      image: 'https://firebasestorage.googleapis.com/v0/b/academic-ally-app.appspot.com/o/Avatars%2FAvatar4.png?alt=media&token=55d92538-5eaa-4dc9-8c81-3d16a64e6a94',
    },
    {
      id: 5,
      image: 'https://firebasestorage.googleapis.com/v0/b/academic-ally-app.appspot.com/o/Avatars%2FAvatar5.png?alt=media&token=bf17dc7c-55c8-4d0e-9451-42a1e5292c9a',
    },
    {
      id: 6,
      image: 'https://firebasestorage.googleapis.com/v0/b/academic-ally-app.appspot.com/o/Avatars%2FAvatar6.png?alt=media&token=197ddb9f-5a78-42fd-b956-6ca44d4085a0',
    },
    {
      id: 7,
      image: 'https://firebasestorage.googleapis.com/v0/b/academic-ally-app.appspot.com/o/Avatars%2FAvatar7.png?alt=media&token=936a3b53-3c0c-489a-8cb3-a599847e9cf6',
    },
    {
      id: 8,
      image: 'https://firebasestorage.googleapis.com/v0/b/academic-ally-app.appspot.com/o/Avatars%2FAvatar8.png?alt=media&token=2fc7c467-aaa0-41ac-aad1-f8c8d1b300c7',
    },
  ];

const CourseData: any = [
    {label: 'B.E', value: 'BE'},
    {label: 'B.TECH', value: 'BTECH'},
  ];
  const SemList: any = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
    {label: '6', value: '6'},
    {label: '7', value: '7'},
    {label: '8', value: '8'},
  ];

  const YearData: any = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
  ];

  const BranchData: any = [
    {label: 'IT', value: 'IT'},
    {label: 'CSE', value: 'CSE'},
    {label: 'ECE', value: 'ECE'},
    {label: 'MECH', value: 'MECH'},
    {label: 'CIVIL', value: 'CIVIL'},
    {label: 'EEE', value: 'EEE'},
  ];

  const UniversityData: any = [{label: 'Osmania University', value: 'OU'}];
  

const handleYearChange = (event: any) => {
    const yearValue = event.value;
    setSelectedYear(yearValue);
    setSelectedSem('');
    formRef.current?.setFieldValue('sem', '');
  };

  const handleSemChange = (event :any) => {
    const semValue = event.value;
    setSelectedSem(semValue);
     if (!selectedYear || selectedYear === initialValues.year) {
      if (semValue <= 2) {
        setSelectedYear('1');
        initialValues.year = '1';
      } else if (semValue <= 4) {
        setSelectedYear('2');
        initialValues.year = '2';
      } else if (semValue <= 6) {
        setSelectedYear('3');
        initialValues.year = '3';
      } else {
        setSelectedYear('4');
        initialValues.year = '4';
      }
    }
  };

  const filteredSemList = SemList.filter((sem: any) => {
  if (selectedYear === '1') {
    return sem.value === '1' || sem.value === '2';
  } else if (selectedYear === '2') {
    return sem.value === '3' || sem.value === '4';
  } else if (selectedYear === '3') {
    return sem.value === '5' || sem.value === '6';
  } else if (selectedYear === '4') {
    return sem.value === '7' || sem.value === '8';
  } else {
    return true;
  }
});

  const updateReduxData = (data: any) => {
    dispatch(setUsersData(data));
    navigation.navigate('BottomTabBar', {
        screen: 'Home',
        });
  };

  const updateData = async (values: any) => {
    const data = {
      name: values.name,
      course: values.course,
      sem: values.sem,
      branch: values.branch,
      Year: values.year,
      college: values.college,
    };
    updateFirestoreData(uid, data);
    getFirestoreData(uid, updateReduxData);
    AsyncStorage.setItem('reccommendSubjects', JSON.stringify([]));
  };

function getOrdinalSuffix(text :string) {
  const number = parseInt(text, 10);
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const lastDigit = number % 10;
  const suffix = suffixes[(lastDigit === 1 && number !== 11) ? 1
     : (lastDigit === 2 && number !== 12) ? 2
     : (lastDigit === 3 && number !== 13) ? 3
     : 0];

  return `${number}${suffix}`;
  }

    const updateUserImage = (img:string) => {
    auth()
      .currentUser?.updateProfile({
        photoURL: img,
      })
      .then(() => {
        dispatch(setUserProfile(img));  
        Toast.show({
          title: 'Avatar updated successfully',
          duration: 3000,
          backgroundColor: '#00b300',
        });
      });
  };


  return (
    <NavigationLayout rightIconFalse={true} title="Update Profile" handleScroll={()=>{}} >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Avatar source={{
              uri: userImage||user?.photoURL
            }}size={'2xl'} alignSelf={'center'}/>
            <AntDesign
              name="pluscircle"
              size={20}
              color="#FF8181"
              onPress={onOpen}
              style={{
                position: 'relative',
                bottom: 32,
                left: 40,
                zIndex: 999,
                backgroundColor: '#ffffff',
                borderRadius: 50,
              }}
            />
        
        <Form
          validationSchema={updatevalidationSchema}
          innerRef={formRef}
          initialValues={initialValues}
          onSubmit={values => updateData(values)}>
          <CustomTextInput
            leftIcon="user"
            placeholder="Full Name"
            name="name"
          />
          <View
            style={{
              flexDirection: 'row',
              width: screenWidth - 50,
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <DropdownComponent
              name="course"
              data={CourseData}
              placeholder={userFirestoreData.usersData.course}
              leftIcon="bars"
              width={screenWidth / 2.5}
              handleOptions={()=>{}}
            />
            <DropdownComponent
              name="branch"
              data={BranchData}
              placeholder={userFirestoreData.usersData.branch}
              leftIcon="ellipsis1"
              width={screenWidth / 2.5}
              handleOptions={()=>{}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: screenWidth - 50,
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <DropdownComponent
              name="Year"
              data={YearData}
              placeholder={getOrdinalSuffix(initialValues.Year) + ' yr'}
              leftIcon="Safety"
              width={screenWidth / 2.5}
              handleOptions={handleYearChange}
            />
            <DropdownComponent
              name="sem"
              data={filteredSemList}
              placeholder={getOrdinalSuffix(userFirestoreData.usersData.sem) + ' Sem'}
              leftIcon="bars"
              width={screenWidth / 2.5}
              handleOptions={handleSemChange}
            />
          </View>
          {
            userFirestoreData.usersData?.college !== '' ? (
              <View style={styles.disabledIp} >
                <FontAwesome5 name = "university" size = {20} color = "#91919F" />
                <Text style = {{fontSize: 16, color: '#91919F', marginLeft: 10}} >{userFirestoreData.usersData.college}</Text>
              </View>
            ) :
            (
              <CustomTextInput
                leftIcon="college"
                placeholder="college"
                name="college"
              />
            )
          }
          <View style={styles.disabledIp} >
                <Feather name = "mail" size = {20} color = "#91919F" />
                <Text style = {{fontSize: 16, color: '#91919F', marginLeft: 10}} >{userFirestoreData.usersData.email}</Text>
              </View>
              <View style={styles.SignupButton}>
            <CustomBtn title="Update" color="#6360FF" />
          </View>
        </Form>
      </View>
      <Actionsheet isOpen={isOpen} onClose={onClose} borderRadius={0}  > 
        <Actionsheet.Content height={550}>
          <Avatar source ={{
              uri: selectedAvatar
            }}size={'2xl'} alignSelf={'center'} marginTop={5} />
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 25}}>
              <Text style={{fontSize: 14, color: '#000', fontWeight: 'bold', textAlign:"center" }}>select from a variety of avatars to represent yourself</Text>
            </View>
            <Stack style={styles.gridContainer} >
                   {
                      avatarsList.map((item) => {
                        return (
                          <TouchableOpacity  key={item.id} onPress={() => {
                            setSelectedAvatar(item.image)
                          }}>
                           <Avatar source={
                              {
                                uri: item.image
                              }
                           } size={'lg'} style={[styles.gridItem, {
                            borderWidth: selectedAvatar === item.image ? 2 : 0,
                            borderColor: '#6360FF'
                           }]} alignSelf={'center'} />
                          </TouchableOpacity>
                        )
                      })
                   }
              </Stack>
              <Stack direction="row" space={2} marginY={5} paddingX={5} alignItems="center" justifyContent="space-evenly" width={"100%"} >
             <TouchableOpacity onPress={onClose} >
              <Text fontSize={'16px'} fontWeight={'700'} textAlign="center" color={"#91919F"} >
                Cancel
              </Text>
            </TouchableOpacity>
             <TouchableOpacity style={{
              backgroundColor: '#6360FF',
              borderRadius: 10,
              paddingHorizontal: 25,
              paddingVertical: 10,
             }} onPress={()=>{
              updateUserImage(selectedAvatar)
              onClose()
            }}>
              <Text fontSize={'16px'} fontWeight={'700'} textAlign="center" color={"#FFF"} >
                Confirm
              </Text>
            </TouchableOpacity>
          </Stack>  
        </Actionsheet.Content>
      </Actionsheet>
    </NavigationLayout>
  );
};

export default UpdateInformation;

const styles = StyleSheet.create({});
