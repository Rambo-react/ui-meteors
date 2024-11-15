import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgBellOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    ref={ref}
    viewBox={'0 0 18 20'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      clipRule={'evenodd'}
      d={
        'm2.515 14 1.18-1.182c.378-.378.586-.88.586-1.414V6.727c0-1.357.59-2.654 1.62-3.556a4.66 4.66 0 0 1 3.737-1.129c2.327.309 4.082 2.413 4.082 4.895v4.467c0 .534.208 1.036.585 1.413L15.485 14zM11 16.341C11 17.24 10.084 18 9 18s-2-.76-2-1.659V16h4zm6.52-3.133-1.8-1.804V6.937C15.72 3.456 13.218.499 9.9.06a6.72 6.72 0 0 0-5.317 1.607 6.73 6.73 0 0 0-2.302 5.06l-.001 4.677-1.801 1.804a1.63 1.63 0 0 0-.354 1.782C.38 15.604.973 16 1.637 16H5v.341C5 18.359 6.794 20 9 20s4-1.641 4-3.659V16h3.363c.664 0 1.256-.396 1.51-1.009a1.63 1.63 0 0 0-.352-1.783'
      }
      fill={props.fill}
      fillRule={'evenodd'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBellOutline)
const Memo = memo(ForwardRef)

export default Memo
