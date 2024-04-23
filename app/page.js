import Image from "next/image";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src={"/400x600.jpeg"}
        width={600}
        height={600}
        className={styles.img}
        alt="imgLautrec"
      ></Image>
      <div className={styles.description}>
        <h3 className={styles.text}>THE CIRCUS</h3>
        <audio controls src="/TheCircus.mp3" className={styles.audio}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        <p className={styles.p}>
          Between 1887 and 1889, due to the excesses of his private life,
          Toulouse-Lautrec's physical and mental deterioration worsened, and the
          artist was admitted to a psychiatric hospital. During his stay at Dr.
          Sémelaigne's clinic, Lautrec, willing to show he had recovered his
          mental abilities, made a series of 22 pencil drawings that would later
          turn into the lithographs that are part of the Au Cirque series,
          printed after his death by his friend and publisher Maurice Joyant.
          The circus is not a random choice: on one hand, the artist
          nostalgically recalls his childhood among horses (his father was a
          racing enthusiast and had introduced him to this world as a child); on
          the other hand, the subject chosen let him make explicit the plastic
          inspiration from Degás, who was also fascinated by the world of horse
          racing. Even though the drawings were made by heart, Toulouse-Lautrec
          had great personal experience of the circus world and knew the
          characters animating the shows of the Nouveau Cirque as well as the
          equestrian performances of the Cirque Ferdinand in Montmartre,
          including the director Monsieur Loyal, the clowns Foottit and
          Chocolat, or the woman clown Cha-U-Kao, who was also a dancer at the
          Moulin Rouge. The drawings are unusually accurate, while visual fields
          have been widened, the public is absent and physical traits of
          protagonists appear unnatural, projecting long shadows and creating a
          general effect of fluctuation between the dream-like and the
          disturbing, just like the circus, at the end. The lithographs from
          these drawings were published a few years after Lautrec's death, in
          1905, by Manzi-Joyant and accompanied by a text by Arséne Alexandre.
          The exhibition includes all the copies belonging to this series as
          well as a second series of seventeen lithographs, published in 1931 on
          the occasion of the retrospective devoted to Lautrec.
        </p>
      </div>
    </main>
  );
}
