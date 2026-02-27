"use client";

import { motion } from "framer-motion";

// Real reviews pulled from Booksy listing
const reviews = [
  {
    name: "Marcus T.",
    rating: 5,
    text: "Rose is as professional and masterful a Barber as I've ever had the pleasure of sitting for, and she always meets and/or exceeds mine and the wife's expectations!",
    service: "Hair Cut Adult",
  },
  {
    name: "Denise W.",
    rating: 5,
    text: "Dr. Rose always takes great care of me. Everyone wants my cut when she is done. We have great conversations and she is always super encouraging!",
    service: "Woman Haircut",
  },
  {
    name: "James R.",
    rating: 5,
    text: "Outstanding haircut! Very professional!",
    service: "Hair Cut Adult",
  },
  {
    name: "Crystal M.",
    rating: 5,
    text: "Always cuts accurately and I leave very satisfied.",
    service: "Woman Haircut",
  },
  {
    name: "David L.",
    rating: 5,
    text: "Always great work and conversation! Great atmosphere and cut!",
    service: "Over Twelve",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
} as const;

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-brand-blue text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Don&apos;t Take Our Word for It
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex text-yellow-400 text-xl">
              {"★★★★★".split("").map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
            <span className="text-brand-gray font-medium">
              5.0 &bull; 23 reviews on Booksy
            </span>
          </div>
        </motion.div>

        {/* Review Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex text-yellow-400 text-sm mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Review text */}
              <p className="text-brand-dark leading-relaxed mb-6 text-[15px]">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-brand-dark text-sm">
                    {review.name}
                  </p>
                  <p className="text-xs text-brand-gray">{review.service}</p>
                </div>
                {/* Booksy icon */}
                <div className="text-xs text-brand-gray bg-brand-light px-3 py-1 rounded-full">
                  Booksy
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Leave a Review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-brand-gray text-sm">
            Had a great experience?{" "}
            <a
              href="https://booksy.com/en-us/865535_upperlevel-barber_barber-shop_16254_marietta#ba_s=sr_1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue font-semibold hover:underline"
            >
              Leave us a review on Booksy →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
