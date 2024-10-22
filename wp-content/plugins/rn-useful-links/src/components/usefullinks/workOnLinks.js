import createLinkData from "../../js/objects/linkData";

export const DELETE_LINK = 'delete_link';
export const ADD_LINK = 'add_link';
export const UPDATE_LINK = 'update_link';

export default function wirkOnLinks({links, action}){
    const {type} = action;
    switch(type){
        case DELETE_LINK:
            return deleteLink(links, action);
        case ADD_LINK:
            return addLink(links, action);
        case UPDATE_LINK:
            return updateLink(links, action);
        default: 
            return links; 
    }
}

function deleteLink(links, action){
    const {id} = action;

    return links.filter((link) => link.id !== id);
}

function addLink(links, action){
    delete action.type;
    return [...links, action];
}

function updateLink(links, action){
    const {id} = action;
    delete action.type;

    return links.map( (link) => {
        if(link.id === id){
            return {...link, ...action}
        }
    });
}

