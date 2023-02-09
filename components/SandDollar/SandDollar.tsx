import { useContext } from "react";
import Image from "next/image";
import { auth, writeUserData } from "../../firebaseConfig";
import { context } from "../../pages/_app";

export const SandDollar = ({}) => {
  //const [sandDollarCount, setSandDollarCount] = React.useState(0);
  const { avatarName, sandDollarCount, setSandDollarCount } =
    useContext(context);

  return (
    <>
      <div
        style={{
          width: "5rem",
          height: "2rem",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          background: "#3CB2BA",
        }}>
        <Image
          src="/images/sanddollar.svg"
          width={30}
          height={30}
          alt="sand dollar"
        />
        <p>{sandDollarCount}</p>
      </div>
    </>
  );
};
