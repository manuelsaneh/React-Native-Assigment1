import {Pressable, StyleSheet} from 'react-native';
import React from 'react';

interface ThemeButtonsProps {
  color: string;
  onPress: () => void;
}

const ThemeButtons: React.FC<ThemeButtonsProps> = ({onPress, color}) => {
  return (
    <Pressable
      style={[styles.buttonContainer, {backgroundColor: color}]}
      onPress={onPress}
    />
  );
};

export default ThemeButtons;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
});
