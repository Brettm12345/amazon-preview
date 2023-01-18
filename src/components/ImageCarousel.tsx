import {FC, useCallback, useEffect, useState} from 'react'
import useEmblaCarousel, {EmblaOptionsType} from 'embla-carousel-react'
import classNames from 'classnames'

interface ImageCarouselProps {
  images: string[]
}
export const ImageCarousel: FC<ImageCarouselProps> = props => {
  const {images} = props
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, setScrollSnaps, onSelect])

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {images.map(image => (
              <div className="embla__slide " key={image}>
                <img
                  className="embla__slide__img"
                  src={image}
                  alt="Your alt text"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex mt-4 space-x-4 items-center justify-center mb-6">
        {scrollSnaps.map((_, index) => (
          <span
            key={index.toString()}
            className={classNames(
              'rounded-full border border-gray-500 w-[1em] h-[1em]',
              selectedIndex === index && 'bg-blue-500'
            )}
            onClick={() => {
              scrollTo(index)
            }}
          />
        ))}
      </div>
    </>
  )
}
