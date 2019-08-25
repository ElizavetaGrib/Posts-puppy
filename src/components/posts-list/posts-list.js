import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {connect} from 'react-redux';

import PostsListItem from '../posts-list-item';

import styles from './styles';

const PostsList = ({posts}) => {
    const [activeSlide, setActiveSlide] = useState(0);
    return (
        <>
            <Carousel sliderWidth={styles.slider.width}
                      itemWidth={styles.sliderItem.width}
                      data={posts}
                      renderItem={({item}) => <PostsListItem item={item}/>}
                      activeSlideAlignment={'start'}
                      loop
                      loopClonesPerSide={10} inactiveSlideOpacity={1}
                      inactiveSlideScale={1}
                      activeSlideOffset={activeSlide}
                      onSnapToItem={(index) => setActiveSlide(index)}/>
            <Pagination containerStyle={styles.containerStyle}
                        dotContainerStyle={styles.dotContainerStyle}
                        dotStyle={styles.dotStyle}
                        dotsLength={posts.length}
                        activeDotIndex={activeSlide}/>
        </>
    );
};

const mapStateToProps = ({posts}) => {
    const postsToRender = [];
    for (let i = 0; i < posts.length; i += 2) {
        const cortege = [posts[i]];
        if (posts[i + 1]) {
            cortege.push(posts[i + 1]);
        }
        postsToRender.push(cortege);
    }
    return {posts: postsToRender};
};

export default connect(mapStateToProps, null)(PostsList);
