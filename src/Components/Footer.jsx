import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import Logo from "../assets/footer-logo.png"; // Adjust the path to your logo image

const Footer = () => {
  return (
    <footer className="bg-footer text-white py-8 px-4 font-Poppins">
         <hr className="border-t border-gray-500 mb-8 " />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <img src={Logo} alt="Habot Logo" className="h-[20px]" />
          <span className="text-sm mt-5">© R Singhania</span>
        </div>

        {/* Links Section */}
        <div className="flex space-x-12 text-sm mb-6 md:mb-0">
          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
          {/* Terms Links */}
          <div>
            <h4 className="font-semibold mb-2">Terms</h4>
            <ul>
              <li><a href="#" className="hover:underline">Data Privacy</a></li>
              <li><a href="#" className="hover:underline">Terms</a></li>
              <li><a href="#" className="hover:underline">Accessibility</a></li>
            </ul>
          </div>
          {/* Related Links */}
          <div>
            <h4 className="font-semibold mb-2">Related</h4>
            <ul>
              <li><a href="#" className="hover:underline">Find Buyer</a></li>
              <li><a href="#" className="hover:underline">Feedback</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-lg">
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-300 rounded-full border-t borfer-l border-r border-b border-white p-3">
            <FaLinkedin />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-300 rounded-full border-t borfer-l border-r border-b border-white p-3">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-gray-300 rounded-full border-t borfer-l border-r border-b border-white p-3">
            <FaFacebook />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-300 rounded-full border-t borfer-l border-r border-b border-white p-3">
            <FaInstagram />
          </a>
        </div>
        

      </div>
      <hr className="border-t border-gray-500 mt-8 " />
    </footer>
  );
};

export default Footer;
