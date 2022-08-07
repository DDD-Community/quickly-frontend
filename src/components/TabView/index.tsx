import { HStack } from 'native-base';
import React, { ReactElement, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import { TabBar } from 'react-native-tab-view';
import { Body2 } from '../lds/typography';
import s from './styles';
import * as t from './types';

const CustomeTabView = ({
  initialIndex,
  tabViews,
  scenes,
  indicatorStyle,
  tabBarStyle,
}: t.TabViewProps): ReactElement => {
  const [index, setIndex] = useState(initialIndex);
  const [routes] = useState(tabViews);
  const layout = useWindowDimensions();

  const renderScene = SceneMap({ ...scenes });

  return (
    <TabView
      renderTabBar={props => (
        <TabBar
          {...props}
          indicatorStyle={[s.indicator, indicatorStyle]}
          style={[s.tabBar, tabBarStyle]}
          renderLabel={({ route, focused, color }) => {
            return (
              <HStack space={1}>
                <Body2 style={focused ? s.focuseTitle : s.title}>
                  {route.title}
                </Body2>
                {route.count && (
                  <Body2 style={focused ? s.focuseCount : s.count}>
                    {route.count}
                  </Body2>
                )}
              </HStack>
            );
          }}
        />
      )}
      showPageIndicator={true}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default CustomeTabView;
