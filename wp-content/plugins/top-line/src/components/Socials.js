import { useState } from 'react';
import { Popover } from '@wordpress/components';
import { SingleSocial } from './social/SingleSocial.js';


export function Socials({ socials, onSocialsChange}) {
    const [ isVisible, setIsVisible ] = useState( false );

    return (
        <div className="row__links justify-content-end popover_anchor" 
            onPointerEnter={() => setIsVisible(() => true)}
            onPointerLeave={() => setIsVisible(() => false)}>
            {socials.map((social) => social.active && (
                <a key={social.id} href={social.link} target="_blank" title="Подробнее" className={`eliminate-link`}>
                    <i className={`advantages-icon-${social.slug}`}></i>
                </a>
            ))}

            {isVisible && (
                <div className="popover">
                    <Popover>
                        <div className="popover-list">
                            {socials.map((social) => (
                                <SingleSocial {...social} key={social.id} onSocialsChange={onSocialsChange} />
                            ))}
                        </div>
                    </Popover>
                </div>
            )}
        </div>
    )
}