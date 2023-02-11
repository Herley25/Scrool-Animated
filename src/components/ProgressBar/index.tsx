import {
    useEffect,
} from 'react';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Animated, {
    FadeIn,
    FadeOut,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';

import {
    Feather,
} from '@expo/vector-icons';

import {
    styles,
} from './styles';

type valueProps = {
  value: number;
};

export const ProgressBar = ({ value }: valueProps) => {
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

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {endReached ? (
        <TouchableOpacity>
          <Feather name="arrow-up" size={24} color="#C4C4CC" />
        </TouchableOpacity>
      ) : (
        <Animated.View style={styles.progressContent} entering={FadeIn} exiting={FadeOut}>
          <Text style={styles.value}>{value.toFixed(0)}%</Text>

          <View style={styles.tracker}>
            <View style={[styles.progress, { width: `${value}%` }]}></View>
          </View>
        </Animated.View>
      )}
    </Animated.View>
  );
};
