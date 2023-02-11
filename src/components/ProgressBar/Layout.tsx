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
import {
    valueProps,
} from './types';

export const Layout = ({ value, animatedStyle, endReached }: valueProps) => {
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
