import React, { Component } from 'react'



class Test extends Component {
    
	render(){
		
		return (  
			<div>
				
			</div>
		)
	} 
}
export default Test;

{languages.map(({ code, name, country_code }) => (
	<li key={country_code}>
		<button className="dropdown-item" onClick = {() => i18next.changeLanguage(code)
		}>
			{name}
		</button>
	</li>
))}
</ul>





<ul class="right hide-on-med-and-down">
<select className='browser-default'>
{languages.map(({ code, name }) => (
<option key={code} onClick = {() => i18next.changeLanguage(code)}>
{name}
	</option>
	
))}
</select>
</ul>




<
const languages = [ 
{
code: 'en',
name: 'English',
country_code: 'gb'
},
{
code: 'ru',
name: 'Русский',
country_code: 'ru'
}
]