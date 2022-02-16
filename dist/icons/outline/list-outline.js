import * as React from 'react';
import Svg, { G, Circle, Rect } from 'react-native-svg';
import { memo } from 'react';
const SvgListOutline = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="list">
        <Circle cx={4} cy={7} r={1}/>
        <Circle cx={4} cy={12} r={1}/>
        <Circle cx={4} cy={17} r={1}/>
        <Rect x={7} y={11} width={14} height={2} rx={0.94} ry={0.94}/>
        <Rect x={7} y={16} width={14} height={2} rx={0.94} ry={0.94}/>
        <Rect x={7} y={6} width={14} height={2} rx={0.94} ry={0.94}/>
      </G>
    </G>
  </Svg>);
export default memo(SvgListOutline);
