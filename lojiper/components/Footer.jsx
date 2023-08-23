function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto max-w-screen-xl md:flex justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Lojiper</h2>
          <p>En iyi bilet satış platformu</p>
        </div>
        <ul className="flex space-x-4 justify-center md:justify-end">
          <li>
            <a href="#" className="hover:text-gray-400">
              Hakkımızda
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              İletişim
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Gizlilik Politikası
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
