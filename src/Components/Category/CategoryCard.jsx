import React from 'react'
import classes from "./category.module.css"
function CategoryCard({data}) {
    console.log(data)
  return (
    <div className={classes.category}>
      <a href={`/category/${data.category}`}>
        <span>
            <h2>{data.title}</h2>
        </span>
        <img src={data.image} alt={data.category} />
        <p>shop now</p>
      </a>
    </div>
  )
}

export default CategoryCard
