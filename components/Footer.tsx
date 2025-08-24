import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-[#B3B3B3] border-t border-[#2A2A2A]">
      <p>&copy; {new Date().getFullYear()} Satheem Muwaffaq. All Rights Reserved.</p>
      <p className="text-sm mt-2">Made with ❤️ by Satheem</p>
    </footer>
  );
};

export default Footer;