import { NoteAPI } from "api/note";
import { Header } from "components/Header/Header";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNoteList } from "store/notes/notes-slice";

import { withAuthRequired } from "hoc/withAuthRequired";
import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";

import s from "./style.module.css";
export function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function fetchAllNotes() {
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNoteList(noteList));
  }
  useEffect(() => {
    fetchAllNotes();
  }, []);

  return (
    <div>
      <Header />
      <ButtonPrimary
        className={s.buttonAdd}
        onClick={() => navigate("/note/new")}
      >
        +
      </ButtonPrimary>
      <div className={s.workspace}>
        <Outlet />
      </div>
    </div>
  );
}

export const ProtectedApp = withAuthRequired(App);
