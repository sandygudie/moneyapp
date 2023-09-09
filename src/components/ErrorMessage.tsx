import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
interface Props {
  text: string
}

export default function ErrorMessage({ text }: Props) {
  return (
    <div className="h-screen bg-gray-600 flex flex-col items-center justify-center">
      <p className="mb-5 flex items-center gap-2 font-medium text-red text-base">
        {' '}
        <ExclamationCircleIcon className="w-6 text-red" />
        {text}
      </p>
      <button className="text-xs font-bold rounded-full py-2.5 bg-red text-white px-8">
        Try Again
      </button>
    </div>
  )
}
