import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgCheckmarkCircle2 = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <Path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" data-name="checkmark-circle-2"/>
    </G>
  </Svg>);
export default memo(SvgCheckmarkCircle2);
