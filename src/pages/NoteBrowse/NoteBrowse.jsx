import { NoteList } from "containers/NoteList/NoteList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const NoteBrowse = (props) => {
  const noteList = useSelector((store) => store.notesSlice.noteList);

  return (
    <>
      {noteList?.length === 0 && (
        <div className="d-flex justify-content-center">
          <span>
            You don't have any note, do you want to {"  "}
            <Link to="/note/new">Create one</Link>
          </span>
        </div>
      )}
      <NoteList />
    </>
  );
};
