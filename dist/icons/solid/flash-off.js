import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgFlashOff = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="flash-off">
        <Path d="m17.33 14.5 2.5-3.74A1 1 0 0 0 19 9.2h-5.89l.77-7.09a1 1 0 0 0-.65-1 1 1 0 0 0-1.17.38L8.94 6.11zM6.67 9.5l-2.5 3.74A1 1 0 0 0 5 14.8h5.89l-.77 7.09a1 1 0 0 0 .65 1.05 1 1 0 0 0 .34.06 1 1 0 0 0 .83-.44l3.12-4.67zM20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/>
      </G>
    </G>
  </Svg>);
export default memo(SvgFlashOff);
