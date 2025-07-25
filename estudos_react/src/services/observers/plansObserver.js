import React from "react";
import { db } from "../../lib/firebase_config"; 
import { collection, onSnapshot} from 'firebase/firestore';



export function getPlansObserver(callback) {
    try {
      
        const plansCollectionRef = collection(db, 'plans');

      
        const unsubscribe = onSnapshot(plansCollectionRef, (querySnapshot) => {
            const plans = [];
            querySnapshot.forEach(doc => {
                plans.push({ id: doc.id, ...doc.data() });
            });
            
            console.log("Observer - Dados recebidos: ", plans);
         
            if (callback) { 
                callback(plans); 
            }
        }, (error) => {
            console.error("Observer - Erro: ", error);
            if (callback) {
                callback([], error); 
            }
        });

     
        return unsubscribe;

    } catch(e) {
        console.error("Erro ao configurar observer: ", e);
        throw e;
    }
}