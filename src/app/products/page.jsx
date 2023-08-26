

import ProductCard from '@/components/ProductCard';
import axios from 'axios'

async function loadProducts(){  
    const {data} = await axios.get("http://localhost:3000/api/products")
    console.log(data);
    return data;
}

 async function ProductsPage() {
    
    const {rows} = await loadProducts()


  return (
    <div className='grid gap-4 grid-cols-4'>
        
        {
            rows.map( (product) => (
                <>
                <ProductCard key={product.id} product={product}/>
                </>
            ))
        }
    </div>
  )
}

export default ProductsPage