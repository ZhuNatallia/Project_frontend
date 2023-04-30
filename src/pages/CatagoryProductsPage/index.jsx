import React from 'react'
import { useParams } from 'react-router-dom'

export default function CategoryProductsPage
    () {
    const { category } = useParams();
    return (
      
        <div>
            {category}

    </div>
  )
}
