import {StyleSheet, View} from 'react-native';
import React from 'react';
import RoundCustomButton from '../../molecules/RoundCustomButton/RoundCustomButton';
import {Colors} from '../../../styles/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

interface HomeAddButtonProps {
  onOpen: () => void;
}

const HomeAddButton: React.FC<HomeAddButtonProps> = ({onOpen}) => {
  return (
    <View style={styles.addButtonContainer}>
      <RoundCustomButton onPress={onOpen}>
        <Icon name="add-outline" size={40} color={Colors.light.secondary100} />
      </RoundCustomButton>
    </View>
  );
};

export default HomeAddButton;

const styles = StyleSheet.create({
  addButtonContainer: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
