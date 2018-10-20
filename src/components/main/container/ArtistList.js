/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, FlatList} from 'react-native';
import ArtistBox from '../components/ArtistBox'

export default class ArtistList extends Component {
  render() {
    return (
      <FlatList
        data={this.props.artists}
        renderItem= {({item}) => <ArtistBox artist={item} />}
        keyExtractor={item => item.artists}
      />
    );
  }
}

