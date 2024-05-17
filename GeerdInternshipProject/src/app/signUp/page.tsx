import Image from 'next/image'
import styles from '../page.module.css'
import Link from 'next/link'
export default function SignUp() {
  return (<main className={styles.main}>
    <Image
            src="/logo.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={33}
            height={27}
            priority
          />
          <div className={styles.containner}>
            <h2 className={styles.header}>Sign Up</h2>
            <form className={styles.loginForm}>
              <input type="field" placeholder="Email address" /><br/><br />
              <input type="password" placeholder="Password" /><br /><br />
              <input type="password" placeholder="Repeat password" /><br /><br />
              <button>Create an account</button>
            </form>
             <center><p>Already have an account? &nbsp;<Link href='/'> Login</Link></p></center>
          </div>
  </main>
)
}
