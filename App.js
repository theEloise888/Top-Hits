/**
 * Author:Eloise Lin
 * Purpose: An app that renders a list of the top 10 trending songs on Spotify. 
 * Date: June 3, 2019
 */

import React, { Component } from 'react';
import { Text, View, FlatList, Image, ScrollView, ImageBackground, Button, TouchableHighlight, RefreshControl  } from 'react-native';
import styles from './styles';


type Props = {};
export default class TopHits extends Component<Props> {
  renderItem = ({ item }) => {
    return (
      <View style={styles.imgContainer}>
        <Image style={{ width: 70, height: 70, padding: 2, margin: 2 }} source={{ uri: item.image }} />
        <View style={styles.txtContainer}>
          <Text> Song Title: {item.song_title}</Text>
          <Text> Album: {item.album}</Text>
          <Text> Artist: {item.artist}</Text>
        </View>
      </View>
    )
  }

  constructor(props) {
    super(props);
    this.state = {
      originalData: [],
      backgroundURL: require('./resources/hearts.jpg'),
      isRefreshed: false, 
    };
  }

  componentWillMount() {
     const url = "https://api.myjson.com/bins/nso7b";


    fetch(url).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          originalData: responseJson.song_array
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }


  onRefresh = () => {
    this.setState({isRefreshed: true});
    fetchData().then(() => {
      this.setState({isRefreshed: false});
    });
  }

  onPressRefresh() {
    const url = "https://api.myjson.com/bins/6lgjb";
    fetch(url).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          originalData: responseJson.song_array
        })
      })
      .catch((error) => {
        console.log(error);
      })
  };

  render() {
    return (   
      <ScrollView>
          <RefreshControl
            isRefreshed={this.state.isRefreshed}
            onRefresh={this.onRefresh}
          />
        
        <Button title="Refresh Page" onClick={this.onRefresh.bind(this)} onPress={this.onPressRefresh.bind(this)}></Button>
        <View style={styles.container}>     
          <Text style={styles.header}>Top Spotify Hits</Text>
          <View style={{ flex: 1 }}>
            <View style={styles.overlay} />
            <ImageBackground style={{ width: '100%', height: '100%', backgroundColor: 'rgba(255,0,0,0.5)' }} source={this.state.backgroundURL}>
              <FlatList
                data={this.state.originalData}
                renderItem={this.renderItem}
                keyExtractor={item => item.song_list}
              />
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    )
  }
}

