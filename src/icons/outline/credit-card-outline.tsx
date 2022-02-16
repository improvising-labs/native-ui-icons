import * as React from 'react'
import Svg, { SvgProps, G, Path } from 'react-native-svg'
import { memo } from 'react'

const SvgCreditCardOutline = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="credit-card">
        <Path d="M19 5H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zM4 8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1H4zm16 8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5h16z" />
        <Path d="M7 15h4a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2zM15 15h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2z" />
      </G>
    </G>
  </Svg>
)

export default memo(SvgCreditCardOutline)
