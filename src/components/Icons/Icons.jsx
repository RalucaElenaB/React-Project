import robotHead from '../../images/Icons/robot-head.png';
import cat from '../../images/Icons/cat.png';
import pin from '../../images/Icons/pin.png';

import React from 'react';

export default function Icons({ variant, label, size = 24 }) {
  function getVariant(variant) {
    switch (variant) {
      case 'robot':
        return robotHead;
      case 'cat':
        return cat;
      case 'pin':
        return pin;
      default:
        return <robot />;
    }
  }

  return <img src={getVariant(variant)} alt={label} height={size} />;
}
