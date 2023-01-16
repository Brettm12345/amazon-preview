import {ChangeEventHandler, FC} from 'react'

interface FileUploadProps {
  file: File | undefined
  onChange: ChangeEventHandler<HTMLInputElement>
  id: string
  helpText: string
  helpId: string
}
export const FileUpload: FC<FileUploadProps> = ({
  file,
  helpText,
  onChange,
  id,
  helpId,
}) => (
  <div className="space-y-1">
    <label
      className="block mb-2 text-lg font-medium text-gray-900 "
      htmlFor={id}
    >
      Upload file
    </label>
    <input
      className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
      aria-describedby={helpId}
      onChange={onChange}
      id={id}
      type="file"
    />
    <div className="mt-1 text-lg text-gray-500 " id={helpId}>
      {helpText}
    </div>
  </div>
)
