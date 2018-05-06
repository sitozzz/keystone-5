
import React, { Component } from 'react';

class VerifiedIcon extends Component {
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
        <path fillRule="evenodd" d="M15.68 7.07L14.6 5.73c-.17-.22-.28-.48-.31-.77l-.19-1.7a1.51 1.51 0 0 0-1.33-1.33l-1.7-.19c-.3-.03-.56-.16-.78-.33L8.95.33c-.55-.44-1.33-.44-1.88 0L5.73 1.41c-.22.17-.48.28-.77.31l-1.7.19c-.7.08-1.25.63-1.33 1.33l-.19 1.7c-.03.3-.16.56-.33.78L.33 7.06c-.44.55-.44 1.33 0 1.88l1.08 1.34c.17.22.28.48.31.77l.19 1.7c.08.7.63 1.25 1.33 1.33l1.7.19c.3.03.56.16.78.33l1.34 1.08c.55.44 1.33.44 1.88 0l1.34-1.08c.22-.17.48-.28.77-.31l1.7-.19c.7-.08 1.25-.63 1.33-1.33l.19-1.7c.03-.3.16-.56.33-.78l1.08-1.34c.44-.55.44-1.33 0-1.88zm-9.17 4.94l-3.5-3.5 1.5-1.5 2 2 5-5 1.5 1.55-6.5 6.45z"/>
      </svg>
    );
  }
}
export default VerifiedIcon;
