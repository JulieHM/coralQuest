import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

interface LoginType {
  email: string;
  password: string;
}
const LoginPage = () => {
  const { logIn } = useAuth();
  const router = useRouter();

  const methods = useForm<LoginType>({ mode: "onBlur" });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: LoginType) => {
    try {
      await logIn(data.email, data.password);
      //router.push("/avatar");
      router.push("/preTest");
    } catch (error: any) {
      //console.log(error.message);
    }
  };
  return (
    <div className={`${styles.backgroundDiv} ${styles.about}`}>
      <h2>Logg inn</h2>
      <FormProvider {...methods}>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className={styles["loginDiv"]}>
              <label htmlFor="email">E-post</label>

              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className={styles["loginInput"]}
              />
              {errors.email && (
                <p className="text-red-400">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div>
            <div className={styles["loginDiv"]}>
              <label htmlFor="password">Passord</label>

              <input
                className={styles["loginInput"]}
                type="password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password.message}</p>
              )}
            </div>
          </div>

          <button type="submit" className={styles["button"]}>
            Logg inn
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginPage;
