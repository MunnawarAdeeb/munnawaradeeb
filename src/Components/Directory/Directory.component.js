import "./Directory.component.scss"
import CategoryItem from "../Category-item/category.item.compopnent"
const Directory=({categories})=>{
    return(<div className="categories-container">
    {categories.map((category) => (
      <CategoryItem
        key={category.id}
        title={category.title}
        imageUrl={category.imageUrl}
      />
    ))}
  </div>)
}
export default Directory;


