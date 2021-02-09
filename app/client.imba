import './global_styles'
import './song'
import {songs} from './songs'

# Parse songs choirds
for song in songs
	for line in song.lines
		if line.chords
			# Then parse the chords line and separate spaces from chords
			let chords = []
			let chord = ''
			let whitespace = ''
			for character in line.chords
				if character == ' ' || character == '-'
					if chord
						chords.push chord
						chord = ''
					whitespace += character
				else
					chord += character
					if whitespace
						chords.push whitespace
						whitespace = ''
			if chord
				chords.push chord

			# console.log chords
			line.chords = chords




# console.log(song)

let agent = window.navigator.userAgent;
let isWebkit = (agent.indexOf("AppleWebKit") > 0);
let isIPad = (agent.indexOf("iPad") > 0);
let isIOS = (agent.indexOf("iPhone") > 0 || agent.indexOf("iPod") > 0)
let isAndroid = (agent.indexOf("Android")  > 0)
let isNewBlackBerry = (agent.indexOf("AppleWebKit") > 0 && agent.indexOf("BlackBerry") > 0)
let isWebOS = (agent.indexOf("webOS") > 0);
let isWindowsMobile = (agent.indexOf("IEMobile") > 0)
let isSmallScreen = (screen.width < 767 || (isAndroid && screen.width < 1000))
let isUnknownMobile = (isWebkit && isSmallScreen)
let isMobile = (isIOS || isAndroid || isNewBlackBerry || isWebOS || isWindowsMobile || isUnknownMobile)
let isTablet = (isIPad || (isMobile && !isSmallScreen))

let MOBILE_PLATFORM = no

if isMobile && isSmallScreen && document.cookie.indexOf( "mobileFullSiteClicked=") < 0
	MOBILE_PLATFORM = yes

let menu_icons_transform = 0
let songbook_menu_left = -300
let settings_menu_left = -300



window.onscroll = do |e|
	let testsize = 2 - ((window.scrollY * 4) / window.innerHeight)

	const last_known_scroll_position = window.scrollY
	setTimeout(&, 100) do
		if window.scrollY < last_known_scroll_position || not window.scrollY
			menu_icons_transform = 0
		elif window.scrollY > last_known_scroll_position
			if window.innerWidth > 1024
				menu_icons_transform = -100
			else
				menu_icons_transform = 100

		imba.commit()



tag app
	settings = {
			show_chords: yes
			theme: 'light'
		}

	def clearSpace
		settings_menu_left = 0
		songbook_menu_left = 0


	def toggleSongbookMenu parallel
		if songbook_menu_left
			if !settings_menu_left && MOBILE_PLATFORM
				clearSpace!
				return
			songbook_menu_left = 0
			settings_menu_left = -300
		else
			songbook_menu_left = -300

	def toggleSettingsMenu
		if settings_menu_left
			if !songbook_menu_left && MOBILE_PLATFORM
				clearSpace!
				return
			settings_menu_left = 0
			songbook_menu_left = -300
		else
			settings_menu_left = -300

	def boxShadow grade
		if settings.theme == 'light'
			return "box-shadow: 0 0 {(grade + 300) / 5}px rgba(0, 0, 0, 0.067);"
		else
			return ''

	def mousemove e
		if not MOBILE_PLATFORM
			if e.x < 32
				songbook_menu_left = 0
			elif e.x > window.innerWidth - 32
				settings_menu_left = 0
			elif 300 < e.x < window.innerWidth - 300
				songbook_menu_left = -300
				settings_menu_left = -300

	<self>
		<nav @touchstart=slidestart @touchend=closedrawersend @touchcancel=closedrawersend @touchmove=closingdrawer style="left: {songbook_menu_left}px; {boxShadow(songbook_menu_left)}{(onzone || inzone) ? 'transition:none;' : ''}">
			<h1> 'Songs'

		<main[p:4vh 2vw 16vh] @mousemove=mousemove>

			<song-tag song=songs[0] show_chords=settings.show_chords>

		<aside @touchstart=slidestart @touchend=closedrawersend @touchcancel=closedrawersend @touchmove=closingdrawer style="right:{MOBILE_PLATFORM ? settings_menu_left : settings_menu_left ? settings_menu_left : settings_menu_left + 12}px;{boxShadow(settings_menu_left)}{(onzone || inzone) ? 'transition:none;' : ''}">



		<header#navigation>
			<[l:0 transform: translateY({menu_icons_transform}%)] @click=toggleSongbookMenu>
				<svg viewBox="0 0 16 16">
					<title> 'Пісник'
					<path d="M3 5H7V6H3V5ZM3 8H7V7H3V8ZM3 10H7V9H3V10ZM14 5H10V6H14V5ZM14 7H10V8H14V7ZM14 9H10V10H14V9ZM16 3V12C16 12.55 15.55 13 15 13H9.5L8.5 14L7.5 13H2C1.45 13 1 12.55 1 12V3C1 2.45 1.45 2 2 2H7.5L8.5 3L9.5 2H15C15.55 2 16 2.45 16 3ZM8 3.5L7.5 3H2V12H8V3.5ZM15 3H9.5L9 3.5V12H15V3Z">
				<p> 'Пісник'
			<[r:0 transform: translateY({menu_icons_transform}%)] @click=toggleSettingsMenu>
				<svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
					<title> "Налаштування"
					<g>#
						<path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z">
				<p> "Налаштування"

	css #navigation
		position: fixed
		top: 0 @lt-lg: auto
		right: 0
		left: 0
		b@lt-lg: 0
		display: flex
		justify-content: space-between
		height: 0
		z-index: 2
		cursor: pointer
		us:none

	css #navigation > div 
		padding: 3vw
		width: calc(32px + 6vw)
		height: calc(32px + 6vw)
		c@hover: $accent-hover-color
		width@lt-lg: 50%
		bottom@lt-lg: 0
		padding@lt-lg: 4px
		height@lt-lg: 54px
		position@lt-lg: absolute
		background-color@lt-lg: $background-color
		border-top@lt-lg: 1px solid $btn-bg
		display@lt-lg: flex
		flex-direction: column
		justify-content: center
		align-items: center

	css #navigation svg 
		width: 32px
		height: 32px
		min-height: 32px
		fill: $accent-color :$text-color
		opacity@lt-lg: 0.75 @hover: 1

	css #navigation > div@hover > svg 
		fill: $accent-hover-color

	css #navigation p 
		m:0
		display: none @lt-lg: inline-block
		padding: 0 8px
		opacity: 0.75
		font-size: 12px


	css aside
		border-left: 1px solid $btn-bg
		padding: 32px 12px
		overflow-y: auto
		-webkit-overflow-scrolling: touch

	css nav 
		border-right: 1px solid $btn-bg
		padding: 32px 0

	css nav, aside 
		position: fixed
		top: 0
		bottom: 0
		width: 300px
		touch-action: pan-y
		z-index: 1000
		background-color: $background-color


imba.mount <app>