import React from "react";
import '../../src/App.css'

const FooterPanel = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">© NINU V.V. &nbsp; {new Date().getFullYear()}</div>
    </div>
  );
};

export default FooterPanel;
