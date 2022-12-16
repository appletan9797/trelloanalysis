
/**
 * Map created card with date
 *
 * @param {array} cards
 * @param {array} actions
 * @returns {array}
 */

type typeLabel = {
  [x:string]: string
}

type typeCard = {
  [x:string] : string | typeLabel[] | string[] 
  startdate : string
  completedate : string
}

type typeCardsCompletedByEachUser = {
  [x:string] : typeCard[]
}

class CardService {
  getAverageTime(cardsCompletedByEachUser: typeCardsCompletedByEachUser){
    let arrResult = []
    //Loop to get result for each member
    for (let member in cardsCompletedByEachUser){
      let MemberAvgtimeMap = {}
      let totalTimeSpent: number = 0, timeSpent:number
      const completedCards = cardsCompletedByEachUser[member]

      //Loop the array of result to get total time spent
      for (let i=0; i<completedCards.length;i++){
        const sdate = new Date(completedCards[i].startdate)
        const cdate = new Date(completedCards[i].completedate)

        timeSpent = cdate.getTime() - sdate.getTime()
        totalTimeSpent += timeSpent
      }
      //Store avg time spent to the obj
      MemberAvgtimeMap["member"] = member
      MemberAvgtimeMap["avgtimespent"] = totalTimeSpent / completedCards.length-1
      arrResult.push(MemberAvgtimeMap)
    }

    return arrResult
  }
}

const cardService = new CardService();

export { CardService, cardService }

