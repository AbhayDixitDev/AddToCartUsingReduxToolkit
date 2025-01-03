import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="mt-auto py-3 bg-light" style={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
      <div className="container">
        <div className="text-center">
          <span className="text-muted">
            Made with <i className="fa fa-heart" aria-hidden="true"></i> by{' '}
            <a href="https://github.com/abhaydixitdev" target="_blank" rel="noopener noreferrer">
              <FaGithub /> Abhay Dixit
            </a>{' '}
            and{' '}
            <a href="https://www.linkedin.com/in/abhaydixitdev/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> Abhay Dixit
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
