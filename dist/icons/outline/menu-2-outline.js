import * as React from 'react';
import Svg, { G, Circle, Rect } from 'react-native-svg';
import { memo } from 'react';
const SvgMenu2Outline = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="menu-2">
        <Circle cx={4} cy={12} r={1}/>
        <Rect x={7} y={11} width={14} height={2} rx={0.94} ry={0.94}/>
        <Rect x={3} y={16} width={18} height={2} rx={0.94} ry={0.94}/>
        <Rect x={3} y={6} width={18} height={2} rx={0.94} ry={0.94}/>
      </G>
    </G>
  </Svg>);
export default memo(SvgMenu2Outline);
