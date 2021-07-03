import React from 'react';
import View from 'react-native';
import Video from 'react-native-video';

const Post = () => {
    return (
        <View>
            <Video source={{uri: "https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-pve-0068/6e7b936ae37441acafb6a5457a8f9c85/?a=1988&amp;br=1800&amp;bt=900&amp;cd=0%7C0%7C1&amp;ch=0&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;expire=1625296982&amp;l=202107030122480101902192103B3FDA44&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;policy=2&amp;qs=0&amp;rc=ajVqOmd3NDszNTMzNzczM0ApOmllPGQ4OzszNzQ0PGVmPGdrYXMvc2xvZGZgLS1kMTZzcy5gNDQ1NGAzNTQzYzFeLjU6Yw%3D%3D&amp;signature=6483aa0d8dd9ddd1d78e9572ef14edb6&amp;tk=tt_webid_v2&amp;vl=&amp;vr="}}
            ></Video>
        </View>
    );
}

export default Post;