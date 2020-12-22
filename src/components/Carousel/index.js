import React from 'react';
import PropTypes from 'prop-types';
import {
  VideoCardGroupContainer, Title, ExtraLink, IconAdd,
} from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const { videos } = category;

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }} id={categoryTitle.split(' ')[0]}>
            {categoryTitle}
          </Title>
          <IconAdd to={`/cadastro/video/${category.id}`} style={{ backgroundColor: categoryColor || 'red' }}>
            &#43;
          </IconAdd>
          {categoryExtraLink
            && (
            <ExtraLink href={categoryExtraLink.url}>
              {categoryExtraLink.text}
            </ExtraLink>
            )}
        </>
      )}

      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

Carousel.propTypes = {
  ignoreFirstVideo: PropTypes.bool,
  category: PropTypes.shape().isRequired,
};

Carousel.defaultProps = {
  ignoreFirstVideo: false,
};

export default Carousel;
