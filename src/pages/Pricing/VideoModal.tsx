import { BodyText } from 'components/typography/BodyText'
import { PlayIcon } from 'public/svgs'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

type Props = {
  thumbnail: string
  name: string
  videoId: string
}

export function VideoModal(props: Props) {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="cursor-pointer">
      <div className="relative mb-4" onClick={() => setOpen(true)}>
        <img src={props.thumbnail} alt="" className="w-full rounded-xl" />
        <PlayIcon className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />
      </div>
      <BodyText className="text-xs md:text-lg">{props.name}</BodyText>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={props.videoId}
        onClose={() => setOpen(false)}
      ></ModalVideo>
    </div>
  )
}
