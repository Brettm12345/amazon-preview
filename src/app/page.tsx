'use client'
import {Inter} from '@next/font/google'
import {useEffect, useState} from 'react'
import {Card} from '@/components/Card'
import {Tab} from '@headlessui/react'
import classNames from 'classnames'
import {FileUpload} from '@/components/FileUpload'
import {range} from 'fp-ts/NonEmptyArray'
import {InputField} from '@/components/InputField'
import {ProductSearchResultMobile} from '@/components/ProductSearchResultMobile'
import {ProductSearchResultDesktop} from '@/components/ProductSearchResultDesktop'
import {ProductInteriorPageDesktop} from '@/components/ProductInteriorPageDesktop'
import {ProductInteriorPageMobile} from '@/components/ProductInteriorPageMobile'

const inter = Inter({subsets: ['latin']})

const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    console.log(file)
    const blob = new Blob([file])
    const reader = new FileReader()
    reader.readAsDataURL(blob)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = error => reject(error)
  })

export default function Home() {
  const [title, setTitle] = useState<string>()
  const [file, setFile] = useState<File[]>()
  const [base64, setBase64] = useState<string[]>()
  console.log(base64)
  useEffect(() => {
    ;(async () => {
      if (file?.length) {
        setBase64(await Promise.all(file.map(file => toBase64(file))))
      }
    })()
  }, [file])
  return (
    <main className="max-w-[1200px] m-auto mt-10">
      <Card className="space-y-6 mb-6 w-full">
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
            setFile(
              range(0, (event.target.files?.length ?? 0) - 1).map(
                n => event.target.files![n]
              )
            )
          }}
          helpId="product_image_help"
          helpText="Upload your product image here"
          id="product_image"
        />
      </Card>
      {!!base64 && !!title && (
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl p-1 bg-gray-100 mb-6">
            <Tab
              className={({selected}) =>
                classNames(
                  'w-full rounded-lg py-4 text-lg font-medium leading-5 text-gray-900',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-gray-900 hover:bg-black/[0.12] hover:text-black'
                )
              }
            >
              Search result (mobile)
            </Tab>
            <Tab
              className={({selected}) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-lg font-medium leading-5 text-gray-900',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-gray-900 hover:bg-black/[0.12] hover:text-black'
                )
              }
            >
              Search result (desktop)
            </Tab>
            <Tab
              className={({selected}) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-lg font-medium leading-5 text-gray-900',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-gray-900 hover:bg-black/[0.12] hover:text-black'
                )
              }
            >
              Product page (desktop)
            </Tab>
            <Tab
              className={({selected}) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-lg font-medium leading-5 text-gray-900',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-gray-900 hover:bg-black/[0.12] hover:text-black'
                )
              }
            >
              Product page (mobile)
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <ProductSearchResultMobile image={base64[0]} title={title} />
            </Tab.Panel>
            <Tab.Panel>
              <ProductSearchResultDesktop image={base64[0]} title={title} />
            </Tab.Panel>
            <Tab.Panel>
              <ProductInteriorPageDesktop image={base64} title={title} />
            </Tab.Panel>
            <Tab.Panel>
              <ProductInteriorPageMobile image={base64[0]} title={title} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      )}
    </main>
  )
}
