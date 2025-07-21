"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-carbon-black via-pit-gray to-carbon-black">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-2 h-20 bg-ferrari-red opacity-20"
          animate={{ height: [20, 80, 20] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute top-40 right-20 w-2 h-16 bg-mclaren-orange opacity-20"
          animate={{ height: [16, 64, 16] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-2 h-12 bg-redbull-blue opacity-20"
          animate={{ height: [12, 48, 12] }}
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center justify-center mb-6">
            <Zap className="h-8 w-8 text-ferrari-red mr-2" />
            <span className="text-ferrari-red font-semibold text-lg">APEX ATTIRE</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Racing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ferrari-red to-mclaren-orange">
              {" "}
              Spirit
            </span>
            <br />
            Street Style
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Premium F1-inspired streetwear that brings the thrill of the track to your everyday wardrobe. Engineered for
            speed, designed for style.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-ferrari-red hover:bg-ferrari-red/90 text-white group">
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/teams">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-carbon-black bg-transparent"
              >
                Explore Teams
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Racing stripes */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-ferrari-red via-mclaren-orange to-redbull-blue opacity-60" />
    </section>
  )
}
