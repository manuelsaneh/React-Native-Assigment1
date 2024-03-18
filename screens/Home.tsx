import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../styles/Colors';
import CustomButton from '../components/molecules/CustomButton/CustomButton';
import AddDiaryModal from '../components/templates/AddDiaryModal/AddDiaryModal';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../utils/ThemeContext';
import Title from '../components/molecules/Title/Title';
import HomeAddButton from '../components/organisms/HomeAddButton/HomeAddButton';
import HomeSettingsButton from '../components/organisms/HomeSettingsButton/HomeSettingsButton';
import {MainNavigatorNavigationProp} from '../navigation/MainNavigator.types';

const Home = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const navigation = useNavigation<MainNavigatorNavigationProp>();
  const {theme} = useTheme();
  const {width} = useWindowDimensions();

  const navigateToDetails = () => {
    navigation.navigate('Details');
  };

  const handleOpenModal = () => {
    setModalIsVisible(true);
  };
  const handleCloseModal = () => {
    setModalIsVisible(false);
  };

  const styles = StyleSheet.create({
    rootScreen: {
      flex: 1,
    },
    container: {
      flex: 3,
    },
    paragraphContainer: {
      flex: 1,
      paddingHorizontal: width > 600 ? 60 : 40,
      marginVertical: width > 600 ? 40 : 20,
    },
    paragraph: {
      color: Colors.light.secondary100,
      fontFamily: 'Montserrat-Regular',
      fontSize: width > 600 ? 40 : 30,
    },
    buttonContainer: {
      flex: 1,
      alignItems: 'center',
      gap: width > 600 ? 50 : 30,
    },
    smallText: {
      fontFamily: 'Montserrat-Regular',
      fontSize: width > 600 ? 40 : 30,
      color:
        theme === 'light'
          ? Colors.light.primary100
          : theme === 'dark'
          ? Colors.dark.secondary100
          : Colors.red.primary100,
    },
  });

  return (
    <View style={styles.rootScreen}>
      <ImageBackground
        source={require('../assets/images/BackgroundImage.jpg')}
        resizeMode="cover"
        style={styles.rootScreen}>
        <View style={styles.container}>
          <HomeSettingsButton />
          <Title title="The Diary of a Wimpy Kid" />
          <View style={styles.paragraphContainer}>
            <Text style={styles.paragraph}>
              Welcome to your personal diary, your digital haven for thoughts,
              dreams, and reflections.
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.smallText}>Check Your Journey</Text>
          <CustomButton onPress={navigateToDetails}>Diary Details</CustomButton>
        </View>
        <HomeAddButton onOpen={handleOpenModal} />
        <AddDiaryModal visible={modalIsVisible} onCancel={handleCloseModal} />
      </ImageBackground>
    </View>
  );
};

export default Home;
