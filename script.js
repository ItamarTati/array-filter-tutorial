import {
    numbersArray,
    booleansArray,
    hunterData, createList, numbersContainer, booleansContainer, createGallery, hunterGalleryContainer,
} from '/complexLayer.js'

//                         ╔══════════════════════════════════╗
//                         ║                                  ║
//                         ║   Please make changes a in the   ║
//                         ║   lines below Fellow Hero.       ║
//                         ║                                  ║
//                         ╚══════════════════════════════════╝
//

export const getNumbersHigherThan3 = numbersArray.filter(function (number){
    return number
})

export const getOnlyTrueValues = booleansArray.filter(boolean => boolean || !boolean)

export const hunterDataEnhanced = hunterData.filter(hunter => hunter)

























//                         ╔══════════════════════════════════╗
//                         ║                                  ║
//                         ║   Don't Change any Code Here     ║
//                         ║               Please.            ║
//                         ║                                  ║
//                         ╚══════════════════════════════════╝
//


createList(getNumbersHigherThan3, numbersContainer);
createList(getOnlyTrueValues, booleansContainer);
createGallery(hunterDataEnhanced, hunterGalleryContainer);