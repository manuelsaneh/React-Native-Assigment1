import {StyleSheet, View} from 'react-native';
import React from 'react';
import RoundCustomButton from '../../molecules/RoundCustomButton/RoundCustomButton';
import {Colors} from '../../../styles/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProp} from '../../../navigation/MainNavigator.types';

const HomeSettingsButton = () => {
  const navigation = useNavigation<MainNavigatorNavigationProp>();

  const navigateToSettings = () => {
    navigation.navigate('Settings');
  };
  return (
    <View style={styles.settingsButtonContainer}>
      <RoundCustomButton onPress={navigateToSettings}>
        <Icon
          name="settings-outline"
          size={40}
          color={Colors.light.secondary100}
        />
      </RoundCustomButton>
    </View>
  );
};

export default HomeSettingsButton;

const styles = StyleSheet.create({
  settingsButtonContainer: {
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
