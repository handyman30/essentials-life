import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleBuyClick = () => {
    window.open(product.affiliateLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 border-2 border-gray-300 hover:border-gray-400 overflow-hidden">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <div className="absolute inset-0 flex items-center justify-center text-4xl">
          {product.category === "shoes" && "👟"}
          {product.category === "laptops" && "💻"}
          {product.category === "watches" && "⌚"}
          {product.category === "cars" && "🚗"}
          {product.category === "tech" && "📱"}
          {product.category === "style" && "👔"}
        </div>
        
        {/* Price badge */}
        <div className="absolute top-3 right-3 bg-black text-white px-3 py-1 rounded-lg text-sm font-medium border-2 border-black">
          {product.price}
        </div>
        
        {/* Rating badge */}
        {product.rating && (
          <div className="absolute top-3 left-3 bg-yellow-400 text-black px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1 border-2 border-yellow-500">
            ⭐ {product.rating}
          </div>
        )}
      </div>
      
      {/* Product Info */}
      <div className="p-5">
        <div className="mb-3">
          <h3 className="font-semibold text-lg text-black mb-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 font-medium">
            {product.brand}
          </p>
        </div>
        
        <p className="text-gray-700 text-sm mb-3 leading-relaxed">
          {product.description}
        </p>
        
        <div className="mb-4">
          <span className="text-xs text-gray-500">
            Range: {product.priceRange}
          </span>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md border border-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Buy Button */}
        <button
          onClick={handleBuyClick}
          className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 border-2 border-black"
        >
          <span>Buy Now</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </button>
      </div>
    </div>
  );
} 