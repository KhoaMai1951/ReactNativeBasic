import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Button, Text, View, TextInput} from 'react-native';

const CreatePostScreen = ({route, navigation}) => {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{height: 200, padding: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate('Home', {post: postText});
        }}
      />
    </>
  );
};

export default CreatePostScreen;
