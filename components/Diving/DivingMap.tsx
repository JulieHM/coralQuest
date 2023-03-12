import React from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import styles from "../../styles/Home.module.css";

type MapProps = {
  title: string;
  body: string | undefined;
  src: string | undefined;
  question: string | undefined;
  item: any;
  setItem: any;
  onSave: any;
};

export const DivingMap = ({
  title,
  body,
  src,
  question,
  item,
  setItem,
  onSave,
}: MapProps) => {
  const [content, setContent] = React.useState("");

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    setItem(content);
  };
  return (
    <div className={styles["mapPage"]} onSubmit={(e) => e.preventDefault}>
      <h1 className={styles["title"]}>{title}</h1>
      <p className={styles["body"]}>{body}</p>
      <iframe
        className={styles["iframeMap"]}
        src={src}
        width="55rem"
        height="350rem"
        style={{ border: "0" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      <label>{question}</label>
      <textarea
        value={content}
        onChange={handleTextAreaChange}
        name="observation"
        className={styles["textarea"]}
        required></textarea>
    </div>
  );
};
