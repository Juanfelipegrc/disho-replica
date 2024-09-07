import { avocadoImage, avocadoImage2, avocadoImage3, berryCakeImage, berryCakeImage2, berryCakeImage3, berryCakeImage4, cannedPepperImage, cannedPepperImage2, cannedPepperImage3, chocolateCakeImage, chocolateCakeImage2, chocolateCakeImage3, chocolateCakeImage4, freshKiwiImage, freshKiwiImage2, freshKiwiImage3, freshKiwiImage4, herbalTeaImage, herbalTeaImage2, herbalTeaImage3, herbalTeaImage4, jamInAssortmentImage, jamInAssortmentImage3, jamInAssortmentImage4, limeOrganicImage, limeOrganicImage2, limeOrganicImage3, pearJamImage, pearJamImage2, pearJamImage3, pearJamImage4, pearJamImage5, pepperSauceImage, pepperSauceImage2, pepperSauceImage3, pepperSauceImage4, potatoSnacksImage, potatoSnacksImage2, potatoSnacksImage3, potatoSnacksImage4, profilePhotoUserReview, puerTeaImage, puerTeaImage2, puerTeaImage3, puerTeaImage4, pumpkinImage, pumpkinImage2, pumpkinImage3, pumpkinImage4, redOnionImage, redOnionImage2, redOnionImage3, redOnionImage4, robustaCoffeeImage, robustaCoffeeImage2, robustaCoffeeImage3, robustaCoffeeImage4, strawberryImage, strawberryImage2, strawberryImage3, strawberryImage4, strawberryImage5, tomatoImage, tomatoImage2, tomatoImage3, tomatoImage4, vinegarSetImage, vinegarSetImage2, vinegarSetImage3, vinegarSetImage4 } from "../assets";


