import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section className={styles.hero_section}>
      <img className={styles.hero_img} src="./images/hero_img.png" alt="" />
      <div className={styles.hero_bottom}>
        <h1 className={styles.main_text}>Borderline</h1>
        <p>Tame Impala</p>

        <div className={styles.svgs_wrapper}>
          <img src="./images/circle_left.png" alt="" />
          <img src="./images/circle_middle.png" alt="" />
          <img src="./images/circle_right.png" alt="" />
        </div>
        <div className={styles.line}>
          <div className={styles.mini_line}></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
