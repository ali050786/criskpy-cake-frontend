import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">&copy; 2024 UX Design Blog. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;