import { NoteAPI } from "api/note";
import { TextCard } from "components/TextCard/TextCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteNote } from "store/notes/notes-slice";

import s from "./style.module.css";
export const NoteList = ({ noteList }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function deleteNote_(note) {
    if (window.confirm("Are you sure to delete this note?")) {
      NoteAPI.deleteById(note.id);
      dispatch(deleteNote(note));
      navigate("/");
    }
  }

  return (
    <div className="row justify-content-center">
      {noteList.map((note) => {
        return (
          <div key={note.id} className={s.card_container}>
            <TextCard
              title={note.title}
              subtitle={note.created_at}
              content={note.content}
              onClickTrash={() => deleteNote_(note)}
              onClick={() => navigate("note/" + note.id)}
            />
          </div>
        );
      })}
    </div>
  );
};
