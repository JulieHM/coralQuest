import styles from "../../styles/Home.module.css";

type MapProps = {
  title: string;
  body: string | undefined;
  src: string | undefined;
  question: string | undefined;
};

export const DivingMap = ({ title, body, src, question }: MapProps) => {
  return (
    <form
      id="myForm"
      action="/submit"
      method="post"
      className={styles["mapPage"]}
      onSubmit={(e) => e.preventDefault}>
      <h1 className={styles["title"]}>{title}</h1>
      <p className={styles["body"]}>{body}</p>
      <iframe
        className={styles["iframeMap"]}
        src={src}
        width="55rem"
        height="350rem"
        style={{ border: "0" }}
        //allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      <label>{question}</label>
      <textarea
        name="observation"
        className={styles["textarea"]}
        required></textarea>
      {/* <button type="submit" >Neste</button> */}
    </form>
  );
};
