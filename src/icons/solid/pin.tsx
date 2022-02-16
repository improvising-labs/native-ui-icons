import * as React from 'react'
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg'
import { memo } from 'react'

const SvgPin = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="pin">
        <Circle cx={12} cy={9.5} r={1.5} />
        <Path d="M12 2a8 8 0 0 0-8 7.92c0 5.48 7.05 11.58 7.35 11.84a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 9.92A8 8 0 0 0 12 2zm0 11a3.5 3.5 0 1 1 3.5-3.5A3.5 3.5 0 0 1 12 13z" />
      </G>
    </G>
  </Svg>
)

export default memo(SvgPin)
