import React from 'react';
import { Keyboard } from 'react-native';

interface UseKeyboardProps {
  isKeyboardOpen: boolean;
  keyboardHeight: number;
}

export default function useKeyboard(): UseKeyboardProps {
  const [shown, setShown] = React.useState(false);
  const [keyboardHeight, setKeyboardHeight] = React.useState<number>(0);

  React.useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardWillShow', (e) => {
      setShown(true);
      setKeyboardHeight(e.endCoordinates.height);
    });
    const hideSubscription = Keyboard.addListener('keyboardWillHide', () => {
      setShown(false);
      setKeyboardHeight(0);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return {
    isKeyboardOpen: shown,
    keyboardHeight,
  };
}
