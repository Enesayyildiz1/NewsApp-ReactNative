

import React from 'react';

import {
  FlatList,
  SafeAreaView,
   StyleSheet,
  Text,
  View,
  } from 'react-native';
import newsData from './news_data.json';
import NewsCard from './components/NewsCard';
import NewsBanner from './components/NewsBanner';




function App (){
  

  return (
    <SafeAreaView style={styles.mainContainer}>
     <Text style={styles.header_text}> News</Text>
      <FlatList 
      keyExtractor={(item,index)=>item.u_id.toString()}
      ListHeaderComponent={ <NewsBanner/>} 
      data={newsData} 
      renderItem={({item}) =><NewsCard news={item}  
      />}/>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
   mainContainer:
   {
     flex:1,
     backgroundColor:"#eceff1"
   },
  
   header_text:{
     fontSize:50,
     fontWeight:"bold"

   }
});

export default App;
