"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const teams = [
  {
    name: "Ferrari",
    color: "bg-ferrari-red",
    image: "/placeholder.svg?height=300&width=400",
    description: "Iconic red racing heritage",
  },
  {
    name: "McLaren",
    color: "bg-mclaren-orange",
    image: "/placeholder.svg?height=300&width=400",
    description: "Bold orange innovation",
  },
  {
    name: "Red Bull",
    color: "bg-redbull-blue",
    image: "/placeholder.svg?height=300&width=400",
    description: "Championship winning style",
  },
  {
    name: "Mercedes",
    color: "bg-mercedes-silver",
    image: "/placeholder.svg?height=300&width=400",
    description: "Silver arrows precision",
  },
]

export function TeamCollections() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Team Collections</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Show your allegiance with official team-inspired streetwear from the world's top F1 teams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teams.map((team, index) => (
            <motion.div
              key={team.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="relative">
                  <div
                    className={`h-48 ${team.color} relative overflow-hidden`}
                    style={{
                      backgroundImage: `url(${team.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div
                      className={`absolute inset-0 ${team.color} opacity-80 group-hover:opacity-60 transition-opacity duration-300`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-2xl font-bold">{team.name}</h3>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground mb-4">{team.description}</p>
                  <Link href={`/teams/${team.name.toLowerCase()}`}>
                    <Button
                      variant="outline"
                      className="w-full group-hover:border-ferrari-red group-hover:text-ferrari-red transition-colors bg-transparent"
                    >
                      Shop {team.name}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
