import './global_css'
import {scrollToY} from './smooth_scroll'

let navigation-transform = 0

tag app
	def mount
		# Hide navigation on scroll
		let scroll_timeStamp = 9999999999
		let last_known_scroll_position = 0

		def onscroll e
			const last_known_scroll_position = window.scrollY

			setTimeout(&, 100) do
				if window.scrollY < last_known_scroll_position || not window.scrollY
					navigation-transform = 0
				elif window.scrollY > last_known_scroll_position
					if window.innerWidth > 767
						navigation-transform = -48
					else
						navigation-transform = 48
				imba.commit()

		document.addEventListener('scroll', onscroll, {passive: true});

	# Smooth scroll to anchors
	def scrollto id
		const target = document.getElementById(id)
		scrollToY(target.offsetTop || 0, 1500, "easeInOutQuint")

	<self>
		<nav[p:0 16px pos:fixed t@md:0 b@lt-md:0 transform:translateY({navigation-transform}px) of:visible d:flex m:auto us:none bg@lt-md:cool9 w:100% jc:center @lt-md:space-around]>
			<a @click=scrollto('about')> "About"
			<a @click=scrollto('works')> "Works"
			<a @click=scrollto('contact')> "Contact"

		<header.viewport_box id="header" [p:0 8px fld:row]>
			<h1>
				<span> '👋🏼 I am Bohuslav'
				<span[ta:right]> '- web developer'
				<span> 'who loves to design!'
			<img [max-height:86vh max-width:50%] src="/images/peep.png" aria-label="Bohuslav">

		<section.viewport_box id="about">
			<article.article>
				<h1[$c1:amber2 $c2:amber6]> 'About me'
				<p> 'I live in Khust, Ukraine. I love to code, design, play on violin, listen classical music, run on mountains and pet cats.'
				<p> "I started my education in 2018. I choose web development as my primary subject by heart. Starting with HTML and CSS, I continued with Python and Django. Back in that time backend development was more attractive for me. During that time trying to learn CSS grid I found {<a rel="noreferrer" target="_blank" href="https://scrimba.com"> "a nice website"} with interactive videos where you may pause the video, modify the code and run it in minibrowser right in your browser and then continue. I was fascinated with that technology. I wondered how it is made. When I find out that it is made with {<a rel="noreferrer" target="_blank" href="https://imba.io"> "Imba"} — I was sure — I will try this language in the future."
				<p> "After getting better at Django and learning some JavaScript I decided to make some game and learn Imba in that way. It was {<a href="/poopsssweemer/dist/" target="_blank"> "Poopsssweemer"}. It's like minesweeper but with poops instead. I spend a good week or two and finish with something like this:"
			<figure>
				<img src="/images/poopsssweemer.png" aria-label="Poopsssweemer game. Won middle difficulty">
				<figcaption> "Poopsssweemer game. Won middle difficulty"
			
			<article.article>
				<p> "After successful completion of Poopsssweemer I felt enough strength in myself to create something awesome together with Django and Imba."


		<section.viewport_box id="works">
			<article.article>
				<h1[$c1:yellow2 $c2:yellow6]> 'My works'
				<h2[$c1:sky2 $c2:sky6]> "Bolls Bible"
				<p> "The first big project that I am the most proud of."
				<p> "There was no good app for reading Bible that would satisfy my needs and I have decided to create one myself. I am using {<mark> "Django"} for backend and {<mark> "Imba"} for frontend. I created a database for Bible translations, bookmarks, and notes. {<mark> "Developed API"} for frontend, main part of which can be used by anybody. Hosted the app with {<mark> "Google App Engine"} and the database with {<mark> "Amazon RDS"}. And it is still up on {<a rel="noreferrer" target="_blank" href="https://bolls.life"> "bolls.life"}."
				<p> "I have learned a lot with this project. I use {<mark> "IndexedDB"} to store translations for offline, {<mark> "PWA"} — {<mark> "Progressive Web Application"} that made it an installable app working offline. A lot of time spent for {<mark> "SEO"}. Connected it to {<mark> "Google Search Console"} for better analytic of search presence. Improved the page loading, HTML tagging. But the most time spent on the frontend side designing and implementing the UI. It is the most challenging part for me in any project — create beautiful and usable UI."
				<p> "Along with launching the app as a website I did launch it as an electron application or as an app client to {<a rel="noreferrer" target="_blank" href="https://www.microsoft.com/store/productId/9PFBQBR77J81"> "Microsoft Store"}, {<a rel="noreferrer" target="_blank" href="https://snapcraft.io/bolls"> "Snap Store"}, {<a rel="noreferrer" target="_blank" href="https://appgallery7.huawei.com/#/app/C102565527"> "Huawei App Gallery"}, {<a rel="noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=life.bolls.bolls"> "Google Play Market"} and {<a rel="noreferrer" target="_blank" href="https://flathub.org/apps/details/life.bolls.bolls"> "Flathub"}. At the end the source is open, so you may jump to {<a rel="noreferrer" target="_blank" href="https://github.com/Bohooslav/bain/"> "GitHub"} and create your client."
			<figure>
				<img src="/images/bolls.png" arial-label="Bolls Bible">
				<figcaption> "Logo for Bolls Bible"

			<article.article>
				<h2[$c1:indigo2 $c2:indigo6]> "A few other small projects"

				<p> "{<a rel="noreferrer" target="_blank" href="https://bohooslav.github.io/gesenius/"> "Gesenius’ Hebrew Grammar"} — a static {<mark> "HTML"} + {<mark> "CSS"} reader for the grammar. {<a rel="noreferrer" target="_blank" href="https://github.com/Bohooslav/gesenius"> "GitHub"}"

				<p> "{<a rel="noreferrer" target="_blank" href="https://bohooslav.github.io/barbershop/dist/"> "Barbershop"} — an {<mark> "Imba"} app where I challenged myself what I can do in one day. {<a rel="noreferrer" target="_blank" href="https://github.com/Bohooslav/barbershop"> "GitHub"}"

				<p> "{<a rel="noreferrer" target="_blank" href="https://bohooslav.github.io/songbook/"> "Songbook"} — an {<mark> "Imba"} app where I used {<mark> "PWA"} technology to make the church songbook installable and available offline. There are some neat features as font change, chords preview &c. {<a rel="noreferrer" target="_blank" href="https://github.com/Bohooslav/songbook"> "GitHub"}"

				<p> "{<a rel="noreferrer" target="_blank" href="https://mgrestyle.sk/"> "MGRestyle"} — the only app that I wrote working in a team. I had a team leader and a designer. I did design and implement the backend with {<mark> "Django"} and the frontend with {<mark> "Vue.JS"}."

				<p> "{<a rel="noreferrer" target="_blank" href="https://medok-n.com/"> "Medok N"} — an app designed by me and written with {<mark> "Django"} and {<mark> "Imba"}. Hosted myself on a VPS."

				<p> "This website i also made myself :P"
				
				<h2[mt:4em $c1:violet2 $c2:violet6]> "Koteus"
				<p> "The second-biggest project I am still developing with my friend. An online shop for selling tech goods."
				<p> "There is a company that provides an API for making your own drop-shipping website, and I have decided to use the chance and create one. {<mark> "Django"} + {<mark> "Imba"} + different {<mark> "APIs"} for some needs + {<mark> "Google App Engine"} + {<mark> "PostgreSQL"} database hosted on a VPS = {<a rel="noreferrer" target="_blank" href="https://koteus.com/"> "koteus.com"}. The app is still under development, but soon I hope to release it."
				
			<figure>
				<img src="/images/koteus.png" arial-label="Koteus">
				<figcaption> "Logo for Koteus"


			<article.article>
				<h1[$c1:orange2 $c2:orange6]> "My programming stack"
				<p> "At this point of time I am using the next instruments for web development. {<mark> "Django"} for backend, {<mark> "Imba"} for frontend. I like to host things on {<mark> "Google App Engine"}, it is fast, easy, and reliable. If a project is big and require scalability I use {<mark> "PostgreSQL"} for database and host it separately."
				<p> "I also use such technologies as {<mark> "Electron"}, {<mark> "PWA"}, {<mark> "IndexedDB"}, am skilled at {<mark> "using and creating API"}. Always land for optimization and beautiful, readable and performative code, use {<mark> "Git"} and am a big fun of {<mark> "Linux"}."
				<p> "{<mark> "Design"} is my special passion. I have been following trends for years. I have a picky taste that lands to freedom of space, absence of borders and any unneeded limits, smooth but contrast colors, and comfortable navigation. Everything that is needed for your user to feel oneself in a right place."


		<section.viewport_box id="contact">
			<article.contactme>
				<h1[$c1:blue2 $c2:blue6]> 'Contact me'
				<p> "I don't like to spend time in social networks so the almost only way to contact me is Telegram, Gmail and my phone number."
				<[d:flex jc:space-around @lt-sm:space-between]>
					<a rel="noreferrer" target="_blank" href="https://t.me/Boguslavv">
						<svg[size:64px @lt-xs:48px] viewBox="0 0 240 240" [bg:$fill border-radius: 50%] alt="Telegram">
							<title> "Telegram"
							<g transform="matrix(3.468208 0 0 3.468208 0 -.00001)">
								<path d="M14.4 34.3l23.3-9.6c2.3-1 10.1-4.2 10.1-4.2s3.6-1.4 3.3 2c-.1 1.4-.9 6.3-1.7 11.6l-2.5 15.7s-.2 2.3-1.9 2.7-4.5-1.4-5-1.8c-.4-.3-7.5-4.8-10.1-7-.7-.6-1.5-1.8.1-3.2 3.6-3.3 7.9-7.4 10.5-10 1.2-1.2 2.4-4-2.6-.6l-14.1 9.5s-1.6 1-4.6.1-6.5-2.1-6.5-2.1-2.4-1.5 1.7-3.1z" [fill:cooler9]>
						<span> "Telegram"

					<a rel="noreferrer" target="_blank" href="mailto:bpavlisinec@gmail.com">
						<div.svg-circle>
							<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
								<title> "Gmail"
								<path d="M0 0h24v24H0z" fill="none">
								<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z">
						<span> "Gmail"

					<a rel="noreferrer" target="_blank" href="tel:380689179090">
						<div.svg-circle>
							<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
								<title> "Call me"
								<path d="M0 0h24v24H0z" fill="none">
								<path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z">
						<span> "Call me"

					<a rel="noreferrer" target="_blank" href="https://github.com/Bohooslav">
						<svg[size:64px @lt-xs:48px] height="64" viewBox="0 0 16 16" width="64">
							<title> "GitHub"
							<path [fill:$fill] fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z">
						<span> "GitHub"


	css
		nav > a
			padding:16px
			cursor:pointer
			o@hover:0.8
			fw:600
			us:none
			c:rose0

		#header h1
			d:flex fld:column fw:800 fs:8vw @sm:4vw
			background: -webkit-linear-gradient(-60deg, rose5, amber2 80%);
			background-clip: border-box;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			us:none
		
		.viewport_box
			min-height:100vh d:flex ai:center jc:center fld:column

		.article, .contactme
			max-width:680px
			m:0 auto 64px
			fs:18px
			p@lt-md:0 5%

		.article h1, .contactme h1
			fw:900
			fs:2.4em @lt-sm: 2.2em
			m:2em 0 1em
		
		.article h1, .contactme h1, .article h2
			us:none
			w:max-content
			max-width:90vw
			background: linear-gradient(227deg, $c1, $c2)
			background-clip: text
			-webkit-background-clip: text
			-moz-background-clip: text
			-moz-text-fill-color: transparent
			-webkit-text-fill-color: transparent

		.article h2
			fw:900
			ls:2px

		.article p, .contactme p
			lh:1.8
			pt:1em

		figure
			m: 64px 0

		figure img
			max-width:100%
			max-height: 92vh
			us:none

		figcaption
			fs:0.9em
			ta:center
			mt:8px
			c:warmer2

		mark
			bg:sky9
			c:inherit
			fw:500
			p:2px 8px



		@keyframes link-hover
			0%
				background-size: 100% 0.2em;
				background-position: 0px 110%;

			50%
				background-size: 0% 0.2em;
				background-position: 0px 110%;

			50.01%
				background-size: 0% 0.2em;
				background-position: right 0px top 110%;

			100%
				background-size: 100% 0.2em;
				background-position: right 0px top 110%;

		
		.article a
			lh:1.5em
			td:none
			color: amber3
			display: inline-block
			background-image: linear-gradient(amber3 0px, amber3 100%)
			cursor: pointer
			background-repeat: no-repeat
			background-size: 100% 0.2em
			background-position: 0px 110%
			animation@hover: 0.4s cubic-bezier(0.58, 0.3, 0.005, 1) 0s 1 normal none link-hover
			fw:500
		
		.contactme a
			d:flex
			jc:center
			ai:center
			fld:column
			m:16px 0
			fw:bold
			fs:0.8em
			td:none
			c:blue1 @hover:white
			--fill:blue1 @hover:white
			fw:600


		.contactme span
			mt:8px

		.svg-circle
			rd:full
			bg:$fill
			size:64px @lt-xs: 48px
			d:flex
			jc:center
			ai:center

		.svg-circle svg
			fill:cooler9
			size:42px @lt-xs: 32px


imba.mount <app>