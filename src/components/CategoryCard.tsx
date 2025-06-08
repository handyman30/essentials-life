import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
  onClick: (categoryId: string) => void;
}

export default function CategoryCard({ category, onClick }: CategoryCardProps) {
  return (
    <div
      onClick={() => onClick(category.id)}
      className="group bg-white rounded-xl p-6 cursor-pointer transition-all duration-200 hover:shadow-lg border-2 border-gray-300 hover:border-gray-400"
    >
      <div className="text-3xl mb-3">{category.icon}</div>
      <h3 className="text-lg font-semibold text-black mb-2">{category.name}</h3>
      <div className="flex flex-wrap gap-1 mb-3">
        {category.subcategories.slice(0, 3).map((sub) => (
          <span
            key={sub}
            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md border border-gray-200"
          >
            {sub}
          </span>
        ))}
        {category.subcategories.length > 3 && (
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md border border-gray-200">
            +{category.subcategories.length - 3}
          </span>
        )}
      </div>
      
      <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
} 