import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../styles/Colors';
import {useTheme} from '../../../utils/ThemeContext';

interface CustomButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({children, onPress}) => {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    buttonOuterContainer: {
      borderRadius: 28,
      margin: 4,
      overflow: 'hidden',
    },
    buttonInnerContainer: {
      backgroundColor:
        theme === 'light'
          ? Colors.light.primary100
          : theme === 'dark'
          ? Colors.dark.secondary100
          : Colors.red.primary100,
      paddingVertical: 15,
      paddingHorizontal: 40,
      elevation: 2,
    },
    buttonText: {
      color: Colors.light.secondary100,
      textAlign: 'center',
      fontFamily: 'Montserrat-Regular',
      fontSize: 25,
    },
    pressed: {
      opacity: 0.75,
    },
  });

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{
          color:
            theme === 'light'
              ? Colors.light.primary200
              : theme === 'dark'
              ? Colors.dark.secondary200
              : Colors.red.primary200,
        }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;
