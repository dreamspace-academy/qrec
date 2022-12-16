import { db } from "../firebase-config";
import {
   collection,
   getDocs,
   getDoc,
   addDoc,
   updateDoc,
   deleteDoc,
   doc
} from "firebase/firestore";

const attenCollectionRef = collection(db, "attendance")

class AttenDataService {

   getAllAttendance = () => {
      return getDocs(attenCollectionRef);
   }

   getAttendance = (id) => {
      const attenDoc = doc(db, "attendance", id);
      return getDoc(attenDoc);
   }

}

export default new AttenDataService();
