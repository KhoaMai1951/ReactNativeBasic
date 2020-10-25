import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const Cat = (props) => {
  // "useState" set a function call "setIsHungry" with a state variable call "isHungry" with intital value is true
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
      />
    </View>
  );
};

export default Cat;