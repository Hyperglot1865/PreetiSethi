import React from 'react'
import Navbar from '../../../Components/Home/Navbar'
import Footer from '../../../Components/Home/Footer'
import { Inter } from "next/font/google";
import styles from '../../styles/About/about.module.css'
import Image from 'next/image';

const inter = Inter({ subsets: ["latin"] });

export default function index() {
  return (
    <>
        <Navbar />
            <div className={styles.container}>
            <div>
              <Image className={styles.heroimg} src={'/heroimage/1.jpeg'} width={1000} height={1000} alt='image'/>
            </div>
              <div className={styles.name}>Preeti Sethi</div>
                <div className={styles.text}>Hailing from a creative family, my father, with being a businessman was also a stage actor, a
writer as well as produced and directed a couple of plays at Mandi House.I began my formal studies in the field of Art, at the age of 48years, encouraged by my son, I
went on to do my post-Graduation (2yrs 5 months) in Fine Arts in 2018 from Rachana Sansad College of Fine Arts Mumbai. My works of Art are often based on Mental Health and
Social awareness and Conceptual art and sculpture. Currently I am working on a Series of the greatest Epic “The Mahabharata” across various mediums, based on stories.
This sculpture, I have entered for the 64th NEA for Competition is, my 98th works on the Mahabharata, across various mediums of Art. I have participated in the XIIIth Florence
Biennale, Italy 2021 with 2 of my works i.e Installation Art and Mixed Media Sculpture, was selected to participate in the XIV Florence Biennale, Italy 2023, but couldn’t participate, due
to personal reasons. I have my Art studio in Lonavala. My journey to study various Art forms continues as I inculcate all my knowledge into my series on the Mahabharata, which is
intended at approximately 300 works, each work is based on a short story from the epic, merging into the main storyline.<br/><br/>
 </div>
            
            </div>
        <Footer />
    </>
  )
}
