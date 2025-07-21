"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  team: string
  isNew?: boolean
  isFeatured?: boolean
  colors: string[]
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const teamColors = {
    Ferrari: "bg-ferrari-red",
    McLaren: "bg-mclaren-orange",
    "Red Bull": "bg-redbull-blue",
    Mercedes: "bg-mercedes-silver text-black",
  }

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="relative overflow-hidden">
          <Link href={`/products/${product.id}`}>
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && <Badge className="bg-green-500 hover:bg-green-500">NEW</Badge>}
            {product.isFeatured && <Badge className="bg-ferrari-red hover:bg-ferrari-red">FEATURED</Badge>}
          </div>

          {/* Team Badge */}
          <div className="absolute top-3 right-3">
            <Badge
              className={`${teamColors[product.team as keyof typeof teamColors]} hover:${teamColors[product.team as keyof typeof teamColors]}`}
            >
              {product.team}
            </Badge>
          </div>

          {/* Quick Actions */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
            <Button size="sm" variant="secondary" className="rounded-full">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="sm" className="bg-ferrari-red hover:bg-ferrari-red/90 rounded-full">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <CardContent className="p-4">
          <Link href={`/products/${product.id}`}>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-ferrari-red transition-colors">
              {product.name}
            </h3>
          </Link>

          {/* Color Options */}
          <div className="flex gap-1 mb-3">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full border-2 border-gray-300 ${
                  color === "red"
                    ? "bg-ferrari-red"
                    : color === "orange"
                      ? "bg-mclaren-orange"
                      : color === "blue"
                        ? "bg-redbull-blue"
                        : color === "silver"
                          ? "bg-mercedes-silver"
                          : color === "black"
                            ? "bg-black"
                            : "bg-white"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">Rs. {product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">Rs. {product.originalPrice}</span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
