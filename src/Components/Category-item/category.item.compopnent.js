import "./category.item.styels.scss"
const categoryItem=({title,imageUrl})=>{
    return(<>
     <div className="category-container">
     <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}/>
              <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop More</p>
              </div>
            </div>
    </>)
}
export default categoryItem;