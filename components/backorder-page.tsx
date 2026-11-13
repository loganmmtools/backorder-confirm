import { CalendarDays, CheckSquare, Mail, Phone } from 'lucide-react'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mmToolParts%20Logo_White_Transparent-9HybhYTZIFbP9cC6FuqgKn8tig6cBD.png'
const orderUrl = '/'

export function Logo() {
  return <img src={logoUrl} alt="mmToolParts" className="brand-logo" />
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <main className="site-shell">
      <header className="site-header"><Logo /></header>
      <section className="hero"><div className="workshop-glow" aria-hidden="true" />{children}</section>
      <footer className="site-footer">
        <div className="footer-column contact-column"><span><Phone size={16} /> 801-485-8200</span><span><Mail size={16} /> support@mmtoolparts.com</span></div>
        <div className="footer-column links"><a href="#">Order Status</a><span className="footer-dot" aria-hidden="true" /><a href="#">Shipping Information</a><a href="#">Returns &amp; Exchanges</a><span className="footer-dot" aria-hidden="true" /><a href="#">Contact Us</a></div>
      </footer>
    </main>
  )
}

export function OrderSummary() {
  return (
    <div className="order-box">
      <h2>Order #SO123456</h2>
      <div className="order-table">
        <div className="order-heading"><strong>Backordered Item(s)</strong><strong>Qty</strong></div>
        <div className="order-row"><span>DEWALT N042665 Armature Assembly</span><span>1</span></div>
        <div className="order-row"><span>DEWALT N129932 Brush Set</span><span>1</span></div>
      </div>
    </div>
  )
}

export function BackorderWaitCard() {
  return (
    <article className="confirmation-card wait-card">
      <div className="clipboard-icon"><CheckSquare size={51} strokeWidth={1.7} /></div>
      <h1>Confirm Your Backorder Preference</h1>
      <p className="lead">Please confirm that you&apos;d like us to keep your order open<br className="desktop-break" /> while we wait for your backordered item(s).</p>
      <OrderSummary />
      <p className="body-copy">By confirming, you&apos;re asking us to keep your order active until<br className="desktop-break" /> your backordered items become available. We&apos;ll notify you when<br className="desktop-break" /> your order is being prepared for shipment.</p>
      <a href="/backorder-wait/confirmed" className="confirm-button">Confirm I&apos;ll Wait</a>
      <p className="support-note">Need a different arrangement? Contact customer support at <strong>801-485-8200.</strong></p>
    </article>
  )
}

export function ConfirmedCard() {
  return (
    <article className="confirmation-card confirmed-card">
      <div className="success-icon"><span aria-hidden="true">✓</span></div>
      <h1>Choice Confirmed</h1>
      <p className="lead">Thanks! We&apos;ll keep your order open and<br className="desktop-break" /> let you know as soon as your backordered<br className="desktop-break" /> item(s) are available.</p>
      <OrderSummary />
      <section className="whats-next" aria-labelledby="whats-next-title">
        <div className="calendar-icon"><CalendarDays size={32} strokeWidth={2} /></div>
        <div><h2 id="whats-next-title">What&apos;s Next?</h2><p>We&apos;ll email you as soon as your item(s) arrive and your order is being prepared for shipment.</p></div>
      </section>
      <p className="all-set">You&apos;re all set!</p>
      <a href="https://www.mmtoolparts.com/" className="return-link">Return to M&amp;M Tool Parts</a>
    </article>
  )
}
