import { ProductDetail } from "@/components/product-detail"
import { RelatedProducts } from "@/components/related-products"
import { ProductReviews } from "@/components/product-reviews"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetail productId={params.id} />
      <div className="mt-16">
        <ProductReviews productId={params.id} />
      </div>
      <div className="mt-16">
        <RelatedProducts productId={params.id} />
      </div>
    </div>
  )
}
