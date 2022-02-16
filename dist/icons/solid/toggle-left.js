import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgToggleLeft = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="toggle-left">
        <Path d="M15 5H9a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14zM9 15a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"/>
        <Path d="M9 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
      </G>
    </G>
  </Svg>);
export default memo(SvgToggleLeft);
