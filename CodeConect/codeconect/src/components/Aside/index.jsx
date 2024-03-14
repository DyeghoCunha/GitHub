import styles from "./aside.module.css"
import logo from "./codeconnectLogo.png"
import Image from "next/image"

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      < src="/codeconnectLogo.png" alt="Logo do Code Connect" />
    </aside>
  )
}
