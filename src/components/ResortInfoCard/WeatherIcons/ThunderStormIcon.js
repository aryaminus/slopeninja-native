import React from 'react';
import { Svg } from 'expo';

const {
  G,
  Path,
} = Svg;

const ThunderStormIcon = ({ width = 60, height = 60 }) => (
  <Svg width={width} height={height} viewBox="0 0 100 100">
    <G fill="none" fill-rule="evenodd">
      <Path d="M62.945 60.243s-2.745 7.473-2.05 10.333c.573 2.36 2.97 3.813 5.343 3.235 2.38-.578 3.836-2.97 3.264-5.33-.693-2.86-6.557-8.237-6.557-8.237M79.998 59.926s-2.745 7.473-2.05 10.33c.573 2.365 2.97 3.816 5.344 3.24 2.38-.58 3.836-2.973 3.264-5.334-.694-2.858-6.558-8.236-6.558-8.236M14.385 61.2s-2.745 7.473-2.05 10.33c.573 2.365 2.97 3.817 5.344 3.24 2.38-.58 3.835-2.972 3.262-5.334-.693-2.858-6.557-8.235-6.557-8.235M26.207 77.452s-2.757 7.424-2.068 10.26c.567 2.343 2.96 3.78 5.336 3.202 2.38-.58 3.84-2.954 3.27-5.298-.687-2.837-6.54-8.164-6.54-8.164M56.688 76.476S53.93 83.9 54.62 86.734c.568 2.344 2.96 3.78 5.336 3.203 2.38-.58 3.84-2.954 3.27-5.298-.687-2.838-6.538-8.164-6.538-8.164M74.71 75.643s-2.76 7.423-2.07 10.258c.57 2.346 2.96 3.782 5.337 3.205 2.38-.58 3.84-2.954 3.27-5.3-.687-2.836-6.538-8.162-6.538-8.162" fill="#38A1E8" />
      <Path d="M28.346 65.884h14.027l-.74-2.06c-1.338-3.726-2.553-7.102-2.936-8.16-.638-1.764-.664-3.137-.07-3.964.485-.677 1.255-.818 1.434-.818h4.247c2.662 0 4.288 2.658 4.87 4.932.18.71.39 1.526.62 2.42.925 3.588 2.193 8.505 3.074 12.34.625 2.713.01 3.85-.284 4.21-.272.338-.65.5-1.16.5H36.83l5.11 14.595c.236.67.2 1.04.157 1.16-.194.026-.89-.134-1.517-1.035-2.973-4.274-10.464-15.325-13.734-20.357-.792-1.22-1.043-2.223-.707-2.828.306-.55 1.212-.936 2.206-.936" fill="#F9C900"/>
      <Path d="M88.073 33.89c6.128 0 11.113 5.06 11.113 11.283 0 6.22-4.985 11.28-11.113 11.28H39.756c-7.69 0-13.947-6.354-13.947-14.163 0-7.81 6.257-14.163 13.946-14.163 1.432 0 2.855.224 4.225.665l.897.288.315-.898c2.953-8.43 10.845-14.092 19.636-14.092 10.75 0 19.67 8.176 20.753 19.02l.1 1.004.99-.124c.543-.068.99-.1 1.403-.1" fill="#D6E3F2" />
      <Path d="M12.276 31.677C5.508 31.677 0 37.25 0 44.1c0 6.845 5.508 12.418 12.276 12.418h53.377c8.498 0 15.408-6.995 15.408-15.593 0-8.598-6.91-15.593-15.407-15.593-1.58 0-3.153.248-4.668.73l-.987.32-.35-.99c-3.26-9.28-11.98-15.514-21.693-15.514-11.874 0-21.73 9.003-22.925 20.94l-.11 1.107-1.09-.137c-.605-.076-1.098-.11-1.554-.11" fill="#BAC6D1" />
    </G>
  </Svg>
);

export default ThunderStormIcon;
