import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <main className={styles.main}>
      <Image
              src="/logo.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={33}
              height={27}
              priority
            />
            <div className={styles.containner}>
              <h2 className={styles.header}>Login</h2>
              <form className={styles.loginForm}>
                <input type="field" placeholder="Email address" required/><br/><br />
                <input type="password" placeholder="Password" required/><br /><br />
                <Link style={{color:'#FFFFFF'}} href='/HomePage'><button>Login to your account </button></Link>
              </form>
               <center><p>Don't have an account? &nbsp;<Link href='/signUp'> Sign Up</Link></p></center>
            </div>
    </main>
  )
}
