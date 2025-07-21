"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { useState } from "react"

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 4000])
  const [selectedTeams, setSelectedTeams] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])

  const teams = ["Ferrari", "McLaren", "Red Bull", "Mercedes", "Alpine", "Aston Martin"]
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"]
  const colors = [
    { name: "Red", value: "red", color: "bg-ferrari-red" },
    { name: "Orange", value: "orange", color: "bg-mclaren-orange" },
    { name: "Blue", value: "blue", color: "bg-redbull-blue" },
    { name: "Silver", value: "silver", color: "bg-mercedes-silver" },
    { name: "Black", value: "black", color: "bg-black" },
    { name: "White", value: "white", color: "bg-white border" },
  ]

  const activeFiltersCount = selectedTeams.length + selectedSizes.length + selectedColors.length

  return (
    <div className="space-y-6">
      {/* Active Filters */}
      {activeFiltersCount > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">Active Filters</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSelectedTeams([])
                  setSelectedSizes([])
                  setSelectedColors([])
                }}
              >
                Clear All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              {selectedTeams.map((team) => (
                <Badge key={team} variant="secondary" className="flex items-center gap-1">
                  {team}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => setSelectedTeams((prev) => prev.filter((t) => t !== team))}
                  />
                </Badge>
              ))}
              {selectedSizes.map((size) => (
                <Badge key={size} variant="secondary" className="flex items-center gap-1">
                  Size {size}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => setSelectedSizes((prev) => prev.filter((s) => s !== size))}
                  />
                </Badge>
              ))}
              {selectedColors.map((color) => (
                <Badge key={color} variant="secondary" className="flex items-center gap-1">
                  {colors.find((c) => c.value === color)?.name}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => setSelectedColors((prev) => prev.filter((c) => c !== color))}
                  />
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Price Range</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider value={priceRange} onValueChange={setPriceRange} max={200} step={5} className="w-full" />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Rs. {priceRange[0]}</span>
              <span>Rs. {priceRange[1]}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Teams */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Teams</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {teams.map((team) => (
              <div key={team} className="flex items-center space-x-2">
                <Checkbox
                  id={team}
                  checked={selectedTeams.includes(team)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedTeams((prev) => [...prev, team])
                    } else {
                      setSelectedTeams((prev) => prev.filter((t) => t !== team))
                    }
                  }}
                />
                <Label htmlFor={team} className="text-sm font-normal cursor-pointer">
                  {team}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sizes */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Size</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-2">
            {sizes.map((size) => (
              <Button
                key={size}
                variant={selectedSizes.includes(size) ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  if (selectedSizes.includes(size)) {
                    setSelectedSizes((prev) => prev.filter((s) => s !== size))
                  } else {
                    setSelectedSizes((prev) => [...prev, size])
                  }
                }}
                className="h-8"
              >
                {size}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Colors */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Color</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-3">
            {colors.map((color) => (
              <div
                key={color.value}
                className={`w-8 h-8 rounded-full cursor-pointer border-2 transition-all ${
                  selectedColors.includes(color.value)
                    ? "border-ferrari-red scale-110"
                    : "border-gray-300 hover:border-gray-400"
                } ${color.color}`}
                onClick={() => {
                  if (selectedColors.includes(color.value)) {
                    setSelectedColors((prev) => prev.filter((c) => c !== color.value))
                  } else {
                    setSelectedColors((prev) => [...prev, color.value])
                  }
                }}
                title={color.name}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
