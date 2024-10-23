const linkDataFields = [
    'id',
    'title',
    'imgUrl',
    'link'
];

export default function createLinkData(id){
    const obj = {};

    setFields(obj, id);
    return Object.seal(obj);
}

export function createActiveData(data) {
    const obj = {};

    setFields(obj, null, data);
    return Object.seal(obj);
} 

function setFields(obj, id=null, data=null){

    if(data && !data.id){
        throw new Exception("[RN-Useful-Links]: Link data must have id field");
    }

    linkDataFields.forEach(field => {
        if(data){
            obj[field] = data[field];
        }else if(field === 'id') {
            obj[field] = id;
        } else {
            obj[field] = '';
        }
    });
}