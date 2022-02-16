import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgPeople = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="people">
        <Path d="M9 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zM17 13a3 3 0 1 0-3-3 3 3 0 0 0 3 3zM21 20a1 1 0 0 0 1-1 5 5 0 0 0-8.06-3.95A7 7 0 0 0 2 20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1"/>
      </G>
    </G>
  </Svg>);
export default memo(SvgPeople);
