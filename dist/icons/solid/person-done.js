import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgPersonDone = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="person-done">
        <Path d="M21.66 4.25a1 1 0 0 0-1.41.09l-1.87 2.15-.63-.71a1 1 0 0 0-1.5 1.33l1.39 1.56a1 1 0 0 0 .75.33 1 1 0 0 0 .74-.34l2.61-3a1 1 0 0 0-.08-1.41zM10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zM16 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1"/>
      </G>
    </G>
  </Svg>);
export default memo(SvgPersonDone);
