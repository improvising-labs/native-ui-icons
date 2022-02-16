import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgLayout = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="layout">
        <Path d="M21 8V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v2zM3 10v8a3 3 0 0 0 3 3h5V10zM13 10v11h5a3 3 0 0 0 3-3v-8z"/>
      </G>
    </G>
  </Svg>);
export default memo(SvgLayout);
