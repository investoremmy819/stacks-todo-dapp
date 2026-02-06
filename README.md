# Stacks Todo DApp

A simple on-chain todo application built on the Stacks blockchain using Clarity smart contracts and the Stacks SDK.

## Features
- Create todos on-chain
- Toggle todo status
- Read todos by wallet address and ID
- Connect Stacks wallet using @stacks/connect
- Submit transactions using @stacks/transactions

## Tech Stack
- Clarity (Stacks smart contracts)
- JavaScript
- @stacks/connect
- @stacks/transactions
- @stacks/network

## Project Structure

contracts/
  todo.clar
frontend/
  index.html
  app.js

## Setup
1. Install Hiro Stacks Wallet
2. Switch to Stacks Testnet
3. Deploy `contracts/todo.clar`
4. Verify the contract on Hiro Explorer
5. Update `CONTRACT_ADDRESS` in `frontend/app.js`
6. Open `frontend/index.html` and connect wallet

## Deployed Contract (Testnet)
Add your deployed contract address here after deployment:
- Contract: YOUR_TESTNET_ADDRESS.todo
- Explorer: https://explorer.hiro.so/address/YOUR_TESTNET_ADDRESS.todo?chain=testnet

## Roadmap
- List all todos for a user
- Improve UI
- Add delete todo function
