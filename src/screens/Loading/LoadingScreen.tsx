import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const LoadingScreen: React.FC = () => (
  <View style={{ flex: 1, justifyContent: 'center' }}>
    <ActivityIndicator size="large" color="#8bc34a" />
  </View>
);

export default LoadingScreen;
