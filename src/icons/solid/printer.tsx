import * as React from 'react'
import Svg, { SvgProps, G, Path } from 'react-native-svg'
import { memo } from 'react'

const SvgPrinter = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <Path
        d="M19.36 7H18V5a1.92 1.92 0 0 0-1.83-2H7.83A1.92 1.92 0 0 0 6 5v2H4.64A2.66 2.66 0 0 0 2 9.67v6.66A2.66 2.66 0 0 0 4.64 19h.86a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2h.86A2.66 2.66 0 0 0 22 16.33V9.67A2.66 2.66 0 0 0 19.36 7zM8 5h8v2H8zm-.5 14v-4h9v4z"
        data-name="printer"
      />
    </G>
  </Svg>
)

export default memo(SvgPrinter)
