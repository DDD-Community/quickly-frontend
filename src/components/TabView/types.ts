import { StyleProp, ViewStyle, TextStyle } from 'react-native';

type TabViewsInfo = {
  key: string;
  title: string;
  count?: number;
};

type TabViews = {
  [key: string]: React.ComponentType<unknown>;
};

export type TabViewProps = {
  initialIndex: number;
  scenes: TabViews;
  tabViews: TabViewsInfo[];
  indicatorStyle?: StyleProp<ViewStyle>;
  tabBarStyle?: StyleProp<ViewStyle>;
};