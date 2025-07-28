import { db } from "../../lib/firebase_config";
import { collection, addDoc, setDoc, doc, updateDoc, getDocs, getDoc, deleteDoc } from 'firebase/firestore';

export const addPlansAcess = async (planData) =>{
    try{
        const plans_refference  = await addDoc(collection(db,'plans'),planData);
        console.log("funcionou. DocRef: " , plans_refference.id)
        return plans_refference.id;
    }catch (e){
        console.log("erro: ", e)
        throw e;
    }
}

export const setPlansAcess = async (planId, planData) => {
    try{
        const plans_refference = doc(db, 'plans', planId);
        await setDoc(plans_refference, planData);
        console.log("sucesso! Id: ", planId)
        return planId;
    } catch(e){
        console.log("erro: ", e);
        throw e;
    }
}

export const updatePlansAcess = async (planId, planData) => {
    try{
        const plans_refference = doc(db, 'plans', planId);
        await updateDoc(plans_refference, planData);
        console.log("sucesso! Id: ", planId)
        return planId;
    } catch(e){
        console.log("erro: ", e)
        throw e;
    }
}

export const getPlansAcess = async () =>{
    try{
        const res = await getDocs(collection(db, 'plans'));

        const plans = res.docs.map(doc =>({
            id: doc.id,
            ...doc.data()
        }));
        console.log('funcionando. Retorno: ', plans)
        return plans;
    }catch(e){
        console.log('erro: ', e);
        throw e;
    }
   
}

export const deletePlansAcess = async (planId) => {
    await deleteDoc(doc(db, 'plans', planId));
    return true; 
};