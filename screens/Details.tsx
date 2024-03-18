import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../styles/Colors';
import {useDiary} from '../utils/DiaryContext';
import {Diary} from '../utils/Diary';
import DiaryCard from '../components/organisms/DiaryCard/DiaryCard';
import {useTheme} from '../utils/ThemeContext';
import TopContainer from '../components/organisms/TopContainer/TopContainer';

const Details = () => {
  const {diaries, deleteDiary} = useDiary();
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    detailsContainer: {
      flex: 1,
      backgroundColor:
        theme === 'light'
          ? Colors.light.secondary100
          : theme === 'dark'
          ? Colors.dark.primary100
          : Colors.red.secondary100,
    },
  });

  return (
    <View style={styles.detailsContainer}>
      <TopContainer title="Diary Details" />
      <FlatList
        data={diaries}
        keyExtractor={(item: Diary) => item.id}
        renderItem={({item}: {item: Diary}) => (
          <DiaryCard diary={item} onDelete={deleteDiary} />
        )}
      />
    </View>
  );
};

export default Details;
