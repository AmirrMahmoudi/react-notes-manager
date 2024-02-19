import { TextCard } from "components/TextCard/TextCard";

export const NoteBrowse = (props) => {
  return (
    <>
      <TextCard
        title="Super note"
        subtitle="01/01/2022"
        content="Blabla bla Blabla bla Blabla bla Blabla bla Blabla bla Blabla bla Blabla bla Blabla bla Blabla bla Blabla bla Blabla bla Blabla bla Blabla bla "
        onClick={() => alert("OnClick !")}
        onClickTrash={() => alert("OnClick Trash!")} 

      />
    </>
  );
};
