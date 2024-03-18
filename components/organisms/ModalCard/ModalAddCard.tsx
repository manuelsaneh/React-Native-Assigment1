import {StyleSheet, TextInput, View, useWindowDimensions} from 'react-native';
import React from 'react';
import {Colors} from '../../../styles/Colors';
import {useTheme} from '../../../utils/ThemeContext';

interface ModalAddCardProps {
  title: string;
  description: string;
  onTitleChange: (title: string) => void;
  onDescriptionChange: (description: string) => void;
}

const ModalAddCard: React.FC<ModalAddCardProps> = ({
  title,
  description,
  onTitleChange,
  onDescriptionChange,
}) => {
  const {theme} = useTheme();
  const {width} = useWindowDimensions();

  const styles = StyleSheet.create({
    modalCard: {
      marginVertical: width > 600 ? 80 : 50,
      marginHorizontal: width > 600 ? 30 : 20,
      padding: width > 600 ? 30 : 20,
      backgroundColor:
        theme === 'light'
          ? Colors.light.primary100
          : theme === 'dark'
          ? Colors.dark.secondary100
          : Colors.red.primary100,
      borderRadius: 20,
      elevation: 4,
    },
    titleInput: {
      paddingHorizontal: 20,
      height: width > 600 ? 70 : 50,
      width: '100%',
      fontSize: width > 600 ? 30 : 20,
      borderBottomWidth: 2,
      borderRadius: 20,
      color: Colors.light.accent,
      marginVertical: 8,
      fontFamily: 'Montserrat-Light',
      backgroundColor: Colors.light.secondary100,
      elevation: 4,
    },
    descriptionInput: {
      textAlignVertical: 'top',
      paddingHorizontal: 20,
      height: 150,
      width: '100%',
      fontSize: width > 600 ? 30 : 20,
      borderBottomWidth: 2,
      borderRadius: 20,
      color: Colors.light.accent,
      marginVertical: 8,
      fontFamily: 'Montserrat-Light',
      backgroundColor: Colors.light.secondary100,
      elevation: 4,
    },
  });

  return (
    <View style={styles.modalCard}>
      <TextInput
        style={styles.titleInput}
        maxLength={50}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Name of Diary"
        value={title}
        onChangeText={onTitleChange}
      />
      <TextInput
        style={styles.descriptionInput}
        maxLength={50}
        autoCapitalize="none"
        autoCorrect={false}
        multiline={true}
        numberOfLines={5}
        placeholder="Share your Thoughts"
        value={description}
        onChangeText={onDescriptionChange}
      />
    </View>
  );
};

export default ModalAddCard;
