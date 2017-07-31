import React from 'react';
import { Svg } from 'expo';

const {
  G,
  Path,
} = Svg;

const BorealLogo = ({ width = 60, height = 60 }) => (
  <Svg width={width} height={height} viewBox="0 0 100 100">
    <G fill="none" fill-rule="evenodd">
      <Path d="M89.61 36.16l-.484-.494L57.086 3.61c-2.388-2.393-5.435-1.963-7.646.264L3.783 49.566C.463 52.89 2.59 56.223 3.7 57.333l30.898 30.925.986.982.177.182 4.215 4.214c2.486 2.49 6.678 4.225 10.196 4.218h6.224c3.514 0 7.696-1.74 10.182-4.23l4.45-4.49c2.472-2.486 4.214-6.67 4.222-10.185v-3.652h3.64c3.516 0 7.698-1.745 10.18-4.228l4.424-4.425c2.483-2.484 4.218-6.672 4.233-10.186V50.22c0-3.517-1.725-7.714-4.21-10.204l-3.904-3.86z" fill="#4A4A4A" />
      <Path d="M91.662 56.496c0 1.9-1.112 4.558-2.464 5.906l-4.417 4.42c-1.34 1.346-3.985 2.45-5.9 2.453H72.664c-.086 0-.18 0-.275-.02-.865 0-3.18.22-3.188 2.925-.002.067-.01.134-.026.2 0 .118.026.245.026.36v6.23c0 1.905-1.087 4.563-2.442 5.905l-4.43 4.43c-1.34 1.343-3.985 2.45-5.898 2.453h-6.232c-1.9 0-4.56-1.088-5.9-2.44l-4.39-4.392L9.935 54.932c-1.35-1.34-.392-2.592.945-3.94l40.064-40.096c1.51-1.51 2.395-2.496 4.71-.178l29.17 29.19 4.39 4.388c1.347 1.346 2.445 3.99 2.438 5.904v6.237l.01.06z" fill="#4A4A4A" />
      <Path d="M74.37 38.777c.747.757.747 1.974 0 2.73l-4.743 4.744c-.755.754-1.977.754-2.73 0L62.16 41.51c-.752-.755-1.973-.758-2.728-.006 0 .003-.003.004-.006.006l-4.738 4.743c-.754.756-1.974.756-2.728.004v-.003l-4.744-4.742c-.75-.754-1.968-.758-2.722-.008l-.007.008-4.74 4.743c-.753.756-1.973.756-2.726.004 0 0 0-.002-.002-.003l-4.765-4.79c-.752-.75-.757-1.968-.008-2.722l.008-.007 19.7-19.698c.745-.753 1.96-.76 2.714-.012l.013.012 19.69 19.745z" fill="#FFF" />
    </G>
  </Svg>
);

export default BorealLogo;
