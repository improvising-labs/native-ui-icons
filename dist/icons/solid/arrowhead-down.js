import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowheadDown = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="arrowhead-down">
        <Path d="M17.37 12.39 12 16.71l-5.36-4.48a1 1 0 1 0-1.28 1.54l6 5a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.14z"/>
        <Path d="M11.36 11.77a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.15L12 9.71 6.64 5.23a1 1 0 0 0-1.28 1.54z"/>
      </G>
    </G>
  </Svg>);
export default memo(SvgArrowheadDown);
