import { RichText } from '@wordpress/block-editor';

export default function OrganizationNames({
    topname,
    middlename, 
    bottomname, 
    description, 
    setAttributes
}){
    function saveAttribute({slug, value}){
        switch(slug){
            case 'topname':
                setAttributes({topname: value})
                break;
            case 'middlename':
                setAttributes({middlename: value})
                break;
            case 'bottomname':
                setAttributes({bottomname: value})
                break;
            case 'description':
                setAttributes({description: value})
                break;
        }
    }
    return (
        <div className="rn-row justify-center text-center">
            <div className="header__logo-text">
                <div className="header__logo-title">
                    <RichText
                        className="rn-header__is-hovered" 
                        tagName="p"
                        value={topname}
                        onChange={value => saveAttribute({slug: 'topname', value})}
                    />
                    <RichText
                        className="rn-header__is-hovered"
                        tagName="p"
                        value={middlename}
                        onChange={value => saveAttribute({slug: 'middlename', value})}
                    />
                    <RichText
                        className="rn-header__is-hovered"
                        tagName="h4"
                        value={bottomname}
                        onChange={value => saveAttribute({slug: 'bottomname', value})}
                    />
                </div>
                <div className="header__logo-slogan ">
                    <RichText
                        className="rn-header__is-hovered"
                        tagName="span"
                        value={description}
                        onChange={value => saveAttribute({slug: 'description', value})}
                    />
                </div>
            </div>
    </div>
    )
}