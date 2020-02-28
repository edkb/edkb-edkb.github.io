import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/beach.jpg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Welcome to the show!</h1>
				<h4>I’m glad you came to visit me here! Take some time I'll show you around...</h4>
				<Button as={AnchorLink} href="#contact">
					Contact me!
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt="Eduardo smiling on the beach!" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
