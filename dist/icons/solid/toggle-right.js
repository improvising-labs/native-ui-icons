import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgToggleRight = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="toggle-right">
        <Circle cx={15} cy={12} r={1}/>
        <Path d="M15 5H9a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14zm0 10a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"/>
      </G>
    </G>
  </Svg>);
export default memo(SvgToggleRight);
