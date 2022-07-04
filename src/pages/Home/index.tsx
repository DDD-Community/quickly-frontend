import React, { FC, useCallback, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useAppDispatch } from '@store/index';
import s from './styles';
import { UserService } from '~/services/user';
import { useAppSelector } from '~/store/reducer';
import { Headline1 } from '~/components/lds/typography';
const Home: FC = ({}) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.user);
  const getUser = useCallback(
    () => dispatch(UserService.getUser('1')),
    [dispatch],
  );

  useEffect(() => {
    getUser();
  }, [getUser]);
  return (
    <SafeAreaView style={s.container}>
      <Headline1>HOME</Headline1>
      <Text>{user?.name}</Text>
    </SafeAreaView>
  );
};

export default Home;
