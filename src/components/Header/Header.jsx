import React from 'react'
import Button from "..Button/Button"

const Header = () =>{
	const tg = window.Telegram.WebApp;
	const onClose = () => {
		tg.close();
	}
	return (
		<div className = {'header'}>
		<Button> Close</Button>
		<span className ={'username'}>
		{tg.initDataUnsafe?.user?.username}
		</span>
		</div>
		)
}
export const Header