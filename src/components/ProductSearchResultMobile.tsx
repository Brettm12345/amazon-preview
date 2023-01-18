import {FC} from 'react'

interface ProductSearchResultProps {
  image: string
  title: string
}

export const ProductSearchResultMobile: FC<ProductSearchResultProps> = ({
  image,
  title,
}) => (
  <div className="flex w-full  relative">
    <img src="/iphone.png" className="w-[410px] -left-4 h-auto absolute" />
    <div className="flex max-w-[400px] mt-24 px-4">
      <div className="image-column">
        <div className="flex flex-col px-1 relative">
          <div className="px-2 py-4 flex-grow image-overlay-grey">
            <img className="max-h-[170px]" src={image} />
          </div>
        </div>
      </div>
      <div className="title-column">
        <div className="flex flex-col px-[4px]">
          <h2 className="text-[14px] leading-[20px] line-clamp-3">{title}</h2>
          <div className="flex items-center">
            <span className="text-[#007185] text-[12px]">4.5</span>
            <span className="w-[0.4em]" />
            <i className="star" />
            <span className="text-[#0F1111] font-light text-[12px] ml-1">
              (12354)
            </span>
          </div>
          <div className="flex">
            <span className="price">
              <span className="price-symbol">€</span>
              <span className="price-whole">8</span>
              <span className="price-fraction">90</span>
            </span>
            <span className="w-[0.4em]" />
            <span className="text-secondary text-light text-[12px] leading-[16px] mt-4">
              (€0.02/Count)
            </span>
          </div>
          <span className="text-secondary text-light mb-2 text-[12px] leading-[16px]">
            Save more with subscribe and save
          </span>
          <i className="prime-icon" />
          <span className="text-[#0F1111]">
            FREE delivery <b>Sun, Jan 22</b> on $25 of items shipped by Amazon
          </span>
          <span className="text-[#0F1111]">
            Or fastest delivery <b>Wed, Jan 18</b>
          </span>
        </div>
      </div>
    </div>
    <img src="/iphone.png" className="w-[310px] left-[410px] h-auto absolute" />
    <div className="flex max-w-[300px] px-[28px] mt-[38px]">
      <div className="image-column">
        <div className="flex flex-col px-1 relative">
          <div className="px-2 py-4 flex-grow image-overlay-grey">
            <img className="max-h-[170px]" src={image} />
          </div>
        </div>
      </div>
      <div className="title-column">
        <div className="flex flex-col px-[4px]">
          <h2 className="text-[14px] leading-[20px] line-clamp-3">{title}</h2>
          <div className="flex items-center">
            <span className="text-[#007185] text-[12px]">4.5</span>
            <span className="w-[0.4em]" />
            <i className="star" />
            <span className="text-[#0F1111] font-light text-[12px] ml-1">
              (12354)
            </span>
          </div>
          <div className="flex">
            <span className="price">
              <span className="price-symbol">€</span>
              <span className="price-whole">8</span>
              <span className="price-fraction">90</span>
            </span>
            <span className="w-[0.4em]" />
            <span className="text-secondary text-light text-[12px] leading-[16px] mt-4">
              (€0.02/Count)
            </span>
          </div>
          <span className="text-secondary text-light mb-2 text-[12px] leading-[16px]">
            Save more with subscribe and save
          </span>
          <i className="prime-icon" />
          <span className="text-[#0F1111]">
            FREE delivery <b>Sun, Jan 22</b> on $25 of items shipped by Amazon
          </span>
          <span className="text-[#0F1111]">
            Or fastest delivery <b>Wed, Jan 18</b>
          </span>
        </div>
      </div>
    </div>
  </div>
)
