export default function RecipeImage({ image }) {
    return (
      <div className="p-4">
        <img src={image} alt="Recipe" className="rounded-xl w-full object-cover" />
      </div>
    );
  }
  