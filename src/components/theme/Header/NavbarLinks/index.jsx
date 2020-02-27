import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styles'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<AnchorLink href="#about">Show me who you are!</AnchorLink>
		<AnchorLink href="#projects">Show me what you did!</AnchorLink>
		<AnchorLink href="#contact">Show me how to reach you!</AnchorLink>
	</Wrapper>
)

export default NavbarLinks
