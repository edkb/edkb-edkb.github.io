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
          I'm a tech engineer based on Florianópolis, SC. I feel more comfortable when working on projects
          that involve both hardware and software, usually on the IOT context.
        </p>
        <p>
          I have worked on projects that collected and analyzed data from different sensors, developing the collecting system
          (hardware and firmware) and the backend for storage and processing (APIs and databases).
          Also have some experience with robotics, having developed
          many animatronics puppets that talk and dance!
        </p>
        <p>
          On the frontend side of the force, until now I have run away from javascript as fast as I could.
          But then Gatsby showed up in my life — the static site generator which this page is build with —,
          it allows us to build websites with very little code (if you are using a good template at least).
          So, one can consider this personal page as the most advanced frontend stuff that I have ever build.
        </p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
