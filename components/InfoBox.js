import styles from '@/styles/InfoBox.module.css'

export default function InfoBox() {
  return (
    <div className={styles.info}>
      <p>LOGIN: demo@demo.com / 123456</p>
      <p>Please delete any events that you create!</p>
    </div>
  )
}
