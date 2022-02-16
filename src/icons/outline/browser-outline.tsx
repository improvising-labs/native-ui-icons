import * as React from 'react'
import Svg, { SvgProps, G, Path, Circle } from 'react-native-svg'
import { memo } from 'react'

const SvgBrowserOutline = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="browser">
        <Path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7h14zM5 9V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3z" />
        <Circle cx={8} cy={7.03} r={1} />
        <Circle cx={12} cy={7.03} r={1} />
      </G>
    </G>
  </Svg>
)

export default memo(SvgBrowserOutline)
