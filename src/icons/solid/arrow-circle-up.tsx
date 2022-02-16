import * as React from 'react'
import Svg, { SvgProps, G, Path } from 'react-native-svg'
import { memo } from 'react'

const SvgArrowCircleUp = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <Path
        d="M12 22A10 10 0 1 0 2 12a10 10 0 0 0 10 10zM8.31 10.14l3-2.86a.49.49 0 0 1 .15-.1.54.54 0 0 1 .16-.1.94.94 0 0 1 .76 0 1 1 0 0 1 .33.21l3 3a1 1 0 0 1-1.42 1.42L13 10.41V16a1 1 0 0 1-2 0v-5.66l-1.31 1.25a1 1 0 0 1-1.38-1.45z"
        data-name="arrow-circle-up"
      />
    </G>
  </Svg>
)

export default memo(SvgArrowCircleUp)
