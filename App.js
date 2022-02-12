import React from 'react';
import { ScrollView, View,SafeAreaView, StatusBar} from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './style/style';
import Alcometer from './components/Alcometer';
import GeneralStatusBarColor from './style/GeneralStatusBarColor';


export default function App() {  

  return (
    <View style={styles.container}>
      <GeneralStatusBarColor backgroundColor="#000"
      barStyle="light-content"/>
      <SafeAreaView>
      <ScrollView>
      <Header/>
      <Alcometer/>
      <Footer/>
      </ScrollView>
      </SafeAreaView>
    </View>
  );
}


