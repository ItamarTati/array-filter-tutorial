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
    return number > 30
})

export const getOnlyTrueValues = booleansArray.filter(boolean => boolean)

export const hunterDataFiltered = hunterData.filter(hunter => hunter.stats.strength)

























//                         ╔══════════════════════════════════╗
//                         ║                                  ║
//                         ║   Don't Change any Code Here     ║
//                         ║               Please.            ║
//                         ║                                  ║
//                         ╚══════════════════════════════════╝
//


createList(getNumbersHigherThan3, numbersContainer);
createList(getOnlyTrueValues, booleansContainer);
createGallery(hunterDataFiltered, hunterGalleryContainer);