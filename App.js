/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Album } from "./src/components/Album";
import { Profile } from "./src/components/Profile";
import { Note } from "./src/components/Note";
import { MusicSheet } from "./src/components/MusicSheet";

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View>
      <ScrollView horizontal={true}>
        {/*<MusicSheet positions={}/>*/}
      </ScrollView>
      <ScrollView>

        <View >

          <Profile size={'SMALL'} imgURL={''}/>
          <Profile size={'MEDIUM'} imgURL={''}/>
          <Profile size={'LARGE'} imgURL={''}/>
          <Album state={'PLAY_SMALL'}/>
          <Album title={'제목'} state={'LIKE_LARGE'} description={'블라블라'} time={'3:02'} artist={'소지'} liked={true}/>
          <Album state={'LIKE_SMALL'} liked={true}/>
          <Album state={'PLAY_LARGE'}/>
        </View>
      </ScrollView>
    </View>


  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
