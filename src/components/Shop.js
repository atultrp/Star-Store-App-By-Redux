import React from 'react'
import ShopItem from './ShopItem'

const Shop = () => {

    const ItemData = [
        {
            productImage: "https://resizer.glanacion.com/resizer/oBispCnZigd-zFLbUXInz-s9x0c=/1119x746/smart/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/NPDDSBPSPBHTVGA2LO6CUTME3A.jpg",
            productName: "Cocktail Dress",
            productDetail: "This model of dress combines modern femininity  with a delicate style, enhanced by th euse o ffeathers. Styled with a pencil shape that sits on the knee.",
            productPrice: "$163"
        },
        {
            productImage: "https://sneakerbardetroit.com/wp-content/uploads/2019/07/Millie-Bobby-Brown-Converse-Chuck-Taylor-Millie-By-You-Release-Date.jpg",
            productName: "Converse Shoes",
            productDetail: "This collection is incredibly meaningful because it’s a collaboration between two brands that have truly helped me grow as a person and a creative by Mills.",
            productPrice: "$154"
        },
        {
            productImage: "https://i.blogs.es/999c79/253668486_985815992000906_7816500672986599520_n/840_560.jpeg",
            productName: "Sweatshirt",
            productDetail: "Sweatshirts are an all-time favorite. Keeping this in mind, Star clothing brings to you this sweatshirt for women which will keep you warm during winter.",
            productPrice: "$148"
        }
    ]

    return (
        <div className="container">
            <h2 className="text-center my-3">Shop whatever you love <i class="fas fa-shopping-cart"></i></h2>
            <div className="row">
                {ItemData.map((element) => {
                    return (
                        <div className="col-md-4 my-3">
                            < ShopItem ItemData={element} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Shop