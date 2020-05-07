import React from 'react';

import RootScreen from './src/screens/Root/RootScreen';

import { AuthProvider } from './src/contexts/Auth';

export default function App() {
  return (
    <AuthProvider>
      <RootScreen />
    </AuthProvider>
  );
}

// export default from './storybook';
