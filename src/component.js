function Component ({label,image,calories,condiments,mealType}) {
    
    return (<div>
        <div className="container">
            <h2>{label}</h2>
            </div> 
            
            <div className="container">
            <img src={image} alt="pic"/>
            </div>  

            <div className="container">
            <h2>{mealType}</h2>
            </div> 

            <ul className="container list">
                {condiments.map((ingredient,index )=> (
                <li key={index}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGICU9-3gsraq4b6m6KGwJ6e84lB3d1UNCOw&usqp=CAU" className="icon" alt="pic"/>
                {ingredient}</li>
                ))}
                </ul>
            
            <div className="container">
            <p className="cal">{calories.toFixed()}Calories</p>
            </div>

        </div>)
}

export default Component;