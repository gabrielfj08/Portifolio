export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a
                href="https://www.linkedin.com/in/gabriel-jorge08"
                target="_blank"
                rel="noreferrer"
                >
                LinkedIn
                </a>

                <a
                href="https://github.com/gabrielfj08"
                target="_blank"
                rel="noreferrer"
                >
                GitHub
                </a>

                <a href="mailto:gabriel.jorgef08@gmail.com">
                Email
                </a>
            </div>

            <p>
                © {new Date().getFullYear()} Gabriel Ferreira Jorge
            </p>
        </footer>
    )
}