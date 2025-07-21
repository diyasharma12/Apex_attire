import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { TeamCollections } from "@/components/team-collections"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <TeamCollections />
      <NewsletterSignup />
    </main>
  )
}
