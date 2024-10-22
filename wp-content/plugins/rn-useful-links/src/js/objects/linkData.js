export default function createLinkData(id){
    return Object.seal({
        id,
        title: '',
        imgUrl: '',
        link: ''
    });
}