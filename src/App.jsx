import "./App.css";

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">
          <div className="logo" aria-hidden="true">T</div>
          <div>
            <h1 className="brandName">Trustobiotech</h1>
            <p className="tagline">Biotech solutions you can trust</p>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="card">
          <p className="pill">Launching soon</p>
          <h2 className="title">We’re building something impactful.</h2>
          <p className="subtitle">
            Our website is under construction. We’re working hard to launch a platform
            focused on innovation and reliability in biotechnology.
          </p>

          <div className="divider" />

          <div className="infoGrid">
            <div className="infoBox">
              <p className="infoLabel">Email</p>
              <a className="infoValue" href="mailto:hello@trustobiotech.com">
                hello@trustobiotech.com
              </a>
            </div>

            <div className="infoBox">
              <p className="infoLabel">Location</p>
              <p className="infoValue">India</p>
            </div>
          </div>

          <p className="footnote">
            © {new Date().getFullYear()} Trustobiotech. All rights reserved.
          </p>
        </div>
      </main>

      <div className="bg" aria-hidden="true">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="grid" />
      </div>
    </div>
  );
}
