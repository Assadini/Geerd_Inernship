import data from '../Components/data.json';
import styles from './page.module.css';
import Bookmark from './bookmark';
import Image from 'next/image';

function Recommended() {

  return (
    <div className={styles.recomended}>
      <h2>Recommended for you</h2>
      <div className={styles.gridContainer}>
        {data.map((item, index) => (
          item.isTrending === false && (
            <div key={index} className={styles.recommendedItem}>
              <Image
                src={item.thumbnail.regular.small}
                alt={item.title}
                className={styles.Rthumbnail}
                width={280}
                height={174}
              />
              <div className={styles.shadow}>
                <div className={styles.play}>
                  <Image
                    src="/assets/icon-play.svg"
                    alt="PlayLogo"
                    className={styles.playLogo}
                    width={30}
                    height={30}
                  />
                  <p>Play</p>
                </div>
              </div>
              <Bookmark initialBookmarked={item.isBookmarked} />
              <div className={styles.details}>
                {item.year} &nbsp;.&nbsp;
                {item.category}&nbsp;.&nbsp;
                {item.rating}
                <br />
                <h3>{item.title}</h3>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}

export default Recommended;
