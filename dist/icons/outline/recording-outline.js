import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgRecordingOutline = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <Path d="M18 8a4 4 0 0 0-4 4 3.91 3.91 0 0 0 .56 2H9.44a3.91 3.91 0 0 0 .56-2 4 4 0 1 0-4 4h12a4 4 0 0 0 0-8zM4 12a2 2 0 1 1 2 2 2 2 0 0 1-2-2zm14 2a2 2 0 1 1 2-2 2 2 0 0 1-2 2z" data-name="recording"/>
    </G>
  </Svg>);
export default memo(SvgRecordingOutline);
