import type {ImageProps} from 'next/future/image'
import Image from 'next/future/image'
import type {TGetSVGReturn} from 'plaiceholder/dist/svg'
import React from 'react'

export interface EnhancedImageProps extends ImageProps {
  svg: TGetSVGReturn
  bleed?: boolean | string
}

export function EnhancedImage({
  svg,
  bleed,
  className,
  style,
  title,
  ...restProps
}: EnhancedImageProps) {
  return (
    <figure
      className={className}
      style={style}
      {...(bleed != null && {'data-bleed': ''})}>
      <div className="relative overflow-hidden">
        {React.createElement(
          svg[0],
          {
            ...svg[1],
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            style: {
              ...svg[1].style,
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              transform: ['scale(1.5)', svg[1].style.transform].join(' '),
              filter: 'blur(40px)',
            },
            className: 'z-[-10]',
          },
          svg[2].map((child) =>
            React.createElement(child[0], {
              key: [child[1].x, child[1].y].join(','),
              ...child[1],
            }),
          ),
        )}
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image {...restProps} />
      </div>

      {!!title && <figcaption>{title}</figcaption>}
    </figure>
  )
}
