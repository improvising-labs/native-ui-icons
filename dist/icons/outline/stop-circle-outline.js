import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgStopCircleOutline = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="stop-circle">
        <Path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
        <Path d="M14.75 8h-5.5A1.25 1.25 0 0 0 8 9.25v5.5A1.25 1.25 0 0 0 9.25 16h5.5A1.25 1.25 0 0 0 16 14.75v-5.5A1.25 1.25 0 0 0 14.75 8zM14 14h-4v-4h4z"/>
      </G>
    </G>
  </Svg>);
export default memo(SvgStopCircleOutline);
