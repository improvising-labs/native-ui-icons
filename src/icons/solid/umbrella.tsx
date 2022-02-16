import * as React from 'react'
import Svg, { SvgProps, G, Path } from 'react-native-svg'
import { memo } from 'react'

const SvgUmbrella = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <Path
        d="M12 2A10 10 0 0 0 2 12a1 1 0 0 0 1 1h8v6a3 3 0 0 0 6 0 1 1 0 0 0-2 0 1 1 0 0 1-2 0v-6h8a1 1 0 0 0 1-1A10 10 0 0 0 12 2z"
        data-name="umbrella"
      />
    </G>
  </Svg>
)

export default memo(SvgUmbrella)
