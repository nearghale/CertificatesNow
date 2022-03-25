import React from 'react';
import { Provider as StateProvider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AppStore } from '~/store';
import { NavigationService } from '~/services';
import { AuthProvider } from '~/hooks/auth';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ModalProvider } from '~/hooks/useModal';
import Routes from './routes';

const App: React.FC = () => (
  <StateProvider store={AppStore}>
    <NavigationContainer ref={(nav) => NavigationService.setNavigator(nav)}>
      <SafeAreaProvider>
        <AuthProvider>
          <ModalProvider>
            <BottomSheetModalProvider>
              <Routes />
            </BottomSheetModalProvider>
          </ModalProvider>
        </AuthProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  </StateProvider>
);

export default App;
