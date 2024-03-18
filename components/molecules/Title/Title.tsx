import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '../../../utils/ThemeContext';
import {Colors} from '../../../styles/Colors';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({title}) => {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    titleContainer: {
      marginRight: 135,
      paddingLeft: 40,
    },
    titleText: {
      color:
        theme === 'light'
          ? Colors.light.primary100
          : theme === 'dark'
          ? Colors.dark.secondary100
          : Colors.red.primary100,
      fontFamily: 'Montserrat-Bold',
      fontSize: 40,
    },
  });

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

export default Title;
