import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import {Colors} from '../styles/Colors';
import ThemeButtons from '../components/molecules/ThemeButtons/ThemeButtons';
import {useTheme} from '../utils/ThemeContext';
import TopContainer from '../components/organisms/TopContainer/TopContainer';

const Settings = () => {
  const {theme, setTheme} = useTheme();
  const {width} = useWindowDimensions();

  const toggleTheme = (newTheme: 'light' | 'dark' | 'red') => {
    setTheme(newTheme);
  };

  const setLightTheme = () => {
    toggleTheme('light');
  };

  const setDarkTheme = () => {
    toggleTheme('dark');
  };

  const setRedTheme = () => {
    toggleTheme('red');
  };

  const styles = StyleSheet.create({
    settingsContainer: {
      flex: 1,
      backgroundColor:
        theme === 'light'
          ? Colors.light.secondary100
          : theme === 'dark'
          ? Colors.dark.primary100
          : Colors.red.secondary100,
    },
    themeContainer: {
      flex: 1,
      padding: width > 600 ? 40 : 30,
    },
    themeText: {
      fontFamily: 'Montserrat-Bold',
      fontSize: width > 600 ? 40 : 30,
      color:
        theme === 'light'
          ? Colors.light.primary100
          : theme === 'dark'
          ? Colors.dark.secondary100
          : Colors.red.primary100,
    },
    themeButtonsContainer: {
      padding: width > 600 ? 60 : 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.settingsContainer}>
      <TopContainer title="Settings" />
      <View style={styles.themeContainer}>
        <Text style={styles.themeText}>Themes</Text>
        <View style={styles.themeButtonsContainer}>
          <ThemeButtons
            onPress={setLightTheme}
            color={Colors.light.primary100}
          />
          <ThemeButtons onPress={setDarkTheme} color={Colors.dark.primary200} />
          <ThemeButtons onPress={setRedTheme} color={Colors.red.primary100} />
        </View>
      </View>
    </View>
  );
};

export default Settings;
