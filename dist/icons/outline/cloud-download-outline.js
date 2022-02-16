import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgCloudDownloadOutline = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="cloud-download">
        <Path d="M14.31 16.38 13 17.64V12a1 1 0 0 0-2 0v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 21a1 1 0 0 0 .69-.28l3-2.9a1 1 0 1 0-1.38-1.44z"/>
        <Path d="M17.67 7A6 6 0 0 0 6.33 7a5 5 0 0 0-3.08 8.27A1 1 0 1 0 4.75 14 3 3 0 0 1 7 9h.1a1 1 0 0 0 1-.8 4 4 0 0 1 7.84 0 1 1 0 0 0 1 .8H17a3 3 0 0 1 2.25 5 1 1 0 0 0 .09 1.42 1 1 0 0 0 .66.25 1 1 0 0 0 .75-.34A5 5 0 0 0 17.67 7z"/>
      </G>
    </G>
  </Svg>);
export default memo(SvgCloudDownloadOutline);
