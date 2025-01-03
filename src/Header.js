export default function Header({ OnSetCurrentPage }) {
  function handlePageChange(page) {
    OnSetCurrentPage(page);
  }

  return (
    <header className="sticky-header">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo text-white">Administratie firma</div>
        <ul className="nav-links hidden md:flex space-x-4">
          <li>
            <a
              href="#home"
              className="text-gray-700 hover:text-[#800020]"
              onClick={() => handlePageChange("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="text-gray-700 hover:text-[#800020]">
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-700 hover:text-[#800020]"
              onClick={() => handlePageChange("about")}
            >
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-[#800020]">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
