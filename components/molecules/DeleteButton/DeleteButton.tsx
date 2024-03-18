import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../styles/Colors';
import {useTheme} from '../../../utils/ThemeContext';

interface DeleteButtonProps {
  onPress: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({onPress}) => {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    buttonOuterContainer: {
      borderRadius: 28,
      overflow: 'hidden',
    },
    buttonInnerContainer: {
      backgroundColor: Colors.light.secondary100,
      paddingVertical: 15,
      paddingHorizontal: 20,
      elevation: 2,
    },
    buttonText: {
      color:
        theme === 'light'
          ? Colors.light.primary100
          : theme === 'dark'
          ? Colors.dark.secondary100
          : Colors.red.primary100,
      textAlign: 'center',
      fontFamily: 'Montserrat-Regular',
      fontSize: 20,
    },
  });

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable style={styles.buttonInnerContainer} onPress={onPress}>
        <Text style={styles.buttonText}>Delete</Text>
      </Pressable>
    </View>
  );
};

export default DeleteButton;
