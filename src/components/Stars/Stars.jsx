import { StarFill } from "react-bootstrap-icons";
import s from "./Stars.module.scss";

export function Stars() {
  return (
    <div className={s.star_container}>
      <StarFill />
      <StarFill />
      <StarFill />
      <StarFill />
      <StarFill />
    </div>
  );
}