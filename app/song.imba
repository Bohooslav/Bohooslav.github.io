import {available_chords} from './chords'
# import * as available_chords from './chords.json'

# console.log available_chords

export tag song-tag
	song = {}
	settings = {}

	def mount
		console.log song, settings

	def chordImgUrl chord
		if chord == 'Bm'
			chord = 'Hm'
		return "/chords/{chord.replace('#', 'x')}.png"

	<self[ff:{settings.font.family} fs:{settings.font.size} lh:{settings.font.line-height}]>
		if song
			<h1> song.title
			<pre[m:auto]>
				for line in song.lines
					if line.text
						<span> line.text
					elif line.break
						<br>
					elif line.refrain
						<span.refrain> line.refrain
					elif line.bridge
						<span.bridge> line.bridge
					elif line.chords && settings.show_chords
						<span.chords>
							for part in line.chords
								<>
									if part[0] != ' '
										<span.chord>
											part
											<.chord_img>
												<img .invert=(settings.theme == 'dark') src=chordImgUrl(part)>
									else
										part
					unless line.bridge or (line.chords && not settings.show_chords)
						<br>
	
	css
		d:flex
		fld:column

	css h1
		m:2em auto

	css .bridge
		ta: right
		font-style: italic
		d:block
	
	css .refrain
		fw:bold
	
	css .chords
		pt: 0.5em
		d:inline-block
		lh:1
	
	css .chord
		pos:relative
		cursor:pointer
		c:$accent-hover-color @hover:$accent-color
		d:inline-flex
		jc:center

	css .chord > .chord_img
		o:0
		visibility:hidden
		transform: scale(0.2)
		origin: bottom center
	
	css .chord@hover > .chord_img
		o:1
		visibility:visible
		transform:none


	css .chord_img
		us:none
		bd:1px solid $btn-bg
		pos:absolute
		b:100%
		bg:$background-color
		p:8px 0
		rd:8px
		shadow: 0 0 0 1px rgba(53,72,91,.1),0 2px 2px rgba(0,0,0,.0274351),0 4px 4px rgba(0,0,0,.0400741),0 10px 8px rgba(0,0,0,.0499982),0 15px 15px rgba(0,0,0,.0596004),0 30px 30px rgba(0,0,0,.0709366),0 70px 65px rgba(0,0,0,.09)
	
	css .invert
		filter: invert(100%)