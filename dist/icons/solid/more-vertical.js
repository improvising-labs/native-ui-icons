import * as React from 'react';
import Svg, { G, Circle } from 'react-native-svg';
import { memo } from 'react';
const SvgMoreVertical = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="more-vertical">
        <Circle cx={12} cy={12} r={2}/>
        <Circle cx={12} cy={5} r={2}/>
        <Circle cx={12} cy={19} r={2}/>
      </G>
    </G>
  </Svg>);
export default memo(SvgMoreVertical);
