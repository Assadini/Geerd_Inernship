import styles from './page.module.css';
import Image from 'next/image';
import data from '../Components/data.json';
import Bookmark from './bookmark';
function Trending(){
    return (
<div className={styles.trending}>
    
      <h2>Trending</h2>
      <div className={styles.scrollContainer}>
      <div className={styles.elements}>
      {data.map((item, index) => (
            item.isTrending && (
              <div key={index} className={styles.trendingItem}>
                <Image
                src={item.thumbnail.trending.large}
                  alt={item.title}
                  className={styles.thumbnail}
                  width={450}
                  height={230}
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
                    <p>Play</p> </div>
                </div>
                <Bookmark initialBookmarked={item.isBookmarked} />
                
                <div className={styles.details}>
           {item.year} &nbsp;.&nbsp;
           {item.category}&nbsp;.&nbsp;
          {item.rating}<br />
           <h3>{item.title}</h3>
         </div>
              </div>
            )
          ))}
    </div></div> </div>
    )}
     export default Trending;