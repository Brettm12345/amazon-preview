import classNames from 'classnames'
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
      className={classNames(
        'bg-gray-50 border  text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5',
        value.length > 200
          ? 'text-red-400 border-red-500 bg-red-400/0.2 focus:border-red-500'
          : 'text-gray-900 border-gray-300'
      )}
      placeholder={placeholder}
    ></input>
    <p
      id="helper-text-explanation"
      className={classNames(
        'mt-2 text-lg ',
        value.length > 200 ? 'text-red-400' : 'text-gray-500'
      )}
    >
      ({value.length}/200) characters used
    </p>
  </div>
)
