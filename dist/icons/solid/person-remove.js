import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgPersonRemove = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="person-remove">
        <Path d="M21 6h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zM10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zM16 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1"/>
      </G>
    </G>
  </Svg>);
export default memo(SvgPersonRemove);
