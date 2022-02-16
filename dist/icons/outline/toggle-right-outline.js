import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgToggleRightOutline = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="toggle-right">
        <Path d="M15 5H9a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14zm0 12H9A5 5 0 0 1 9 7h6a5 5 0 0 1 0 10z"/>
        <Path d="M15 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/>
      </G>
    </G>
  </Svg>);
export default memo(SvgToggleRightOutline);
