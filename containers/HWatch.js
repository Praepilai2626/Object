import React from 'react';
import {
  View,TouchableOpacity,
  ImageBackground
} from 'react-native';
//import Navigation from 'react-navigation';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import CardItem from '../components/CardItem';
import styles from '../assets/styles';
import watch from '../assets/data/watch';

const Home = (props) => {
  const {
    navigate
  } = props.navigation;
  return (
    
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}>
      <View style={styles.containerHome}>
        <CardStack
          loop={true}
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={swiper => (this.swiper = swiper)}>
          {watch.map((item, index) => (
            <Card key={index}>
             < TouchableOpacity onPress = {() => {props.navigation.navigate('Order')}} >
              <CardItem
                image={item.image}
                name={item.name}
              
                description={item.description}
                matches={item.match}
                actions
                onPressLeft={() => this.swiper.swipeLeft()}
                onPressRight={() => this.swiper.swipeRight()}
              />
              </TouchableOpacity>
            </Card>
          ))}
        </CardStack>
      </View>
    </ImageBackground>
  );
};

export default Home;
