import React, { Component } from 'react'
// этот файл materialize подключен в проект два раза, соответственно если ты проверишь что в итоге в браузере, то увидишь
// что библиотека продублирована, конечно она должна быть подключена однажды и в какой нибудь index.css в корне
import 'materialize-css/dist/css/materialize.min.css'
import './Footer.css'

export default class Footer extends Component {
	render(){
		return (
			// что за div атрибут?
			// Вместо @ должно быть &copy; символы(многоточие например, знак рубля и т.д.) должны писаться с помощью юникода
			<footer div className = 'footer'>@ Irina Kashtanova</footer>
		)
	}
}


