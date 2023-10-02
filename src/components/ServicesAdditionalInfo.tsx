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
    <div className="flex items-center justify-center md:mx-4 md:flex-row md:mr-8">
      <div className="z-20 md:w-1/2">
        <Smoke
          width="60%"
          height="60%"
          className="h-auto absolute xl:left-[0rem] xl:bottom-[70rem] scale-x-[-1] rotate-180 -scale-y-125 z-100"
        />
        <GrayStar className="absolute xl:left-[17rem] xl:top-[131rem] scale-[40%]" />

        <Satellite className="md:w-1/2 z-20 xl:w-[70%] sm:-translate-x-14 sm:-translate-y-24 h-auto xl:translate-x-14" />
        <BlueSaturn className="absolute h-[100px] xl:-left-[8rem] xl:bottom-[55rem]" />
      </div>
      <div className="z-20 sm:px-[1rem] sm:mt-[3rem] sm:text-center md:text-left md:pl-0 md:pr-[64px]">
        <OrangeGradientBall className="absolute h-[30px] xl:right-[-3rem] xl:bottom-[90rem]" />
        <Star className="absolute h-[30px] xl:right-[18rem] xl:bottom-[85rem] scale-x-[-1]" />
        <SmallTitle className="mx-auto text-left">{title}</SmallTitle>
        <Heading
          level="2"
          className="text-xl text-center sm:max-w-2xl sm:text-center md:mb-3 md:text-left md:text-[1.75rem] lg:text-[2.5rem] lg:leading-[1] xl:max-w-2xl xl:text-5xl xl:mt-5"
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
