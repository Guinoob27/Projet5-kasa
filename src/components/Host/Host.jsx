import s from "./Host.module.scss";

export function Host(props) {
  return (
    <div className={s.host}>
      <div className={s.host_name}>{props.name}</div>
      <div className={s.profile_pic}>
        <img src={props.picture} alt="Host" />
      </div>
    </div>
  );
}