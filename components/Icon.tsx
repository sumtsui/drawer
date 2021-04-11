import React from 'react';
import { StyleSheet, Image, ImageStyle } from 'react-native';

export type IconType = 'search' | 'add' | 'options' | 'clear' | 'drawer' | 'clear-gray' | 'drawer-gray';

export interface IconProps {
  type: IconType;
  size?: number;
}

const IconMap = {
  'search': require('../assets/search.png'),
  'add': require('../assets/plus.png'),
  'options': require('../assets/options.png'),
  'clear': require('../assets/clear.png'),
  'clear-gray': require('../assets/clear-gray.png'),
  'drawer': require('../assets/drawer.png'),
  'drawer-gray': require('../assets/drawer-gray.png'),
};

const Icon = ({ type, size }: IconProps) => {
  const iconStyle = { ...styles.icon };
  if (size) {
    iconStyle.height = size;
    iconStyle.width = size;
  }

  return <Image style={iconStyle as ImageStyle} source={IconMap[type]} />;
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});

export default Icon;
