import { addDoc, collection } from "firebase/firestore";
import {db} from "../firebase/firebase.js";

export class RecipeServices {
    static async addItem(item) {
        try {
            const docRef = await addDoc(collection(db, "recipe"), {
                name: item.name,
                quantity: item.quantity,
                description: item.description
            });
            item.id = docRef.id;
            return item;
        } catch(e) {
            throw e;
        }
    }
}