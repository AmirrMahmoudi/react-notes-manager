import s from "./style.module.css";

import { TextCard } from "components/TextCard/TextCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const NoteList = (props) => {
  const noteList = useSelector((store) => store.notesSlice.noteList);
  const navigae = useNavigate();
  return (
    <div className={`row justify-content-center`}>
      {noteList.map((note) => {
        return (
          <div className={s.card_container}>
            <TextCard
              title={note.title}
              content={note.content}
              subtitle={note.createed_at}
              onClick={() => navigae("/note/" + note.id)}
              onClickTrash={() => alert("onClickTrash")}
            />
          </div>
        );
      })}
    </div>
  );
};
