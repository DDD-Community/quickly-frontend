import React, { FC, useCallback, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { useAppDispatch } from '@store/index';
import s from './styles';
import { UserService } from '~/services/user';
import { useAppSelector } from '~/store/reducer';
import {
  Body1,
  Body2,
  Caption1,
  Caption2,
  Headline1,
  Headline2,
  Headline3,
  Subhead1,
  Subhead2,
} from '@components/lds/typography';
import { BaseButton } from '@components/lds/BaseButton';

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
      <Headline1>세탁을 잘하자</Headline1>
      <Headline2>세탁을 잘하자</Headline2>
      <Headline3>세탁을 잘하자</Headline3>
      <Subhead1>세탁을 잘하자</Subhead1>
      <Subhead2>세탁을 잘하자</Subhead2>
      <Body1>세탁을 잘하자</Body1>
      <Body2>세탁을 잘하자</Body2>
      <Caption1>세탁을 잘하자</Caption1>
      <Caption2>세탁을 잘하자</Caption2>

      <BaseButton>버튼</BaseButton>
    </SafeAreaView>
  );
};

export default Home;
