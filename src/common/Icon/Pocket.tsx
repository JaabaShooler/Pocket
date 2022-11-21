import * as React from 'react';
import { FC } from 'react';

interface IconProps {
  color?: string;
  opacity?: number;
}

export const IconPocket: FC<IconProps> = ({ color = '#fff', opacity = 0.4 }) => (
  <svg width={20} height={20} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.33333 16.5002H8V0.889648C7.81467 0.889648 7.63462 0.951431 7.48833 1.06523L0.821667 6.25023C0.721433 6.3282 0.640346 6.42804 0.584597 6.54214C0.528848 6.65624 0.499912 6.78157 0.5 6.90856V15.6669C0.5 15.8879 0.587798 16.0999 0.744078 16.2561C0.900358 16.4124 1.11232 16.5002 1.33333 16.5002Z'
      fill={color}
    />
    <path
      opacity={opacity}
      d='M15.5 15.6669C15.5 15.8879 15.4122 16.0999 15.2559 16.2561C15.0996 16.4124 14.8877 16.5002 14.6667 16.5002H1.33333C1.11232 16.5002 0.900358 16.4124 0.744078 16.2561C0.587798 16.0999 0.5 15.8879 0.5 15.6669V6.90856C0.499912 6.78157 0.528848 6.65624 0.584597 6.54214C0.640346 6.42804 0.721433 6.3282 0.821667 6.25023L7.48833 1.06523C7.63462 0.951431 7.81467 0.889648 8 0.889648C8.18533 0.889648 8.36538 0.951431 8.51167 1.06523L15.1783 6.25023C15.2786 6.3282 15.3597 6.42804 15.4154 6.54214C15.4712 6.65624 15.5001 6.78157 15.5 6.90856V15.6669Z'
      fill={color}
    />
  </svg>
);
