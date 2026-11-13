import { CalendarDays, Check, Mail, Phone } from 'lucide-react'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mmToolParts%20Logo_White_Transparent-9HybhYTZIFbP9cC6FuqgKn8tig6cBD.png'
const orderUrl = '/'

function Logo({ compact = false }: { compact?: boolean }) {
  return <img src={logoUrl} alt="mmToolParts" className={compact ? 'brand-logo brand-logo--footer' : 'brand-logo'} />
}

export default function Page() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <Logo />
      </header>

      <section className="hero">
        <div className="workshop-glow" aria-hidden="true" />
        <article className="confirmation-card">
          <div className="success-icon"><Check size={54} strokeWidth={3} /></div>
          <h1>Choice Confirmed</h1>
          <p className="lead">Thanks! We&apos;ll keep your order open and<br className="desktop-break" /> let you know as soon as your backordered<br className="desktop-break" /> item(s) are available.</p>

          <div className="order-box">
            <h2>Order #SO123456</h2>
            <div className="order-table">
              <div className="order-heading"><strong>Backordered Item(s)</strong><strong>Qty</strong></div>
              <div className="order-row"><span>DEWALT N042665 Armature Assembly</span><span>1</span></div>
              <div className="order-row"><span>DEWALT N129932 Brush Set</span><span>1</span></div>
            </div>
          </div>

          <section className="whats-next" aria-labelledby="whats-next-title">
            <div className="calendar-icon"><CalendarDays size={32} strokeWidth={2} /></div>
            <div><h2 id="whats-next-title">What&apos;s Next?</h2><p>We&apos;ll email you as soon as your item(s) arrive and your order is being prepared for shipment.</p></div>
          </section>
          <a href={orderUrl} className="confirm-button">Return to My Order</a>
        </article>
      </section>

      <footer className="site-footer">
        <div className="footer-column contact-column"><span><Phone size={16} /> 801-485-8200</span><span><Mail size={16} /> support@mmtoolparts.com</span></div>
        <div className="footer-column links"><a href="#">Order Status</a><span className="footer-dot" aria-hidden="true" /> <a href="#">Shipping Information</a><a href="#">Returns &amp; Exchanges</a><span className="footer-dot" aria-hidden="true" /> <a href="#">Contact Us</a></div>
      </footer>
    </main>
  )
}
