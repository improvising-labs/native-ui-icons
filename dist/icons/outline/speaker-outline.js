import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgSpeakerOutline = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="speaker">
        <Path d="M12 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM12 12a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 12zm0 5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 17z"/>
        <Path d="M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm1 17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z"/>
      </G>
    </G>
  </Svg>);
export default memo(SvgSpeakerOutline);
