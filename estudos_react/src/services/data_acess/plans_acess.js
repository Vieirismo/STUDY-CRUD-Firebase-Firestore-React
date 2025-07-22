import { db } from "../../lib/firebase_config";
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';

export const addPlansAcess = async () =>{
    try{
        const plans_refference  = await addDoc(collection(db,'plans'),{
            text: "Test",
            value: 11
        });
        console.log("funcionou. DocRef: " , plans_refference.id)
    }catch (e){
        console.log("erro: ", e)
    }
}

export const SetPlansAcess = async (planId, planData) => {
    try{
        const plans_refference = doc(db, 'plans', planId);
        await setDoc(plans_refference, planData);
        console.log("sucesso! Id: ", planId)
    } catch(e){
        console.log("erro: ", e)
    }
}