import s from "./Tag.module.scss";

export function Tag(props) {
  return <div className={s.tag}>{props.tag}</div>;
}