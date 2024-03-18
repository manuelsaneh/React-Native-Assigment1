import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigator from './navigation/MainNavigator';
import {DiaryProvider} from './utils/DiaryContext';
import {ThemeProvider} from './utils/ThemeContext';
import {StatusBar} from 'react-native';
import {Colors} from './styles/Colors';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <DiaryProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.dark.primary100}
        />
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </DiaryProvider>
    </ThemeProvider>
  );
}

export default App;
