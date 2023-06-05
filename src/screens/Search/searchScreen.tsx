import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { StackNavigationProp } from '@react-navigation/stack';
import LottieView from 'lottie-react-native';
import { Toast } from 'native-base';
import React, { useEffect, useMemo, useState } from 'react';
import { Dimensions, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';

import { setResourceLoader } from '../../redux/reducers/userState';
import { userFirestoreData } from '../../services/fetch';
import NavigationService from '../../services/NavigationService';
import createStyles from './styles';

const { width, height } = Dimensions.get('screen');

const Search = () => {
  const theme = useSelector((state: any) => state.theme);
  const styles = useMemo(() => createStyles(theme.colors, theme.sizes), [theme]);
  const [selectedBranch, setSelectedBranch] = useState('');
  const list = useSelector((state: any) => state.subjectsList.list);
  const [subjectListDetail, setSubjectListDetail] = useState(list);
  const [limit, setLimit] = useState(10);
  const [filteredData, setFilteredData] = useState([]);
  const dispatch = useDispatch();

  type MyStackParamList = {
    SubjectResources: { userData: object; notesData: any; subject: string };
  };
  type MyScreenNavigationProp = StackNavigationProp<MyStackParamList, 'SubjectResources'>;

  const branches = [
    { id: 1, name: 'IT' },
    { id: 2, name: 'CSE' },
    { id: 3, name: 'ECE' },
    { id: 4, name: 'EEE' },
    { id: 5, name: 'MECH' },
    { id: 6, name: 'CIVIL' },
  ];

  const rendererItems: Array<string> = ['Search', 'Subjects'];

  const [searchTerm, setSearchTerm] = useState('');
  // const navigation = useNavigation<MyScreenNavigationProp>();

  useEffect(() => {
    setFilteredData(
      list?.filter((item: any) => {
        if (searchTerm === '' && selectedBranch !== '') {
          return item.branch.toLowerCase().includes(selectedBranch.toLowerCase());
        }

        if (selectedBranch !== '') {
          return (
            item.branch.toLowerCase().includes(selectedBranch.toLowerCase()) &&
            item.subject.toLowerCase().includes(searchTerm.toLowerCase())
          );
        } else {
          return item.subject.toLowerCase().includes(searchTerm.toLowerCase());
        }
      })
    );
  }, [list, searchTerm, selectedBranch, subjectListDetail]);

  // const limitedData = filteredData?.slice(0, limit);

  const selectedSubject = async (item: any) => {
    dispatch(setResourceLoader(true));
    try {
      const userData: any = await firestore().collection('Users').doc(auth().currentUser?.uid).get();
      const customizedData = {
        university: userData.data().university,
        course: userData.data().course,
        branch: item.branch,
        sem: item.sem,
      };
      const notesData = {
        notes: await userFirestoreData(customizedData, 'Notes', { subjectName: item.subject }, dispatch),
        otherResources: await userFirestoreData(customizedData, 'OtherResources', { subjectName: item.subject }, dispatch),
        questionPapers: await userFirestoreData(customizedData, 'QuestionPapers', { subjectName: item.subject }, dispatch),
        syllabus: await userFirestoreData(customizedData, 'Syllabus', { subjectName: item.subject }, dispatch),
        subjectName: item.subject,
      };
      dispatch(setResourceLoader(false));
      NavigationService.navigate(NavigationService.screens.ResourcesCategories, {
        userData: {
          course: userData.data().course,
          branch: item.branch,
          sem: item.sem,
          university: userData.data().university,
        },
        notesData: notesData,
        subject: item.subject,
      });
    } catch (error) {
      dispatch(setResourceLoader(false));
      Toast.show({
        title: 'Please check your internet connection',
        duration: 3000,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Feather name="search" size={theme.sizes.iconMedium} color="#FFFFFF" />
          <Text style={styles.headerText}>Explore</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <FlatList
            data={rendererItems}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }: { item: string }) => {
              switch (item) {
                case 'Search':
                  return (
                    <View>
                      <View style={styles.searchContainer}>
                        <TextInput
                          value={searchTerm}
                          onChangeText={(text) => setSearchTerm(text)}
                          placeholder="Search"
                          placeholderTextColor={theme.colors.primaryText}
                          style={styles.searchInput}
                        />
                        <Feather
                          name="search"
                          size={theme.sizes.iconSmall}
                          color={theme.colors.primaryText}
                          style={styles.searchIcon}
                        />
                      </View>
                      <View style={styles.categoryContainer}>
                        <Text style={styles.categoryTitle}>Browse Branches</Text>
                        <View style={styles.categoryList}>
                          {branches?.map((branch) => (
                            <TouchableOpacity
                              key={branch.id}
                              style={[
                                styles.categoryItem,
                                {
                                  backgroundColor:
                                    selectedBranch === branch.name ? theme.colors.tertiary : theme.colors.primary,
                                },
                              ]}
                              onPress={() => {
                                if (selectedBranch === branch.name) {
                                  setSelectedBranch('');
                                } else {
                                  setSelectedBranch(branch.name);
                                }
                              }}
                            >
                              <Text style={styles.categoryItemText}>{branch.name}</Text>
                            </TouchableOpacity>
                          ))}
                        </View>
                      </View>
                    </View>
                  );
                case 'Subjects':
                  return (
                    <View
                      style={{
                        paddingBottom: height * 0.08,
                      }}
                    >
                      <FlatList
                        data={filteredData}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }: any) => {
                          return (
                            <TouchableOpacity style={styles.subjectItem} onPress={() => selectedSubject(item)}>
                              <View style={styles.containerBox}>
                                <View style={styles.containerText} />
                              </View>
                              <View style={styles.subjectItemTextContainer}>
                                <Text style={styles.subjectItemText}>{item.subject}</Text>
                                <View
                                  style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    width: '100%',
                                    alignItems: 'center',
                                  }}
                                >
                                  <Text style={styles.subjectItemBranch}>branch:</Text>
                                  <Text style={styles.subjectItemBranchText}>{item.branch}</Text>
                                </View>
                                <Text style={styles.subjectItemSem}>sem: {item.sem}</Text>
                              </View>
                            </TouchableOpacity>
                          );
                        }}
                        // If data is empty
                        ListEmptyComponent={() => {
                          return (
                            <View
                              style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: theme.sizes.lottieIconHeight,
                              }}
                            >
                              <LottieView
                                source={require('../../assets/lottie/NoBookMarks.json')}
                                autoPlay
                                loop
                              />
                            </View>
                          );
                        }}
                      />
                    </View>
                  );
                default:
                  return null;
              }
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Search;