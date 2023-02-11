import {
    ViewStyle,
} from 'react-native';
import {
    AnimateStyle,
} from 'react-native-reanimated';

export interface valueProps {
  value: number;
  animatedStyle: AnimateStyle<ViewStyle>;
  endReached: boolean;
}

export type IController = Pick<valueProps, "value">;
