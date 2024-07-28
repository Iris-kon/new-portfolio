import { ValidLocale } from '@/i18n';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Keyboard } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/keyboard"
import { RiGithubFill, RiLink } from '@remixicon/react';
import { XIcon } from 'lucide-react';

interface IWorks {
  title: string
  slider: { alt: string, src: string }[]
  description: string
  site?: string
  git?: string
}

interface ModalProps extends IWorks {
  isOpen: boolean
  onClose: () => void
  lang: ValidLocale
}

export function Modal({ isOpen, onClose, title, slider, description, site, git }: ModalProps) {

  if (!isOpen) return null

  return (
    <div className="z-50 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white relative rounded shadow-lg w-[90%] md:w-1/2">
        <div className='flex justify-between items-start'>
          <h2 className="text-xl p-4 font-bold">{title}</h2>

          <button onClick={onClose} className='hover:text-red-500 transition-colors p-1'>
            <XIcon />
          </button>
        </div>
        <div className='pb-4'>
          <Swiper
            className='h-[50vw] md:h-[30vw] w-full'
            modules={[Navigation, Pagination, Keyboard]}
            slidesPerView={1}
            keyboard
            navigation={true}
            loop={true}
            pagination={{ clickable: true }}
          >
            {slider.map((i) => (
              <SwiperSlide key={i.src}>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <Image src={i.src} alt={i.alt} fill style={{ objectFit: "cover" }} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <p className="text-gray-700 text-justify p-4">{description}</p>

          {git && (
            <a href={git}
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center gap-2 cursor-pointer px-4 transition-colors text-orange-400 hover:text-orange-600 visited:text-orange-800'
            >
              <div className='bg-black rounded-full p-1'>
                <RiGithubFill size={20} />
              </div>
              {git}
            </a>
          )}
          {site && (
            <a href={site}
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center gap-2 cursor-pointer px-4 transition-colors text-orange-400 hover:text-orange-600 visited:text-orange-800'
            >
              <div className='bg-black rounded-full p-1'>
                <RiLink size={20} />
              </div>
              {site}
            </a>
          )}
        </div>

      </div>
    </div>
  )
}