export default function createAction(type, data){
    return {
        type,
        ...data
    };
}