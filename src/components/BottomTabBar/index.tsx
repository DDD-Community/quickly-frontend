import React, { FC } from 'react';
import {
  Animated,
  Dimensions,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Svg, Path } from 'react-native-svg';
import * as shape from 'd3-shape';
import s from './styles';
import HomeFocus from '@assets/icon/home-focus.svg';
import Home from '@assets/icon/home.svg';
import UserFocus from '@assets/icon/user-focus.svg';
import User from '@assets/icon/user.svg';

const BottomTab: FC = ({ state, descriptors, navigation }) => {
  const itemsAnimation = state.routes.map(
    (_route, index) => new Animated.Value(state.index === index ? 0 : 1),
  );
  const { width: screenWidth } = Dimensions.get('window');
  const height = 49;

  const line: any = shape
    .line()
    .x((d: any) => d.x)
    .y((d: any) => d.y)
    .curve(shape.curveBasis);

  const platformZeroPoint = Platform.select({
    ios: 0,
    android: 1,
  });

  return (
    <View style={s.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const renderIcon = () => {
          switch (label) {
            case 'Home':
              return isFocused ? (
                <HomeFocus width={28} height={28} />
              ) : (
                <Home width={28} height={28} />
              );
            case 'Me':
              return isFocused ? (
                <UserFocus width={28} height={28} />
              ) : (
                <User width={28} height={28} />
              );
            default:
              break;
          }
        };

        return (
          <TouchableWithoutFeedback
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <View style={s.item}>{renderIcon()}</View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

export default BottomTab;
