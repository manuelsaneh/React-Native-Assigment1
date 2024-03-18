import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import {Colors} from '../../../styles/Colors';
import {Diary} from '../../../utils/Diary';
import DeleteButton from '../../molecules/DeleteButton/DeleteButton';
import {useTheme} from '../../../utils/ThemeContext';

interface DiaryListProps {
  diary: Diary;
  onDelete: (diaryId: string) => void;
}

const DiaryCard: React.FC<DiaryListProps> = ({diary, onDelete}) => {
  const {theme} = useTheme();
  const {width} = useWindowDimensions();

  const handleDelete = () => {
    onDelete(diary.id);
  };

  const styles = StyleSheet.create({
    diaryCardContainer: {
      flex: 1,
      marginVertical: 20,
      marginHorizontal: 20,
      padding: 20,
      backgroundColor:
        theme === 'light'
          ? Colors.light.primary100
          : theme === 'dark'
          ? Colors.dark.secondary100
          : Colors.red.primary100,
      borderRadius: 20,
      elevation: 4,
    },
    textContainer: {
      flex: 1,
    },
    diaryTitle: {
      fontFamily: 'Montserrat-Bold',
      fontSize: width > 600 ? 40 : 30,
      color: Colors.light.secondary100,
      borderBottomWidth: 1,
      borderColor: Colors.light.secondary100,
      paddingVertical: 10,
    },
    diaryDescription: {
      fontFamily: 'Montserrat-Regular',
      fontSize: width > 600 ? 35 : 25,
      color: Colors.light.secondary100,
      paddingVertical: 10,
    },
    deleteButtonContainer: {
      padding: 4,
      marginVertical: 4,
      alignItems: 'flex-end',
    },
  });

  return (
    <View style={styles.diaryCardContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.diaryTitle}>{diary.title}</Text>
        <Text style={styles.diaryDescription}>{diary.description}</Text>
      </View>
      <View style={styles.deleteButtonContainer}>
        <DeleteButton onPress={handleDelete} />
      </View>
    </View>
  );
};

export default DiaryCard;
