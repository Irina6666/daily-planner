import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css'
import './index.css';
import App from './App';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend'

import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'


i18n
	.use(initReactI18next) 
	.use(LanguageDetector)
	.use(HttpApi)
	.init({
		supportedLngs: ['en', 'ru'],
		fallbackLng: "en",
		detection: {
			order: ['htmlTag','cookie', 'localStorage','path', 'subdomain'],
			caches:['cookie'],
    },
    backend:{
		loadPath: './assets/locales/{{lng}}/translation.json'  
    },
    react: { useSuspense: false }
	});


ReactDOM.render(<App />, document.getElementById('root'));


