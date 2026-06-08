import { useState } from "react";
import Header from "../header/Header";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  /* ---------------- INPUT HANDLERS ---------------- */
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    if (process.env.NODE_ENV == "development") {
      console.log(`K [DEV_DEBUG]: Email - ${email}`);
    }
  };

  const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);

    if (process.env.NODE_ENV == "development") {
      console.log(`K [DEV_DEBUG]: Password (!!!!) - ${pass}`);
    }
  };

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // backend
    // try {
    //   // console.log(email)
    //   // console.log(pass)
    //   const res = await axiosBackend.post("/auth/login", {
    //     email,
    //     pass,
    //   });
    //   const data = res.data;
    //   if (process.env.NODE_ENV == "development") {
    //     console.log(data);
    //   }

    //   if (data.success) {
    //     if (data.two_factor_status) {
    //       // TODO: 2FA!!!!
    //     } else {
    //       setError("Вхід успішний!");
    //       setUser(data.user);
    //       navigate("/onboarding");
    //     }
    //   }
    // } catch (err: any) {
    //   console.error(err);
    //   const msg = err?.response?.data?.message;
    //   console.log(msg);

    //   switch (msg) {
    //     case "wrong-email":
    //       setError("Неправильна пошта");
    //       break;
    //     case "wrong-password":
    //       setError("Неправильний пароль");
    //       break;
    //     case "attempts-left":
    //       setError("Залишилось 2 спроби");
    //       break;
    //     case "limit-exceeded":
    //       setError("Ліміт спроб вичерпано, спробуйте через 10 хвилин");
    //       break;
    //     default:
    //       setError("Помилка входу");
    //   }
    // } finally {
    //   setSubmitting(false);
    // }
  };

  return (
    <main className="bg-[#FBFBFD] flex flex-col min-h-screen m-0 text-black">
      <Header />

      <div className="pt-20">
        <div className="px-4 text-center">
          <h1>Увійти в акаунт</h1>
          <p>
            Почніть керувати задачами <br /> разом з командою
          </p>
          <img
            src="/logo_trans.png"
            alt="Almost transparent Kanri logo"
            width={300}
            height={400}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Пошта: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Введіть вашу пошту"
        />

        <label htmlFor="username">Ім'я: </label>
        <input
          type="username"
          name="username"
          id="username"
          placeholder="Введіть ваше ім’я"
        />

        <label htmlFor="password">Пароль: </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Введіть пароль"
        />

        <button
          onClick={handleSubmit}
          className="bg-linear-to-r from-[#407EF9] to-[#7242D9] text-white! shadow-none focus:ring-4 text-base focus:ring-blue-300! font-medium! rounded-3xl! px-24! py-3! focus:outline-none dark:focus:ring-blue-800"
        >
          Увійти
        </button>

        <div>
          <p className="text-[#374151]">Не маєте акаунту?</p>{" "}
          <a href="../register" className="text-[#3B82F6]">
            Зареєструватися
          </a>
        </div>
      </form>
      {/*  */}
    </main>
  );
}
