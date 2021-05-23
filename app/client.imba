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
		<nav[p:0 16px pos:fixed t@md:0 b@lt-md:0 transform:translateY({navigation-transform}px) of:visible d:flex m:auto max-width:1024px us:none bg@lt-md:gray8 w:100% jc@lt-md:space-around]>
			<a @click=scrollto('about')> "About"
			<a @click=scrollto('works')> "Works"
			<a @click=scrollto('contact')> "Contact"

		<header.viewport_box [p:0 8px]>
			<h1[d:flex fld:column fs:8vw @sm:4vw]>
				<span> '👋🏼 I am Bohuslav'
				<span[ta:right]> '- web developer'
				<span> 'who loves to design!'
			<img [h:86vh] src="./peep-standing-20.png">

		<section.viewport_box [fld:column] id="about">
			<article.article>
				<h1[fs:2.4em]> 'About me'
				<p> 'I live in Khust, Ukraine. I love to code, design, play on violin, listen classical music, run on mountains and pet cats.'
				<p> "I started my education in 2018. I choose web development as my primary subject by heart. Starting with HTML and CSS, I continued with Python and Django. Back in that time backend development was more attractive for me. During that time trying to learn CSS grid I found {<a rel="noreferrer" target="_blank" href="https://scrimba.com"> "a nice website"} with interactive videos where you may pause the video, modify the code and run it in minibrowser right in your browser and then continue. I was fascinated with that technology. I wondered how it is made. When I find out that it is made with {<a rel="noreferrer" target="_blank" href="https://imba.io"> "Imba"} — I was sure — I will try this language in the future."
				<p> "After getting better at Django and learning some JavaScript I decided to make some game and learn Imba in that way. It was {<a href="/poopsssweemer/dist/" target="_blank"> "Poopsssweemer"}. It's like minesweeper but with poops instead. I spend a good week or two and finish with something like this:"
			<figure> <img [max-width:100%] src="./poopsssweemer.png">

		<section.viewport_box id="works">
			<article>
				<h1[fs:2.4em]> 'My works'
				<p[pt:64px]> 'Lorem ipsum dolor sit amet'

		<section.viewport_box id="contact">
			<article>
				<h1[fs:2.4em]> 'Contact me'
				<p[pt:64px]> 'Lorem ipsum dolor sit amet'

	css
		nav > a
			padding:16px
			cursor:pointer
		
		.viewport_box
			min-height:100vh d:flex ai:center jc:center

		.article
			max-width:680px
			m:0 auto 64px
			fs:18px
			p:0 8px

		.article h1
			fw:900
			fs:2.4em
			p:2em 0 0.5em

		.article p
			lh:2
			pt:2em

		
		@keyframes link-hover
			0%
				background-size: 100% 0.25em;
				background-position: 0px 110%;

			50%
				background-size: 0% 0.25em;
				background-position: 0px 110%;

			50.01%
				background-size: 0% 0.25em;
				background-position: right 0px top 110%;

			100%
				background-size: 100% 0.25em;
				background-position: right 0px top 110%;

		
		.article a
			lh:1.5em
			td:none
			color: blue2
			display: inline-block
			background-image: linear-gradient(blue3 0px, blue3 100%)
			cursor: pointer
			background-repeat: no-repeat
			background-size: 100% 0.25em
			background-position: 0px 110%
			animation@hover: 0.4s cubic-bezier(0.58, 0.3, 0.005, 1) 0s 1 normal none link-hover
			


# Poopsssweemer
# Bolls Bible
# Gesenius’ Hebrew Grammar
# Songbook
# Koteus


imba.mount <app>