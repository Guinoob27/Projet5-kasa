import logo from "../../assets/images/logo.png";
import s from "./Header.module.scss";
import { useNavigate } from "react-router-dom";




export function Header() {
  const navigate = useNavigate();
  return (
    <header>
       <img
        onClick={() => navigate("/")}
        src={logo}
        className={s.header_logo}
        alt="Logo Kasa"
      />
      <ul>
        <li>
          <a href="#" onClick={() => navigate("/")}>
            ACCUEIL
          </a>
        </li>
        <li>
          <a href="#" onClick={() => navigate("/about")}>
            A PROPOS
          </a>
        </li>
      </ul>
    </header>
  )
}