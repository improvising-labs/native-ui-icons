import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgMinusCircleOutline = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="minus-circle">
        <Path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
        <Path d="M15 11H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z"/>
      </G>
    </G>
  </Svg>);
export default memo(SvgMinusCircleOutline);
