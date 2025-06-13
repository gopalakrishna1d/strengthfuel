import '../styles/Footer.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Strength Fuel</h4>
          <p>Strength starts in the kitchen. Premium fitness meals made simple.</p>
        </div>
        <div className="footer-column">
          <h5>Explore</h5>
          <ul>
            <li><Link href="/menu">Menu</Link></li>
            <li><Link href="/plans">Plans</Link></li>
            <li><Link href="/subscribe">Subscribe</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Resources</h5>
          <ul>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Strength Fuel. All rights reserved.</p>
      </div>
    </footer>
  );
}
