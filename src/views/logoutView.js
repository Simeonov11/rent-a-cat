import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseInit.js";
import page from "../lib/page.js";


export default async function(ctx) {
    
    try {
        await signOut(auth);
    
        page.redirect('/');
        console.log('Logged Out');
    } catch (error) {
        console.log(error.message);
    }
}