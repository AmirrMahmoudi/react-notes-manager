import axios from "axios";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { FirebaseApp } from "utils/firebase";

export class NoteAPI {
  static async create(formValues) {}
  static async fetchAll() {
    const q = query(
      collection(FirebaseApp.db, "notes"),
      orderBy("created_at", "asc")
    );
    const response = getDocs(q);
    return (await response).docs.map((document) => {
      return {
        id: document.id,
        ...document.data(),
      };
    });
  }
  static async deleteById(noteId) {}
  static async updateById(id, values) {}
}
