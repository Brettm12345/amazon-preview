'use client'
import {Inter} from '@next/font/google'
import {InputField} from '@/components/InputField'
import {useEffect, useState} from 'react'
import {Card} from '@/components/Card'
import {FileUpload} from '@/components/FileUpload'
import {ProductSearchResult} from '@/components/ProductSearchResult'

const inter = Inter({subsets: ['latin']})

const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = error => reject(error)
  })

export default function Home() {
  const [title, setTitle] = useState<string>()
  const [file, setFile] = useState<File>()
  const [base64, setBase64] = useState<string>()
  useEffect(() => {
    ;(async () => {
      if (file) {
        setBase64(await toBase64(file))
      }
    })()
  }, [file])
  return (
    <main className="max-w-2xl m-auto mt-10">
      <Card className="space-y-6 mb-6 mx-auto">
        <InputField
          value={title ?? ''}
          onChange={event => {
            setTitle(event.target.value)
          }}
          placeholder=""
          label="Product Title"
          type="text"
          id="title"
        />
        <FileUpload
          onChange={event => {
            setFile(event.target.files?.item(0) ?? undefined)
          }}
          file={file}
          helpId="product_image_help"
          helpText="Upload your product image here"
          id="product_image"
        />
      </Card>
      {!!base64 && !!title && (
        <ProductSearchResult image={base64} title={title} />
      )}
    </main>
  )
}
