import React from 'react'
import { HeroContainerStyled, HeroImageContainerStyled, HeroTextContainerStyled } from './HeroStyles'
import Button from '../UI/Button/Button'

const Hero = () => {
  return (
     <HeroContainerStyled>
        <HeroTextContainerStyled>
            <h1>Lo ultimo en tecnología lo encontras acá</h1>
            <Button radius="7" >
                Ver mas
            </Button>
        </HeroTextContainerStyled>
        <HeroImageContainerStyled>
            <img src="https://img.freepik.com/free-vector/cyber-sport-pro-gamer-equipment-accessory-set-excited-young-man-headset-with-mic-playing-streaming-video-game-match-console-sitting-front-television-screen_575670-1334.jpg?w=900&t=st=1697781069~exp=1697781669~hmac=31c97e5ff7917ff56c63b72a4febc1ab0ba5e4d041041dc4be27a1f03df5532c" alt="" />
        </HeroImageContainerStyled>
     </HeroContainerStyled>
  )
}

export default Hero