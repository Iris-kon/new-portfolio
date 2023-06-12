'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { EraserIcon, SendIcon } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

interface ContactFormProps {
  name: string
  pronoun: string
  mail: string
  message: string
  errorsT: {
    name: string
    pronoun: string
    mail: string
    message: string
  }
}

interface ContactFormData {
  name: string
  pronoun: string
  email: string
  message: string
}

export function ContactForm({
  name,
  pronoun,
  mail,
  message,
  errorsT,
}: ContactFormProps) {
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
  ) => {}

  return (
    <form
      className="w-full flex flex-col gap-2"
      onSubmit={handleSubmit(handleContactSubmit)}
    >
      <div className="w-full">
        <input
          placeholder={name}
          className="w-full h-12 rounded-md px-2 text-lg"
          {...register('name')}
        />
        {errors.name?.message ? (
          <p className="text-base pt-2 text-red-400">{errors.name.message}</p>
        ) : null}
      </div>

      <div className="w-full">
        <input
          placeholder={pronoun}
          className="w-full h-12 rounded-md px-2 text-lg"
          {...register('pronoun')}
        />
        {errors.pronoun?.message ? (
          <p className="text-base pt-2 text-red-400">
            {errors.pronoun.message}
          </p>
        ) : null}
      </div>

      <div className="w-full">
        <input
          placeholder={mail}
          className="w-full h-12 rounded-md px-2 text-lg"
          type="email"
          {...register('email')}
        />
        {errors.email?.message ? (
          <p className="text-base pt-2 text-red-400">{errors.email.message}</p>
        ) : null}
      </div>

      <div className="w-full">
        <textarea
          placeholder={message}
          className="w-full rounded-md px-2 pt-2 text-lg"
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
          className="w-full flex rounded-md gap-2 py-2 font-bold items-center justify-center bg-green-500 text-slate-100 duration-300 hover:bg-green-700"
          type="submit"
        >
          <SendIcon />
          Submit
        </button>
        <button
          className="w-full flex rounded-md gap-2 py-2 font-bold items-center justify-center border-2 border-black duration-300 hover:border-red-400 hover:text-red-400"
          onClick={() => reset()}
        >
          <EraserIcon />
          Reset
        </button>
      </div>
    </form>
  )
}
