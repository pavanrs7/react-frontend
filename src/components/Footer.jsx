import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-socials">
                    {/* YouTube Icon */}
                    <a href="https://www.youtube.com/@srimrid2004" target="_blank" rel="noreferrer" aria-label="YouTube">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                    
                    {/* Instagram Icon */}
                    <a href="https://www.instagram.com/sri_mrid_2004?igsh=MTNma2JrY2RmM2lsZw==" target="_blank" rel="noreferrer" aria-label="Instagram">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    
                    {/* Facebook Icon */}
                    <a href="https://www.facebook.com/srivatsa.s.923/" target="_blank" rel="noreferrer" aria-label="Facebook">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                </div>

                <div className="footer-divider"></div>

                <p className="footer-copy">© 2026 SRIVATSA. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
}

export default Footer;