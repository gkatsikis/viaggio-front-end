import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Welcome to adventure, {user ? user.name : 'friend'}</h1>
    </main>
  )
}

export default Landing
