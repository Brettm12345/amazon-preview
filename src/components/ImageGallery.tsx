import classNames from 'classnames'
import {FC, useState} from 'react'

interface ImageGalleryProps {
  images: string[]
}

export const ImageGallery: FC<ImageGalleryProps> = ({images}) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <div className="flex space-x-6">
      <div className="space-y-4">
        {images.map((image, index) => (
          <img
            key={index.toString()}
            alt="Product image"
            src={image}
            onMouseEnter={() => {
              setSelectedIndex(index)
            }}
            className={classNames(
              'w-[40px] h-[40px] min-w-[40px] min-h-[40px] border rounded-lg',
              index === selectedIndex ? 'ring-4 ring-blue-300 ' : ''
            )}
          />
        ))}
      </div>
      <img
        src={images[selectedIndex]}
        className="max-w-[613px] max-h-[613px] min-w-[600px] mr-8 aspect-square"
      />
    </div>
  )
}
