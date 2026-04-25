// components/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo / Brand */}
          <div className="text-xl font-semibold text-gray-800">YourBrand</div>

          {/* Links */}
          <ul className="flex gap-6 text-gray-600 text-sm">
            <li>
              <a href="#" className="hover:text-black transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">
                Privacy
              </a>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="border-t my-6"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
