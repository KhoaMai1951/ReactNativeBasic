import React from 'react';
import {Button, View} from 'react-native';

const KhoaButton = () => {
  return (
    <View>
      <Button
        onPress={() => {
          alert('You tapped the purple button!');
        }}
        title="Press Me"
        color="#c842f5"
      />
    </View>
  );
};

export default KhoaButton;
