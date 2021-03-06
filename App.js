/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import ArtistList from './src/components/main/container/ArtistList';
import { getArtists } from './src/api-client'


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      artists: []
    }
  }


componentDidMount() {
    getArtists()
    .then(data => this.setState({ artists: data}))
        
}

  render() {
    const artists = this.state.artists
    return (
      <View style={styles.container}>
        <ArtistList artists= {artists}/>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },

});
