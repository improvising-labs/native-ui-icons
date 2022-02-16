import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgDropletOff = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="droplet-off">
        <Path d="M19 16.14A7.73 7.73 0 0 0 17.34 8l-4.56-4.69a1 1 0 0 0-.71-.31 1 1 0 0 0-.72.3L8.74 5.92zM6 8.82a7.73 7.73 0 0 0 .64 9.9A7.44 7.44 0 0 0 11.92 21a7.34 7.34 0 0 0 4.64-1.6zM20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/>
      </G>
    </G>
  </Svg>);
export default memo(SvgDropletOff);
