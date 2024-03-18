import {
  Alert,
  Modal,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../styles/Colors';
import CustomButton from '../../molecules/CustomButton/CustomButton';
import {useDiary} from '../../../utils/DiaryContext';
import {Diary} from '../../../utils/Diary';
import {useTheme} from '../../../utils/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalAddCard from '../../organisms/ModalCard/ModalAddCard';
import RoundCustomButton from '../../molecules/RoundCustomButton/RoundCustomButton';
import Title from '../../molecules/Title/Title';

interface ModalProps {
  visible: boolean;
  onCancel: () => void;
}

const AddDiaryModal: React.FC<ModalProps> = ({onCancel, visible}) => {
  const {theme} = useTheme();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const {width} = useWindowDimensions();
  const {addDiary} = useDiary();

  const handleAddDiary = () => {
    const diary: Diary = {
      id: Math.random().toString(),
      title,
      description,
    };

    if (title === '' || description === '') {
      Alert.alert('Inputs are empty!', 'Both Inputs are required.', [
        {text: 'Okay', style: 'destructive'},
      ]);
    } else {
      addDiary(diary);
      setTitle('');
      setDescription('');
      onCancel();
    }
  };

  const handleTitleChange = (enteredTitle: string) => {
    setTitle(enteredTitle);
  };
  const handleDescriptionChange = (enteredDescription: string) => {
    setDescription(enteredDescription);
  };

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      height: '100%',
      backgroundColor:
        theme === 'light'
          ? Colors.light.secondary100
          : theme === 'dark'
          ? Colors.dark.primary100
          : Colors.red.secondary100,
    },
    addDiaryButtonContainer: {
      alignItems: 'center',
      padding: width > 600 ? 50 : 20,
    },
    exitButtonContainer: {
      padding: width > 600 ? 40 : 15,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
  });

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.exitButtonContainer}>
          <RoundCustomButton onPress={onCancel}>
            <Icon
              name="close-outline"
              size={40}
              color={Colors.light.secondary100}
            />
          </RoundCustomButton>
        </View>
        <Title title="Express Yourself!!" />
        <ModalAddCard
          title={title}
          description={description}
          onTitleChange={handleTitleChange}
          onDescriptionChange={handleDescriptionChange}
        />
        <View style={styles.addDiaryButtonContainer}>
          <CustomButton onPress={handleAddDiary}>Add Diary</CustomButton>
        </View>
      </View>
    </Modal>
  );
};

export default AddDiaryModal;
