import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const footerData = {
  productList: [
    { label: 'Uniswap (DEX)', href: 'https://app.uniswap.org/' },
    { label: 'OpenZeppelin (ERC20)', href: 'https://openzeppelin.com/contracts/' },
    { label: 'Gitcoin Grants', href: 'https://gitcoin.co/grants/' },
  ],
  usefulLinks: [
    { label: 'Home', href: '/' },
    { label: 'Docs', href: 'https://docs.ethers.org/' },
    { label: 'Ethereum.org', href: 'https://ethereum.org/en/' },
  ],
  contactList: [
    { label: 'support@muzamil.dev', href: 'mailto:support@muzamil.dev', external: true },
    { label: 'hello@muzamil.dev', href: 'mailto:hello@muzamil.dev', external: true },
    { label: 'Contact Form', href: '/contact' },
  ],
  companyName: 'Muzamil Blockchain Labs',
  companyAddress: 'Web3 HQ, Crypto City, Decentraland 101',
  copyrightYear: new Date().getFullYear(),
  websiteUrl: 'https://muzamilchouhan.netlify.app',
  socials: {
    github: 'https://github.com/muzamilchouhan',
    twitter: 'https://twitter.com/muzamil_dev',
    linkedin: 'https://linkedin.com/in/muzamilchouhan',
  },
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white font-[Poppins]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h6 className="mb-4 text-lg font-semibold">{footerData.companyName}</h6>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building secure and scalable dApps for the decentralized future. Join us in reshaping finance, identity, and trust.
            </p>
          </div>

          {/* Products */}
          <div>
            <h6 className="mb-4 text-lg font-semibold">Products</h6>
            {footerData.productList.map((item, index) => (
              <p key={`product-${index}`} className="mb-3 text-sm">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-white transition duration-200"
                >
                  {item.label}
                </a>
              </p>
            ))}
          </div>

          {/* Useful Links */}
          <div>
            <h6 className="mb-4 text-lg font-semibold">Useful Links</h6>
            {footerData.usefulLinks.map((item, index) => (
              <p key={`link-${index}`} className="mb-3 text-sm">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-white transition duration-200"
                >
                  {item.label}
                </a>
              </p>
            ))}
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="mb-4 text-lg font-semibold">Contact</h6>
            {footerData.contactList.map((item, index) => (
              <p key={`contact-${index}`} className="mb-3 text-sm">
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-white transition duration-200"
                  {...(item.external ? { rel: 'noreferrer', target: '_blank' } : {})}
                >
                  {item.label.includes('@')
                    ? item.label.replace('@', ' ')
                    : item.label}
                </a>
              </p>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-6 text-xl text-gray-400">
          <a href={footerData.socials.github} target="_blank" rel="noreferrer" className="hover:text-white">
            <FaGithub />
          </a>
          <a href={footerData.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-white">
            <FaTwitter />
          </a>
          <a href={footerData.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 py-4 text-center text-sm text-gray-400">
        © {footerData.copyrightYear}{" "}
        <a
          href={footerData.websiteUrl}
          className="hover:text-white font-semibold"
          target="_blank"
          rel="noreferrer"
        >
          {footerData.companyName}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
