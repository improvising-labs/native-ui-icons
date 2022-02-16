import * as React from 'react'
import Svg, { SvgProps, G, Rect } from 'react-native-svg'
import { memo } from 'react'

const SvgMenu = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="menu">
        <Rect x={3} y={11} width={18} height={2} rx={0.95} ry={0.95} />
        <Rect x={3} y={16} width={18} height={2} rx={0.95} ry={0.95} />
        <Rect x={3} y={6} width={18} height={2} rx={0.95} ry={0.95} />
      </G>
    </G>
  </Svg>
)

export default memo(SvgMenu)
