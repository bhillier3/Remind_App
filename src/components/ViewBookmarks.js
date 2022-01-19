import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Bookmark from './Bookmark';

const ViewBookmarks = (props) => {
  let navigate = useNavigate();
  let location = useLocation();
  const bookmarks = location.state;

  return(
    <div>
      <button onClick={() => navigate("/")}>Go Home</button>
      <h1>View Bookmarks Page!</h1>
      <ul>
        {bookmarks.map(bookmark => 
          <li key={bookmark.id}>
            <Bookmark
              title={bookmark.title}
              content={bookmark.quote}
              author={bookmark.author}
              type={'quote'}
            />
          </li>
        )}
      </ul>
    </div>
  );
};

export default ViewBookmarks;