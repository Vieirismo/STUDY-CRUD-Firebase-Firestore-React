import { addPlansAcess } from "../data_acess/plans_acess";

export async function addPlansAction(params) {
    const response = await addPlansAcess();
    return response.id
}
export async function setPlansAction(params) {
    const response = await setPlansAction();
    return response;
}