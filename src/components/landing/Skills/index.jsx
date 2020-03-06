import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/tech.jpg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Eduardo and I’m a Backend engineer!" />
      </Thumbnail>
      <Details>
        <h1>Hi There!</h1>
        <p>
          I'm a tech engineer based on Florianópolis, SC.
          I have experience in developing IOT applications, from the data collection from sensors
          to backend time-series analyses.
        </p>
        <p>
          Also have considerable experience with robotics,
          having developed more than 50 animatronics puppets that talk and dance!
        </p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
