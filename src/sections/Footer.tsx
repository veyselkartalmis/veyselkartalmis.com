import Link from "next/link";

function Footer() {
  return (
    <footer>
      <Link
        href="https://github.com/veyselkartalmis"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">Built by Veysel Kartalmis.</span>
      </Link>
    </footer>
  );
}

export default Footer;
