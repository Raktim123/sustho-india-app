import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useMemo, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop
} from '@gorhom/bottom-sheet';

import AppTab from './navigators/AppTab';
import { Button } from '@rneui/base';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Login from './component/Login';
import Verification from './component/Verification';


export default function App() {
    // ref
  const bottomSheetModalRef = useRef(null)

  // variables
  const snapPoints = useMemo(() => ['40%', "70%"], []);

  // callbacks
  const handlePresentModalPress =  () => {
    bottomSheetModalRef.current?.present();
  }

  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        opacity={0}
        disappearsOnIndex={0}
        appearsOnIndex={2}
      />
    ),
    []
  );

  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
        <AppTab />
        {/* <Button onPress={handlePresentModalPress}>Press</Button>
        <BottomSheetModalProvider>
          <BottomSheetModal
              ref={bottomSheetModalRef}
              index={0}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}
              backdropComponent={renderBackdrop}
              
          >
          </BottomSheetModal>
        </BottomSheetModalProvider> */}
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
