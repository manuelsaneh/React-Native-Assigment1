import React, {createContext, useState, useContext} from 'react';
import {Diary} from './Diary';

interface DiaryContextProps {
  diaries: Diary[];
  addDiary: (diary: Diary) => void;
  deleteDiary: (diaryId: string) => void;
}

const DiaryContext = createContext<DiaryContextProps>({
  diaries: [],
  addDiary: () => {},
  deleteDiary: () => {},
});

export const useDiary = () => useContext(DiaryContext);

export const DiaryProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [diaries, setDiaries] = useState<Diary[]>([]);

  const addDiary = (diary: Diary) => {
    setDiaries([...diaries, diary]);
  };

  const deleteDiary = (diaryId: string) => {
    setDiaries(diaries.filter(diary => diary.id !== diaryId));
  };

  return (
    <DiaryContext.Provider value={{diaries, addDiary, deleteDiary}}>
      {children}
    </DiaryContext.Provider>
  );
};
