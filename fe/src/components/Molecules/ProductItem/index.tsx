export interface ProductItemProps {
  title: string | React.ReactNode;
  price: string;
  description?: string;
  tag?: string;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  title,
  price,
  description,
  tag,
}) => {
  return (
    <div className="bg-white shadow-md rounded p-6 py-3 w-[250px] md:w-[400px] mb-2 leading-[100%] hover:cursor-pointer">
      <div className="flex justify-between items-center">
        <div>
          <span>{title}</span>
        </div>
        <div>
          <span className="font-semibold">{price}</span>
        </div>
      </div>
      {description && (
        <div className="mt-2">
          <span className="text-sm text-gray-500">{description}</span>
        </div>
      )}
      {tag && (
        <div className="mt-4">
          <span className="text-xs text-gray-500 font-semibold bg-gray-100 rounded-lg p-2 inline-block">
            {tag}
          </span>
        </div>
      )}
    </div>
  );
};
