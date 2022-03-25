import React from 'react';
import { Keyboard } from 'react-native';

import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { Container } from '~/components';

import { Color } from '~/styles';
import useBackHandler from './useBackHandler';
import useKeyboard from './useKeyboard';

interface ModalContextData {
  /**
   * Set the sheet content
   * @type JSX.Element
   * @default null
   */
  setComponent: (component: JSX.Element) => void;
  /**
   * Snap to the minimum provided point from snapPoints.
   */
  hide: () => void;
  /**
   * Set the sheet background color
   * @type string
   * @default #fff
   */
  setBackgroundColor: (color: string) => void;
  /**
   * Disable pan down gesture to close the sheet.
   * @default false
   */
  blockGestures: () => void;
}

const ModalContext = React.createContext<ModalContextData>(
  {} as ModalContextData,
);

export const ModalProvider: React.FC = ({ children }) => {
  const [Component, setComponentState] = React.useState(null);

  const [backgroundColor, setBackgroundColor] = React.useState('');
  const [isGestureActive, toggleGesture] = React.useReducer((s) => !s, true);

  const { keyboardHeight } = useKeyboard();

  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const initialSnapPoints = React.useMemo(() => [1, 'CONTENT_HEIGHT'], []);

  React.useEffect(() => {
    if (Component) {
      Keyboard.dismiss();

      setTimeout(() => {
        bottomSheetRef.current?.expand();
      }, 100);
    }
  }, [Component]);

  // Set the sheet content
  const setComponent = React.useCallback((value) => {
    setComponentState(value);
  }, []);

  // Snap to the minimum provided point from snapPoints.
  const hide = React.useCallback(() => {
    bottomSheetRef.current?.collapse();

    setTimeout(() => {
      // enable gestures if it had been previously deactivated
      if (!isGestureActive) toggleGesture();

      setComponentState(null);
      setBackgroundColor('');
    }, 100);
  }, [isGestureActive]);

  // Disable content panning gesture interaction.
  const blockGestures = React.useCallback(() => {
    toggleGesture();
  }, []);

  // Callback when the sheet about to animate to a new position.
  const onAnimateBottomSheet = React.useCallback(
    (fromIndex: number, toIndex: number) => {
      if (fromIndex === 1 && toIndex < fromIndex) {
        hide();
      }
    },
    [hide],
  );

  // Component to be placed as a sheet backdrop.
  const renderBackdrop = React.useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        enableTouchThrough={false}
        pressBehavior={isGestureActive ? 'collapse' : 'none'}
        opacity={0.8}
        style={{ ...props.style, backgroundColor: Color.black }}
      />
    ),
    [isGestureActive],
  );

  useBackHandler(() => {
    if (Component) {
      hide();
    }

    return false;
  });

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  const contextValue = React.useMemo(
    () => ({
      hide,
      setComponent,
      setBackgroundColor,
      blockGestures,
    }),
    [blockGestures, hide, setComponent],
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {children}

      {Component && (
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={animatedSnapPoints}
          handleHeight={animatedHandleHeight}
          contentHeight={animatedContentHeight}
          onAnimate={onAnimateBottomSheet}
          backdropComponent={renderBackdrop}
          handleComponent={() => (
            <Container alignSelf="center" bg={Color.white}>
              <Container
                bg="#D9DBE9"
                mt={12}
                borderTopLeftRadius={8}
                borderTopRightRadius={8}
                w={48}
                h={8}
              />
            </Container>
          )}
          enablePanDownToClose={isGestureActive}
          enableContentPanningGesture={isGestureActive}
          enableHandlePanningGesture={isGestureActive}
          keyboardBehavior="interactive"
          keyboardBlurBehavior="restore"
          style={{
            overflow: 'hidden',
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
          }}
        >
          <BottomSheetView
            onLayout={handleContentLayout}
            style={{
              paddingBottom: getBottomSpace() + keyboardHeight,
              backgroundColor: backgroundColor || Color.white,
            }}
          >
            {Component}
          </BottomSheetView>
        </BottomSheet>
      )}
    </ModalContext.Provider>
  );
};

export default function useModal(): ModalContextData {
  const context = React.useContext(ModalContext);

  return context;
}
