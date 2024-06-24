import { ValidLocale, getTranslator } from '@/i18n';
import { XIcon } from 'lucide-react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Keyboard } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/keyboard"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  lang: ValidLocale
  images: {
    url: string
    alt: string
  }[]
}

export function Modal ({ isOpen, onClose, lang, images }: ModalProps) {

  if (!isOpen) return null

  return (
    <div className="z-50 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white relative rounded shadow-lg w-1/2">
        <div className='flex justify-between items-start'>
          <h2 className="text-xl p-4 font-bold">Modal Title</h2>

          <button onClick={onClose} className='hover:text-red-500 transition-colors p-1'>
            <XIcon />
          </button>
        </div>
        <div>
          <div className='h-80 w-full'>
          <Swiper
            modules={[Navigation, Pagination, Keyboard]}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            keyboard
            navigation={true}
            loop={true}
            pagination={{ clickable: true }}
          >
            {images.map((i) => (
              <SwiperSlide key={i.url}>
                <div
                  style={{
                    width: "100%",
                    height: "90vh",
                    position: "relative",
                  }}
                >
                  <Image src={i.url} alt={i.alt} fill />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
          <p className="text-gray-700 p-4">Modal content goes here...</p>
        </div>
        
      </div>
    </div>
  )
}