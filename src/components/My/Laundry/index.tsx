import { AspectRatio, Badge, Box, Center, FlatList, Image } from 'native-base';
import React, { ReactElement } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import s from './styles';
import * as c from '@styles/foundation-color';
import Folder from '@assets/images/folder.png';
import { Body1, Body2, Caption2 } from '@components/lds/typography';

const dummyMyLaundry = [
  {
    id: 1,
    tag: '티셔츠',
    title: '내가 제일 아끼는 폴로 럭비티',
    date: '2020-01-01',
  },
  {
    id: 2,
    tag: '바지',
    title: '캐시미어 니트',
    date: '2020-01-01',
  },
  {
    id: 3,
    tag: '청바지',
    title: '내가 제일 아끼는 폴로 럭비티',
    date: '2020-01-01',
  },
  {
    id: 4,
    tag: '니트',
    title: '내가 제일 아끼는 폴로 럭비티',
    date: '2020-01-01',
  },
];

const Laundry = (): ReactElement => {
  const renderItem = ({
    item,
    index,
  }: {
    item: any;
    index: number;
  }): ReactElement => (
    <TouchableOpacity>
      <AspectRatio
        width={Dimensions.get('window').width / 2}
        borderWidth={1}
        ratio={{
          base: 1 / 1,
          // md: 16 / 9,
        }}
      >
        <Center
          position={'relative'}
          marginLeft={index % 2 !== 0 ? '0px' : null}
        >
          <Badge
            bgColor={c.SingleToneColor.White}
            zIndex={10}
            position={'absolute'}
            top={'60px'}
            left={'1/6'}
            rounded={'md'}
          >
            <Caption2 style={s.tag}>{item.tag}</Caption2>
          </Badge>
          <Box
            zIndex={10}
            maxWidth={128}
            position={'absolute'}
            top={'88px'}
            left={'1/6'}
          >
            <Body2 style={s.title}>{item.title}</Body2>
          </Box>
          <Box
            zIndex={10}
            maxWidth={128}
            position={'absolute'}
            bottom={'35px'}
            right={'1/6'}
          >
            <Caption2 style={s.date}>{item.date}</Caption2>
          </Box>
          <Image
            alt="folder"
            resizeMode="contain"
            source={Folder}
            borderWidth={3}
          />
        </Center>
      </AspectRatio>
    </TouchableOpacity>
  );

  return dummyMyLaundry.length ? (
    <FlatList
      data={dummyMyLaundry}
      pagingEnabled={true}
      numColumns={2}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
    />
  ) : (
    <Center flex={1} marginBottom="2/5">
      <Body1 style={s.emptyTitle}>마이세탁이 비어있네요!</Body1>
      <Body1 style={s.emptyTitle}>
        내 세탁물에 맞는 세탁벙법을 찾아보세요.
      </Body1>
    </Center>
  );
};

export default Laundry;
