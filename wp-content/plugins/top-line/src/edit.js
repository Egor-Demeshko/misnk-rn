/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.css';

import { WORKING_HOURS, WORKING_HOURS_LABEL } from './utils/const';
import { Socials } from './components/Socials';
import socialsReducer from './components/social/socialsReducer';
import ShortCode from './components/shortcode/ShortCode';
import { useReducer } from 'react';
import { SOCIALS } from './components/social/consts';


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const [socialsState, socialsDispatch] = useReducer(function socialReducerWithWrapper(socials, actionObj){
		const newSocials = socialsReducer(socials, actionObj);
		setAttributes({[SOCIALS]: newSocials});
		return newSocials;
	},  attributes[SOCIALS]);
	return (
		<div { ...useBlockProps() }>
			<div className="header__top-row">
				<div className="container">
					<div className="rn-row align-items-center padding_on_left_right">
						<div className="rn-row__block">
							<i className="icon-clock"></i>
							<RichText 
								className="working-hours isHovered" 
								tagName="span" 
								value={attributes.workingHoursLabel ?? WORKING_HOURS_LABEL} 
								onChange={(value) => setAttributes({ workingHoursLabel: value})} />
							<RichText 
								className="font-medium isHovered" 
								tagName="span" 
								value={attributes.workingHours ?? WORKING_HOURS} 
								onChange={(value) => setAttributes({ workingHours: value})} />
						</div>
						<div className="rn-row__block">
							<i className="icon-mail"></i>
							<RichText
								className="isHovered"
								tagName="span" 
								value={attributes.emailLabel} 
								onChange={(value) => setAttributes({ emailLabel: value})} />
							<RichText
								className="isHovered"
								tagName="span" 
								value={attributes.email} 
								onChange={(value) => setAttributes({ email: value})} />
						</div>

						<div className="rn-row__special align-items-center highcontrast__icon_wrapper">
							<svg className="highcontrast__icon mr5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<path id="cancel" className="highcontrast__icon_cancel" fill="currentColor" d="M21.7699 2.22988C21.4699 1.92988 20.9799 1.92988 20.6799 2.22988L2.22988 20.6899C1.92988 20.9899 1.92988 21.4799 2.22988 21.7799C2.37988 21.9199 2.56988 21.9999 2.76988 21.9999C2.96988 21.9999 3.15988 21.9199 3.30988 21.7699L21.7699 3.30988C22.0799 3.00988 22.0799 2.52988 21.7699 2.22988Z" />
							</svg>
							<RichText
								className="isHovered"
								tagName="span" 
								value={attributes.versionLabel} 
								onChange={(value) => setAttributes({ versionLabel: value})} />
						</div>
						<ShortCode shortcode={attributes.shortcode} setAttributes={setAttributes}/>

						<Socials socials={socialsState} onSocialsChange={socialsDispatch} setAttributes={setAttributes}/>
					</div>
				</div>
			</div>
		</div>
	);
}
