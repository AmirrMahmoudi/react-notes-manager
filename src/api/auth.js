import { FirebaseApp } from "services/firebase";
import {
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
export class AuthAPI {
  static async signIn(email, password) {
    const response = await signInWithEmailAndPassword(
      FirebaseApp.auth,
      email,
      password
    );
    return response.user.toJSON();
  }
  static async signup(email, password) {
    const response = await createUserWithEmailAndPassword(
      FirebaseApp.auth,
      email,
      password
    );
    return response.user.toJSON();
  }
  static async signout() {
    // await
    signOut(FirebaseApp.auth);
  }
}
