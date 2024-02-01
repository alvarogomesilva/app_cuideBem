import { ResizeMode, Video, AVPlaybackStatus } from "expo-av";
import { StyleSheet } from "react-native";
import { useState } from 'react';
import { hideAsync } from 'expo-splash-screen';

export default function Splash(onComplete){
    const [LastStatus, setStatus] = useState({})

    function onPlaybackStatusUpdate(status){
        if(status.isLoaded){
            if(LastStatus.isLoaded !== status.isLoaded){
                hideAsync();
            }
            if(status.didJustFinish){
                onComplete(true);
            }
        }
        setStatus(() => status);
    }
    return (
        <Video 
        style={StyleSheet.absoluteFill}
        resizeMode={ResizeMode.COVER}
        source={require('../../../assets/splash.mp4')}
        isLooping={false}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        shouldPlay={true}
        />
    )
}