
import React, {Component} from 'react';
import {Image, Button, Platform, StyleSheet, Text, Dimensions, Alert, TouchableOpacity, View} from 'react-native';
import {NavigationContext} from '@react-navigation/native'
import 'react-native-gesture-handler';


export default class OverviewScreen extends Component{

    render() {
        const navigation = this.props.navigation;
        return (
            <View style={styles.Container} source={require("../assets/images/HomePageLeaf.jpg")}>
                <View style={styles.titleBarContainer}>
                  <View style={styles.titleBar}>
                      <Text style={styles.titleText}>Study Buddy</Text>
                  </View>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                      style={styles.Button}
                      onPress={() => navigation.navigate('TimeToStudy')}
                      underlayColor='fff'>
                      <Image style={styles.timerIcon} source={require("../assets/images/timerIcon.png")}/>

                      <Text style={styles.timerButtonText}>Study Time</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style={styles.Button}
                      onPress={() => navigation.navigate('CalendarDisplay', {newEvent: false})}
                      underlayColor='fff'>
                      <Image style={styles.calendarIcon} source={require("../assets/images/calendarIcon.png")}/>

                      <Text style={styles.calendarButtonText}>Calendar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                      style={styles.Button}
                      onPress={() => navigation.navigate('CreateNewEvent')}
                      underlayColor='fff'>
                      <Image style={styles.createEventIcon} source={require("../assets/images/plusIcon.png")}/>
                      <Text style={styles.createEventButtonText}>Create Event</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.totalStudyTimeContainer}>
                  <View style={styles.totalStudyTime}>
                    <Text style={styles.totalStudyTimeText}>(Time Studied)</Text>
                  </View>
                </View>
              <View style={styles.studyQuoteContainer}>
                <View style={styles.studyQuote}>
                  <Text style={styles.studyQuoteText}>"The roots of education are bitter, but the fruit is sweet" -Aristotle</Text>
                </View>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    height: Math.round(Dimensions.get('window').height),
    width: Math.round(Dimensions.get('window').width),
    backgroundColor: '#E0F5F6',
    alignContent: 'center',
  },
  titleBarContainer: {
    flex: .20,
  },
  titleBar: {
    height: Math.round(Dimensions.get('window').height)/8,
    marginTop: -25,
    backgroundColor: '#EFEFEF',
    shadowOpacity: 0.8,
    shadowOffset: {width: 1, height: 4}
  },
  titleText: {
    color: '#000000',
    position: 'absolute',
    top: '35%',
    width: '100%',
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'rock-salt',
  },
  buttonContainer: {
    flex: .25,
    flexDirection: 'row',
    height: 95,
    marginTop: -100,
  },
  Button: {
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 32.5,
    marginTop: 30,
    height: 95,
    width: 95,
    backgroundColor:'#47C494',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    shadowOpacity: 0.8,
    shadowOffset: {width: 1, height: 13}
  },
  timerIcon: {
    height: 52.5,
    width: 52.5,
    marginLeft: 20,
    marginTop: 5,
  },
  timerButtonText: {
    color:'#E0F5F6',
    textAlign:'center',
    fontSize: 15,
    paddingTop: 5,
  },
  calendarIcon: {
    height: 62.5,
    width: 62.5,
    marginLeft: 15,
  },
  calendarButtonText: {
    color:'#E0F5F6',
    textAlign:'center',
    fontSize: 15,
  },
  createEventIcon: {
    height: 62.5,
    width: 62.5,
    marginLeft: 15,
    marginTop: 0,
  },
  createEventButtonText: {
    color:'#E0F5F6',
    textAlign:'center',
    fontSize: 15,
    paddingTop: 4,
  },
  totalStudyTimeContainer: { //here my friend blah blah blah blah blahb ablh
    flex: .25,
  },
  totalStudyTime: {
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: (Math.round(Dimensions.get('window').width) - (Math.round(Dimensions.get('window').width) / 1.25)) / 2,
    backgroundColor: '#47C494',
    height: 200,
    width: Math.round(Dimensions.get('window').width) / 1.25 ,
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    shadowOpacity: 0.8,
    shadowOffset: {width: 1, height: 13}
  },
  totalStudyTimeText: {
    fontSize: 40,
    color: '#E0F5F6',
    textAlign: 'center',
  },
  studyQuoteContainer: { //here my friend blah blah blah blah blahb ablh
    flex: .25,
  },
  studyQuote: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#EFEFEF',
    marginLeft: (Math.round(Dimensions.get('window').width) - (Math.round(Dimensions.get('window').width) / 1.10)) / 2,
    marginTop: 20,
    height: 100,
    width: Math.round(Dimensions.get('window').width) / 1.10,
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    shadowOpacity: 0.8,
    shadowOffset: {width: 1, height: 13}
  },
  studyQuoteText: {
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
