import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import Screen from '../components/Screen';
import Slot from '../components/Slot';
import AppText from '../components/AppText';
import {useSelector} from 'react-redux';
import Icon from '../components/Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;

const data = [
  {
    id: '1',
    time: '9:00 A.M',
    slotNm: 1,
  },
  {id: '2', time: '10:00 A.M', slotNm: 2},
  {id: '3', time: '11:00 A.M', slotNm: 3},
  {id: '4', time: '12:00 A.M', slotNm: 4},
  {id: '5', time: '1:00 P.M', slotNm: 5},
  {id: '6', time: '2:00 P.M', slotNm: 6},
  {id: '7', time: '3:00 P.M', slotNm: 7},
  {id: '8', time: '4:00 P.M', slotNm: 8},
  {id: '9', time: '5:00 P.M', slotNm: 9},
];

const imageData = [
  {
    id: '1',
    image: require('../assets/image1.jpg'),
  },
  {
    id: '2',
    image: require('../assets/image2.jpg'),
  },
  {
    id: '3',
    image: require('../assets/image3.jpg'),
  },
  {
    id: '4',
    image: require('../assets/image4.jpg'),
  },
  {
    id: '5',
    image: require('../assets/image5.jpg'),
  },
  {
    id: '6',
    image: require('../assets/image1.jpg'),
  },
  {
    id: '7',
    image: require('../assets/image2.jpg'),
  },
  {
    id: '8',
    image: require('../assets/image3.jpg'),
  },
  {
    id: '9',
    image: require('../assets/image4.jpg'),
  },
  {
    id: '10',
    image: require('../assets/image1.jpg'),
  },
  {
    id: '11',
    image: require('../assets/image2.jpg'),
  },
  {
    id: '12',
    image: require('../assets/image3.jpg'),
  },
];

const HomeScreen = ({navigation}) => {
  const {SlotDetails} = useSelector((state) => state.SlotDetailState);
  const scrollref = useRef();
  const [isClicked, setIsClicked] = useState(false);

  const handlePress = () => {
    if (!isClicked) {
      scrollref.current.scrollTo({x: windowWidth});
    } else {
      scrollref.current.scrollTo({x: 0});
    }

    setIsClicked(!isClicked);
  };

  return (
    <Screen style={styles.Container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        ref={scrollref}>
        <View style={styles.Container}>
          <View style={styles.Heading}>
            <AppText style={styles.HeadingText}>
              Please select your slot
            </AppText>
          </View>
          <FlatList
            style={styles.flatlist}
            data={data}
            keyExtractor={(item, index) => item.id}
            renderItem={({item}) => (
              <Slot
                id={item.id}
                slotNm={item.slotNm}
                time={item.time}
                onPress={() => navigation.navigate('SlotDetail', {id: item.id})}
                isSelect={
                  SlotDetails.findIndex((i) => i.id === item.id) !== -1
                    ? true
                    : false
                }
              />
            )}
            numColumns={3}
          />
        </View>
        <View style={styles.galleryContainer}>
          <FlatList
            style={styles.flatlist}
            data={imageData}
            keyExtractor={(item, index) => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.imageContainer}
                activeOpacity={0.7}>
                <Image source={item.image} style={styles.image} />
              </TouchableOpacity>
            )}
            numColumns={3}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          handlePress();
          navigation.setOptions({title: isClicked ? 'Home' : 'Gallery'});
        }}>
        <Icon name="google-photos" styles={styles.icon} />
      </TouchableOpacity>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth,
  },
  flatlist: {
    flexDirection: 'row',
  },
  Heading: {
    marginVertical: 30,
  },
  HeadingText: {
    fontSize: 20,
    opacity: 0.7,
  },
  icon: {
    marginBottom: 70,
  },
  imageContainer: {
    width: windowWidth / 3,
    height: windowWidth / 3,
  },
  image: {
    width: null,
    height: null,
    flex: 1,
  },
  galleryContainer: {
    justifyContent: 'center',
    width: windowWidth,
  },
});
