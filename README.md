
# Seer test

The objective is to use the provided contract and enable users to create games between each other. The requirements are stated below:

- Code a web3 page allowing parties to play the game. It should work on metamask using Ethereum testnet (indicate which one).

- Provide us the URL for our test.
In order for this to be as short as possible, you **don’t** need to:
- Write smart contracts.
- Write tests.
- Design a fancy interface (the elements of the interface should be well-thought, but no need to use images, colors or background).
- Make it work for every browser (if it does great but we will just try the one you choose, so don’t worry about it).
- Make it possible to have multiple games (we assume there are never more than 2 parties playing this game).

But you do need to:
- Make it secure to prevent people from losing their ETH (think about what could go wrong, which kind of attack a party trying to always win could try, in particular make sure the salt is handled properly).
## My solution

The game runs on the Ethereum Sepolia Testnet and will prompt users to add that network if they don't have it already. Get your Sepolia Eth [here](https://faucetlink.to/sepolia)

  

I've decided to keep things simple and not use any css libraries though in a real project I'd use something like styledcomponents and/or a component library.

There is a backend server that stores created games between users.

## Getting Started
First, run the development server:
```bash
yarn  dev
```
Second, start the seer-be server:
```bash
yarn  dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Improvements
- Use a string instead of a number for the salt/password for the game when creating it to avoid player 2 be able to use rainbow tables to determine the hashed value of player 1 but this will require smart contract code change which is beyond the scope of this test.
- Add an indicator to show that a player has played a game in which they're player 2.
- An indicator to show when a user can call the timeouts.
- An indicator to show who won a game
- Add disable on solve and play game buttons while they're currently being processed