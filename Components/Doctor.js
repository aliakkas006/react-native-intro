import { View, Text, Image } from 'react-native';
import React from 'react';

export default function Doctor({ doctor }) {
    const { name, email, image } = doctor;
  return (
    <View>
      <Text>Doctors name: {name} </Text>
      <Text>Doctors email: {email} </Text>
      <Image
        source={{
          uri: `data:image/png;base64,${image}`,
        }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}
