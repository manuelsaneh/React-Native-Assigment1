import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Colors} from '../../../styles/Colors';
import {useTheme} from '../../../utils/ThemeContext';

interface RoundCustomButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

const RoundCustomButton: React.FC<RoundCustomButtonProps> = ({
  children,
  onPress,
}) => {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor:
        theme === 'light'
          ? Colors.light.primary100
          : theme === 'dark'
          ? Colors.dark.secondary100
          : Colors.red.primary100,
      width: 80,
      height: 80,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 2,
    },
    buttonText: {
      color: Colors.light.secondary100,
      textAlign: 'center',
      fontFamily: 'Montserrat-Regular',
      fontSize: 60,
    },
    pressed: {
      opacity: 0.75,
    },
  });

  return (
    <Pressable style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

export default RoundCustomButton;
