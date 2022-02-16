import * as React from 'react';
import Svg, { G, Circle } from 'react-native-svg';
import { memo } from 'react';
const SvgMoreHorizontal = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="more-horizotnal">
        <Circle cx={12} cy={12} r={2}/>
        <Circle cx={19} cy={12} r={2}/>
        <Circle cx={5} cy={12} r={2}/>
      </G>
    </G>
  </Svg>);
export default memo(SvgMoreHorizontal);
