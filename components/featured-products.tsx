"use client"

import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const featuredProducts = [
  {
    id: "1",
    name: "Ferrari Racing Hoodie",
    price: 1999.00,
    originalPrice: 2099.00,
    image: "/placeholder.svg?height=400&width=400",
    team: "Ferrari",
    isNew: true,
    colors: ["red", "black"],
  },
  {
    id: "2",
    name: "McLaren Speed Jacket",
    price: 1499.00,
    image: "/placeholder.svg?height=400&width=400",
    team: "McLaren",
    isFeatured: true,
    colors: ["orange", "black"],
  },
  {
    id: "3",
    name: "Red Bull Racing Tee",
    price: 3999.00,
    image: "/placeholder.svg?height=400&width=400",
    team: "Red Bull",
    colors: ["blue", "white", "black"],
  },
  {
    id: "4",
    name: "Mercedes AMG Cap",
    price: 2999.00,
    image: "/placeholder.svg?height=400&width=400",
    team: "Mercedes",
    colors: ["silver", "black"],
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Collection</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our most popular racing-inspired pieces, crafted for champions on and off the track
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/products">
            <Button size="lg" variant="outline" className="group bg-transparent">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
