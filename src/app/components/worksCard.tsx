'use client'
import { ValidLocale, getTranslator } from "@/i18n"
import Image from "next/image"
import { useState } from "react"
import { Modal } from "./Modal"

import { type getDictionary } from "../../i18n";

interface CardProps {
  imageUrl : string 
  title: string, 
  slider: { alt: string, src: string }[]
  description: string,
  lang: ValidLocale 
  action: string
  site?: string
  git?: string
}

export function WorksCard ({ imageUrl, title, description, lang, action,slider, site, git }: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleSeeMoreClick() {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <div className="max-w-sm rounded-md relative overflow-hidden shadow-lg bg-white">
        <div className="w-full h-56 relative">
          <Image src={imageUrl} alt={title} fill style={{objectFit: "cover"}} />
        </div>
        <div className="px-6 py-4 h-96 md:h-80">
          <div className="font-bold text-xl mb-2 text-justify">{title}</div>
          <p className="text-gray-700 text-base text-justify">{description.length > 350 ? `${description.slice(0, 350)} ...` : description}</p>
        </div>
        <div className="px-6 py-4 flex items-center justify-center">
          <button onClick={handleSeeMoreClick} className="bg-orange-400 hover:bg-orange-600 w-full text-white font-bold py-2 px-4 rounded focus:outline-none">
          {action}
          </button>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={handleSeeMoreClick} 
        lang={lang}
        title={title} 
        slider={slider} 
        description={description}
        site={site}
        git={git}
      />
    </>
  )
}