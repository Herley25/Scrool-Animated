import {
    useMemo,
    useState,
} from 'react';
import {
    ScrollView,
    Text,
    useWindowDimensions,
    View,
} from 'react-native';

import {
    ProgressBar,
} from '../../components/ProgressBar';
import {
    styles,
} from './styles';

type scrollProps = {
  layoutMeasurement: {
    height: number;
  };
  contentOffset: {
    y: number;
  };
  contentSize: {
    height: number;
  };
};

export const Post = () => {
  const [percentage, setPercentage] = useState(0);

  const dimensions = useWindowDimensions();

  const scrollPercentage = ({ contentOffset, contentSize, layoutMeasurement }: scrollProps) => {
    const visibleContent = Math.ceil((dimensions.height / contentSize.height) * 100);
    const value = ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100;
    setPercentage(value < visibleContent ? 0 : value);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={(event) => scrollPercentage(event.nativeEvent)}
      >
        <Text style={styles.title}>Lorem ipsum</Text>

        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque nulla soluta voluptas rem,
          expedita fugit quod, commodi ut quaerat dolorum dignissimos nostrum aspernatur autem.
          Facere illo laboriosam hic rerum molestias?
        </Text>

        <Text style={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut praesentium voluptatibus
          voluptas. Fuga, accusamus, incidunt sit asperiores corrupti harum omnis eum tempora
          praesentium laborum ex. Modi fugiat quam natus ea? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cum quisquam maxime, odio labore libero repellendus quo corrupti ratione
          accusamus officiis? Nam quam beatae cumque commodi, error nesciunt quo ullam dolor.
        </Text>

        <Text style={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut praesentium voluptatibus
          voluptas. Fuga, accusamus, incidunt sit asperiores corrupti harum omnis eum tempora
          praesentium laborum ex. Modi fugiat quam natus ea? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cum quisquam maxime, odio labore libero repellendus quo corrupti ratione
          accusamus officiis? Nam quam beatae cumque commodi, error nesciunt quo ullam dolor.
        </Text>

        <Text style={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut praesentium voluptatibus
          voluptas. Fuga, accusamus, incidunt sit asperiores corrupti harum omnis eum tempora
          praesentium laborum ex. Modi fugiat quam natus ea? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cum quisquam maxime, odio labore libero repellendus quo corrupti ratione
          accusamus officiis? Nam quam beatae cumque commodi, error nesciunt quo ullam dolor.
        </Text>

        <Text style={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut praesentium voluptatibus
          voluptas. Fuga, accusamus, incidunt sit asperiores corrupti harum omnis eum tempora
          praesentium laborum ex. Modi fugiat quam natus ea? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cum quisquam maxime, odio labore libero repellendus quo corrupti ratione
          accusamus officiis? Nam quam beatae cumque commodi, error nesciunt quo ullam dolor. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Officiis culpa molestiae perferendis,
          ex maxime natus nesciunt ut fugiat sint qui rem placeat animi aspernatur incidunt. Soluta,
          quibusdam. Aliquam, non in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          officiis ducimus culpa ea eum reiciendis, maxime cumque tenetur eaque, rem incidunt
          perferendis aut, saepe sequi unde corrupti et quidem placeat?
        </Text>
      </ScrollView>

      <ProgressBar value={percentage} />
    </View>
  );
};
