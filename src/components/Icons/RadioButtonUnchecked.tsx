import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgRadioButtonUnchecked = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    ref={ref}
    viewBox={'0 0 24 24'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#radio-button-unchecked_svg__a)'}>
      <path
        d={
          'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8'
        }
        fill={props.fill}
      />
    </g>
    <defs>
      <clipPath id={'radio-button-unchecked_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'#fff'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgRadioButtonUnchecked)
const Memo = memo(ForwardRef)

export default Memo
