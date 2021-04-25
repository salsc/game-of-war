[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Game of War

Remember the card game ["War"](https://bicyclecards.com/how-to-play/war/)?

Two players start the game by splitting a deck of 52 standard playing cards
evenly. Each stack is facedown, and players cannot look at the cards in their
stack or rearrange them.

The objective of the game is to play until one player has all 52 cards in their
stack.

## Prerequisites

- Javascript
- Object Oriented Programming

## Instructions

1. Create a new repository on GitHub (not GitHub Enterprise).
1. Clone down the repository and complete your work in there.
1. Fulfill the listed requirements below.

Please turn in your submission by the deadline on your cohort calendar. Submit
your project by posting an issue on this repository with a link to your
repository on GitHub (not GitHub Enterprise).

## Requirements

To play, each player reveals the top card in their stack. The player who played
the card with the higher rank (Aces high) takes both cards and puts them at the
bottom of their stack in an arbitrary order.

If there is a tie, then it's War! In the card game each player adds places the
top three cards of their stack face down, and then each player reveals the top
card again. Whoever wins out of the second reveal takes all of the cards, and if
there is another tie the process repeats until there is a winner.

### Technical Requirements

For this project, we'd like you to make it so we can play the game through the
console in the browser. You'll therefore need an `index.html` file that
includes the scripts for your game.

Additionally, your project should meet the following requirements:

- Your game should run without errors
- The game should start when the player loads the page. Create your two players
    and start the rounds!
- Print a message for each "round" of the game showing the cards played by each
    user, who won the round, and how many cards each player now has.
- Include a README written in well formatted Markdown (_hint: look up README
    templates_)
- Show a good commit history with frequent commits (We're looking for lots of
    small commits)

## Hints

- Adding a property for the "value" of a rank could make it easier to compare face cards (ie: Jack < Queen). For example, 2-10 will represent each number and then 11, 12, 13, 14 for J Q K A, respectively.
- It could be helpful to have a class to represent the overall Game, particularly when handling ties and other complicated game states.
- Write Pseudocode!
- Break the project down into different components. What are the pieces to this problem? Solve them each individually and build towards a solution for the overall problem. Teach each piece individually before moving on!
- Make it work, make it good, make it fast. This is a common developer axiom. It means: focus first on making something work (even if it isn't well written or it's buggy). Then, turn to making it work well. Then, and only then, start to worry about other things like performance.

## Plagiarism

Take a moment to refamiliarize yourself with the [Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md). Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
