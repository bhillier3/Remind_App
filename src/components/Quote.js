import React from 'react';
import styles from '../styles.module.css'

const Quote = (props) => {

  return (
    <div className={styles.quote_box}>
      <h2 className={styles.title}>{props.title}</h2>
      <button
        className={styles.bookmark}
        onClick={props.handleBookmarkClick}
      >Bookmark</button>
      <div className={styles.quote_container}>
        <p className={styles.quote}>"{props.quote}"</p>
        <p className={styles.author}>-{props.author}</p>
      </div>
      <button
        className={styles.prev_arrow}
        onClick={props.handleQuotePrevClick}
      >Previous</button>
      <button
        className={styles.next_arrow}
        onClick={props.handleQuoteNextClick}
      >Next</button>

    </div>
  )
};

export default Quote;