import { createRef, useEffect, useState } from "react";
import styles from "../../styles/Feed.module.scss";
import useWindowSize from "../hooks/useWindowSize";

export default function Feed() {
  const windowSize = useWindowSize();

  const [imgSource, setImgSource] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);
  const [imgScroll, setImgScroll] = useState(0);

  const imgWrapperRef = createRef();

  // Initial load
  useEffect(() => {
    const arrs = ["imgs/1.jpg", "imgs/2.jpg", "imgs/3.jpg"];
    setImgSource(arrs);
  }, []);

  // Img Scrolling Position Calculation
  useEffect(() => {
    const imgComponents = imgWrapperRef.current.children;
    let imgScrollX = 0;

    for (let i = 0; i < imgIndex; i++) {
      const imgComponent = imgComponents[i];
      imgScrollX += imgComponent.offsetWidth;
    }

    setImgScroll(imgScrollX);
  }, [imgIndex, windowSize]);

  // Scroll Accept
  useEffect(() => {
    imgWrapperRef.current.scrollLeft = imgScroll;
  }, [imgScroll]);

  // Img Scroll Handling
  const onClickImg = () => {
    setImgIndex((prev) => (prev + 1) % imgSource.length);
  };

  return (
    <>
      <div className={styles.FeedWrapper}>
        <div
          className={styles.FeedImgWrapper}
          onClick={onClickImg}
          ref={imgWrapperRef}
        >
          {imgSource.map((img, i) => (
            <img className={styles.FeedImg} src={img} key={i}></img>
          ))}
        </div>

        <div className={styles.FeedInfo}>
          <div className={styles.FeedInfoTitle}>우주</div>
          <div className={styles.FeedInfoDesc}>
            항상 포착하고 있지만 그 실체가 새벽에 드러나는 새침한 우주. 우리의
            고향이자, 지금도 살아가고 있는 공간입니다. 가끔 하늘을 올려다본다면,
            나와 똑 닮은 별을 찾을 수 있지 않을까요?
          </div>
        </div>

        <div className={styles.FeedAuthor}>다른 작품 찾기</div>
      </div>
    </>
  );
}
