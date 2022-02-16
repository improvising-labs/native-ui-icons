import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgCheckmarkCircle2Outline = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="checkmark-circle-2">
        <Path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
        <Path d="m14.7 8.39-3.78 5-1.63-2.11a1 1 0 0 0-1.58 1.23l2.43 3.11a1 1 0 0 0 .79.38 1 1 0 0 0 .79-.39l4.57-6a1 1 0 1 0-1.6-1.22z"/>
      </G>
    </G>
  </Svg>);
export default memo(SvgCheckmarkCircle2Outline);
