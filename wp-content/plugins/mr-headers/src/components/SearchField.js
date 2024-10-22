import { __ } from '@wordpress/i18n'; 

export default function SearchField(){
    return (
        <div className="header__search">
            <form role="search" method="get" id="searchform">
                <input className="header__search-input" type="text" name="s" id="s" />
                <button id="searchsubmit" value={__( 'Найти', 'mr-headers' )} className="eliminate_btn"><i className="icon-search">&#xe986;</i></button>
            </form>
            <div className="dropdown-panel" id="header_title_search" role="region" aria-live="polite"></div>
        </div>
    )
}