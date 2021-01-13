import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;
export default class MyCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: 1,
      entries: [
        {title: '安徒生童话'},
        {title: '格林童话'},
        {title: '我的童话'},
      ],
    };
  }

  wp(percentage) {
    console.log("wpwpwwpwpwpwwpwp")
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
  }

  _renderItem({item, index}) {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  }

  render() {
    return (
        <Carousel
          ref={(c) => (this._slider1Ref = c)}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={1}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          // inactiveSlideShift={20}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={2}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={3000}
          onSnapToItem={(index) => this.setState({slider1ActiveSlide: index})}
        />
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    borderRadius: 10,
    backgroundColor: '#992211',
  },
  slider: {
    marginTop: 15,
    overflow: 'visible', // for custom animations
  },
  sliderContentContainer: {
    paddingVertical: 10, // for custom animation
  },
});
