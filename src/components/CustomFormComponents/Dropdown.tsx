import { useFormikContext } from 'formik';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, TextProps, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Animated, { runOnUI, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

type Props = {
  leftIcon: any;
  placeholder: string;
  handlePasswordVisibility?: any;
  name: string;
  security?: boolean;
  data?: any;
  width?: any;
  other?: any;
  handleOptions?: any;
  searchbar?: boolean;
  mode?: string
};

const { width, height } = Dimensions.get('window');
export const CustomDropdown = ({
  leftIcon,
  placeholder, 
  name,
  data,
  width,
  handleOptions,
  searchbar,
  mode,
  ...other
}: Props) => {
  const dropdownHeight = (length: number) => {
    switch (length) {
      case 1:
        return height * 0.073 * (length + 1);
      case 2:
        return height * 0.073 * (length + 1);
      case 3:
        return height * 0.073 * (length + 1);
      case 4:
        return height * 0.073 * (length + 1);
      case 5:
        return height * 0.073 * (length + 1);
      default:
        return height * 0.073 * 6;
    }
  };

  const theme = useSelector((state: any) => {
    return state.theme;
  });
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext<any>();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [showInput, setShowInput] = useState(false);

  const renderLabel = () => {
    if (values[name] || isFocus) {
      return (
        <Text
          style={[
            styles.label,
            isFocus && { color: '#F1F1FA' },
          ]}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Text>
      );
    }
    return null;
  };

  const scaleValue = useSharedValue(2);
  const elevationValue = useSharedValue(0);
  useEffect(() => {
    const startAnimations = () => {
      'worklet';
      scaleValue.value = withSpring(0.8, {
        damping: 5,
        mass: 0.1,
      });

      setTimeout(() => {
        scaleValue.value = withSpring(1, {
          damping: 80,
          mass: 0.1,
        });
      }, 1000);
    };
    startAnimations();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{
        transform: [{scale: scaleValue}],
        elevation: elevationValue
      }}>
        {renderLabel()}
        <Dropdown
          style={[
            styles.input,
            { width: width, backgroundColor: theme.colors.quaternary },
            touched[name] && errors[name]
              ? {
                borderColor: '#FF2E00',
                borderWidth: 2,
              }
              : null,
            {
              borderRadius: 10,
            },
          ]}
          placeholderStyle={[
            styles.placeholderStyle,
            { color: theme.colors.primaryText },
          ]}
          selectedTextStyle={[
            styles.selectedTextStyle,
            {
              color: theme.colors.primaryText,
            },
          ]}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search={searchbar ? true : false}
          searchQuery={(res, res2) => {
            return (
              res.toLowerCase().includes(res2.toLowerCase()) ||
              res2.toLowerCase().includes(res.toLowerCase())
            );
          }}
          maxHeight={300}
          mode={(data?.length > 4 || mode ) ? 'modal' : 'default'}
          labelField="label"
          valueField="value"
          placeholder={value ? value: placeholder}
          searchPlaceholder="Search..."
          value={value}
          showsVerticalScrollIndicator={false}
          onFocus={() => setIsFocus(true)}
          onBlur={() => {
            setIsFocus(false);
            setFieldTouched(name);
          }}
          dropdownPosition="auto"
          {...other}
          containerStyle={{
            borderRadius: 10,
            elevation: 3,
            height: dropdownHeight(data?.length),
          }}
          itemContainerStyle={{
            // backgroundColor: theme.colors.quaternary,
            borderBottomWidth: 1,
            borderBottomColor: '#e5e5e5',
            borderRadius: 10,
          }}
          itemTextStyle={{
            fontSize: height * 0.0205,
            color: theme.colors.terinaryText,
          }}
          onChange={(item: any) => {
            setValue(item.value);
            setIsFocus(false);
            setFieldValue(name, item.value);
            handleOptions(item)
          }}
          renderRightIcon={() => (
            <Feather
              style={styles.icon}
              color={isFocus ? '#6360FF' : '#706f6f'}
              name={isFocus ? 'chevron-up' : 'chevron-down'}
              size={24}
            />
          )}
          renderLeftIcon={() =>
            name === 'university' ? (
              <FontAwesome
                style={styles.icon}
                color={isFocus ? '#6360FF' : theme.colors.primaryText}
                name={'university'}
                size={24}
              />
            ) : (
              <AntDesign
                style={styles.icon}
                color={isFocus ? '#6360FF' : theme.colors.primaryText}
                name={leftIcon}
                size={24}
              />
            )
          }
        />
      </Animated.View>
      {touched[name] && errors[name] && values[name] === '' ? (
        <Text
          style={{
            color: theme.colors.primaryText,
            fontSize: height * 0.015,
            fontFamily: 'Poppins-Regular',
            alignSelf: 'flex-start',
            marginLeft: 0,
            fontWeight: 'bold',
          }}>
          *{errors[name] + ' '}
        </Text>
      ) : null}
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#161719',
    height: height * 0.07,
    borderRadius: 10,
    elevation: 3,
    paddingLeft: 20,
    marginTop: 10,
    alignItems: 'center',
    color: '#161719',
  },
  textInput: {
    width: 250,
    fontSize: height * 0.0235,
    color: '#161719',
    fontFamily: 'Poppins-Regular',
  },
  container: {
    marginTop: 1,
    color: '#161719',
  },
  dropdown: {
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 0,
    fontSize: height * 0.0135,
    color: '#161719',
  },
  icon: {
    marginRight: 12,
  },
  label: {
    position: 'absolute',
    backgroundColor: '#6360FF',
    left: 22,
    top: 4,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: height * 0.018,
    borderRadius: 5,
    color: '#F1F1FA',
  },
  placeholderStyle: {
    fontSize: width * 0.035,
  },
  selectedTextStyle: {
    fontSize: height * 0.018,
    flexWrap: 'nowrap',
  },
  iconStyle: {
    width: 25,
    height: 25,
    marginRight: 12,
  },
  inputSearchStyle: {
    height: 50,
    fontSize: height * 0.0205,
    color: '#161719',
    fontFamily: 'Poppins-Regular',
    borderRadius: 10,
  },
});
