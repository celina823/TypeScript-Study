import IconFacebook from "../Assets/Ic_facebook.png";
import IconTwitter from "../Assets/Ic_twitter.png";
import IconYoutube from "../Assets/Ic_youtube.png";
import IconInstagram from "../Assets/Ic_instagram.png";

export function FooterLanding() {
  return (
    <div className="footerBox">
      <footer className="footers">
        <div className="footer-ct">
          <div className="codeit-2024">
            <span className="foot1"> ⓒcodeit - 2024</span>
          </div>
          <div className="ppfaq">
            <a
              className="foot2"
              target="_black"
              href="./privacy/index.html"
              rel="noreferrer noopener"
            >
              Privacy Policy
            </a>
            <a
              className="foot3"
              target="_black"
              href="./faq/index.html"
              rel="noreferrer noopener"
            >
              FAQ
            </a>
          </div>
          <div className="sns-item">
            <a
              className="item-1"
              href="https://www.facebook.com/"
              target="_blank"
              style={{ width: "50%" }}
            >
              <img className="facebook" src={IconFacebook} alt="facebook" />
            </a>
            <a
              className="item-2"
              style={{ width: "50%" }}
              href="https://x.com/"
              target="_blank"
            >
              <img className="facebook" src={IconTwitter} alt="twitter" />
            </a>
            <a
              className="item-3"
              style={{ width: "50%" }}
              href="https://www.youtube.com/"
              target="_blank"
            >
              <img className="facebook" src={IconYoutube} alt="youtube" />
            </a>
            <a
              className="item-4"
              style={{ width: "50%" }}
              href="https://www.instagram.com/"
              target="_blank"
            >
              <img className="facebook" src={IconInstagram} alt="instagram" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
