import styles from '../HomePage/page.module.css';
import Movies from './Movies';
import Image from 'next/image';
import Link from 'next/link';


export default function MoviesP(){
  return (
    <main className={styles.main}>
      <div className={styles.sideBar}>
        <center>
           <Image
              src="/logo.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={27}
              height={21}
              priority
            />
         <nav>
            <li>
              <Link href="/HomePage">
              
                  <Image
                    src="/assets/icon-nav-home.svg"
                    alt="Home"
                    className={styles.menuIcon}
                    width={18}
                    height={18}
                    priority
                  />
                
              </Link>
            </li>
            <li>
              <Link href="/Movies">
                
                  <Image
                    src="/assets/icon-nav-movies.svg"
                    alt="Movies"
                    className={styles.menuIcon}
                    width={18}
                    height={18}
                    priority
                  />
                  
              </Link>
            </li>
            <li>
              <Link href="/Series">
                
                  <Image
                    src="/assets/icon-nav-tv-series.svg"
                    alt="TV Series"
                    className={`${styles.menuIcon} `}
                    width={18}
                    height={18}
                    priority
                  />

              </Link>
            </li>
            <li>
              <Link href="/Bookmarked">
                
                  <Image
                    src="/assets/icon-nav-bookmark.svg"
                    alt="Bookmark"
                    className={styles.menuIcon}
                    width={18}
                    height={18}
                    priority
                  />
              
              </Link>
            </li>
          </nav>
     
          <Image
              src="/assets/image-avatar.png"
              alt="Vercel Logo"
              className={styles.user}
              width={28}
              height={28}
              priority
            />
          
         </center>

      </div>
      <div className={styles.wraper}>
        <div className={styles.searchBar}>
          <button >
            <Image
              src="/assets/icon-search.svg"
              alt="Vercel Logo"
              className={styles.search}
              width={24}
              height={24}
              priority
            />
          </button>
          
          <input
            type="text"
            name="search"
            placeholder="Search for movies"
          />
        </div>
        <Movies />
      </div>
    </main>
  );
}