import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import RoundCustomButton from '../../molecules/RoundCustomButton/RoundCustomButton';
import {Colors} from '../../../styles/Colors';
import {useTheme} from '../../../utils/ThemeContext';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProp} from '../../../navigation/MainNavigator.types';

interface TopContainerProps {
  title: string;
}

const TopContainer: React.FC<TopContainerProps> = ({title}) => {
  const {theme} = useTheme();
  const navigation = useNavigation<MainNavigatorNavigationProp>();
  const {width} = useWindowDimensions();

  const navigateBackHome = () => {
    navigation.navigate('Home');
  };

  const styles = StyleSheet.create({
    topContainer: {
      padding: width > 600 ? 25 : 15,
      alignItems: 'center',
      flexDirection: 'row',
    },
    backButtonContainer: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    settingsTitle: {
      color:
        theme === 'light'
          ? Colors.light.primary100
          : theme === 'dark'
          ? Colors.dark.secondary100
          : Colors.red.primary100,
      fontFamily: 'Montserrat-Bold',
      fontSize: width > 600 ? 40 : 30,
      marginHorizontal: width > 600 ? 30 : 20,
    },
  });

  return (
    <View style={styles.topContainer}>
      <View style={styles.backButtonContainer}>
        <RoundCustomButton onPress={navigateBackHome}>
          <Icon
            name="arrow-back-outline"
            size={40}
            color={Colors.light.secondary100}
          />
        </RoundCustomButton>
      </View>
      <Text style={styles.settingsTitle}>{title}</Text>
    </View>
  );
};

export default TopContainer;
