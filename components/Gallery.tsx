"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    src: "/images/cut-3.jpg",
    alt: "Loc fade with razor-sharp lineup",
    span: "md:row-span-2", // tall — strong showcase piece
  },
  {
    src: "/images/cut-2.jpg",
    alt: "Textured top with swept-back mid fade",
    span: "",
  },
  {
    src: "/images/cut-6.jpg",
    alt: "Wave cut with beard lineup",
    span: "",
  },
  {
    src: "/images/cut-7.jpg",
    alt: "Low fade with clean lineup and beard",
    span: "md:row-span-2", // tall
  },
  {
    src: "/images/cut-5.jpg",
    alt: "Clean shaved head with beard sculpt",
    span: "",
  },
  {
    src: "/images/cut-1.jpg",
    alt: "Kid's textured crop with fade",
    span: "",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
} as const;

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
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
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
            Our Work Speaks
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
