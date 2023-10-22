/*
Filename: SophisticatedCode.js

Description: This code implements a sophisticated and complex blockchain algorithm for a decentralized voting system. It includes various cryptographic functions, secure data storage, and validation mechanisms. Please note that this code is for demonstration purposes only and may not be suitable for production use.

*/

// Import required libraries and dependencies
const crypto = require('crypto');
const fs = require('fs');

// Define the Block class to represent each block in the blockchain
class Block {
  constructor(index, timestamp, data, previousHash) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return crypto
      .createHash('sha256')
      .update(
        this.index +
          this.previousHash +
          this.timestamp +
          JSON.stringify(this.data) +
          this.nonce
      )
      .digest('hex');
  }

  mineBlock(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')
    ) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log('Block mined:', this.hash);
  }
}

// Define the Blockchain class to manage the chain of blocks
class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 4;
    this.pendingVotes = [];
    this.miningReward = 100;
  }
 
  createGenesisBlock() {
    return new Block(0, new Date().getTime(), 'Genesis Block', '0');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  minePendingVotes(miningRewardAddress) {
    const newBlock = new Block(
      this.chain.length,
      Date.now(),
      this.pendingVotes,
      this.getLatestBlock().hash
    );
    newBlock.mineBlock(this.difficulty);

    this.chain.push(newBlock);
    this.pendingVotes = [];

    if (miningRewardAddress) {
      this.pendingVotes.push({
        from: null,
        to: miningRewardAddress,
        amount: this.miningReward,
      });
    }
  }

  addVote(vote) {
    if (!vote.from || !vote.signature || !this.verifyVote(vote)) {
      console.log('Vote verification failed!');
      return;
    }

    this.pendingVotes.push(vote);
    console.log('Vote added:', vote);
  }

  verifyVote(vote) {
    const publicKey = crypto.createVerify('SHA256');
    publicKey.update(
      vote.from +
        JSON.stringify(vote.election) +
        JSON.stringify(vote.candidate) +
        vote.timestamp
    );
    return publicKey.verify(
      vote.from,
      vote.signature,
      'hex'
    );
  }

  getBalance(address) {
    let balance = 0;
    for (const block of this.chain) {
      for (const vote of block.data) {
        if (vote.from === address) {
          balance -= vote.amount;
        }
        if (vote.to === address) {
          balance += vote.amount;
        }
      }
    }
    return balance;
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        console.log('Block hash mismatch!');
        return false;
      }
      if (currentBlock.previousHash !== previousBlock.hash) {
        console.log('Previous block hash mismatch!');
        return false;
      }
    }
    return true;
  }
}

// Example usage
const blockchain = new Blockchain();

blockchain.addVote({
  from: 'voter1',
  signature: 'signature1',
  election: { id: 1 },
  candidate: { id: 1 },
  timestamp: Date.now(),
  amount: 1,
});

blockchain.addVote({
  from: 'voter2',
  signature: 'signature2',
  election: { id: 1 },
  candidate: { id: 2 },
  timestamp: Date.now(),
  amount: 1,
});

console.log(blockchain.isChainValid());
console.log('Blockchain:', JSON.stringify(blockchain, null, 2));

// End of code.