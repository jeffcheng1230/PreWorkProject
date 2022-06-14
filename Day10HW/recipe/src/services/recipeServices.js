import { addDoc, collection, doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.js";

export class RecipeServices {
  static async addItem(item) {
    try {
      const docRef = await addDoc(collection(db, "recipe"), {
        name: item.name,
        quantity: item.quantity,
        description: item.description,
      });
      item.id = docRef.id;
      return item;
    } catch (e) {
      throw e;
    }
  }

  static async editItem(name, quantity, description, id) {
    try {
        await setDoc(doc(db, "recipe", id), {
            name: name,
            quantity: quantity,
            description: description,
        });
     } catch (e) {
      throw e;
    }
  }

  static async removeItem(itemID) {
    try {
      await deleteDoc(doc(db, "recipe", itemID));
    } catch (e) {
      throw e;
    }
  }
}
