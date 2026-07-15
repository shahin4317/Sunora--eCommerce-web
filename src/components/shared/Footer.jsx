// components/Footer.jsx
import Link from "next/link";
import { FaFacebook, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import { MdOutlinePinDrop } from "react-icons/md";
import logo from '@/assets/logo.png'
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-[#F5EFE6] text-[#2B2B2B] border-t border-amber-600 mt-4">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
             <Link href={'/'}><Image src={logo} alt='logo' width={100} height={90} ></Image></Link>
            <p className="mt-3 text-sm leading-relaxed text-[#2B2B2B]/70">
              Your summer essentials — skincare, sunglasses, and beach vibes,
              all in one place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-[#2B2B2B]/70">
              <li><Link href="/" className="hover:text-[#C97B5A] transition">Home</Link></li>
              <li><Link href="/products" className="hover:text-[#C97B5A] transition">Products</Link></li>
              <li><Link href="/my-profile" className="hover:text-[#C97B5A] transition">My Profile</Link></li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#2B2B2B]/70">
              <li className="flex items-start gap-2">
                <FaMailBulk size={16} className="mt-0.5 shrink-0" />
                <span>shahinalam4317@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <FaPhone size={16} className="mt-0.5 shrink-0" />
                <span>01850840896</span>
              </li>
              <li className="flex items-start gap-2">
                <MdOutlinePinDrop size={16} className="mt-0.5 shrink-0" />
                <span>Sylhet,Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-[#2B2B2B]/20 hover:bg-[#C97B5A] hover:text-white hover:border-[#C97B5A] transition">
                <FaInstagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-[#2B2B2B]/20 hover:bg-[#C97B5A] hover:text-white hover:border-[#C97B5A] transition">
                <FaFacebook size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="grid h-10 w-10 place-items-center rounded-full border border-[#2B2B2B]/20 hover:bg-[#C97B5A] hover:text-white hover:border-[#C97B5A] transition">
                <FaTwitter size={18} /> 
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#2B2B2B]/10 pt-6 sm:flex-row">
          <p className="text-xs text-[#2B2B2B]/60">
            © {new Date().getFullYear()} Sunora. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-[#2B2B2B]/70">
            <Link href="/privacy" className="hover:text-[#C97B5A] transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#C97B5A] transition">Terms</Link>
            <Link href="/cookies" className="hover:text-[#C97B5A] transition">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
