import React from 'react'
import { Container } from 'components/common'
import contact from 'assets/illustrations/paper-airplanes-flying.jpg'
import { Wrapper, Details, Thumbnail } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h2>Contact</h2>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m Eduardo and I’m a Backend & Devops engineer!"/>
    </Thumbnail>
  </Wrapper>
)
