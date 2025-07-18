import s from "./Error.module.scss";
import { useNavigate } from "react-router-dom";



export function Error() {
  const navigate = useNavigate();
  return (
    <div className={s.container}>
      <h1 className={s.container__title}>404</h1>
      <h2 className={s.container__description}>Oups! La page que vous demandez n'existe pas.</h2>
      <p className={s.container__return} onClick={() => navigate("/")}>Retourner sur la page d'accueil</p>
    </div>
  );
}