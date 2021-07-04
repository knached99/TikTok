import React from 'react';
import { View, Button } from 'react-native';
import styles from './styles';
import { Video, AVPlaybackStatus } from 'expo-av';


/*const Post = () => {
    return (
        <View style={styles.container}>
            <Video source={{uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
                 useNativeControls
                 resizeMode="contain"
                 isLooping
                 //onPlaybackStatusUpdate={status => setStatus(() => status)}
            style={styles.video} />
            
        </View>
        
    );
};*/
const Post =()=> {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? 'Pause' : 'Play'}
            onPress={() =>
              status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
          />
        </View>
      </View>
    );
  }
  

export default Post;