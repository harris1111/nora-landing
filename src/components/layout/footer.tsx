import { navItems } from "../../data/navigation-data";

export function Footer() {
  return (
    <footer className="bg-secondary text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Info */}
        <div>
          <h3 className="text-xl font-bold tracking-wider mb-4">IMPERIAL PALACE</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            11 Lê Thánh Tông, Phan Chu Trinh,
            <br />
            Hoàn Kiếm, Hà Nội
          </p>
          <p className="mt-3 text-primary font-semibold text-lg">Hotline: 0123 456 789</p>
        </div>

        {/* Sitemap */}
        <div>
          <h4 className="font-semibold uppercase tracking-wider mb-4 text-sm">Sitemap</h4>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-white/70 text-sm hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold uppercase tracking-wider mb-4 text-sm">Kết nối</h4>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/20 text-center text-white/50 text-xs">
        © 2026 Imperial Palace. All rights reserved.
      </div>
    </footer>
  );
}
