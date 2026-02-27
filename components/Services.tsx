"use client";

import { motion } from "framer-motion";

const BOOKING_URL =
  "https://booksy.com/en-us/865535_upperlevel-barber_barber-shop_16254_marietta#ba_s=sr_1";

const services = [
  { name: "Hair Cut Adult", price: "$40", duration: "30 min" },
  { name: "Woman Haircut", price: "$40", duration: "30 min" },
  { name: "Cut And Shave", price: "$45", duration: "30 min" },
  { name: "Shaved Head", price: "$35", duration: "30 min" },
  { name: "Shave", price: "$25", duration: "20 min" },
  { name: "Beard Trim", price: "$20", duration: "15 min" },
  { name: "Beard Maintenance", price: "$20", duration: "25 min" },
  { name: "Over Twelve", price: "$30", duration: "30 min" },
  { name: "Under Twelve", price: "$25", duration: "30 min" },
  { name: "Shampoo", price: "$15", duration: "30 min" },
  { name: "Loc Maintenance", price: "$100", duration: "30 min" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
} as const;

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
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
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Services &amp; Pricing
          </h2>
          <p className="text-brand-gray max-w-xl mx-auto">
            Every service comes with the same standard — precision, care, and 30+
            years of experience in the chair.
          </p>
        </motion.div>

        {/* Services List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-1"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex items-center justify-between py-5 px-4 rounded-xl hover:bg-brand-light transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-brand-blue/40 group-hover:bg-brand-blue transition-colors" />
                <div>
                  <h3 className="font-semibold text-brand-dark text-base md:text-lg">
                    {service.name}
                  </h3>
                  <p className="text-xs text-brand-gray">{service.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl md:text-2xl font-bold text-brand-brown">
                  {service.price}
                </span>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex px-4 py-2 text-xs font-semibold text-brand-blue border border-brand-blue/30 rounded-full opacity-0 group-hover:opacity-100 hover:bg-brand-blue hover:text-white transition-all"
                >
                  Book
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-brand-blue text-white text-base font-semibold rounded-full hover:bg-brand-blue/90 transition-all hover:shadow-lg hover:shadow-brand-blue/25 active:scale-95"
          >
            Book Any Service
          </a>
        </motion.div>
      </div>
    </section>
  );
}
