import React from 'react';

const Bookmark = (props) => {

  return(
    <div>
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <p>{`Author: ${props.author}`}</p>
      <p>{`Type: ${props.type}`}</p>
    </div>
  );
};

export default Bookmark;