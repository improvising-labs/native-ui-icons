import * as React from 'react'
import Svg, { SvgProps, G, Path, Rect } from 'react-native-svg'
import { memo } from 'react'

const SvgArchiveOutline = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="archive">
        <Path d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-2 5.22V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.22A3 3 0 0 0 21 6zM6 5h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2zm12 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h12z" />
        <Rect x={9} y={12} width={6} height={2} rx={0.87} ry={0.87} />
      </G>
    </G>
  </Svg>
)

export default memo(SvgArchiveOutline)
