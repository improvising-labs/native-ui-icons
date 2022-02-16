import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgBookOutline = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <Path d="M19 3H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM7 5h11v10H7a3 3 0 0 0-1 .18V6a1 1 0 0 1 1-1zm0 14a1 1 0 0 1 0-2h11v2z" data-name="book"/>
    </G>
  </Svg>);
export default memo(SvgBookOutline);
