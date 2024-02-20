import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export const Note = (props) => {
  const { noteId } = useParams();
  const note = useSelector((store) =>
    store.notesSlice.noteList.find((note) => note.id == noteId)
  );
  console.log("***", note);
  return <>Note</>;
};
