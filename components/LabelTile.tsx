import CommonStyles from '../CommonStyles';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';

interface IProps {
  name: string;
  total: number;
  index: number;
  width: number;
}

const LabelTile = ({ name, total, width, index }: IProps) => {
  const containerStyle = {
    ...styles.container,
    width,
  };

  if ((index + 1) % 2 === 0) {
    containerStyle.marginLeft = 10;
  } else {
    containerStyle.marginRight = 10;
  }

  return (
    <View style={containerStyle}>
      <Text>{name}</Text>
      <Text>{total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: CommonStyles.borderRadius,
    padding: 10,
    height: 200,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 20,
  },
});

export default LabelTile;
