import * as React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';
import { memo } from 'react';
const SvgShoppingCartOutline = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="shopping-cart">
        <Path d="M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7zm-4.7 7H8.76L7.13 8h12.25z"/>
        <Circle cx={7.5} cy={19.5} r={1.5}/>
        <Circle cx={17.5} cy={19.5} r={1.5}/>
      </G>
    </G>
  </Svg>);
export default memo(SvgShoppingCartOutline);
