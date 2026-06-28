import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-bg-card border-b border-border px-6 py-4 flex items-center justify-between">
    <Link
      to="/"
      className="text-xl font-bold tracking-tight text-teal no-underline"
    >
      User<span className="text-amber">Mgr</span>
    </Link>
    <span className="text-xs text-slate-muted font-mono">
      JSONPlaceholder API
    </span>
  </nav>
);

export default Navbar;