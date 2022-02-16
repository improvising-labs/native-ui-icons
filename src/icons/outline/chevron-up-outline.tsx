import * as React from 'react'
import Svg, { SvgProps, G, Path } from 'react-native-svg'
import { memo } from 'react'

const SvgChevronUpOutline = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <Path
        d="M16 14.5a1 1 0 0 1-.71-.29L12 10.9l-3.3 3.18a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.42l4-3.86a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.42 1 1 0 0 1-.69.28z"
        data-name="chevron-up"
      />
    </G>
  </Svg>
)

export default memo(SvgChevronUpOutline)
