import s from "./Accordion.module.scss";
import { useState } from "react";
import { ChevronUp } from "react-bootstrap-icons";

export function Accordion({ buttonText, description, equipement }) {
   const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <article className={s.accordion}>
      <div className={s.accordion__title} onClick={toggleDropdown}>
        {buttonText}
        <ChevronUp
          style={{
            transform: isOpen ? "rotate(-180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
        </div>
        {isOpen && (
        <div className={`${s.accordion__list}`}>
          {description ? (
            <p>{description}</p>
          ) : (
            equipement.map((element, index) => <p key={index}>{element}</p>)
          )}
        </div>
      )}
    </article>
  );
}