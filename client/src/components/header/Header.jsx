import React from 'react';
import './header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Content is Anything that Adds Value to Your Life</span>
        <span className="headerTitleLg">InsightfulEcho</span>
      </div>
      <img src="https://i.pinimg.com/564x/92/fe/04/92fe046fe9f4098e02ffdb903dce0970.jpg" alt="" className="headerImg" />
    </div>
  );
}
