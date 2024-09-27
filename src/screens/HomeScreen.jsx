// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';

export default function HomeScreen({navigation}) {
  const dispatch = useDispatch();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-xl">Welcome to the Home Screen!</Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('Detail')}
      />
      <Button title="Logout" onPress={() => dispatch(logout())} />
    </View>
  );
}
