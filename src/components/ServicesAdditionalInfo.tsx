import React from 'react'
import {
  BlueSaturn,
  GrayStar,
  OrangeGradientBall,
  Satellite,
  Smoke,
  Star
} from 'public/svgs'
import { Button } from 'components/Button'
import { BodyText } from './typography/BodyText'
import { Heading } from './typography/Heading'
import { SmallTitle } from './typography/SmallTitle'

interface ServicesAdditionalInfoProps {
  title: string
  subTitle: string
  content: string
  buttonText: string
  buttonHref: string
}

const ServicesAdditionalInfo: React.FC<ServicesAdditionalInfoProps> = ({
  title,
  subTitle,
  content,
  buttonText,
  buttonHref
}) => {
  return (
    <div className="flex flex-col items-center justify-center md:mx-[3rem] md:flex-row lg:mr-8">
      <div className="z-20 mt-[10rem] md:mt-0">
        <Smoke
          width="75%"
          height="75%"
          className="h-auto absolute sm:bottom-[4rem] left-[0rem] md:bottom-[68rem] lg:bottom-[60rem] xl:bottom-[74rem] scale-x-[-1] rotate-180 -scale-y-125 z-100 2xl:-scale-x-125 2xl:-scale-y-125 2xl:left-[9rem] 2xl:bottom-[62rem]"
        />

        <GrayStar className="absolute sm:top-[155rem] lg:top-[126rem] lg:left-[14rem] xl:left-[17rem] xl:top-[131rem] scale-[40%]" />

        <Satellite className="w-[75%] md:w-[100%] z-20 sm:mb-20 lg:mb-0 lg:w-[70%] sm:translate-x-[-2rem] sm:-translate-y-24 h-auto lg:translate-x-14 2xl:translate-x-[-7rem] 2xl:mt-[10rem]" />
        <BlueSaturn className="absolute h-[80px] xl:h-[100px] right-[-6rem] bottom-[84rem] md:left-[-8rem] md:bottom-[46rem] lg:left-[-10rem] lg:bottom-[47rem] xl:-left-[8rem] xl:bottom-[55rem] 2xl:bottom-[50rem]" />
      </div>
      <div className="z-20 md:px-[25px] md:mt-[4rem] sm:text-center md:text-left lg:pr-[64px]">
        <Star className="absolute h-[30px] bottom-[90rem] md:right-[20rem] md:bottom-[83rem] lg:right-[16rem] lg:bottom-[77rem] xl:right-[18rem] xl:bottom-[90rem] 2xl:bottom-[92rem] scale-x-[-1]" />
        <OrangeGradientBall className="absolute scale-[20%] right-[-2rem] bottom-[75rem]" />
        <SmallTitle className="mx-auto text-left">{title}</SmallTitle>
        <Heading
          level="2"
          className="text-xl my-4 sm:max-w-2xl text-left md:text-[1.75rem] lg:text-3xl lg:leading-[1] xl:max-w-2xl  xl:text-5xl xl:mt-5"
        >
          {subTitle}
        </Heading>
        <BodyText className="text-left xl:text-lg max-w-2xl">
          {content}
        </BodyText>
        <Button
          href={buttonHref}
          className="block w-[50%] px-8 mt-10 mb-8 text-center"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

export default ServicesAdditionalInfo
