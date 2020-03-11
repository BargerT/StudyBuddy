import React, {Component} from 'react'
import 'react-native-gesture-handler';
import {Alert, Dimensions, ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import * as Calendar from "expo-calendar";
import Constants from 'expo-constants'

export default class CalendarDisplay extends Component{

    constructor(props) {
        super(props);
        this.state = {
            subject: this.props.route.params.subject,
            allDay: true,
            selectedStartDate: null,
            task: this.props.route.params.task,
            calendarId: '',
        };

        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date) {
        Alert.alert('Confirm Date', date.format('DD-MM-YYYY'), [
            {text: 'Cancel', onPress: () => this.setState({selectedStartDate: null})},
            {text: 'Ok', onPress: () => this.createEvent(date)},
        ], {cancelable: false});

    }

    getDefaultCalSrc = async () => {
        const calendars = await Calendar.getCalendarsAsync();
        const defaultCalendars = calendars.filter(each => each.source.name === 'Default');
        return defaultCalendars[0].source
    };

    createCal = async () => {

        const defaultCalendarSource =
            (Platform.OS) === 'ios'
                ? await this.getDefaultCalSrc()
                : {isLocalAccount: true, name: 'Study Buddy'};

        const newCalendarID = await Calendar.createCalendarAsync({
            title: 'Study Buddy',
            color: 'blue',
            entityType: Calendar.EntityTypes.EVENT,
            sourceId: defaultCalendarSource.id,
            source: defaultCalendarSource,
            name: 'internalCalendarName',
            ownerAccount: 'personal',
            accessLevel: Calendar.CalendarAccessLevel.OWNER,
        }).catch(err => console.log(err));

        console.log(`new CalId: ${newCalendarID}`);

        this.setState({calendarId: newCalendarID})
    };

    createEvent = async (date) => {
        const {navigation} = this.props;
        this.setState({selectedStartDate: date});
        const eventConfig = {
            title: `${this.state.subject}: ${this.state.task}`,
            startDate: date,
            endDate: date,
            location: '',
            allDay: true,
            url: '',
            notes: '',
        };

        this.createCal().then( r =>
            Calendar.createEventAsync(this.state.calendarId, eventConfig)
        );


        navigation.navigate('OverviewScreen')
    };

    render() {
        const {navigation} = this.props;

        return(
            <View style={styles.Container}>
                <View style={styles.titleCircle}>
                    <Text style={styles.titleText}>Calendar</Text>
                </View>
                <View>
                    <CalendarPicker
                        selectedDayColor={'#47C494'}
                        dayShape={'square'}
                        dayLabelsWrapper={{
                            borderBottomWidth: 2,
                            borderTopWidth: 2,
                            borderLeftWidth: 2,
                            borderRightWidth: 2,
                            borderColor: '#000',
                        }}
                        onDateChange={this.onDateChange}
                    />

                </View>

                <TouchableOpacity
                    style={styles.homeButton}
                    onPress={() => navigation.navigate('OverviewScreen')}
                    underlayColor='fff'>

                    <Text style={styles.homeButtonText}>Home</Text>
                </TouchableOpacity>
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
    titleCircle: {
        justifyContent: 'center',
        alignContent: 'center',
        width: Math.round(Dimensions.get('window').width),
        height: Math.round(Dimensions.get('window').width) / 4,
        marginTop: -(Math.round(Dimensions.get('window').width) / 2)/1.5,
        borderWidth: 2,
        backgroundColor: '#47C494'
    },
    titleText: {
        color: '#E0F5F6',
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        margin: 0,
        fontSize: 50,
        fontFamily: 'rock-salt',
    },
    homeButton: {
        justifyContent: 'center',
        alignContent: 'center',
        width: 120,
        height: 60,
        borderWidth: 2,
        backgroundColor: '#47C494',
        marginLeft: Math.round(Dimensions.get('window').width)/2 - 60,
        marginTop: 40,
    },
    homeButtonText: {
        color:'#E0F5F6',
        textAlign:'center',
        fontSize: 20,
    },
});
