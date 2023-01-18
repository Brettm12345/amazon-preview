import {FC} from 'react'
import {ImageCarousel} from './ImageCarousel'
import Image from 'next/image'

interface ProductSearchResultProps {
  images: string[]
  title: string
}

export const ProductInteriorPageMobile: FC<ProductSearchResultProps> = ({
  images,
  title,
}) => (
  <div className="flex w-full relative">
    <img src="/iphone.png" className="w-[410px] -left-5 h-auto absolute" />
    <div className="flex max-w-[400px]">
      <div className="flex flex-col px-[28px] pt-[50px]">
        <div className="flex items-center justify-between">
          <span className="text-[#007185] text-[14px] leading-[20px]">
            Visit the Vegavero Store
          </span>
          <span className="flex items-center">
            <i className="star-mini" />
            <span className="text-[#0F1111] font-light text-[12px] ml-1">
              (12354)
            </span>
          </span>
        </div>
        <h2 className="text-[1.3rem] leading-[1.4]">{title}</h2>
        <ImageCarousel images={images} />
        <hr />
        <div className="flex flex-col mb-4">
          <table>
            <tbody>
              <tr>
                <td className="text-secondary text-[14px] leading-[20px] px-[3px] align-top">
                  Price:
                </td>
                <td className="pl-[3px] flex">
                  <span className="text-[#B12704] text-[18px] leading-[24px]">
                    €8.90
                  </span>
                  <span className="text-[#B12704] text-[12px] leading-[16px] mt-2 ml-1">
                    (€0.13 / Count)
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <span className="w-[0.4em]" />
        </div>
        <hr />
        <h2 className="text-[16px] leading-[24px] font-bold">
          About this item
        </h2>
        <ul className="list">
          <li>
            Irure dolore enim tempor eu exercitation qui culpa laboris. Et irure
            amet aute est exercitation labore. Non fugiat do voluptate qui dolor
            incididunt anim magna irure mollit.
          </li>
          <li>
            Do voluptate reprehenderit sit magna voluptate ad culpa. Cupidatat
            et sint amet anim Lorem amet elit ea amet est exercitation proident
            ea. Minim velit in veniam cupidatat est esse eu. Nisi in aliquip
          </li>
        </ul>
      </div>
    </div>
    <img src="/iphone.png" className="w-[310px] left-[410px] h-auto absolute" />
    <div className="flex max-w-[300px] ml-4">
      <div className="flex flex-col px-[28px] pt-[50px]">
        <div className="flex items-center justify-between">
          <span className="text-[#007185] text-[14px] leading-[20px]">
            Visit the Vegavero Store
          </span>
          <span className="flex items-center">
            <i className="star-mini" />
            <span className="text-[#0F1111] font-light text-[12px] ml-1">
              (12354)
            </span>
          </span>
        </div>
        <h2 className="text-[1.3rem] leading-[1.4]">{title}</h2>
        <ImageCarousel images={images} />
        <hr />
        <div className="flex flex-col mb-4">
          <table>
            <tbody>
              <tr>
                <td className="text-secondary text-[14px] leading-[20px] px-[3px] align-top">
                  Price:
                </td>
                <td className="pl-[3px] flex">
                  <span className="text-[#B12704] text-[18px] leading-[24px]">
                    €8.90
                  </span>
                  <span className="text-[#B12704] text-[12px] leading-[16px] mt-2 ml-1">
                    (€0.13 / Count)
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <span className="w-[0.4em]" />
        </div>
        <hr />
        <h2 className="text-[16px] leading-[24px] font-bold">
          About this item
        </h2>
        <ul className="list">
          <li>
            Irure dolore enim tempor eu exercitation qui culpa laboris. Et irure
            amet aute est exercitation labore. Non fugiat do voluptate qui dolor
            incididunt anim magna irure mollit.
          </li>
        </ul>
      </div>
    </div>
  </div>
)
