import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { ChessClock } from './src/components/ChessClock/ChessClock';


function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ChessClock />
      </View>
    </SafeAreaView>
  );
}

export default App;
