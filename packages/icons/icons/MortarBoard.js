
import React, { Component } from 'react';

class MortarBoardIcon extends Component {
  render() {
    var defaults = {
      'aria-hidden': true,
      height: 16,
      width: 16,
      viewBox: '0 0 16 16',
      style: {
        display: 'inline-block',
        verticalAlign: 'text-top',
        fill: 'currentColor',
      },
    };
    return (
      <svg {...defaults} {...this.props}>
        <path fillRule="evenodd" d="M7.808 9.405l-3.83-1.19c-4-8 0 1.5 0 2.5s1.8 1.5 4 1.5 4-.5 4-1.5v-2.5l-3.83 1.19a.73.73 0 0 1-.36 0h.02zm.28-6.39a.34.34 0 0 0-.2 0l-7.64 2.38a.35.35 0 0 0 0 .67l1.73.55v1.77c-.3.17-.5.5-.5.86 0 .19.05.36.14.5-.08.14-.14.31-.14.5v2.58c0 .55 2 .55 2 0v-2.58c0-.19-.05-.36-.14-.5.08-.14.14-.31.14-.5 0-.38-.2-.69-.5-.86v-1.45l4.89 1.53c.06.02.14.02.2 0l7.64-2.38a.35.35 0 0 0 0-.67l-7.63-2.39.01-.01zm-.09 3.2c-.55 0-1-.22-1-.5s.45-.5 1-.5 1 .22 1 .5-.45.5-1 .5z"/>
      </svg>
    );
  }
}
export default MortarBoardIcon;
