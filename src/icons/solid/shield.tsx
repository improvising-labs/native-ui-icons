import * as React from 'react'
import Svg, { SvgProps, G, Path } from 'react-native-svg'
import { memo } from 'react'

const SvgShield = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <Path
        d="M12 21.85a2 2 0 0 1-1-.25l-.3-.17A15.17 15.17 0 0 1 3 8.23v-.14a2 2 0 0 1 1-1.75l7-3.94a2 2 0 0 1 2 0l7 3.94a2 2 0 0 1 1 1.75v.14a15.17 15.17 0 0 1-7.72 13.2l-.3.17a2 2 0 0 1-.98.25z"
        data-name="shield"
      />
    </G>
  </Svg>
)

export default memo(SvgShield)
