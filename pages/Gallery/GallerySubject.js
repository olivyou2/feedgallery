import styles from "../../styles/GallerySubject.module.scss";

/**
 *
 * @param {{imgSrc: string, imgName: string}} param0
 * @returns
 */
export default function GallerySubject({ imgSrc, imgName }) {
  return (
    <>
      <div className={styles.GallerySubject}>
        <div className={styles.GalleryImgWrapper}>
          <img className={styles.GalleryImg} src={imgSrc} />
        </div>
        <div className={styles.GalleryName}>{imgName}</div>
      </div>
    </>
  );
}
