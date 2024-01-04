import {ResizeMode, Video, AVPlaybackStatus} from "expo-av"
import { StyleSheet } from "react-native"

export default function Splash(){
    function onPlaybackStatusUpdate(AVPlaybackStatus){
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
