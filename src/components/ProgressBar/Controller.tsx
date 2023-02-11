import {
    useEffect,
} from 'react';
import {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';

import {
    Layout,
} from './Layout';
import {
    IController,
} from './types';

export const Controller = ({ value }: IController) => {
  const widthContainer = useSharedValue(200);

  const endReached = value >= 95;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: widthContainer.value,
    };
  });

  useEffect(() => {
    widthContainer.value = withSpring(endReached ? 56 : 200, { mass: 0.4 });
  }, [value]);

  return <Layout value={value} animatedStyle={animatedStyle} endReached={endReached} />;
};
