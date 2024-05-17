'use client';
import Image from 'next/image';
import styles from './page.module.css';

import React, { useState } from 'react';

function Bookmark({ initialBookmarked }) {
    const [isBookmarked, setIsBookmarked] = useState(initialBookmarked);

  const handleClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div onClick={handleClick} className={styles.bookmark}>
      <Image
        src={isBookmarked ? "/assets/icon-bookmark-full.svg" : "/assets/icon-bookmark-empty.svg"}
                  alt="bookmark"
                  className={styles.boork}
                  width={12}
                  height={14}
                /></div>
    )
}
export default Bookmark;
