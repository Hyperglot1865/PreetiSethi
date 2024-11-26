import React from 'react'
import styles from '../../src/styles/Home/Story.module.css'
import Image from 'next/image'

export default function Story() {
  return (
    <div className={styles.bigcontainer}>
        <div className={styles.left}>
            <Image className={styles.artistimg} src={'/artworks/16.jpg'} width={1000} height={1000} alt='image'/>
        </div>
        <div className={styles.right}>
            <div className={styles.heading}>Dhitrashtra ki Mahatavakansha </div>
            <div className={styles.gap}><b>Medium:</b> Fibre Sculpture</div>
            <div className={styles.gap}><b>Size:</b> approx 10x10”</div>
            <div className={styles.text}>Dhitrashtras insecurity of the throne & the wrong done to him due to his blindness hampered his reigning over Hastinapur … he was always in fear that the kingdom would be taken away from him therefore this fear never let him enjoy his tenure as the king . He was chained to the throne like a prisoner & it was a governed by politics played by Shakuni & his dice ( arm rest)</div>
        </div>
        
    </div>
  )
}

 
 
