import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import VIForegroundService from '@voximplant/react-native-foreground-service';
import BackgroundService from 'react-native-background-actions';

const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));
const veryIntensiveTask = async (taskDataArguments) => {
    // Example of an infinite loop task
    const { delay } = taskDataArguments;
    await new Promise(async (resolve) => {
        for (let i = 0; BackgroundService.isRunning(); i++) {
            console.log(i);
            await BackgroundService.updateNotification({ taskDesc: 'New Background Task ' + i });
            await sleep(delay);
        }
    });
};

const options = {
    taskName: 'Example',
    taskTitle: 'ExampleTask title',
    taskDesc: 'ExampleTask description',
    taskIcon: {
        name: 'ic_launcher',
        type: 'mipmap',
    },
    color: '#ff00ff',
    linkingURI: 'yourSchemeHere://chat/jane', // See Deep Linking for more info
    parameters: {
        delay: 5000,
    },
};

const MyNewServices = () => {
    useEffect(() => {
        createChannel();
    }, []);

    const createChannel = async () => {
        const channelConfig = {
            id: 'channelId',
            name: 'Channel name',
            description: 'Channel description',
            enableVibration: false
        };
        await VIForegroundService.getInstance().createNotificationChannel(channelConfig);
    }

    const startForegroundService = async () => {
        const notificationConfig = {
            channelId: 'channelId',
            id: 3456,
            title: 'Title',
            text: 'Some text',
            icon: 'ic_icon',
            button: 'Some text',
        };
        try {
            await VIForegroundService.getInstance().startService(notificationConfig);
        } catch (e) {
            console.error(e);
        }
    }

    const stopForegroundServices = async () => {
        await VIForegroundService.getInstance().stopService();
    }

    const startBackgroundService = async () => {
        await BackgroundService.start(veryIntensiveTask, options);
        await BackgroundService.updateNotification({ taskDesc: 'New Background Task' });
    }

    const stopBackgroundService = async () => {
        await BackgroundService.stop();
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                style={{
                    width: '80%',
                    height: 50,
                    marginTop: 20,
                    borderRadius: 20,
                    backgroundColor: 'green',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center'
                }}
                onPress={() => { startForegroundService(); }}
            >
                <Text>Start Foreground Task</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: '80%',
                    height: 50,
                    marginTop: 20,
                    borderRadius: 20,
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center'
                }}
                onPress={() => { stopForegroundServices(); }}
            >
                <Text>Stop Foreground Task</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    width: '80%',
                    height: 50,
                    marginTop: 20,
                    borderRadius: 20,
                    backgroundColor: 'green',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center'
                }}
                onPress={() => { startBackgroundService(); }}
            >
                <Text>Start Background Task</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: '80%',
                    height: 50,
                    marginTop: 20,
                    borderRadius: 20,
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center'
                }}
                onPress={() => { stopBackgroundService(); }}
            >
                <Text>Stop Background Task</Text>
            </TouchableOpacity>
        </View>
    );
}

export default MyNewServices;