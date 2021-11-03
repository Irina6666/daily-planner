import React, { useState } from "react";
import i18next from 'i18next';


function SelectLang (){
	const [langState, setLangState] = useState ('');
	return (
		<div className='row'>
			<select
			className='browser-default'
			onChange={(e) => {
				const selectLang = e.target.value;
				setLangState (selectLang)
				if (langState === 'ru'){
					i18next.changeLanguage('en')
				} 
				else {
					i18next.changeLanguage('ru')
				}	
			}}
			>
				<option value='en'>English</option>
				<option value='ru'>Русский</option>
			</select>
		</div>
	)
}
export default SelectLang;

