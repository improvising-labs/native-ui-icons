import * as React from 'react'
import Svg, { SvgProps, G, Path, Circle } from 'react-native-svg'
import { memo } from 'react'

const SvgQuestionMarkCircleOutline = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="menu-arrow-circle">
        <Path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <Path d="M12 6a3.5 3.5 0 0 0-3.5 3.5 1 1 0 0 0 2 0A1.5 1.5 0 1 1 12 11a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.16A3.49 3.49 0 0 0 12 6z" />
        <Circle cx={12} cy={17} r={1} />
      </G>
    </G>
  </Svg>
)

export default memo(SvgQuestionMarkCircleOutline)
