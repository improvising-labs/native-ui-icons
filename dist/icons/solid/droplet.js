import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgDroplet = (props) => (<Svg viewBox="0 0 24.2 24.2" {...props}>
    <G data-name="Layer 2">
      <Path d="M12 21.1a7.4 7.4 0 0 1-5.28-2.28 7.73 7.73 0 0 1 .1-10.77l4.64-4.65a.94.94 0 0 1 .71-.3 1 1 0 0 1 .71.31l4.56 4.72a7.73 7.73 0 0 1-.09 10.77A7.33 7.33 0 0 1 12 21.1z" data-name="droplet"/>
    </G>
  </Svg>);
export default memo(SvgDroplet);
