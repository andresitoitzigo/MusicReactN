/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class ArtistBox extends Component {
  render() {
    const { image, name, likes, comments, } = this.props.artist
    return (
      <View style={styles.artistBox}>
          <Image style={styles.image} source={{ uri: image }}/>
          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.items}>
              
              <View style={styles.iconcont}>
                <Icon name="favorite" size={30} color="lightgray" />
                <Text>{likes}</Text>
              </View>
              <View style={styles.iconcont}>  
                <Icon name="chat" size={30} color="lightgray" />
                <Text>{comments}</Text>
              </View>
              
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({

  artistBox: {
    marginTop: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  image: { 
    height: 150,
    width: 150,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    marginTop: 10
  },
  items: {

    flexDirection: 'row',
    justifyContent: "space-between",
    marginHorizontal: 40,
    marginTop: 10,
  },
  iconcont: {
    flex: 1,
    alignItems: 'center',
  }
  



});
