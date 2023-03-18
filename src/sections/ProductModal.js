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
            <div class="flex">
                <img src={mainProduct.image}>
                </img>
                <div class="flex-col">
                    {comparables.map((comparable) => {
                        return <ProductComparisonCard key={comparable.id} product={comparable}></ProductComparisonCard>
                    })}
                </div>
            </div>
            <div>
                <button class="rounded-none bg-sky-500 hover:bg-sky-700" onClick={closeModal}>
                    Close
                </button>
            </div>
        </div>
    )
}




