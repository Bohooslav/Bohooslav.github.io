global css
	html
		ff:sans
		--bg-color: white
		--text-color: black


	*
		box-sizing: border-box
		scrollbar-color: gray6 transparent
		scrollbar-width: auto
		margin: 0
		padding: 0
		scroll-behavior: smooth
		-webkit-overflow-scrolling: touch
		-webkit-tap-highlight-color: transparent

		transition-timing-function: ease
		transition-delay: 0
		transition-duration: 300ms
		transition-property: color, background, width, height, transform, opacity, max-height, max-width, top, left, bottom, right, visibility, fill, stroke, margin, padding


	*::selection
		color: white
		background-color: teal9

	::-webkit-scrollbar
		width: 12px


	::-webkit-scrollbar-track
		background: transparent


	::-webkit-scrollbar-thumb
		background: gray7
		border-radius: 4px


	::-webkit-scrollbar-thumb:hover
		background: gray8


	*:focus
		outline: none


	html
		transition-property@important: background-color


	html, body
		font-family: "Montserrat", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif
		letter-spacing: normal
		font-size: 16px
		background: cool9
		word-break: break-word
		color: white

	h2
		fs:1.6em