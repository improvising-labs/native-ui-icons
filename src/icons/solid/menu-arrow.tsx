import * as React from 'react'
import Svg, { SvgProps, G, Path, Rect } from 'react-native-svg'
import { memo } from 'react'

const SvgMenuArrow = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="menu-arrow">
        <Path d="M20.05 11H5.91l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.91 13h14.14a1 1 0 0 0 .95-.95V12a1 1 0 0 0-.95-1z" />
        <Rect x={3} y={17} width={18} height={2} rx={0.95} ry={0.95} />
        <Rect x={3} y={5} width={18} height={2} rx={0.95} ry={0.95} />
      </G>
    </G>
  </Svg>
)

export default memo(SvgMenuArrow)
