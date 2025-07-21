"use client"

import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid, List } from "lucide-react"
import { useState } from "react"

const products = [
  {
    id: "1",
    name: "Ferrari Racing Hoodie",
    price: 999.00,
    originalPrice: 1099.00,
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
    price: 999.00,
    image: "/placeholder.svg?height=400&width=400",
    team: "Red Bull",
    colors: ["blue", "white", "black"],
  },
  {
    id: "4",
    name: "Mercedes AMG Cap",
    price: 900.00,
    image: "/placeholder.svg?height=400&width=400",
    team: "Mercedes",
    colors: ["silver", "black"],
  },
  {
    id: "5",
    name: "Alpine Racing Polo",
    price: 599.00,
    image: "/placeholder.svg?height=400&width=400",
    team: "Alpine",
    colors: ["blue", "white"],
  },
  {
    id: "6",
    name: "Aston Martin Bomber",
    price: 1799.00,
    image: "/placeholder.svg?height=400&width=400",
    team: "Aston Martin",
    colors: ["green", "black"],
  },
]

export function ProductGrid() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")

  return (
    <div>
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-6 p-4 bg-muted/30 rounded-lg">
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Showing {products.length} products</span>
        </div>

        <div className="flex items-center gap-4">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="name">Name A-Z</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex border rounded-md">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="rounded-r-none"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="rounded-l-none"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div
        className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          Load More Products
        </Button>
      </div>
    </div>
  )
}
