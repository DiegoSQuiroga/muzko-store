export default function Footer() {
  return (
    <footer className="text-center py-4 border-t border-white/10">
      <p className="text-sm text-white/70">
        &copy; {new Date().getFullYear()} Muzko Ink. Todos los derechos reservados.
      </p>
    </footer>
  );
}