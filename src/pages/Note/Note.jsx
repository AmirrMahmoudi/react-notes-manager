import { NoteForm } from "components/NoteForm/NoteForm";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export const Note = (props) => {
  const { noteId } = useParams();
  const note = useSelector((store) =>
    store.notesSlice.noteList.find((note) => note.id == noteId)
  );

  const [isEditable, setIsEditable] = useState(false);

  const submit = (formValues) => {
    alert("submit");
  };
  console.log("***", note);
  return (
    <>
      {" "}
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={isEditable ? "Edit note" : note.title}
          note={note}
          onClickDelete={() => alert("hi")}
          onClickEdit={() => setIsEditable(!isEditable)}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
};
