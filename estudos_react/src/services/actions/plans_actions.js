import { addPlansAcess, getPlansAcess, setPlansAcess, updatePlansAcess } from "../data_acess/plans_acess";

export async function addPlansAction(planData) {
    try{
        const docId = await addPlansAcess(planData);
        console.log('funcionou. Id: ', docId.id);
        return docId.id;
    }catch(e){
        console.error('não funcionou. Erro: ', e);
        throw e; // relança o erro para quem chamou tratar
    };
}

export async function setPlansAction(planId, planData) {
    try{
        await setPlansAcess(planId, planData);
        console.log('funcionou. PlaId: ', planId);
        return {success: true, id: planId};
    }catch(e){
        console.error('não funcionou. Erro: ', e)
        throw e; 
    }
}

export async function updatePlansAction(planId, planData) {
    try{
        await updatePlansAcess(planId, planData);
        console.log('funcionou. PlaId: ', planId);
        return {success: true, id: planId};
    }catch(e){
        console.error('não funcionou. Erro: ', e)
        throw e; 
    }

}

export async function getPlansAction() {
    try{
        const res = await getPlansAcess();
        console.log("funcionando. Plans: ", res);
        return res;
    }catch(e){
        console.error("erro: ", e);
    }
   
}