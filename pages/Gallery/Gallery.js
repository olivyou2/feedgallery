import styles from "../../styles/Gallery.module.scss";
import GallerySubject from "./GallerySubject";

export default function Gallery() {
  return (
    <>
      <div className={styles.GalleryWrapper}>
        <div className={styles.GalleryAuthor}>박운호 白</div>
        <div className={styles.GalleryAuthorDesc}>
          당신의 이름 아래 달려있는 자기소개는, 정말 당신을 소개하고 있나요?
          당신의 나이, 이름, 사는 곳, 혈액형, 그것이 당신을 정말 대표할 수
          있다고 생각하나요? 그 어떤 추상적 기호도 그 사람의 1% 조차 나타낼 수
          없다고 생각합니다. 영화는 물리적 실체를 담아냈다는 점에서, 문헌과
          대비되는 구체적 기호입니다. 사진도 마찬가지입니다. 제가 촬영한 사진을
          통해 저를 설명하고자 합니다.
        </div>

        <div className={styles.GalleryOther}>
          <div className={styles.GalleryOtherTitle}>이 작가의 다른 작품</div>
          <div className={styles.GallerySubjectWrapper}>
            <GallerySubject
              imgSrc="imgs/1.jpg"
              imgName="그대의 불행은 나의행복"
            />
            <GallerySubject
              imgSrc="imgs/4.jpeg"
              imgName="점집합과 추억, 기억"
            />
            <GallerySubject imgSrc="imgs/5.jpg" imgName="에어라인 도도" />
          </div>
        </div>
      </div>
    </>
  );
}
