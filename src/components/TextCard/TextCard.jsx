import { useState } from "react";
import { Trash } from "react-bootstrap-icons";
import s from "./style.module.css";
export const TextCard = ({
  title,
  content,
  subtitle,
  onClick,
  onClickTrash,
}) => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isTrashHovered, setIsTrashHovered] = useState(false);

  function onClickTrash_(e) {
    onClickTrash();
    e.stopPropagation();
  }

  return (
    <div
      onClick={onClick}
      className={`card ${s.container} ${
        isCardHovered ? "border-primary" : s.unHover
      }`}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <div className="card-body">
        <div className={s.title_row}>
          <h5 className="card-title">{title}</h5>
          <Trash
            className={`${isTrashHovered ? "text-danger" : "text-muted"}`}
            onClick={onClickTrash_}
            size={20}
            onMouseEnter={() => setIsTrashHovered(true)}
            onMouseLeave={() => setIsTrashHovered(false)}
          />
        </div>
        <h6 className={`card-subtitle mb-2 text-muted`}>{subtitle}</h6>
        <p className={`card-text ${s.text_content}`}>{content}</p>
      </div>
    </div>
  );
};
