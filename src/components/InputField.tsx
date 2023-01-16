import {ChangeEventHandler, FC, HTMLInputTypeAttribute} from 'react'

interface InputFieldProps {
  onChange: ChangeEventHandler<HTMLInputElement>
  label: string
  type: HTMLInputTypeAttribute
  value: string
  id?: string
  placeholder?: string
}

export const InputField: FC<InputFieldProps> = ({
  id,
  onChange,
  label,
  type,
  value,
  placeholder,
}) => (
  <div className="space-y-1">
    <label
      htmlFor={id}
      className="block mb-2 text-lg font-medium text-gray-900"
    >
      {label}
    </label>
    <input
      type={type}
      onChange={onChange}
      value={value}
      id={id}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder={placeholder}
    ></input>
  </div>
)