export const products = [
    {
        name: 'Potato Snacks',
        price: '$12.00',
        discountPrice: '$20.00',
        img: [
            potatoSnacksImage,
            potatoSnacksImage2,
            potatoSnacksImage3,
            potatoSnacksImage4,
        ],
        additionalInformation: {
            weight: '20kg',
            dimensions: '12 x 8 x 20cm',
            packWeight: '1lb',
            flavor: 'Original',
            size: '1 Ounce (Pack of 40)',
            brand: 'Disho',

        },
        reviews: [
            {
                username: 'merkulove',
                date: 'February 25, 2021',
                body: 'Fusce viverra hendrerit tortor, ut condimentum nibh cursus lacinia. Vivamus congue sit amet ligula ac vulputate. Aenean ligula dui, placerat vitae neque fermentum, rhoncus sodales nulla',
                profilePhoto: profilePhotoUserReview,
            }
        ],
        categories:[
            'Canned Goods'
        ],

    },
    {
        name: 'Berry Cake',
        price: '$20.00',
        discountPrice: '',
        img: [
            berryCakeImage,
            berryCakeImage2,
            berryCakeImage3,
            berryCakeImage4,
            ],
        additionalInformation: {
            packWeight: '1lb',
            color: 'Chocolate',
            flavor: 'Lorem Ipsum',
        },
        reviews: [],
        categories:[
            'Bakery'
        ],

    },
    {
        name: 'Fresh Kiwi',
        price: '$20.00',
        discountPrice: '',
        img: [
            freshKiwiImage,
            freshKiwiImage2,
            freshKiwiImage3,
            freshKiwiImage4,
            ],
        additionalInformation: {},
        reviews: [],
        categories:[
            'Farm',
            'Greens'
        ],
        
    },
    {
        name: 'Lime Organic',
        price: '$12.00',
        discountPrice: '$20.00',
        img: [
            limeOrganicImage,
            limeOrganicImage2,
            limeOrganicImage3,
            ],
        additionalInformation: {},
        reviews: [],
        categories:[
            'Farm',
            'Greens'
        ],

    },
    {
        name: 'Pear Jam',
        price: '$20.00',
        discountPrice: '',
        img: [
            pearJamImage,
            pearJamImage2,
            pearJamImage3,
            pearJamImage4,
            pearJamImage5,
            ],
        additionalInformation: {},
        reviews: [],
        categories:[
            'Canned Goods',
            'Farm',
            'Uncategorized'
        ],

    },
    {
        name: 'Pumpkin',
        price: '$12.00',
        discountPrice: '$20.00',
        img: [
            pumpkinImage,
            pumpkinImage2,
            pumpkinImage3,
            pumpkinImage4,
            ],
        additionalInformation: {},
        reviews: [],
        categories:[
            'Farm',
            'Greens',
            'Uncategorized'
        ],

    },
    {
        name: 'Herbal Tea',
        price: '$10.00',
        discountPrice: '$18.00',
        img: [
            herbalTeaImage,
            herbalTeaImage2,
            herbalTeaImage3,
            herbalTeaImage4,
            ],
        additionalInformation: {},
        reviews: [],
        categories:[
            'Potables',
            'Uncategorized'
        ],

    },
    {
        name: 'Robusta Coffee',
        price: '$10.00',
        discountPrice: '',
        img: [
            robustaCoffeeImage,
            robustaCoffeeImage2,
            robustaCoffeeImage3,
            robustaCoffeeImage4,
            ],
        additionalInformation: {},
        reviews: [],
        categories:[
            'Potables',
            'Uncategorized'
        ],
    },
    {
        name: 'Puer tea',
        price: '$100.00',
        discountPrice: '$130.00',
        img: [
            puerTeaImage,
            puerTeaImage2,
            puerTeaImage3,
            puerTeaImage4,
            ],
        additionalInformation: {
            weight: '2kg',
        },
        reviews: [],
        categories:[
            'Potables',
            'Uncategorized'
        ],
    },
    {
        name: 'Canned Pepper',
        price: '$12.00',
        discountPrice: '$20.00',
        img: [
            cannedPepperImage,
            cannedPepperImage2,
            cannedPepperImage3,
        ],
        additionalInformation: {},
        reviews: [],
        categories:[
            'Canned Goods',
            'Farm',
            'Uncategorized'
        ],
    },
    {
        name: 'Red Onion',
        price: '$20.00',
        discountPrice: '',
        img: [
            redOnionImage,
            redOnionImage2,
            redOnionImage3,
            redOnionImage4,
        ],
        additionalInformation: {},
        reviews: [],
        categories:[
            'Farm',
            'Greens',
            'Uncategorized'
        ],
    },
    {
        name: 'Fresh Lime',
        price: '$12.00',
        discountPrice: '$20.00',
        img: [
            limeOrganicImage,
            limeOrganicImage2,
            limeOrganicImage3,
        ],
        additionalInformation: {},
        reviews: [],
        categories:[
            'Farm',
            'Greens',
            'Uncategorized'
        ],
    },
    {
        name: 'Vinegar set',
        price: '$12.00',
        discountPrice: '$20.00',
        img: [
            vinegarSetImage,
            vinegarSetImage2,
            vinegarSetImage3,
            vinegarSetImage4,
        ],
        additionalInformation: {},
        reviews: [],
        categories:[
            'Sauces',
            'Uncategorized'
        ],
    },
    {
        name: 'Jam in assortment',
        price: '$12.00',
        discountPrice: '$20.00',
        img: [
            jamInAssortmentImage,
            pearJamImage2,
            jamInAssortmentImage3,
            jamInAssortmentImage4,
        ],
        additionalInformation: {},
        reviews: [],
        categories:[
            'Canned Goods',
            'Farm'
        ],
    },
    {
        name: 'Avocado',
        price: '$12.00',
        discountPrice: '$20.00',
        img: [
            avocadoImage,
            avocadoImage2,
            avocadoImage3
        ],
        additionalInformation: {},
        reviews: [],
        categories:[
            'Greens',
            'Uncategorized'
        ],
    },
    {
        name: 'Tomato',
        price: '$12.00',
        discountPrice: '$20.00',
        img: [
            tomatoImage,
            tomatoImage2,
            tomatoImage3,
            tomatoImage4
        ],
        additionalInformation: {},
        reviews: [],
        categories:[
            'Farm',
            'Greens',
            'Uncategorized'
        ],
    },
    {
        name: 'Strawberry',
        price: '$12.00',
        discountPrice: '$20.00',
        img: [
            strawberryImage,
            strawberryImage2,
            strawberryImage3,
            strawberryImage4,
            strawberryImage5,
        ],
        additionalInformation: {},
        reviews: [],
        categories:[
            'Farm',
            'Greens',
            'Uncategorized'
        ],
    },
    {
        name: 'Chocolate Cake',
        price: '$20.00',
        discountPrice: '',
        img: [
            chocolateCakeImage,
            chocolateCakeImage2,
            chocolateCakeImage3,
            chocolateCakeImage4,
        ],
        additionalInformation: {},
        reviews: [],
        categories:[
            'Bakery',
            'Farm',
            'Uncategorized'
        ],
    },
    {
        name: 'Pepper Sauce',
        price: '$110.00',
        discountPrice: '$122.00',
        img: [
            pepperSauceImage,
            pepperSauceImage2,
            pepperSauceImage3,
            pepperSauceImage4,
        ],
        additionalInformation: {},
        reviews: [],
        categories:[
            'Sauces',
            'Uncategorized'
        ],
    },
    
]