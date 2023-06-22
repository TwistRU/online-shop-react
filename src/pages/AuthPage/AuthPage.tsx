import React from "react";
import s from './AuthPage.module.scss'
import {Footer} from "../../components/Footer/Footer";
import {Header} from "../../components/Header/Header";
import {Button} from "../../components/ui/Button/Button";

export const AuthPage = () => {
	return (
		<div className={s.content}>
			<Header styled/>
			<main className={s.main}>
				<input className={s.input}/>
				<Button onClick={() => {console.log("Logged")}} text={"Войти"}/>
			</main>
			<Footer />
		</div>
	)
}