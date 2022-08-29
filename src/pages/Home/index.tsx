import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import s from './styles';
import { Box, HStack, VStack } from 'native-base';
import { CategoryBox } from '@components/Home/CategoryBox';
import { SectionTitle } from '@components/Home/SectionTitle';
import { TipCard } from '@components/Home/TipCard';
import { SearchBar } from '@components/Home/SearchBar';

export const Home = () => {
  return (
    <SafeAreaView style={s.container}>
      <ScrollView style={s.scrollView}>
        <VStack space="18px">
          <ImageBackground
            source={require('@assets/images/Home/home_bg.png')}
            style={s.imageBackground}
          >
            <Box
              flexDir="column"
              justifyContent="flex-end"
              style={s.topContentWrapper}
            >
              <Box style={s.searchBarWrapper}>
                <SearchBar />
              </Box>
            </Box>
          </ImageBackground>

          <Box bg="white" style={s.laundryContentWrapper}>
            <SectionTitle title="세탁방법 찾기" action={() => {}} />

            <HStack space="16px" w="100%" mb="32px">
              <CategoryBox title="상의" image="상의" />
              <CategoryBox title="하의" image="하의" />
              <CategoryBox title="신발" image="신발" />
            </HStack>

            <SectionTitle title="오늘의 세탁 꿀팁" action={() => {}} />

            <ScrollView horizontal>
              <HStack space="12px">
                <TipCard
                  title={<>누런 티셔츠 {'\n'} 하얗게 세탁하기</>}
                  tagName="표백"
                />
                <TipCard
                  title={<>구김없이 {'\n'} 와이셔츠 보관하기</>}
                  tagName="보관"
                />
                <TipCard
                  title={<>세제의 종류와 {'\n'} 올바른 사용법</>}
                  tagName="세탁"
                />
              </HStack>
            </ScrollView>
          </Box>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};
