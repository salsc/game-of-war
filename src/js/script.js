console.log("hello!");
class Cards {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}
//simplify creation of deck
const suit = ["Clubs","Diamonds","Hearts","Spades"];
const rank = ["Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King","Ace"];
const value = [2,3,4,5,6,7,8,9,10,11,12,13,14];
//establish values for the keys of card object properties

//create deck of playing cards
let deck = [];
for (let i=0;i<suit.length;i++) {
    for (let j=0;j<rank.length;j++) {
    deck.push(new Cards(suit[i],rank[j],value[j]));
    }
}

//create player avatars
class Player {
    constructor(name, hand, played, warWager) {
        this.name = name;
        this.hand = hand;
        this.played = played;
        this.warWager = warWager;
    }
}
const pOne = new Player("Player One",[],[],[]);
const pTwo = new Player("Player Two",[],[],[]);

//create the game environment
class Game {
    constructor(name, players) {
        this.name = name;
    }
    dealCards() {
        //divide the deck evenly between players, random
        if(deck.length === 52) {
            let rando = 0;
            for(let i=0;i<26;i++) {
                //select random card from deck, deal to player one
                rando = Math.floor(Math.random()*(deck.length));
                pOne.hand.push(deck[rando]);
                deck.splice(rando,1);

                //select random card from deck, deal to player two
                rando = Math.floor(Math.random()*(deck.length));
                pTwo.hand.push(deck[rando]);
                deck.splice(rando,1);
            }
        } else {
            console.log("Please use a proper deck of cards.")
        }
    }
    //convert player hands to deck
    shufCards() {
        deck = deck.concat(pOne.hand).concat(pTwo.hand);
        pOne.hand = [];
        pTwo.hand = [];
    }
    play() {
        let rounds = 1;
        while (pOne.hand.length > 0 && pTwo.hand.length > 0 && rounds < 5000) {
            //each player plays the first card in their hand
            pOne.played.push(pOne.hand[0]);
            pOne.hand.splice(0,1);
            pTwo.played.push(pTwo.hand[0]);
            pTwo.hand.splice(0,1);

            let a = pOne.played.length - 1;
            let b = pTwo.played.length - 1;

            //log the cards played
            console.log(`${pOne.name} played ${pOne.played[0].rank} of ${pOne.played[0].suit}.`);
            console.log(`${pTwo.name} played ${pTwo.played[0].rank} of ${pTwo.played[0].suit}.`);

            //determine winner
            if (pOne.played[a].value > pTwo.played[b].value) {
                console.log(`${pOne.name} won round ${rounds}!`)
                pOne.hand = pOne.hand.concat(pOne.played).concat(pTwo.played).concat(pOne.warWager).concat(pTwo.warWager);
                pOne.played.splice(0);
                pTwo.played.splice(0);
                pOne.warWager.splice(0);
                pTwo.warWager.splice(0);
                console.log(`${pOne.name} has ${pOne.hand.length} cards.`);
                console.log(`${pTwo.name} has ${pTwo.hand.length} cards.`);
                console.log("Round complete!")
                rounds +=1;
            } else if (pTwo.played[b].value > pOne.played[a].value) {
                console.log(`${pTwo.name} won round ${rounds}!`)
                pTwo.hand = pTwo.hand.concat(pOne.played).concat(pTwo.played).concat(pOne.warWager).concat(pTwo.warWager);
                pOne.played.splice(0);
                pTwo.played.splice(0);
                pOne.warWager.splice(0);
                pTwo.warWager.splice(0);
                console.log(`${pOne.name} has ${pOne.hand.length} cards.`);
                console.log(`${pTwo.name} has ${pTwo.hand.length} cards.`);
                console.log("Round complete!")
                rounds +=1;
            } else if (pOne.played[a].value === pTwo.played[b].value) {
                console.log("It's war!");
                if (pOne.hand.length > 3) {
                    for (let i=0;i<3;i++) {
                        pOne.warWager.push(pOne.hand[i]);
                    }
                    pOne.hand.splice(0,3);
                } else if (pOne.hand.length <= 3) {
                    for (let i=0;i<pOne.hand.length-1;i++) {
                        pOne.warWager.push(pOne.hand[i]);
                    }
                    pOne.hand.splice(0,pOne.hand.length-1);
                } else {
                    console.log("Dirty War 1")
                }
                if (pTwo.hand.length > 3) {
                    for (let i=0;i<3;i++) {
                        pTwo.warWager.push(pTwo.hand[i]);
                    }
                    pTwo.hand.splice(0,3);
                } else if (pTwo.hand.length <= 3) {
                    for (let i=0;i<pTwo.hand.length-1;i++) {
                        pTwo.warWager.push(pTwo.hand[i]);
                    }
                    pTwo.hand.splice(0,pTwo.hand.length-1);
                } else {
                    console.log("Dirty War 2")
                }
            } else {
                console.log("We have a big problem!");
            }
        }
        if (pOne.hand.length > pTwo.hand.length) {
            console.log(`${pOne.name} has won the game after ${rounds} rounds!`);
        } else if (pTwo.hand.length > pOne.hand.length) {
            console.log(`${pTwo.name} has won the game after ${rounds} rounds!`)
        } else {
            console.log("How did you mess this up?!?");
        }
    }
}
const war = new Game("War");
war.shufCards();
war.dealCards();
war.play();