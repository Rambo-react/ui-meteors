import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgMoreHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    ref={ref}
    viewBox={'0 0 24 24'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#more-horizontal_svg__a)'} fill={props.fill}>
      <path
        d={
          'M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M19 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4'
        }
      />
    </g>
    <defs>
      <clipPath id={'more-horizontal_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'#fff'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgMoreHorizontal)
const Memo = memo(ForwardRef)

export default Memo
