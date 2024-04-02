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
    <div className="flex items-center justify-center md:mx-[3rem] md:flex-row lg:mr-8">
      <div className="z-20 ">
        <Smoke
          width="75%"
          height="75%"
          className="h-auto absolute left-[0rem] md:bottom-[68rem] lg:bottom-[50rem] xl:bottom-[70rem] scale-x-[-1] rotate-180 -scale-y-125 z-100 2xl:-scale-x-125 2xl:-scale-y-125 2xl:left-[9rem] 2xl:bottom-[66rem]"
        />
        <GrayStar className="absolute lg:top-[126rem] lg:left-[14rem] xl:left-[17rem] xl:top-[131rem] scale-[40%]" />

        <Satellite className="md:w-[100%] z-20 sm:mb-20 lg:mb-0 xl:w-[70%] sm:-translate-x-14 sm:-translate-y-24 h-auto lg:translate-x-14" />
        <BlueSaturn className="absolute h-[80px] xl:h-[100px] md:left-[-8rem] md:bottom-[46rem] lg:left-[-10rem] lg:bottom-[38rem] xl:-left-[8rem] xl:bottom-[55rem] 2xl:bottom-[50rem]" />
      </div>
      <div className="z-20 sm:px-[25px] sm:mt-[4rem] sm:text-center md:text-left lg:pr-[64px]">
        <OrangeGradientBall className="absolute h-[30px] md:right-0 md:bottom-[80rem] lg:right-[-3rem] lg:bottom-[68rem] xl:right-[-3rem] xl:bottom-[90rem]" />
        <Star className="absolute h-[30px] md:right-[20rem] md:bottom-[78rem] lg:right-[18rem] lg:bottom-[65rem] xl:right-[18rem] xl:bottom-[90rem] 2xl:bottom-[92rem] scale-x-[-1]" />
        <SmallTitle className="mx-auto text-left">{title}</SmallTitle>
        <Heading
          level="2"
          className="text-xl text-center sm:max-w-2xl sm:text-center md:mb-3 md:text-left md:text-[1.75rem] lg:text-[2.5rem] lg:leading-[1] xl:max-w-2xl  xl:text-5xl xl:mt-5"
        >
          {subTitle}
        </Heading>
        <BodyText className="xl:text-lg max-w-2xl">{content}</BodyText>
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
