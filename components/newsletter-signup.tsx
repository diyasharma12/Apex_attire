"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Mail } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <section className="py-16 bg-gradient-to-r from-carbon-black to-pit-gray">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto bg-background/95 backdrop-blur">
          <CardContent className="p-8 text-center">
            {!isSubscribed ? (
              <>
                <Mail className="h-12 w-12 text-ferrari-red mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Stay in the Fast Lane</h2>
                <p className="text-muted-foreground mb-6">
                  Get exclusive access to new collections, racing updates, and special offers. Join the Apex Attire
                  community today!
                </p>

                <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button type="submit" className="bg-ferrari-red hover:bg-ferrari-red/90">
                    Subscribe
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground mt-4">
                  By subscribing, you agree to our privacy policy and terms of service.
                </p>
              </>
            ) : (
              <>
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Welcome to the Team!</h2>
                <p className="text-muted-foreground">
                  Thanks for subscribing! You'll receive our latest updates and exclusive offers.
                </p>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
