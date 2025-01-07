'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { EraserIcon, Loader2Icon, MailIcon } from 'lucide-react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as yup from 'yup'

interface ContactFormProps {
  clearText: string
  sendText: string
  name: string
  pronoun?: string
  mail: string
  message: string
  errorsT: {
    name: string
    pronoun: string
    mail: string
    message: string
  },
  placeholders: {
    name: string
    pronoun: string
    mail: string
    message: string
  }
}

interface ContactFormData {
  name: string
  pronoun?: string
  email: string
  message: string
}

export function ContactForm({
  name,
  clearText,
  sendText,
  pronoun,
  mail,
  message,
  errorsT,
  placeholders
}: ContactFormProps) {
  const [isLoading, setIsLoading] = useState(false)

  const schema = yup
    .object({
      name: yup.string().required(errorsT.name),
      pronoun: yup.string(),
      email: yup.string().email(errorsT.mail).required(errorsT.mail),
      message: yup.string().required(errorsT.message),
    })
    .required()

  const { register, handleSubmit, reset, formState } = useForm<ContactFormData>(
    {
      resolver: yupResolver(schema),
    }
  )

  const { errors } = formState

  const handleContactSubmit: SubmitHandler<ContactFormData> = async (
    values
  ) => {
    console.log(values)
    setIsLoading(true)
    fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify({...values})
    })
      .then((response) => {
        console.log(response)
        toast.success('Email enviado com sucesso', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      })
      .catch(err => {
        console.log(err)
        toast.error('Erro ao enviar email', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <form
      className="w-full flex flex-col gap-2"
      onSubmit={handleSubmit(handleContactSubmit)}
    >
      <div className="w-full">
        <label htmlFor="name" className='ml-2'>{name}:</label>
        <input
          placeholder={placeholders.name}
          className="w-full h-12 shadow-md rounded-md px-2 text-lg"
          {...register('name')}
        />
        {errors.name?.message ? (
          <p className="text-base pt-2 text-red-400">{errors.name.message}</p>
        ) : null}
      </div>

      <div className="w-full">
        <label htmlFor="pronoun" className='ml-2'>{pronoun}:</label>
        <input
          placeholder={placeholders.pronoun}
          className="w-full h-12 shadow-md rounded-md px-2 text-lg"
          {...register('pronoun')}
        />
        {errors.pronoun?.message ? (
          <p className="text-base pt-2 text-red-400">
            {errors.pronoun.message}
          </p>
        ) : null}
      </div>

      <div className="w-full">
        <label htmlFor="email" className='ml-2'>{mail}:</label>
        <input
          placeholder={placeholders.mail}
          className="w-full h-12 shadow-md rounded-md px-2 text-lg"
          type="email"
          {...register('email')}
        />
        {errors.email?.message ? (
          <p className="text-base pt-2 text-red-400">{errors.email.message}</p>
        ) : null}
      </div>

      <div className="w-full">
        <label htmlFor="message" className='ml-2'>{message}:</label>
        <textarea
          placeholder={placeholders.message}
          className="w-full rounded-md shadow-md px-2 pt-2 text-lg"
          rows={5}
          cols={4}
          {...register('message')}
        />
        {errors.message?.message ? (
          <p className="text-base pt-2 text-red-400">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      <div className="flex gap-4">
        <button
          className="w-full flex rounded-md gap-2 py-2 font-bold shadow-md items-center justify-center bg-orange-400 text-gray-800 duration-300 hover:bg-orange-600"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? <Loader2Icon className='animate-spin' /> : <MailIcon /> }
          {sendText}
        </button>
        <button
          className="w-full flex rounded-md gap-2 py-2 font-bold shadow-md items-center justify-center border-2 border-black duration-300 hover:border-red-400 hover:text-red-400"
          onClick={() => reset()}
        >
          <EraserIcon />
          {clearText}
        </button>
      </div>
    </form>
  )
}
