import * as React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';
import { memo } from 'react';
const SvgInfoOutline = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="info">
        <Path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
        <Circle cx={12} cy={8} r={1}/>
        <Path d="M12 10a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1z"/>
      </G>
    </G>
  </Svg>);
export default memo(SvgInfoOutline);
