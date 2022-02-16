import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgMinus = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <Path d="M19 13H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z" data-name="minus"/>
    </G>
  </Svg>);
export default memo(SvgMinus);
