'use client';

import { useState } from 'react';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import { categories, products } from '@/data/essentials';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products.slice(0, 6); // Show first 6 products when no category selected

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="pt-16 pb-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            EssentialsDash
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-3">
            What You Looking For?
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover curated essentials across shoes, tech, watches, cars & more. 
            Get instant access to the best picks with direct buy links.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 pb-16">
        {/* Categories Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-black mb-8 text-center">
            Browse Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={handleCategoryClick}
              />
            ))}
          </div>
        </section>

        {/* Selected Category Info */}
        {selectedCategory && (
          <section className="mb-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {categories.find(c => c.id === selectedCategory)?.name} Collection
                  </h3>
                  <p className="text-gray-600">
                    Curated picks from top brands
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Products Grid */}
        <section>
          <h2 className="text-2xl font-semibold text-black mb-8 text-center">
            {selectedCategory ? 'Featured Products' : 'Trending Essentials'}
          </h2>
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No products yet
              </h3>
              <p className="text-gray-500">
                We're curating the best {selectedCategory} for you. Check back soon!
              </p>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <div className="bg-black rounded-xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Want More Curated Picks?
            </h3>
            <p className="text-lg mb-6 text-gray-300">
              Get notified when we add new essentials to your favorite categories
            </p>
            <button className="bg-white text-black font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Get Notified
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2 font-medium">
              EssentialsDash - Discover. Click. Buy.
            </p>
            <p className="text-sm">
              Affiliate links help us curate the best products for you.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
