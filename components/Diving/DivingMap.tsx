import styles from "../../styles/Home.module.css";

type MapProps = {
  title: string;
  body: string;
  src: string;
  question: string;
};

export const DivingMap = ({ title, body, src, question }: MapProps) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{body}</p>
      <iframe
        src={src}
        width="600"
        height="450"
        style={{ border: "0" }}
        //allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      <label>{question}</label>
      <textarea></textarea>
    </>
  );
};
