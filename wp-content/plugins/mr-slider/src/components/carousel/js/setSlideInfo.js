export default function setSlideInfo(state, action){

    switch(action.type){
        case "update_slide": 
            return updateSlide(state, action);
        case "delete":
            return deleteSlide(state, action);
        case "add_slide":
            return action.slides;
        default:
            return state;
    }    
}

function updateSlide(state, action){
    const data = action?.data;

    if(!data) return state;

    return state.map((obj) => {
        if(obj.id === data.id){
            return { ...obj, ...data};
        }
        return obj;
    })
}

function deleteSlide(state, {id}){
    return state.filter( (obj) => obj.id !== id)
                .map((obj) => {
                    return {...obj};
                });
}
