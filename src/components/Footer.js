import React from "react";

const Footer = () => {
  const year = new Date();
  return (
    <footer className="footer">
      <div className="container text-center">
        <small>Copyright &copy; {year.getFullYear()}</small>
      </div>
    </footer>
  );
};

export default Footer;
