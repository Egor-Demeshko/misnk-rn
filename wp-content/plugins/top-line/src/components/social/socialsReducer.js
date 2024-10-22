import {SET_SOCIALS, SOCIALS} from "./consts.js";

export default function socialsReducer(socials, actionObj, setAttributes) {
    switch (actionObj.type) {
        case SET_SOCIALS:
            return chooseSocials({socials, actionObj, setAttributes});
        default:
            return socials
    }
}   


function chooseSocials({socials, actionObj, setAttributes}) {
    const {id, link} = actionObj;

    const newSocials = socials.map((socialObj) => {
        if(socialObj.id === id){
            const newSocialObj = {...socialObj};
            newSocialObj.active = link.length === 0 ? false : true;
            newSocialObj.link = link;

            return newSocialObj;
        }

        return socialObj;
    });
    return newSocials;
}