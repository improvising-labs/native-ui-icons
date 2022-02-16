import * as React from 'react';
import Svg, { G, Path, Rect } from 'react-native-svg';
import { memo } from 'react';
const SvgClipboard = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="clipboard">
        <Path d="M18 4v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z"/>
        <Rect x={7} y={2} width={10} height={6} rx={1} ry={1}/>
      </G>
    </G>
  </Svg>);
export default memo(SvgClipboard);
