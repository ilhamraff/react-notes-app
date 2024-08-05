import React from "react";
import { register } from "../utils/network-data";
import RegisterInput from "../components/RegisterInput";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../contexts/AppContext";

function RegisterPage() {
  const navigate = useNavigate();
  const { locale } = React.useContext(AppContext);

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <section className="register-page">
      <h2>{locale === "id" ? "Daftar Dulu Bro" : "Register First Bro"}</h2>
      <RegisterInput register={onRegisterHandler} />
      <p>
        {locale === "id" ? "Kembali ke " : "Back to "}
        <Link to="/">{locale === "id" ? "Masuk" : "Login"}</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
