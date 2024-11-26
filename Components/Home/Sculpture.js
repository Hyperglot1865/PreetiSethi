import React from 'react'
import styles from '../../src/styles/Home/Sculpture.module.css'
import Image from 'next/image'

export default function Sculpture() {
  return (
    <div className={styles.bigcontainer}>
        <div className={styles.left}>
            <Image className={styles.artistimg} src={'/artworks/41.jpg'} width={1000} height={1000} alt='image'/>
        </div>
        <div className={styles.right}>
            <div className={styles.heading}>Amba ka punar janam  or The Reincarnation of Amba as Shikhandi</div>
            <div className={styles.gap}><b>Medium:</b> Sculpture in Fibre</div>
            <div className={styles.gap}><b>Size:</b> 18x15”</div>
            <div className={styles.text}>
            The story of Princess Amba’s rebirth in the form of Shikhandi to take revenge from Bheeshma. Mahabharata</div>
        </div>
        
    </div>
  )
}