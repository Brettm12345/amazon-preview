import {FC} from 'react'

interface ProductSearchResultProps {
  image: string
  title: string
}

export const ProductInteriorPageDesktop: FC<ProductSearchResultProps> = ({
  image,
  title,
}) => (
  <div className="flex">
    <img
      className="max-w-[613px] max-h-[613px] min-w-[600px] mr-8 aspect-square"
      src={image}
    />
    <div className="flex flex-col px-[4px">
      <h2 className="text-[24px] leading-[32px]">{title}</h2>
      <span className="text-[#007185] text-[14px] leading-[20px]">
        Visit the Vegavero Store
      </span>
      <div className="flex items-center mb-4">
        <span className="text-[#007185] text-[12px]">4.5</span>
        <span className="w-[0.4em]" />
        <i className="star" />
        <span className="text-[#0F1111] font-light text-[12px] ml-1">
          (12354)
        </span>
      </div>
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
              <span className="text-[14px] leading-[20px]">
                Get <b>Fast, Free Shipping</b> with Amazon prime
              </span>
            </tr>
          </tbody>
        </table>
        <span className="w-[0.4em]" />
      </div>
      <hr />
      <h2 className="text-[16px] leading-[24px] font-bold">About this item</h2>
      <ul className="list">
        <li>
          Fast Capsule Filling - These empty pill capsules come pre-separated to
          make the capsule filling process quick and simple. Say goodbye to
          crushed capsules... Our 00 separated capsules are specially designed
          to be used with your capsule filling tray. Separated 00 capsules hold
          600mg to 1100mg of powdered supplements, depending on density.
        </li>
        <li>
          Snap Shut Design - Our expertly engineered snap shut design ensures
          you wont waste any of your valuable powders, herbs or ingredients
          during or after filling your pills. The click shut feature also helps
          protect the contents of your 00 capsules separated from humidity and
          air. Have peace of mind knowing that your vegan capsules are secure.
        </li>
        <li>
          Est eu ad est quis excepteur. Nostrud ex ut aute occaecat veniam enim.
          Quis commodo irure ut quis elit tempor irure consectetur mollit culpa
          excepteur. Dolor non velit dolore cillum qui. Pariatur nostrud ut
          veniam pariatur qui qui non dolor consequat. Officia velit laborum
          dolore consequat non id excepteur adipisicing in id et commodo.
        </li>
        <li>
          Nostrud amet cillum culpa ad eu non ex nulla eu est nisi. Aliquip
          laborum officia aute irure exercitation et reprehenderit non
          incididunt dolor non Lorem mollit ex. Aliquip esse in fugiat labore ut
          elit ad eiusmod veniam cillum eiusmod quis do. Sit proident
          consectetur magna aliqua occaecat laboris culpa. Incididunt eu
          excepteur commodo officia do pariatur deserunt esse qui anim proident
          aliqua. Mollit adipisicing consequat sit ex veniam esse occaecat
          mollit. Sit dolor laboris proident anim ullamco ut laboris sunt.
        </li>
      </ul>
    </div>
  </div>
)
