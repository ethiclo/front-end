import React from 'react'

export default function ProductComparableCard(props) {
    const productComparable = props

    return (
        <div className="flex">
            <img src={productComparable.image}>
            </img>
            <div>
                <h1>{productComparable.title}</h1>
                <p class="text-grey">{productComparable.brand} | {productComparable.price}</p>
                <p>{productComparable.brand}</p>
                <div>
                    <p>Sustainability Score:</p>
                    <ScoreComponent props={productComparable.score} />
                </div>

            </div>
        </div>
    )
}

export default function ScoreComponent(props) {
    const score = props

    const backgroundColorGenerator = (score) => {
        if(score < 20) {
            return "bg-red"
        } else if(score >= 20 && score < 40) {
            return "bg-maroon"
        }else if(score >= 40 && score < 60) {
            return "bg-yellow"
        }else if(score >= 60 && score < 80) {
            return "bg-lightgreen"
        }else{
            return "bg-green"
        }
    }

    const bgColor = backgroundColorGenerator(score)

    return (
        <div>
            <p class={bgColor}>{score}</p>
        </div>

    )
}


