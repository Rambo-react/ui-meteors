import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgImageIconOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    ref={ref}
    viewBox={'0 0 24 24'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#image-icon-outline_svg__a)'} fill={props.fill}>
      <path
        d={
          'M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3M6 5h12a1 1 0 0 1 1 1v8.36l-3.2-2.73a2.77 2.77 0 0 0-3.52 0L5 17.7V6a1 1 0 0 1 1-1m12 14H6.56l7-5.84a.78.78 0 0 1 .93 0L19 17v1a1 1 0 0 1-1 1'
        }
      />
      <path d={'M8 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3'} />
    </g>
    <defs>
      <clipPath id={'image-icon-outline_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'#fff'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgImageIconOutline)
const Memo = memo(ForwardRef)

export default Memo
