import React, {Component} from 'react';
import {
  ImageBackground,
  Button,
  Platform,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions
} from 'react-native';
import NumericInput, {calcSize} from 'react-native-numeric-input'
import {StudyForm} from '../components/StudyForm.js'

export default class TimeToStudy extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 1,
      };
    }

    render() {
        const navigation = this.props.navigation;
        return (
            <View style={styles.Container}>
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>Time To Study</Text>
                </View>
                <View style={styles.buttonContainer}>
                  <View>
                      <View style={styles.textInputBox}>
                        <TextInput style={styles.textInputBoxText} placeholder="Location"

                        />
                      </View>
                      <View style={styles.numericInputBox}>
                            <NumericInput
                              value={this.state.value}
                              onChange={value => this.setState({value})}
                              totalWidth={Math.round(Dimensions.get('window').width/1.5)}
                              totalHeight={100}
                              step={1}
                              minValue={1}
                              rightButtonBackgroundColor={'#47C494'}
                              leftButtonBackgroundColor={'#47C494'}
                              valueType={'integer'}
                              rounded
                              />
                      </View>
                      </View>
                  <TouchableOpacity
                      style={styles.Button}
                      onPress={() => {
                        navigation.navigate('TimerScreen', {
                            userTime: this.state.value,
                          });
                        }
                      }
                      underlayColor='fff'>
                      <Text style={styles.buttonText}>Start Timer</Text>
                  </TouchableOpacity>
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
    flex: .1,
  },
  titleBar: {
    height: Math.round(Dimensions.get('window').height)/8,
    marginTop: -42,
    backgroundColor: '#47C494',
    shadowOpacity: 0.8,
    shadowOffset: {width: 1, height: 4}
  },
  titleText: {
    color: '#000000',
    position: 'absolute',
    top: '30%',
    width: '100%',
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'rock-salt',
  },
  buttonContainer: {
    flex: .9,
  },
  textInputBox: {
    backgroundColor: '#EFEFEF',
    marginTop: 160,
    width: Math.round(Dimensions.get('window').width/1.5),
    height: Math.round(Dimensions.get('window').height/15),
    borderWidth: 3,
    borderColor: '#47C494',
    marginLeft: Math.round((Dimensions.get('window').width - (Dimensions.get('window').width/2)) - (Math.round(Dimensions.get('window').width/1.5)/2)),
    fontSize: 40,
  },
  textInputBoxText: {
    fontSize: 40,
  },
  numericInputBox: {
    marginTop: 40,
    marginLeft: Math.round((Dimensions.get('window').width - (Dimensions.get('window').width/2)) - (Math.round(Dimensions.get('window').width/1.5)/2)),
  },
  Button: {
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: Math.round(Dimensions.get('window').width - (Math.round(Dimensions.get('window').width/2)) - (190/2)),
    marginTop: 100,
    height: 95,
    width: 190,
    backgroundColor:'#47C494',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    shadowOpacity: 0.8,
    shadowOffset: {width: 1, height: 13}
  },
  buttonText: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 30,
  },
});

