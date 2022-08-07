import React, { ReactElement } from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import { curveBasis, line } from 'd3-shape';
import Svg, { Path } from 'react-native-svg';
import s from './styles';
import HomeFocus from '@assets/icon/home-focus.svg';
import Home from '@assets/icon/home.svg';
import UserFocus from '@assets/icon/user-focus.svg';
import User from '@assets/icon/user.svg';
import ScanLabel from '@assets/icon/scan-label.svg';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const { width } = Dimensions.get('window');
const TAB_HEIGHT = 92;
const lineGenerator = line();

const rect = lineGenerator([
  [0, 10],
  [width / 2, 10],
  [width, 10],
  [width, TAB_HEIGHT],
  [0, TAB_HEIGHT],
  [0, 0],
]);

const center = lineGenerator.curve(curveBasis)([
  [(width / 5) * 2, 60],
  [(width / 5) * 2, TAB_HEIGHT - 90],
  [(width / 5) * 3, TAB_HEIGHT - 90],
  [(width / 5) * 3, 60],
]);

const d = `${center} ${rect}`;

const TabShape = () => {
  return (
    <Svg width={width} height={TAB_HEIGHT}>
      <Path fill={'white'} {...{ d }} />
    </Svg>
  );
};

const BottomTab = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps): ReactElement => {
  return (
    <View style={{ ...s.container, width }}>
      <TabShape />
      <View style={s.innerWrapper}>
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
              canPreventDefault: true,
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
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={s.button}
            >
              {options.tabBarButton ? (
                <ScanLabel width={48} height={48} />
              ) : (
                renderIcon()
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BottomTab;
