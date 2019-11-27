import React from 'react';
import styled from 'styled-components/macro';

import { Flex, Text } from 'design-system';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const ReviewsSection = () => {
  const MainContainer = styled(Flex)`
    padding-right: 150px;
    padding-left: 150px;
    background-color: #f6fdff;

    @media (max-width: 500px) {
      padding: 0px;
    }
  `;

  const ReviewContainer = styled(Flex)`
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const Rating = styled(Text)`
    font-size: 63px;
    font-family: MuseoSansRounded-900;
    color: #f7c92b;
    line-height: 38px;
  `;

  const ReviewerName = styled(Text)`
    font-size: 48px;
    font-family: MuseoSansRounded-900;
    padding-top: 40px;
    padding-bottom: 20px;
    color: #485c7a;
    line-height: 38px;
  `;

  const Review = styled(Text)`
    width: 50%;
    font-size: 24px;
    font-family: MuseoSansRounded-500;
    color: #485c7a;
    line-height: 38px;
    text-align: center;
  `;

  const reviews = [
    {
      rating: '3',
      reviewerName: 'JohnDoe',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae placerat lectus.',
    },
    {
      rating: '4',
      reviewerName: 'JohnDoe',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae placerat lectus.',
    },
    {
      rating: '5',
      reviewerName: 'JohnDoe',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae placerat lectus.',
    },
  ];

  return (
    <MainContainer>
      <Slider>
        {reviews.map((item, index) => (
          <ReviewContainer key={index}>
            <Flex>
              <Rating>{item.rating}</Rating>
            </Flex>
            <ReviewerName>{item.reviewerName}</ReviewerName>
            <Review>{item.review}</Review>
          </ReviewContainer>
        ))}
      </Slider>
    </MainContainer>
  );
};

export default ReviewsSection;
