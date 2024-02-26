import { NoteAPI } from "api/note";
import { NoteForm } from "components/NoteForm/NoteForm";
import { withAuthRequired } from "hoc/withAuthRequired";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { deleteNote, updateNote } from "store/notes/notes-slice";
export const Note = (props) => {
  const { noteId } = useParams();
  const note = useSelector((store) =>
    store.notesSlice.noteList.find((note) => note.id == noteId)
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);

  const submit = async (formValues) => {
    const updatedNote = await NoteAPI.updateById(note.id, formValues);
    dispatch(updateNote(updatedNote));
    setIsEditable(false);
  };

  async function deleteNote_() {
    if (window.confirm("Are you sure to delete this note?")) {
      NoteAPI.deleteById(note.id);
      dispatch(deleteNote(note));
      navigate("/");
    }
  }

  console.log("***", note);
  return (
    <>
      {" "}
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={isEditable ? "Edit note" : note.title}
          note={note}
          onClickDelete={deleteNote_}
          onClickEdit={() => setIsEditable(!isEditable)}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
};

export const ProtectedNote = withAuthRequired(Note);
