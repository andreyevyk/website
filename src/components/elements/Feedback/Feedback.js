import React, {useState} from 'react';
import {LikeOutlined, LikeFilled, DislikeOutlined, DislikeFilled } from '@ant-design/icons';

import { feedbackWithStyle } from './Feedback.styles';

const Feedback = ({className}) => {
  const [likeClicked, setLikeClicked] = useState(false);
  const [dislikeClicked, setDislikeClicked] = useState(false);

  const handleLikeClick = () => {
    dislikeClicked && setDislikeClicked(!dislikeClicked);
    setLikeClicked(!likeClicked)
  };
  const handleDislikeClick = () => {
    likeClicked && setLikeClicked(!likeClicked);
    setDislikeClicked(!dislikeClicked)
  };    

  return (
    <span className={'feedback ' + className  }>
      <a onClick={handleLikeClick}>
        {likeClicked ? 
          <LikeFilled className='like' /> : 
          <LikeOutlined /> 
        }
      </a>
      <a onClick={handleDislikeClick}>
        {dislikeClicked ? 
          <DislikeFilled className='dislike' /> : 
          <DislikeOutlined /> 
        }
      </a>
    </span>
  )
}

export default feedbackWithStyle(Feedback);