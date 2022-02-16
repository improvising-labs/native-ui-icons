import * as React from 'react'
import Svg, { SvgProps, G, Path, Circle } from 'react-native-svg'
import { memo } from 'react'

const SvgQuestionMark = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="menu-arrow">
        <Path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z" />
        <Circle cx={12} cy={19} r={1} />
      </G>
    </G>
  </Svg>
)

export default memo(SvgQuestionMark)
