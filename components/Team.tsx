"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BOOKING_URL =
  "https://booksy.com/en-us/865535_upperlevel-barber_barber-shop_16254_marietta#ba_s=sr_1";

const INSTAGRAM_URL = "https://www.instagram.com/coffiahillman1222";

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-28 bg-brand-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-brand-blue text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Meet Your Barber
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
            The Hands Behind Every Cut
          </h2>
        </motion.div>

        {/* Single Barber — Centered, Large Profile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 max-w-2xl mx-auto"
        >
          <div className="flex flex-col md:flex-row">
            {/* Photo */}
            <div className="relative w-full md:w-1/2 h-80 md:h-auto md:min-h-[400px]">
              <Image
                src="/images/cut-6.jpg"
                alt="Coffia Hillman — Owner of UpperLevel Barbershop"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center p-8 md:p-10 md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-1">
                Coffia Hillman
              </h3>
              <p className="text-brand-blue font-semibold text-sm tracking-wide uppercase mb-4">
                Owner &bull; Master Barber
              </p>

              <p className="text-brand-gray leading-relaxed mb-6">
                &ldquo;I&apos;ve been cutting since 1994. Over 30 years behind the chair
                taught me one thing — every person who sits down deserves to
                leave feeling like the best version of themselves.&rdquo;
              </p>

              <div className="text-sm text-brand-gray mb-6 space-y-1">
                <p>
                  <span className="text-brand-brown font-medium">Specialties:</span>{" "}
                  Fades, Beard Sculpting, Loc Maintenance, Women&apos;s Cuts
                </p>
                <p>
                  <span className="text-brand-brown font-medium">Experience:</span>{" "}
                  30+ Years
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-brand-blue text-white text-sm font-semibold rounded-full hover:bg-brand-blue/90 transition-all hover:shadow-lg hover:shadow-brand-blue/25 active:scale-95 text-center"
                >
                  Book with Coffia
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-brand-dark/10 text-brand-dark text-sm font-semibold rounded-full hover:border-brand-blue hover:text-brand-blue transition-all active:scale-95 text-center flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team expansion note */}
        {/* PLACEHOLDER — Add more team members here as the team grows. Duplicate the card pattern above. */}
      </div>
    </section>
  );
}
