import ProductComparisonCard from '@/components/ProductComparisonCard'
import { dummyProducts } from '@/constants/dummy'
import React, {useState} from 'react'


export default function ProductModal(props) {
    const setModalOpened = props.setModalOpen
    const mainProduct = props.product
    const comparables = dummyProducts
    
    function closeModal() {
        setModalOpened(false)
    }

    return (
        <div>
            <div class="flex ">
                <img src={mainProduct.image}>
                </img>
                <div>
                    {comparables.map((comparable) => {
                        return <ProductComparisonCard product={comparable}></ProductComparisonCard>
                    })}
                </div>
            </div>
            <div>
                <button onClick={closeModal}>
                    Close
                </button>
            </div>
        </div>
    )
}




