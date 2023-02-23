import styles from "../../styles/Home.module.css";

type MapProps = {
  title: string;
  body: string;
  src: string;
  question: string;
};

export const DivingMap = ({ title, body, src, question }: MapProps) => {
  return (
    <div className={styles["mapPage"]}>
      <h1 className={styles["title"]}>{title}</h1>
      <p className={styles["body"]}>{body}</p>
      <iframe
        className={styles["iframeMap"]}
        src={src}
        width="750vw"
        height="500vh"
        style={{ border: "0" }}
        //allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      <label>{question}</label>
      <textarea className={styles["textarea"]}></textarea>
    </div>
  );
};
