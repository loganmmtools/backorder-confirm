import { CheckSquare, Mail, Phone } from 'lucide-react'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MMToolParts%20Logo_HighRes-rKqI2i88y8gcA4tRuj4xXx8wOGJj7x.jpeg'

function Logo({ compact = false }: { compact?: boolean }) {
  return <img src={logoUrl} alt="mmToolParts" className={compact ? 'brand-logo brand-logo--footer' : 'brand-logo'} />
}

export default function Page() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <Logo />
        <nav aria-label="Main navigation" className="desktop-nav">
          <a href="/contact-us">Support</a>
        </nav>
      </header>

      <section className="hero">
        <div className="workshop-glow" aria-hidden="true" />
        <article className="confirmation-card">
          <div className="clipboard-icon"><CheckSquare size={51} strokeWidth={1.7} /></div>
          <h1>Confirm Your Backorder Preference</h1>
          <p className="lead">Please confirm that you&apos;d like us to keep your order open<br className="desktop-break" /> while we wait for your backordered item(s).</p>

          <div className="order-box">
            <h2>Order #SO123456</h2>
            <div className="order-rule" />
            <strong>Backordered Item(s)</strong>
            <span>DEWALT N042665 Armature Assembly&nbsp; — &nbsp;Qty: 1</span>
            <span>DEWALT N129932 Brush Set&nbsp; — &nbsp;Qty: 1</span>
          </div>

          <p className="body-copy">By confirming, you&apos;re asking us to keep your order active until<br className="desktop-break" /> your backordered items become available. We&apos;ll notify you when your order is being prepared for shipment.</p>
          <button type="button" className="confirm-button">Confirm I&apos;ll Wait</button>
          <a className="return-link" href="#">← Return to M&amp;M Tool Parts</a>
          <p className="support-note">Need a different arrangement? Contact customer support at <strong>801-485-8200.</strong></p>
        </article>
      </section>

      <footer className="site-footer">
        <Logo compact />
        <div className="footer-column"><strong>Questions?</strong><span><Phone size={16} /> 801-485-8200</span><span><Mail size={16} /> support@mmtoolparts.com</span></div>
        <div className="footer-column links"><strong>Helpful Links</strong><a href="#">Order Status</a><a href="#">Shipping Information</a><a href="#">Returns &amp; Exchanges</a><a href="#">Contact Us</a></div>
      </footer>
    </main>
  )
}
