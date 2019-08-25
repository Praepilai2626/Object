import React from 'react';
import styles from '../assets/styles';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList
} from 'react-native';
import CardItem from '../components/CardItem';
import Icon from '../components/Icon';
import demo_shoe from '../assets/data/demo_shoe';
import demo_watch from '../assets/data/demo_watch';
import demo_backpack from '../assets/data/demo_backpack';

const Home = (props) => {
  const {
    navigate
  } = props.navigation;
  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}>
      <View style={styles.containerMatches}>
        <ScrollView>
          <View style={styles.top}>
            <Text style={styles.title}>shop online</Text>
            < TouchableOpacity >
              <Text style={styles.icon}>
                <Icon name="optionsV"
                />
              </Text>
            </TouchableOpacity>
          </View>


            <FlatList
            numColumns={1}
            data={demo_shoe}
           
            renderItem={({item}) => (
              < TouchableOpacity onPress = {() => {props.navigation.navigate('HShose')}} >
                
                <CardItem
                  image={item.image}
                  name={item.name}
                 
                  variant
                />
              </TouchableOpacity>
            )}
          />

            <FlatList
            numColumns={1}
            data={demo_watch}
           
            renderItem={({item}) => (
              < TouchableOpacity onPress = {() => {props.navigation.navigate('HWatch')}} >
                
                <CardItem
                  image={item.image}
                  name={item.name}
                 
                  variant
                />
              </TouchableOpacity>
            )}
          />
          <FlatList
            numColumns={1}
            data={demo_backpack}
           
            renderItem={({item}) => (
              < TouchableOpacity onPress = {() => {props.navigation.navigate('HBackpack')}} >
                
                <CardItem
                  image={item.image}
                  name={item.name}
                 
                  variant
                />
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Home;
