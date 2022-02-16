import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgPieChartOutline = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="pie-chart">
        <Path d="M13 2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 9 9 0 0 0-9-9zm1 8V4.07A7 7 0 0 1 19.93 10z"/>
        <Path d="M20.82 14.06a1 1 0 0 0-1.28.61A8 8 0 1 1 9.33 4.46a1 1 0 0 0-.66-1.89 10 10 0 1 0 12.76 12.76 1 1 0 0 0-.61-1.27z"/>
      </G>
    </G>
  </Svg>);
export default memo(SvgPieChartOutline);
