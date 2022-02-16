import * as React from 'react'
import Svg, { SvgProps, G, Rect, Path } from 'react-native-svg'
import { memo } from 'react'

const SvgUploadOutline = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="upload">
        <Rect
          x={4}
          y={4}
          width={16}
          height={2}
          rx={1}
          ry={1}
          transform="rotate(180 12 5)"
        />
        <Rect
          x={17}
          y={5}
          width={4}
          height={2}
          rx={1}
          ry={1}
          transform="rotate(90 19 6)"
        />
        <Rect
          x={3}
          y={5}
          width={4}
          height={2}
          rx={1}
          ry={1}
          transform="rotate(90 5 6)"
        />
        <Path d="M8 14a1 1 0 0 1-.8-.4 1 1 0 0 1 .2-1.4l4-3a1 1 0 0 1 1.18 0l4 2.82a1 1 0 0 1 .24 1.39 1 1 0 0 1-1.4.24L12 11.24 8.6 13.8a1 1 0 0 1-.6.2z" />
        <Path d="M12 21a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z" />
      </G>
    </G>
  </Svg>
)

export default memo(SvgUploadOutline)
