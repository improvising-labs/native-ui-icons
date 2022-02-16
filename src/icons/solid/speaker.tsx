import * as React from 'react'
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg'
import { memo } from 'react'

const SvgSpeaker = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="speaker">
        <Circle cx={12} cy={15.5} r={1.5} />
        <Circle cx={12} cy={8} r={1} />
        <Path d="M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm-5 3a3 3 0 1 1-3 3 3 3 0 0 1 3-3zm0 14a3.5 3.5 0 1 1 3.5-3.5A3.5 3.5 0 0 1 12 19z" />
      </G>
    </G>
  </Svg>
)

export default memo(SvgSpeaker)
