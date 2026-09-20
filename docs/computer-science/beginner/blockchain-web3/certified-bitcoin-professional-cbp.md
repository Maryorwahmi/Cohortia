---
course_title: Certified Bitcoin Professional (CBP)
course_id: certified-bitcoin-professional-cbp
provider: Cohortia
original_reference: CryptoCurrency Certification Consortium / Online
platform: Cohortia
level: Beginner
type: Course
duration: Self-paced
cost: Included with Cohortia
url: Cohortia course page (original reference: (URL not verified))
certification: Cohortia Certificate of Completion
category: Computer Science
subcategory: Blockchain & Web3
skills: Blockchain Fundamentals, Cryptocurrency, Bitcoin Protocol, Cryptography, Digital Wallets, Proof-of-Work, Decentralization, Peer-to-Peer Networks, Transaction Security, Bitcoin Mining, UTXO Model, Lightning Network
ownership_note: Cohortia curates and rebuilds content for educational purposes and does not claim sole ownership of third-party source material.
---

## Course Overview

Welcome to the Certified Bitcoin Professional (CBP) course, your foundational journey into the world of Bitcoin and its underlying technology. This comprehensive program is meticulously designed for beginners who are eager to understand the technical and economic principles that make Bitcoin a groundbreaking innovation. We will strip away the hype and delve into the core mechanics, starting from the very concept of digital scarcity and peer-to-peer electronic cash, through the intricate cryptographic processes that secure it, to the global network that maintains its integrity. Our goal is to equip you with a solid, practical understanding of how Bitcoin works, empowering you to navigate the ecosystem with confidence and knowledge.

Throughout this course, we emphasize a progressive learning approach, building your understanding chapter by chapter. We'll begin by exploring the historical context that led to Bitcoin's creation, understanding the problems it set out to solve, and defining its fundamental characteristics. From there, we'll unravel the crucial role of cryptography, demystifying concepts like hashing, public-key encryption, and digital signatures that form the bedrock of Bitcoin's security model. You'll gain insight into the structure of the blockchain, how transactions are processed and validated, and the fascinating mechanism of Proof-of-Work that secures the network against manipulation.

Beyond the theoretical underpinnings, this course provides practical knowledge essential for any Bitcoin user or enthusiast. We'll guide you through the various types of Bitcoin wallets, explain the critical importance of private keys and seed phrases, and share robust security best practices to protect your digital assets from common threats. We'll also touch upon the broader economic implications of Bitcoin, its unique monetary policy, and emerging layer-2 solutions like the Lightning Network that enhance its scalability. By the end of this program, you will not only be able to explain Bitcoin's operation in detail but also apply best practices for interacting with the network securely and intelligently, preparing you for the Cohortia Certificate of Completion as a Certified Bitcoin Professional.

Upon successful completion of this course, you will be able to:

*   Articulate the historical context and fundamental problems Bitcoin was designed to solve.
*   Explain the core principles of decentralization, immutability, and peer-to-peer networking in the context of Bitcoin.
*   Describe the cryptographic primitives (hashing, public-key cryptography, digital signatures) that secure Bitcoin transactions and the blockchain.
*   Detail the structure of a Bitcoin block and the process of Proof-of-Work mining and difficulty adjustment.
*   Analyze the lifecycle of a Bitcoin transaction, including UTXOs, inputs, outputs, and network propagation.
*   Identify different types of Bitcoin wallets and implement best practices for securing private keys and seed phrases.
*   Recognize common security risks and attacks within the Bitcoin ecosystem and apply strategies to mitigate them.
*   Discuss Bitcoin's economic properties, including its fixed supply, halving events, and their impact on its value proposition.
*   Summarize the basic concepts of Layer 2 solutions like the Lightning Network and their role in Bitcoin's scalability.
*   Confidently interact with the Bitcoin network, understanding transaction fees, confirmations, and network health.

## Syllabus Structure

| Module # | Theme | Chapters |
|----------|-------|----------|
| 1 | Understanding Bitcoin's Core Principles | 3 |
| 2 | Cryptography: The Bedrock of Bitcoin | 3 |
| 3 | The Bitcoin Blockchain and Mining | 4 |
| 4 | Bitcoin Transactions and Network Dynamics | 4 |
| 5 | Securing Your Bitcoin: Wallets and Best Practices | 5 |
| 6 | Bitcoin's Broader Impact and Future | 5 |

Total chapters: 24
---

## Module 1: Understanding Bitcoin's Core Principles

**Module Goal:** To establish a foundational understanding of Bitcoin's origins, the problems it solves, the cryptographic underpinnings that secure it, and how transactions are processed within its decentralized network.

### Chapter 1.1 — The Genesis of Bitcoin and Digital Scarcity

#### Learning objectives
*   Explain the fundamental problem of double-spending in digital currencies prior to Bitcoin.
*   Describe the historical context leading to Bitcoin's creation, including earlier attempts at digital cash.
*   Identify Satoshi Nakamoto's core innovation as presented in the Bitcoin whitepaper.
*   Define and explain the concept of digital scarcity as achieved by Bitcoin.
*   Recognize common misconceptions about Bitcoin's nature and operation.

#### Detailed lesson content
Before Bitcoin, the idea of purely digital cash faced a significant hurdle known as the "double-spending problem." Imagine you have a digital file, like a photo. You can easily copy and paste that file an infinite number of times, sending copies to many people while still retaining the original. While this is great for information sharing, it's disastrous for money. If a digital currency unit could be spent more than once, its value would be instantly diluted, and the system would collapse. Previous attempts at digital cash, such as DigiCash in the 1990s or later proposals like B-money and Hashcash, often relied on a central authority to verify transactions and prevent double-spending. This centralization, however, introduced points of failure, censorship risks, and a single entity that could control the money supply or track user activity, undermining the goal of truly independent digital money.

The breakthrough arrived on October 31, 2008, when an anonymous entity known as Satoshi Nakamoto published a whitepaper titled "Bitcoin: A Peer-to-Peer Electronic Cash System." This seminal document outlined a novel solution to the double-spending problem without needing any trusted third party. Satoshi proposed a system where transactions would be publicly broadcast, grouped into blocks, and secured by cryptographic proofs, forming an immutable chain – the blockchain. This decentralized approach meant that instead of a single bank verifying transactions, a network of participants (nodes) would collectively agree on the validity of transactions and the order in which they occurred, making it virtually impossible to double-spend without controlling a majority of the network's computational power. The first block, known as the "genesis block," was mined on January 3, 2009, marking the birth of Bitcoin.

One of Bitcoin's most revolutionary contributions is the concept of "digital scarcity." Unlike traditional fiat currencies, which can be printed or created by central banks at will, or digital files that can be copied endlessly, Bitcoin has a mathematically enforced, finite supply. There will only ever be 21 million Bitcoins created. This scarcity is programmed into its protocol, specifically through a process called "halving," where the reward for mining new blocks is cut in half approximately every four years. This predictable, decreasing supply schedule makes Bitcoin deflationary by design, contrasting sharply with the inflationary nature of most fiat currencies. This fixed supply, combined with its decentralized and censorship-resistant nature, positions Bitcoin as a potential store of value, often likened to "digital gold." Understanding this fundamental scarcity is crucial, as it underpins Bitcoin's value proposition and differentiates it from other digital assets that may have unlimited or easily expandable supplies.

It's a common mistake to confuse Bitcoin with a traditional payment processor like PayPal or a bank. Bitcoin is not a company, nor does it have a CEO or a customer service department. It is an open-source protocol and a decentralized network. Another frequent misconception is that Bitcoin is entirely anonymous. While transactions don't directly reveal personal identities, all transactions are public on the blockchain, and sophisticated analysis can sometimes link addresses to real-world identities, making it more accurately described as "pseudonymous." Always remember that Bitcoin transactions are irreversible; once sent, they cannot be recalled. Therefore, always double-check recipient addresses and amounts before confirming a transaction. Be especially wary of scams that promise unrealistic returns or ask for your private keys, as these are attempts to exploit the irreversible nature of Bitcoin.

#### Key concepts
*   **Double-Spending Problem:** The challenge in digital currency of preventing a single unit of currency from being spent more than once.
*   **Satoshi Nakamoto:** The pseudonymous creator(s) of Bitcoin, who published the whitepaper and released the first Bitcoin software.
*   **Bitcoin Whitepaper:** The foundational document, "Bitcoin: A Peer-to-Peer Electronic Cash System," outlining Bitcoin's design and principles.
*   **Decentralization:** The principle that no single entity controls the Bitcoin network; control is distributed among participants.
*   **Digital Scarcity:** The property of Bitcoin having a fixed and limited supply (21 million units), enforced by its protocol.
*   **Halving:** A programmed event in Bitcoin's protocol that reduces the reward for mining new blocks by half, occurring approximately every four years.
*   **Genesis Block:** The very first block ever mined on the Bitcoin blockchain, marking the beginning of the network.

#### Hands-on activity
**Activity: Analyzing the Double-Spending Challenge**

**Objective:** To understand the practical implications of the double-spending problem and how a centralized vs. decentralized system might address it.

**Scenario:** Imagine Alice has 10 digital coins. She wants to send these 10 coins to Bob and also send the *same* 10 coins to Carol simultaneously.

**Instructions:**
1.  **Centralized System (e.g., a bank):**
    *   Describe how a traditional bank would prevent Alice from double-spending. What mechanism (e.g., account balances, transaction logs) would the bank use?
    *   What are the potential drawbacks of relying on this central authority? (e.g., single point of failure, censorship, privacy concerns).
2.  **Hypothetical Decentralized System (without Bitcoin's solution):**
    *   If Alice broadcasts two transactions (10 coins to Bob, 10 coins to Carol) to a simple peer-to-peer network *without* a mechanism for ordering or consensus, what would likely happen?
    *   How would Bob and Carol know which transaction is valid, or if both are valid?
    *   What kind of "agreement" or "proof" would be needed among the network participants to resolve this conflict?

**Reflection:** Consider how Bitcoin's approach (broadcasting transactions, grouping them into blocks, and achieving network consensus through proof-of-work) fundamentally solves the problem you just analyzed.

#### Assessment idea
1.  **Question:** Which of the following best describes the "double-spending problem" that Bitcoin was designed to solve?
    *   A) The difficulty of sending money across international borders.
    *   B) The risk of a digital currency unit being spent more than once.
    *   C) The challenge of creating new digital currency units.
    *   D) The problem of high transaction fees in traditional banking.

    **Correct Answer:** B) The risk of a digital currency unit being spent more than once.
    **Explanation:** The double-spending problem is unique to digital currencies, where a digital token could theoretically be duplicated and spent multiple times, undermining its value. Bitcoin's decentralized ledger and consensus mechanism prevent this by ensuring that each unit of Bitcoin can only be spent once.

2.  **Question:** What is the primary mechanism by which Bitcoin achieves "digital scarcity"?
    *   A) It relies on government regulations to limit its supply.
    *   B) Its supply is controlled by a central foundation that issues new coins.
    *   C) It has a mathematically fixed maximum supply (21 million units) and a predictable halving schedule for block rewards.
    *   D) Users voluntarily agree not to create new Bitcoins.

    **Correct Answer:** C) It has a mathematically fixed maximum supply (21 million units) and a predictable halving schedule for block rewards.
    **Explanation:** Bitcoin's protocol is hardcoded to cap the total supply at 21 million coins. New coins are introduced as block rewards, which are cut in half approximately every four years (halving), ensuring a predictable and decreasing rate of new supply until the cap is reached. This creates a provable, unalterable scarcity.

#### AI generation note
Create a 12-minute animated video explaining the double-spending problem. Start with a visual analogy of copying a digital file versus a physical coin. Then, illustrate how centralized systems prevent double-spending and their drawbacks. Introduce Satoshi Nakamoto and the whitepaper, then animate a simplified peer-to-peer network demonstrating how Bitcoin's blockchain prevents double-spending through consensus. Conclude with a clear visual explanation of digital scarcity, showing the 21 million coin cap and the halving process over time. Use a friendly, informative tone. Include a 3-question interactive mini-quiz on the concepts of decentralization and digital scarcity.

### Chapter 1.2 — Cryptography Fundamentals for Bitcoin

#### Learning objectives
*   Explain the core properties and functions of cryptographic hash functions, specifically SHA-256, within Bitcoin.
*   Describe the role of public-key cryptography in securing Bitcoin transactions and ownership.
*   Illustrate how digital signatures are created and verified in the Bitcoin network.
*   Understand the relationship between private keys, public keys, and Bitcoin addresses.
*   Identify critical security practices related to private key management.

#### Detailed lesson content
At the heart of Bitcoin's security and integrity lies a sophisticated application of cryptography. Cryptography isn't just about hiding information; in Bitcoin, it's primarily used to prove ownership, ensure data integrity, and create an unalterable history of transactions. Without strong cryptographic primitives, Bitcoin would be vulnerable to manipulation and trust would be impossible to establish in a decentralized environment. We'll focus on two main types of cryptography essential to Bitcoin: cryptographic hash functions and public-key cryptography, which enables digital signatures.

First, let's explore **cryptographic hash functions**. A hash function takes an input (which can be any size, from a single character to an entire book) and produces a fixed-size output, called a hash or digest. In Bitcoin, the primary hash function used is **SHA-256** (Secure Hash Algorithm 256-bit). SHA-256 always produces a 256-bit (32-byte) hash. It has several crucial properties:
1.  **Deterministic:** The same input will *always* produce the same output hash.
2.  **One-way (Preimage Resistance):** It's computationally infeasible to reverse the process; you cannot easily determine the original input from its hash.
3.  **Collision Resistant:** It's extremely difficult to find two different inputs that produce the same hash output. While theoretically possible, for SHA-256, it's practically impossible to find a collision.
4.  **Avalanche Effect:** Even a tiny change in the input (e.g., changing a single character) will result in a completely different, unpredictable hash output.

Let's see an example of SHA-256 in action. If you hash the string "Hello Cohortia!", you get:
`22649622d100c50495f87b212f4553d100808a1599557404494a37f2619c922a`
If you change it to "hello Cohortia!" (lowercase 'h'), you get a completely different hash:
`312c019a164e62551525a74a12398d89e02c6110f0119e70195a6f2b45053075`
Bitcoin uses SHA-256 extensively: to create transaction IDs, to link blocks together in the blockchain (each block header includes the hash of the previous block), and as part of the process to generate Bitcoin addresses. A common mistake is to confuse hashing with encryption. Hashing is a one-way function for data integrity and unique identification, while encryption is a two-way process designed to obscure data for confidentiality, allowing it to be decrypted later.

Next, we have **public-key cryptography**, also known as asymmetric cryptography. This system uses a pair of mathematically linked keys: a **private key** and a **public key**.
*   **Private Key:** This is a secret number, essentially a very large random number. It is the most critical piece of information for a Bitcoin user, as it grants control over the associated Bitcoins. It should *never* be shared. Think of it as the master key to your safe.
*   **Public Key:** This is derived mathematically from the private key. It can be shared freely without compromising the private key. It acts like a unique identifier that anyone can use to verify something signed by the private key, but cannot use to sign anything themselves. Think of it as the address of your safe, visible to everyone.

In Bitcoin, your **Bitcoin address** is derived from your public key (through a series of hashing and encoding steps, including SHA-256 and RIPEMD-160). This address is what you share with others to receive Bitcoin.

These key pairs enable **digital signatures**. When you want to spend Bitcoin, you create a transaction and then "sign" it with your private key. This signature proves that you are the owner of the Bitcoins being spent, without actually revealing your private key to the network. Anyone on the network can then use your public key (which is included in the transaction) to verify that the signature is valid and that the transaction was indeed authorized by the owner of the private key. Bitcoin specifically uses the **Elliptic Curve Digital Signature Algorithm (ECDSA)** for this purpose.

Consider a practical scenario: Alice wants to send 0.5 BTC to Bob.
1.  Alice's wallet software creates a transaction proposal that includes the amount, Bob's Bitcoin address, and references to the unspent transaction outputs (UTXOs) Alice is spending.
2.  Alice's wallet uses her private key to create a digital signature for this specific transaction.
3.  The transaction, along with Alice's public key and the digital signature, is broadcast to the Bitcoin network.
4.  Nodes on the network receive the transaction. They use Alice's public key to verify that the digital signature is valid for that transaction, confirming that Alice indeed authorized the spend. They also check if she has sufficient funds (UTXOs) and if the transaction adheres to all network rules.

**Safety Note:** Your private key is your Bitcoin. Losing it means losing access to your funds forever. Sharing it means giving away control of your funds. Never store your private key on insecure devices, write it down in easily accessible places, or share it with anyone, even seemingly legitimate services. Hardware wallets are recommended for securing private keys.

#### Key concepts
*   **Cryptography:** The practice and study of techniques for secure communication in the presence of adversarial behavior.
*   **Cryptographic Hash Function:** A mathematical algorithm that maps data of arbitrary size to a bit array of a fixed size, designed to be one-way and collision-resistant.
*   **SHA-256 (Secure Hash Algorithm 256-bit):** Bitcoin's primary cryptographic hash function, producing a 256-bit (32-byte) output.
*   **One-Way Function:** A function that is easy to compute in one direction but extremely difficult to reverse.
*   **Collision Resistance:** The property of a hash function where it's computationally infeasible to find two different inputs that produce the same hash output.
*   **Public-Key Cryptography (Asymmetric Cryptography):** A cryptographic system that uses a pair of keys: a public key (shared) and a private key (kept secret).
*   **Private Key:** A secret number that controls access to Bitcoin funds.
*   **Public Key:** A key mathematically derived from a private key, used to verify signatures and derive Bitcoin addresses.
*   **Bitcoin Address:** A unique identifier derived from a public key, used to receive Bitcoin.
*   **Digital Signature:** A cryptographic mechanism used to verify the authenticity and integrity of a digital message or transaction, created with a private key and verifiable with a public key.
*   **ECDSA (Elliptic Curve Digital Signature Algorithm):** The specific algorithm used by Bitcoin for digital signatures.

#### Hands-on activity
**Activity: Exploring SHA-256 Hashing**

**Objective:** To observe the properties of a cryptographic hash function (SHA-256) firsthand.

**Instructions:**
1.  Go to an online SHA-256 calculator (e.g., `https://emn178.github.io/online-tools/sha256.html` or `https://www.xorbin.com/tools/sha256-hash-calculator`).
2.  **Deterministic Property:**
    *   Enter the string "Cohortia Rocks!" into the input field. Copy the resulting SHA-256 hash.
    *   Clear the field, then re-enter "Cohortia Rocks!" exactly as before. Observe that the hash is identical.
3.  **Avalanche Effect:**
    *   Enter "Bitcoin" into the input field and note its hash.
    *   Now, change just one letter to "bitCoin" (lowercase 'b', uppercase 'C'). Observe how drastically different the new hash is, even with a minor change.
    *   Try changing just a single character or adding a space. See the complete change in the hash.
4.  **Fixed Output Size:**
    *   Enter a very short string (e.g., "A"). Note the 64-character hexadecimal hash (representing 256 bits).
    *   Enter a very long paragraph of text. Observe that the hash is still exactly 64 characters long.

**Reflection:** How do these properties (determinism, avalanche effect, fixed output size) contribute to the security and integrity of the Bitcoin blockchain? Why is it important that a hash function is one-way and collision-resistant for a cryptocurrency?

#### Assessment idea
1.  **Question:** Which of the following is NOT a characteristic of a strong cryptographic hash function like SHA-256?
    *   A) It is deterministic (same input always yields same output).
    *   B) It is easy to reverse (you can easily get the input from the hash).
    *   C) It exhibits an avalanche effect (small input change leads to large output change).
    *   D) It is collision-resistant (hard to find two different inputs with the same hash).

    **Correct Answer:** B) It is easy to reverse (you can easily get the input from the hash).
    **Explanation:** Cryptographic hash functions are designed to be one-way, meaning it's computationally infeasible to reverse the process and derive the original input from its hash. This "preimage resistance" is crucial for security, as it prevents malicious actors from easily recreating data (like private keys) from their hashes.

2.  **Question:** Alice wants to send Bitcoin to Bob. Which of the following statements correctly describes the role of her private and public keys in this transaction?
    *   A) Alice uses her public key to sign the transaction, and Bob uses his private key to verify it.
    *   B) Alice uses her private key to sign the transaction, and her public key (included in the transaction) is used by the network to verify the signature.
    *   C) Alice shares her private key with Bob, who then uses it to claim the Bitcoin.
    *   D) Alice's public key is kept secret, while her private key is broadcast to the network for verification.

    **Correct Answer:** B) Alice uses her private key to sign the transaction, and her public key (included in the transaction) is used by the network to verify the signature.
    **Explanation:** The private key is used to create a digital signature, proving ownership and authorization without revealing the private key itself. The corresponding public key is then used by anyone on the network to mathematically verify that the signature is authentic and corresponds to that public key, confirming the transaction's legitimacy. Private keys must always remain secret.

#### AI generation note
Produce a 10-minute animated explainer video. Start with a visual analogy for hashing (e.g., a meat grinder for data). Clearly illustrate the four properties of SHA-256 with distinct visual examples (e.g., input text changing slightly, output hash changing completely). Then, introduce public/private key pairs using a lock-and-key analogy. Show the derivation of a Bitcoin address from a public key. Finally, animate the process of a digital signature: a transaction being signed by a private key, and then verified by the public key. Use clear text overlays for key terms and a professional, safety-conscious tone, emphasizing private key security. Include a short interactive quiz asking learners to match cryptographic concepts to their definitions.

### Chapter 1.3 — The Bitcoin Network and Transaction Lifecycle

#### Learning objectives
*   Describe the architecture and function of Bitcoin's peer-to-peer (P2P) network.
*   Explain the role of different types of nodes within the Bitcoin ecosystem.
*   Outline the step-by-step lifecycle of a Bitcoin transaction from creation to confirmation.
*   Define and explain the concept of Unspent Transaction Outputs (UTXOs) and their importance.
*   Understand the significance of transaction confirmations.

#### Detailed lesson content
Bitcoin operates on a **peer-to-peer (P2P) network**, a fundamental design choice that underpins its decentralization. Unlike traditional client-server models where all communication routes through a central server, a P2P network allows participants (nodes) to communicate directly with each other. When a new node joins the Bitcoin network, it discovers other nodes through a process of initial bootstrapping (e.g., contacting known "seed" nodes) and then maintains connections with a handful of peers. This creates a resilient, distributed network where information (like new transactions and blocks) propagates efficiently without any single point of control or failure. If one node goes offline, the network continues to function seamlessly through its other interconnected participants.

Within this network, various types of **nodes** play different roles. The most critical are **full nodes**. A full node downloads and stores a complete copy of the entire Bitcoin blockchain, independently verifies every transaction and block against Bitcoin's consensus rules, and relays valid transactions and blocks to other nodes. By running a full node, you contribute to the network's security and maintain your own independent verification of the blockchain's history, without needing to trust any third party. Other nodes, like lightweight (SPV) clients, rely on full nodes to provide them with information, trusting that the full nodes are honest. It's a common mistake to think that Bitcoin has a central server; its strength comes from this distributed network of independent full nodes.

Let's trace the **lifecycle of a Bitcoin transaction**:
1.  **Transaction Creation:** When you want to send Bitcoin, your wallet software constructs a transaction. This transaction specifies the amount to be sent, the recipient's Bitcoin address, and the "inputs" (which are previous unspent transaction outputs, or UTXOs, that you own). It also includes a transaction fee to incentivize miners.
2.  **Signing:** Your wallet then uses your private key to create a digital signature for this specific transaction. This signature proves that you are the legitimate owner of the UTXOs being spent.
3.  **Broadcasting:** The signed transaction is then broadcast by your wallet to the Bitcoin P2P network. It typically sends it to a few connected peer nodes.
4.  **Propagation and Validation:** These peer nodes receive the transaction, perform initial validation checks (e.g., correct format, valid signature, sufficient funds, no double-spend attempt already seen), and if valid, they relay it to their own connected peers. This process quickly propagates the transaction across the entire network.
5.  **Mempool:** Valid, but unconfirmed, transactions reside in each node's **mempool** (memory pool, also known as the transaction pool). This is essentially a waiting area for transactions that are ready to be included in a block.
6.  **Mining:** Bitcoin miners select transactions from their mempools, prioritizing those with higher transaction fees, to assemble a new block. They then perform the computationally intensive process of "mining" to find a valid hash for this block.
7.  **Block Confirmation:** Once a miner successfully finds a valid block, they broadcast it to the network. Full nodes verify the block's validity (including all transactions within it) and, if valid, add it to their copy of the blockchain. At this point, the transaction receives its first **confirmation**. The more blocks that are subsequently added on top of the block containing your transaction, the more secure and irreversible your transaction becomes. A commonly accepted standard for high-value transactions is 6 confirmations, meaning six blocks have been mined after the block containing your transaction.

A critical concept here is **Unspent Transaction Outputs (UTXOs)**. Unlike traditional banking where you have an "account balance," Bitcoin doesn't use accounts in that sense. Instead, your wallet tracks a collection of UTXOs that you own. Think of UTXOs like individual bills or coins in your physical wallet. When you receive Bitcoin, you're actually receiving a UTXO of a certain value. When you spend Bitcoin, you "consume" one or more UTXOs as inputs to your new transaction, and any change is returned to you as a new UTXO to a new address controlled by your wallet. For example, if you have a 1 BTC UTXO and want to send 0.5 BTC, your transaction will consume the 1 BTC UTXO as an input, and create two outputs: one for 0.5 BTC to the recipient, and one for 0.499 BTC (0.5 BTC minus transaction fee) back to your own wallet as change. It's a common mistake to think of Bitcoin as debiting an account; it's always about consuming and creating UTXOs.

**Safety Note:** Bitcoin transactions are irreversible once confirmed. There is no "undo" button or central authority to reverse a mistaken or fraudulent payment. Always double-check recipient addresses meticulously before sending Bitcoin. A single incorrect character means your funds could be sent to an unrecoverable address.

#### Key concepts
*   **Peer-to-Peer (P2P) Network:** A decentralized network architecture where participants communicate directly with each other without a central server.
*   **Node:** A computer running Bitcoin software that participates in the network by validating transactions and blocks.
*   **Full Node:** A node that downloads, stores, and independently verifies the entire Bitcoin blockchain and all transactions.
*   **Transaction Lifecycle:** The sequence of events a Bitcoin transaction undergoes from creation to final confirmation on the blockchain.
*   **Mempool (Memory Pool):** A collection of valid, unconfirmed transactions held by each node, waiting to be included in a block by miners.
*   **Unspent Transaction Output (UTXO):** A record of Bitcoin that has been received but not yet spent, serving as the fundamental unit of value in Bitcoin transactions.
*   **Transaction Input:** A reference to a previous UTXO that is being spent in a new transaction.
*   **Transaction Output:** A new UTXO created by a transaction, specifying an amount and a recipient address.
*   **Transaction Fee:** A small amount of Bitcoin included in a transaction, paid to miners as an incentive to include the transaction in a block.
*   **Confirmation:** The event of a transaction being included in a block that has been added to the blockchain. Each subsequent block added on top of it adds another confirmation, increasing the transaction's security.

#### Hands-on activity
**Activity: Tracing a Bitcoin Transaction on a Block Explorer**

**Objective:** To visualize the transaction lifecycle and UTXO model using a real-world Bitcoin block explorer.

**Instructions:**
1.  Go to a popular Bitcoin block explorer (e.g., `https://www.blockchain.com/explorer` or `https://mempool.space/`).
2.  **Find a Transaction:** In the search bar, enter a recent, relatively simple Bitcoin transaction ID. You can find recent transactions on the homepage of the block explorer or by searching for a small, recent transaction on a site like `https://bitinfocharts.com/bitcoin/transactions/`.
    *   *Example TXID (Note: this is a historical example, find a recent one for live data):* `a1075db55d416d358056491944b259fbc8d191e87b2bddf1325087c56a956162`
3.  **Analyze the Transaction Details:**
    *   **Confirmations:** How many confirmations does the transaction have? What does this number tell you about its security?
    *   **Inputs:** Identify the "Inputs" section. You'll see one or more previous UTXOs being spent. Note the addresses and amounts of these inputs.
    *   **Outputs:** Identify the "Outputs" section. You'll see the recipient's address and the amount they received, and potentially a "change" output returning funds to the sender's wallet. Note the addresses and amounts.
    *   **Transaction Fee:** Locate the transaction fee. How was it calculated (inputs - outputs)?
    *   **Block Height:** Which block number was this transaction included in?

**Reflection:** How does observing a real transaction on a block explorer reinforce your understanding of UTXOs, inputs, outputs, and confirmations? What does the irreversibility of these transactions imply for users?

#### Assessment idea
1.  **Question:** What is the primary function of a "full node" in the Bitcoin network?
    *   A) To create new Bitcoin by mining.
    *   B) To store a partial copy of the blockchain and rely on other nodes for verification.
    *   C) To download, store, and independently verify the entire Bitcoin blockchain and all transactions against consensus rules.
    *   D) To act as a central server for processing all Bitcoin transactions.

    **Correct Answer:** C) To download, store, and independently verify the entire Bitcoin blockchain and all transactions against consensus rules.
    **Explanation:** Full nodes are essential for Bitcoin's decentralization and security. They independently validate all transactions and blocks, ensuring that the consensus rules are followed by everyone and providing a robust, trustless verification mechanism for the network.

2.  **Question:** Alice has a UTXO of 2 BTC. She wants to send 0.75 BTC to Bob and pay a transaction fee of 0.0001 BTC. What will be the outputs of this transaction?
    *   A) One output of 0.75 BTC to Bob.
    *   B) One output of 0.75 BTC to Bob, and one output of 1.25 BTC back to Alice.
    *   C) One output of 0.75 BTC to Bob, and one output of 1.2499 BTC back to Alice as change.
    *   D) Two outputs of 0.75 BTC to Bob.

    **Correct Answer:** C) One output of 0.75 BTC to Bob, and one output of 1.2499 BTC back to Alice as change.
    **Explanation:** When a UTXO is spent, it must be consumed entirely. The transaction will have two outputs: one for the intended recipient (Bob, 0.75 BTC) and one for the "change" (the original UTXO value minus the amount sent and the transaction fee) which is returned to an address controlled by the sender's wallet. So, 2 BTC (input) - 0.75 BTC (to Bob) - 0.0001 BTC (fee) = 1.2499 BTC (change to Alice).

#### AI generation note
Create a 15-minute interactive lab walkthrough. Begin with an animated diagram explaining the P2P network, showing nodes connecting and relaying information. Then, transition to a step-by-step visual walkthrough of a Bitcoin transaction's lifecycle, from creation in a wallet (simulated UI) to broadcasting, mempool, mining, and finally, confirmation. Use a split-screen view showing a simplified block explorer on one side and an animated network diagram on the other. Clearly illustrate the UTXO model with an analogy (e.g., spending physical bills). The interactive element should be a guided exercise where learners use a live block explorer to find and analyze a specific transaction, identifying its inputs, outputs, and confirmations. Emphasize safety notes about transaction irreversibility.

---

## Module 2: Cryptography: The Bedrock of Bitcoin

This module will delve into the fundamental cryptographic principles that underpin Bitcoin's security and functionality. We will explore hashing, public-key cryptography, and digital signatures, understanding how these concepts enable secure, verifiable, and immutable transactions without relying on a central authority.

### Chapter 2.1 — Hashing: The Digital Fingerprint

#### Learning objectives
*   Explain the purpose and properties of cryptographic hash functions.
*   Differentiate between various cryptographic hash properties, including determinism, one-wayness, and collision resistance.
*   Describe how SHA-256 is used within the Bitcoin protocol to ensure data integrity and create block headers.
*   Demonstrate the practical application of hashing for verifying data integrity.
*   Identify common misconceptions about cryptographic hashing.

#### Detailed lesson content
Welcome to the bedrock of Bitcoin's security: cryptographic hashing. At its core, a hash function is a mathematical algorithm that takes an input (or 'message') of any size and transforms it into a fixed-size string of bytes, typically a hexadecimal number. Think of it as generating a unique "digital fingerprint" for any piece of data. This fingerprint, known as a hash value or digest, is not just any random output; it possesses several critical properties that make it indispensable for systems like Bitcoin.

Firstly, cryptographic hash functions are **deterministic**. This means that for a given input, the hash function will *always* produce the exact same output. If you hash the phrase "Hello Cohortia!" a million times using the same algorithm, you will get the identical hash value every single time. This property is crucial for verification: if someone claims to have a specific piece of data, you can hash their data and compare it to the known correct hash. If the hashes match, you can be certain the data is identical.

Secondly, these functions are **one-way** or **pre-image resistant**. It's computationally infeasible to reverse the process; that is, given a hash value, it's practically impossible to determine the original input data that produced it. This is not just difficult; for a strong cryptographic hash function, it would take an astronomical amount of computing power and time, far exceeding the capabilities of current technology. This one-way property is vital for security, as it prevents malicious actors from reconstructing sensitive data from its hash.

Thirdly, and perhaps most importantly for Bitcoin, cryptographic hash functions exhibit **collision resistance**. A collision occurs when two different inputs produce the exact same hash output. A strong cryptographic hash function makes it extremely difficult to find such a collision. While theoretically possible (as there are infinitely many possible inputs but a finite number of possible hash outputs), finding a collision for functions like SHA-256 is computationally infeasible. If it were easy to find collisions, an attacker could create a fraudulent transaction that hashes to the same value as a legitimate one, making it impossible to distinguish between them. Bitcoin leverages this property to ensure the integrity of transactions and the immutability of the blockchain.

Bitcoin primarily uses the **SHA-256** (Secure Hash Algorithm 256-bit) function. This means it produces a 256-bit (32-byte) hash value, typically represented as a 64-character hexadecimal string. Every block in the Bitcoin blockchain contains a hash of its previous block, creating an unbreakable chain. Furthermore, transaction data within a block is hashed, and these hashes are then organized into a Merkle tree, with the root hash included in the block header. This intricate use of SHA-256 ensures that even a single bit change in any transaction or block data would result in a completely different hash, immediately signaling tampering.

Let's consider a practical scenario. Imagine you download a software update. The provider might publish the SHA-256 hash of the legitimate update file on their website. After downloading, you can compute the SHA-256 hash of your downloaded file. If your computed hash matches the one published by the provider, you can be confident that your file is authentic and hasn't been tampered with during download. If it doesn't match, you know something is wrong, and you should not run the software. This demonstrates the power of hashing for data integrity verification, a principle directly applied to every piece of data in Bitcoin.

A common mistake beginners make is confusing hashing with encryption. While both involve transforming data, their purposes are distinct. Encryption is a two-way process: you encrypt data to conceal its content, and you can decrypt it back to its original form using a key. Hashing, however, is a one-way process; it's about creating a fixed-size fingerprint for integrity verification, not about concealing the original data in a way that allows for reversal. Another misconception is that a hash function "scrambles" data like an obfuscator. While the output appears random, it's a precise mathematical transformation, and the deterministic nature means it's not truly random in the sense of unpredictability given the input. Always remember that the security of Bitcoin, and many other cryptographic systems, relies heavily on the computational difficulty of reversing hash functions and finding collisions.

#### Key concepts
*   **Hash Function:** A mathematical algorithm that maps data of arbitrary size to a fixed-size value (the hash).
*   **Cryptographic Hash Function:** A hash function with specific properties making it suitable for cryptographic applications, including determinism, one-wayness, and collision resistance.
*   **SHA-256 (Secure Hash Algorithm 256-bit):** A specific cryptographic hash function widely used in Bitcoin to generate 256-bit (32-byte) hash values.
*   **Determinism:** The property that a hash function will always produce the same output for the same input.
*   **One-Way Function (Pre-image Resistance):** The property that it is computationally infeasible to reverse the hash function and find the original input from a given hash output.
*   **Collision Resistance:** The property that it is computationally infeasible to find two different inputs that produce the same hash output.
*   **Digital Fingerprint:** An analogy for a hash value, representing a unique and fixed-size identifier for a piece of data.

#### Hands-on activity
**Objective:** Use Python to demonstrate the deterministic and "avalanche effect" properties of SHA-256.

**Instructions:**
1.  Open your preferred Python environment (e.g., a Jupyter Notebook, a Python IDE, or a simple text editor and terminal).
2.  Import the `hashlib` module, which provides common hashing algorithms.
3.  Write Python code to:
    *   Hash a simple string (e.g., "Cohortia Bitcoin Course") using SHA-256.
    *   Hash the *exact same* string again to show determinism.
    *   Hash a slightly modified string (e.g., "Cohortia Bitcoin course" – changing one letter to lowercase) to demonstrate the avalanche effect (how a small change drastically alters the hash).
    *   Hash a longer piece of text or a file (you can create a small text file with some content).

**Code Template:**
```python
import hashlib

def calculate_sha256(data_string):
    """Calculates the SHA-256 hash of a given string."""
    # Encode the string to bytes, as hash functions operate on bytes
    data_bytes = data_string.encode('utf-8')
    sha256_hash = hashlib.sha256(data_bytes).hexdigest()
    return sha256_hash

def calculate_sha256_file(filepath):
    """Calculates the SHA-256 hash of a given file."""
    hasher = hashlib.sha256()
    with open(filepath, 'rb') as f:
        # Read the file in chunks to handle large files efficiently
        while True:
            chunk = f.read(4096) # Read in 4KB chunks
            if not chunk:
                break
            hasher.update(chunk)
    return hasher.hexdigest()

# --- Demonstrate string hashing ---
print("--- String Hashing Demonstrations ---")

original_string = "The quick brown fox jumps over the lazy dog."
hash1 = calculate_sha256(original_string)
print(f"Original string: '{original_string}'")
print(f"SHA-256 Hash 1: {hash1}\n")

# Demonstrate determinism
hash2 = calculate_sha256(original_string)
print(f"Hashing the *exact same* string again:")
print(f"SHA-256 Hash 2: {hash2}")
print(f"Hashes match (determinism): {hash1 == hash2}\n")

# Demonstrate avalanche effect
modified_string = "The quick brown fox jumps over the lazy cog." # Changed 'dog' to 'cog'
hash3 = calculate_sha256(modified_string)
print(f"Modified string: '{modified_string}'")
print(f"SHA-256 Hash 3: {hash3}")
print(f"Hashes match (avalanche effect check): {hash1 == hash3}")
print(f"Notice how one small change completely alters the hash.\n")

# --- Demonstrate file hashing ---
print("--- File Hashing Demonstration ---")

# Create a dummy file for demonstration
file_content = "This is some sample content for our test file.\n" \
               "It will be hashed using SHA-256.\n" \
               "Even a tiny change will result in a different hash."
with open("test_file.txt", "w") as f:
    f.write(file_content)

file_hash = calculate_sha256_file("test_file.txt")
print(f"Hash of 'test_file.txt': {file_hash}\n")

# Modify the file and re-hash to show change
with open("test_file.txt", "a") as f: # Append a small change
    f.write("A small append.")

modified_file_hash = calculate_sha256_file("test_file.txt")
print(f"Hash of 'test_file.txt' after modification: {modified_file_hash}")
print(f"File hashes match after modification: {file_hash == modified_file_hash}")
print("Remember to delete 'test_file.txt' after this exercise if you don't need it.")
```

#### Assessment idea
1.  **Question:** Which of the following is NOT a core property of a strong cryptographic hash function?
    a) Determinism
    b) Reversibility
    c) Collision Resistance
    d) One-way (Pre-image Resistance)

    **Correct Answer:** b) Reversibility
    **Explanation:** Cryptographic hash functions are designed to be one-way, meaning it's computationally infeasible to reverse the process and derive the original input from the hash output. Reversibility would compromise the security and integrity guarantees provided by hashing.

2.  **Question:** You have two files, `documentA.pdf` and `documentB.pdf`. You calculate their SHA-256 hashes and find that `hash(documentA.pdf)` is `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855` and `hash(documentB.pdf)` is `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855`. What can you confidently conclude about these two files?
    a) They are identical in content.
    b) They are likely different but produced a rare collision.
    c) `documentA.pdf` was created before `documentB.pdf`.
    d) One file is encrypted, and the other is not.

    **Correct Answer:** a) They are identical in content.
    **Explanation:** Due to the deterministic and collision-resistant properties of SHA-256, if two different inputs produced the exact same hash, it would be considered a cryptographic collision, which is computationally infeasible to find. Therefore, if the SHA-256 hashes of two files are identical, you can be virtually certain that the content of the files is also identical.

#### AI generation note
Create a 10-minute interactive video. Start with an animated diagram explaining the concept of a "digital fingerprint" for data. Transition to a live coding session in Python using the `hashlib` module to demonstrate SHA-256. Show the determinism by hashing the same string twice, then visually highlight the "avalanche effect" by changing a single character in the input string and showing the drastically different hash output. Include a split-screen view of the Python code editor and the terminal output. End with a 2-question interactive mini-quiz on hash properties. Ensure captions and high-contrast visuals.

### Chapter 2.2 — Public-Key Cryptography: Securing Transactions

#### Learning objectives
*   Explain the fundamental principles of asymmetric (public-key) cryptography.
*   Differentiate between public and private keys and their respective roles.
*   Describe the process of generating a key pair, including the role of random numbers.
*   Understand how Bitcoin addresses are derived from public keys.
*   Emphasize the critical importance of private key security in Bitcoin.

#### Detailed lesson content
Having understood how hashing provides data integrity, we now move to another cornerstone of Bitcoin's security: public-key cryptography, also known as asymmetric cryptography. Unlike symmetric encryption, which uses a single key for both encryption and decryption, asymmetric cryptography employs a pair of mathematically linked keys: a **public key** and a **private key**. This ingenious design allows for secure communication and, crucially for Bitcoin, verifiable ownership and transaction signing without ever revealing the most sensitive piece of information.

Think of it this way: your public key is like the address of a secure mailbox that anyone can see and use to send you messages (or, in Bitcoin's case, send funds). Anyone can put something into your mailbox, but only you, with your unique **private key**, can open that mailbox and retrieve its contents. The public key can be freely shared, as it only allows others to interact with you in a specific, limited way. The private key, however, must be kept absolutely secret, as it grants ultimate control over your assets.

In Bitcoin, the private key is a large, randomly generated number. The quality of this randomness is paramount. If the random number generation process is flawed or predictable, an attacker could potentially guess your private key. This is why hardware wallets and robust software wallets invest heavily in secure random number generation. From this private key, the corresponding public key is mathematically derived using a one-way function based on **Elliptic Curve Cryptography (ECC)**, specifically the `secp256k1` curve. While the underlying math of ECC is complex, the key takeaway is that it's computationally easy to generate a public key from a private key, but practically impossible to reverse the process – to derive the private key from the public key. This one-way derivation is a critical security feature.

The public key itself is quite long, so for convenience and to add another layer of security, it undergoes several hashing and encoding steps to produce a much shorter, human-readable **Bitcoin address**. This address is what you share with others when you want to receive Bitcoin. The derivation process typically involves:
1.  Starting with the private key (a 256-bit number).
2.  Using ECC to derive the public key from the private key.
3.  Hashing the public key with SHA-256.
4.  Hashing the result with RIPEMD-160.
5.  Adding a version byte to the result.
6.  Performing a double SHA-256 hash of the previous result to generate a checksum.
7.  Appending the checksum to the result.
8.  Encoding the final sequence using Base58Check encoding, which is designed to avoid ambiguous characters (like '0' and 'O', 'I' and 'l') and includes the checksum for error detection.

This multi-step derivation process ensures that Bitcoin addresses are compact, unique, and have built-in error checking. For example, a common Bitcoin address might look like `1A1zP1eW5QGefi2DMPTfTL5SLmv7DivfNa`. Notice how it starts with '1' (for a legacy P2PKH address) and contains a mix of alphanumeric characters.

The absolute most critical aspect of public-key cryptography in Bitcoin is the security of your private key. If someone gains access to your private key, they effectively gain control over all the Bitcoin associated with it. There is no "forgot password" option in Bitcoin. Losing your private key means losing access to your funds forever. Conversely, if your public key or Bitcoin address is compromised, it only means others know where to send you money; it doesn't grant them access to your funds. This distinction is vital for understanding how to secure your Bitcoin holdings. Always remember: "Not your keys, not your coins."

#### Key concepts
*   **Asymmetric Cryptography (Public-Key Cryptography):** A cryptographic system that uses a pair of mathematically linked keys (a public key and a private key) for encryption/decryption or digital signatures.
*   **Private Key:** A secret, randomly generated number that grants control over Bitcoin funds. It is used to create digital signatures.
*   **Public Key:** Derived mathematically from the private key. It can be shared openly and is used to verify digital signatures.
*   **Key Pair:** The combination of a private key and its corresponding public key.
*   **Elliptic Curve Cryptography (ECC):** The specific type of mathematics used in Bitcoin to derive public keys from private keys (`secp256k1` curve).
*   **Bitcoin Address:** A condensed, human-readable representation derived from a public key, used to receive Bitcoin.
*   **Random Number Generation (RNG):** The process of creating unpredictable numbers, crucial for the secure generation of private keys.
*   **Base58Check Encoding:** An encoding scheme used for Bitcoin addresses that omits visually similar characters and includes a checksum for error detection.

#### Hands-on activity
**Objective:** Understand the conceptual flow of private key to public key to Bitcoin address generation. While we won't generate a real, usable key pair in this exercise for security reasons (real keys need robust entropy), we'll use a simplified Python script to illustrate the steps and transformations.

**Instructions:**
1.  Open your Python environment.
2.  We will use a library called `bitcoinlib` for a simplified demonstration of key derivation. If you don't have it, install it: `pip install bitcoinlib`.
3.  Write Python code to:
    *   Generate a random private key (conceptually, `bitcoinlib` handles the randomness).
    *   Derive the corresponding public key from this private key.
    *   Derive a Bitcoin address (P2PKH) from the public key.
    *   Observe the different formats and lengths of the private key, public key, and address.

**Code Template:**
```python
# Ensure you have bitcoinlib installed: pip install bitcoinlib
from bitcoinlib.keys import Key

print("--- Bitcoin Key Pair and Address Generation Demonstration ---")

# Step 1: Generate a Private Key
# In a real scenario, this would be a highly random 256-bit number.
# bitcoinlib handles the secure generation for us.
private_key_object = Key() # Generates a new random private key
private_key_wif = private_key_object.wif # Wallet Import Format (WIF) for private key
private_key_hex = private_key_object.private_hex # Hexadecimal representation

print(f"1. Private Key (WIF format, for sharing securely): {private_key_wif}")
print(f"   Private Key (Hex format): {private_key_hex}")
print(f"   (This is the secret that controls your funds. NEVER share it!)\n")

# Step 2: Derive the Public Key from the Private Key
# The public key is derived mathematically using Elliptic Curve Cryptography (ECC).
public_key_hex = private_key_object.public_hex
public_key_compressed_hex = private_key_object.public_compressed_hex # More common in Bitcoin

print(f"2. Public Key (Uncompressed Hex): {public_key_hex}")
print(f"   Public Key (Compressed Hex): {public_key_compressed_hex}")
print(f"   (Derived from the private key, can be shared publicly.)\n")

# Step 3: Derive the Bitcoin Address from the Public Key
# The address is derived from the public key through hashing and encoding steps.
bitcoin_address = private_key_object.address # Default P2PKH address

print(f"3. Bitcoin Address (P2PKH): {bitcoin_address}")
print(f"   (This is what you share to receive funds.)\n")

print("--- Observation ---")
print("Notice how the private key is a long secret string.")
print("The public key is also long but derived from the private key.")
print("The Bitcoin address is a shorter, human-readable string derived from the public key.")
print("It is computationally infeasible to reverse these steps to get the private key from the public key or address.")

# IMPORTANT SAFETY NOTE:
print("\n!!! SAFETY WARNING !!!")
print("The keys generated here are for demonstration purposes ONLY.")
print("DO NOT use them for real Bitcoin transactions or store real funds with them.")
print("Always use reputable wallet software or hardware for managing real Bitcoin.")
```

#### Assessment idea
1.  **Question:** Explain the primary difference in function between a private key and a public key in Bitcoin. Why is it critically important to keep your private key secret, but safe to share your public key (or Bitcoin address)?

    **Correct Answer:** The private key is a secret, randomly generated number that grants ultimate control over your Bitcoin funds. It is used to create digital signatures, proving ownership and authorizing transactions. The public key, derived mathematically from the private key, is used to verify those digital signatures and, indirectly, to generate your Bitcoin address. It is safe to share your public key or Bitcoin address because they only allow others to send you funds or verify your transactions; they do not grant access to spend your funds. Conversely, if your private key is compromised, anyone with it can spend your Bitcoin, as there is no other authentication mechanism.

2.  **Question:** A friend asks you to explain how their Bitcoin address is generated. Which of the following sequences best describes the general process from a private key to a Bitcoin address?
    a) Private Key -> SHA-256 Hash -> Public Key -> Base58Check Encode -> Address
    b) Private Key -> Elliptic Curve Math -> Public Key -> Hashing (SHA-256 + RIPEMD-160) -> Base58Check Encode -> Address
    c) Private Key -> Encryption -> Public Key -> SHA-256 Hash -> Address
    d) Private Key -> Public Key -> Digital Signature -> Address

    **Correct Answer:** b) Private Key -> Elliptic Curve Math -> Public Key -> Hashing (SHA-256 + RIPEMD-160) -> Base58Check Encode -> Address
    **Explanation:** The process starts with a private key, from which the public key is derived using Elliptic Curve Cryptography (ECC). The public key then undergoes several hashing steps (SHA-256 followed by RIPEMD-160) and is finally encoded using Base58Check to produce the human-readable Bitcoin address. Options a, c, and d contain incorrect steps or sequences, such as direct hashing of the private key to public key, encryption, or using digital signatures directly for address generation.

#### AI generation note
Create a 12-minute animated video with voiceover. Start with a visual analogy of a secure mailbox (public key) and its unique key (private key). Animate the flow from a randomly generated private key (represented as a long number) through the `secp256k1` elliptic curve derivation to the public key. Then, show the subsequent hashing (SHA-256, RIPEMD-160) and Base58Check encoding steps to produce a Bitcoin address, highlighting each transformation. Include visual cues emphasizing the one-way nature of the derivation. Conclude with a clear warning about private key security. The video should use diagrams and text overlays to explain each step.

### Chapter 2.3 — Digital Signatures: Verifying Authenticity

#### Learning objectives
*   Define what a digital signature is and its purpose in the context of Bitcoin transactions.
*   Explain the process of creating a digital signature using a private key and verifying it using a public key.
*   Describe the three core benefits of digital signatures: authenticity, integrity, and non-repudiation.
*   Relate the concept of digital signatures directly to how Bitcoin transactions are authorized and validated.
*   Identify common pitfalls or misunderstandings regarding digital signatures.

#### Detailed lesson content
We've explored hashing for data integrity and public-key cryptography for secure key pairs. Now, let's bring these concepts together to understand **digital signatures**, the mechanism that allows you to prove ownership of your Bitcoin and authorize transactions without ever revealing your private key. A digital signature in Bitcoin is essentially a cryptographic proof that a transaction was initiated by the owner of the private key associated with the Bitcoin being spent, and that the transaction data has not been altered since it was signed.

The process of creating a digital signature in Bitcoin involves your private key and the transaction data itself. When you want to send Bitcoin, your wallet software first constructs a transaction, which includes details like the amount, the recipient's address, and references to previous unspent transaction outputs (UTXOs) you are spending. This entire transaction data is then hashed (typically using SHA-256) to create a unique **transaction hash**. This hash acts as a concise summary of the transaction. Your private key is then used in conjunction with this transaction hash and a specific algorithm called the **Elliptic Curve Digital Signature Algorithm (ECDSA)** to produce the digital signature. It's crucial to understand that the private key is *never* transmitted or revealed during this process; it only performs a mathematical operation locally within your wallet to generate the signature.

Once the transaction is signed, it (along with your public key and the signature) is broadcast to the Bitcoin network. Other nodes on the network can then **verify** the signature. They take the transaction data, hash it themselves to get the same transaction hash, and then use your publicly available public key (which is included in the transaction or can be derived from the address) to mathematically check if the signature is valid for that specific transaction hash. If the verification succeeds, it confirms two critical things:
1.  **Authenticity:** The transaction was indeed authorized by the owner of the private key associated with the funds. Only someone with the private key could have produced a valid signature for that public key.
2.  **Integrity:** The transaction data has not been tampered with since it was signed. If even a single character in the transaction details (e.g., the amount or recipient) were changed, the computed transaction hash would be different, and the original signature would no longer be valid when checked against the new hash.

A third, equally important benefit of digital signatures is **non-repudiation**. Once you have digitally signed a transaction, you cannot credibly deny having signed it later. Because only your private key could have produced that specific valid signature for that specific transaction, you are cryptographically bound to it. This prevents senders from later claiming they didn't authorize a payment, which is essential for a trustless system like Bitcoin.

Let's consider a practical example. When Alice wants to send 1 BTC to Bob, her wallet creates a transaction. This transaction includes the input (where the 1 BTC comes from, e.g., a previous transaction output to Alice's address), the output (1 BTC to Bob's address, plus any change back to Alice's address), and a small transaction fee. Alice's wallet then uses her private key to sign the hash of this entire transaction. The resulting digital signature, along with Alice's public key, is attached to the transaction. When a Bitcoin node receives this transaction, it uses Alice's public key to verify that the signature is valid for the transaction hash. If it is, the node accepts the transaction as legitimate and propagates it across the network, eventually leading to its inclusion in a block.

A common mistake is to think that the digital signature *encrypts* the transaction. This is incorrect. The transaction data itself is typically broadcast in plain text; the signature only *proves* its authenticity and integrity, not its secrecy. Another misconception is that the signature *is* the private key. It's not. The signature is a mathematical proof generated *using* the private key, but the private key itself remains secret. Understanding this distinction is crucial for grasping how Bitcoin transactions achieve their security and trustlessness. The power of digital signatures lies in their ability to provide verifiable proof of authorization and data integrity without requiring a central authority or revealing sensitive information.

#### Key concepts
*   **Digital Signature:** A mathematical scheme for verifying the authenticity and integrity of digital messages or documents.
*   **ECDSA (Elliptic Curve Digital Signature Algorithm):** The specific algorithm used in Bitcoin to create and verify digital signatures.
*   **Signing:** The process of using a private key to generate a digital signature for a piece of data (e.g., a transaction hash).
*   **Verification:** The process of using a public key to confirm that a digital signature is valid for a given piece of data.
*   **Authenticity:** Assurance that the sender of a message is who they claim to be.
*   **Integrity:** Assurance that a message has not been altered since it was signed.
*   **Non-repudiation:** The inability of a sender to deny having sent a message after digitally signing it.
*   **Transaction Hash:** A unique digest of all the transaction data, which is signed by the private key.

#### Hands-on activity
**Objective:** Conceptually walk through the Bitcoin transaction signing and verification process using a simplified command-line demonstration. We'll simulate the steps involved to understand the roles of private keys, public keys, and transaction hashes.

**Instructions:**
1.  We'll use a conceptual `bitcoin-cli` like interface to illustrate. This won't be real Bitcoin, but it will show the commands and outputs.
2.  Imagine you have a private key and want to sign a message (representing a transaction hash).
3.  We'll use `btclib` (a Python Bitcoin library) to simulate the signing and verification process. If you don't have it, install it: `pip install btclib`.

**Code Template (Conceptual Simulation):**
```python
# Ensure you have btclib installed: pip install btclib
from btclib.key import PrivateKey
from btclib.ec import secp256k1
from btclib.signature import sign, verify

print("--- Bitcoin Digital Signature Demonstration (Conceptual) ---")

# Step 1: Define a Private Key (for demonstration purposes)
# In a real scenario, this would be securely generated and stored.
# NEVER hardcode or expose real private keys like this!
# We'll use a deterministic seed for reproducibility in this demo.
seed = b'my_super_secret_seed_for_demo_only'
prv = PrivateKey.from_wif(PrivateKey.from_seed(seed).wif) # Generate a private key from a seed
# prv = PrivateKey.from_wif('KwDiBquRjHq9Rj2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q99j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9q9j2k9

---


## Module 3: The Bitcoin Blockchain and Mining

**Module Goal:** To provide a comprehensive understanding of how the Bitcoin blockchain operates, from transaction aggregation into blocks to the intricate process of mining, block validation, and the consensus mechanism that secures the network.

---

### Chapter 3.1 — The Bitcoin Blockchain: A Distributed Ledger

#### Learning objectives
*   Explain the fundamental concept of a blockchain and its core characteristics.
*   Differentiate between centralized and decentralized ledger systems, highlighting Bitcoin's innovation.
*   Describe how individual blocks are structured and cryptographically linked to form a chain.
*   Understand the principles of immutability and transparency inherent in the Bitcoin blockchain.

#### Detailed lesson content
Welcome to the heart of Bitcoin: the blockchain! At its core, a blockchain is a revolutionary type of ledger – a record book – that is distributed across a vast network of computers rather than being stored in one central location. Traditionally, ledgers, whether financial or otherwise, have been maintained by a single entity, like a bank or a government. This centralized model means that one authority has control over the data, can potentially alter it, and represents a single point of failure. If that central authority is compromised, the entire system is at risk. Bitcoin, however, introduced a paradigm shift with its decentralized approach.

Imagine a public ledger where every page (a "block") is filled with transactions, sealed with a unique cryptographic stamp, and then linked to the previous page's stamp. This creates an unbroken, chronological chain of records. In Bitcoin, this ledger isn't kept by a bank; instead, identical copies are maintained by thousands of independent computers around the world, known as "nodes." This distribution is what we mean by decentralization. No single entity owns or controls the Bitcoin blockchain. Instead, all participants collectively maintain and validate it, making it incredibly resilient to censorship and attack. If one node goes offline, thousands of others continue to operate, ensuring the network's continuous availability.

The magic of the blockchain lies in its cryptographic linking. Each "block" in the chain contains a set of validated transactions, a timestamp, and crucially, a cryptographic hash of the *previous* block. A cryptographic hash is like a unique digital fingerprint for a piece of data. Even a tiny change to the previous block's data would result in a completely different hash, breaking the link in the chain. This is the foundation of the blockchain's immutability. Once a block is added to the chain, it's virtually impossible to alter it without invalidating all subsequent blocks, which would require an astronomical amount of computational power – far more than any single entity currently possesses. This makes the historical record of Bitcoin transactions permanent and tamper-proof.

Furthermore, the Bitcoin blockchain is transparent. While individual identities are protected by pseudonymous addresses, every single transaction ever made on the network is publicly visible and verifiable by anyone. You can see the amount, the sending address, and the receiving address for every Bitcoin transfer. This transparency, combined with immutability, builds trust in a trustless system. You don't need to trust a central authority; you can verify everything yourself. It's a common mistake to confuse "blockchain" with "Bitcoin." While Bitcoin was the first and most prominent application of blockchain technology, blockchain is a broader concept. Many other cryptocurrencies and technologies use blockchain, but they might have different rules, consensus mechanisms, or levels of decentralization. It's also important to remember that not all blockchains are public like Bitcoin's; some are private or permissioned, limiting who can participate. Understanding Bitcoin's specific implementation of these core principles is key to becoming a Certified Bitcoin Professional.

#### Key concepts
*   **Blockchain:** A decentralized, distributed, and immutable digital ledger that records transactions across many computers.
*   **Distributed Ledger Technology (DLT):** A decentralized database managed by multiple participants, where each participant maintains an identical copy of the ledger.
*   **Decentralization:** The absence of a central authority or single point of control, distributing power and data across a network.
*   **Immutability:** The property that once data is recorded on the blockchain, it cannot be altered or deleted.
*   **Transparency:** The characteristic that all transactions on a public blockchain are visible and verifiable by anyone.
*   **Block:** A data structure in the blockchain that contains a list of validated transactions, a timestamp, and a cryptographic hash of the previous block.
*   **Block Header:** The metadata section of a block, containing information like the previous block's hash, timestamp, Merkle root, and nonce.
*   **Block Body:** The section of a block that contains the list of transactions.

#### Hands-on activity
**Simulating Block Hashing and Chaining**

In this activity, you'll use a simple Python script to understand how cryptographic hashing links blocks together. You'll create two "blocks" and see how changing even a single character in the previous block's data fundamentally changes its hash, thus breaking the chain.

**Instructions:**
1.  Open a Python interpreter or a Python IDE (like VS Code with a Python extension).
2.  Paste the following starter code:

    ```python
    import hashlib
    import json
    import time

    def calculate_hash(block_data):
        # Ensure data is consistently formatted and encoded
        block_string = json.dumps(block_data, sort_keys=True).encode('utf-8')
        return hashlib.sha256(block_string).hexdigest()

    # --- Block 1 Data ---
    block1_data = {
        "index": 0,
        "timestamp": time.time(),
        ""transactions": [
            {"sender": "Alice", "recipient": "Bob", "amount": 5.0},
            {"sender": "Charlie", "recipient": "David", "amount": 10.0}
        ],
        "previous_hash": "0" * 64, # Genesis block has no previous hash
        "nonce": 0 # Simplified, not actual PoW nonce
    }

    block1_hash = calculate_hash(block1_data)
    print(f"Block 1 Hash: {block1_hash}\n")

    # --- Block 2 Data ---
    block2_data = {
        "index": 1,
        "timestamp": time.time(),
        "transactions": [
            {"sender": "Eve", "recipient": "Frank", "amount": 2.5},
            {"sender": "Grace", "recipient": "Heidi", "amount": 7.0}
        ],
        "previous_hash": block1_hash, # This links Block 2 to Block 1
        "nonce": 0 # Simplified
    }

    block2_hash = calculate_hash(block2_data)
    print(f"Block 2 Hash: {block2_hash}\n")

    # --- Experiment: Tamper with Block 1 ---
    print("--- Attempting to tamper with Block 1 ---")
    tampered_block1_data = {
        "index": 0,
        "timestamp": block1_data["timestamp"], # Keep timestamp same for simplicity
        "transactions": [
            {"sender": "Alice", "recipient": "Bob", "amount": 500.0}, # Changed amount!
            {"sender": "Charlie", "recipient": "David", "amount": 10.0}
        ],
        "previous_hash": "0" * 64,
        "nonce": 0
    }

    tampered_block1_hash = calculate_hash(tampered_block1_data)
    print(f"Tampered Block 1 Hash: {tampered_block1_hash}")

    # Now, try to link Block 2 to the tampered Block 1
    # The 'previous_hash' in Block 2 must match the *original* Block 1 hash
    # If we try to validate Block 2 against the tampered Block 1, it will fail
    print(f"Does Block 2's previous_hash still match the tampered Block 1's hash? {block2_data['previous_hash'] == tampered_block1_hash}")
    ```
3.  Run the script. Observe the hashes generated for `block1_hash` and `block2_hash`.
4.  Notice the `tampered_block1_hash`. Compare it to the original `block1_hash`. They should be completely different, even though only one transaction amount changed.
5.  Observe the final print statement. It should confirm that Block 2's `previous_hash` no longer matches the `tampered_block1_hash`, demonstrating how tampering breaks the chain.

#### Assessment idea
1.  **Question:** A key characteristic of the Bitcoin blockchain is its immutability. Explain what immutability means in the context of the blockchain and how it is technically enforced.
    *   **Correct Answer & Explanation:** Immutability means that once data (specifically, transactions within a block) has been recorded on the blockchain, it cannot be altered or deleted. This is technically enforced through cryptographic hashing. Each block contains a hash of its own data and, crucially, the hash of the *previous* block. If an attacker were to try and change a transaction in an old block, the hash of that block would change. This would then invalidate the "previous_hash" stored in the *next* block, breaking the cryptographic link in the chain. To successfully tamper, the attacker would have to re-calculate the hashes for all subsequent blocks, which would require an immense amount of computational power (more than 50% of the network's total hashing power) to outpace the honest network, making it practically impossible.

2.  **Question:** Describe the primary difference between a centralized ledger system (like a traditional bank's database) and Bitcoin's decentralized ledger. What are the main advantages of Bitcoin's decentralized approach?
    *   **Correct Answer & Explanation:** A centralized ledger is maintained and controlled by a single entity or authority (e.g., a bank), which has the power to add, modify, or delete entries. This creates a single point of failure and requires users to trust that entity. Bitcoin's decentralized ledger, the blockchain, is maintained by a peer-to-peer network of thousands of independent computers (nodes), with no single point of control.
        The main advantages of Bitcoin's decentralized approach include:
        *   **Censorship Resistance:** No single entity can prevent or reverse transactions.
        *   **Increased Security & Resilience:** There's no single point of failure; if some nodes go offline, the network continues to function. It's much harder to attack or corrupt a distributed network than a central server.
        *   **Transparency & Auditability:** All transactions are publicly visible and verifiable by anyone, reducing the need for trust in intermediaries.
        *   **Reduced Trust Requirements:** Users don't need to trust a central authority; they can verify the ledger's integrity themselves.

#### AI generation note
Create a 12-minute animated video. Begin with a visual comparison of a traditional bank ledger (centralized, single point of control) versus a distributed ledger (many identical copies, no single owner). Then, animate the process of blocks being created, filled with transactions, and cryptographically linked using hashes. Clearly show how a hash of Block A becomes the `previous_hash` in Block B. Illustrate what happens when an attempt is made to alter an old block, showing the broken hash chain. Use a clear, encouraging tone. Include a 2-question interactive quiz at the 8-minute mark about the properties of immutability and decentralization. Ensure captions and alt text for all diagrams.

---

### Chapter 3.2 — Transactions and Blocks: Packaging Value

#### Learning objectives
*   Describe the lifecycle of a Bitcoin transaction from creation to inclusion in a block.
*   Explain how individual transactions are grouped and organized within a block.
*   Identify the key components of a Bitcoin transaction, including inputs, outputs, and signatures.
*   Understand the function and importance of the mempool and transaction fees.

#### Detailed lesson content
Now that we understand the fundamental structure of the blockchain, let's dive into the individual units of value transfer: transactions, and how they are packaged into blocks. A Bitcoin transaction is essentially a record of value being moved from one or more Bitcoin addresses to one or more other Bitcoin addresses. It's not like sending a file; you're not actually "sending" bitcoins themselves, but rather transferring ownership of a record on the ledger. Every transaction has inputs and outputs. Inputs refer to the unspent transaction outputs (UTXOs) from previous transactions that are being used as funds. Outputs specify where the bitcoins are going, including the recipient's address and the amount, plus any change returned to the sender. Each input must be "signed" by the private key corresponding to the public key (address) that controls those funds, proving ownership without revealing the private key itself. This cryptographic signature is crucial for security and preventing unauthorized spending.

When you initiate a Bitcoin transaction using your wallet, it's first broadcast to the Bitcoin network. It doesn't instantly appear on the blockchain. Instead, it enters a waiting area known as the "mempool" (memory pool). The mempool is a collection of all unconfirmed transactions that have been broadcast but not yet included in a block by a miner. Think of it as a waiting room for transactions. From the mempool, miners select transactions to include in the next block they are trying to "mine." This selection isn't random; miners prioritize transactions based on the transaction fee offered by the sender. A higher fee generally means a higher priority for inclusion, especially when the network is busy and the mempool is full. This is a common mistake for beginners: assuming transactions are free or instant. Transaction fees are vital for incentivizing miners and securing the network.

Once a miner has gathered a sufficient number of transactions from the mempool (up to the block size limit, which is effectively 4MB in Bitcoin, though it's more nuanced with SegWit), they organize them into a block. To efficiently manage and verify all these transactions, a special data structure called a Merkle Tree (or hash tree) is used. All the transactions in a block are hashed, then pairs of hashes are hashed together, and so on, until a single "Merkle Root" hash is produced. This Merkle Root is included in the block header. The beauty of the Merkle Tree is that it allows for quick and efficient verification of whether a specific transaction is included in a block, without needing to download and process every single transaction in that block. It also makes the block header much smaller and easier to manage.

The block size limit is another critical aspect. Bitcoin's original design had a 1MB block size limit, which was a subject of intense debate and led to forks like Bitcoin Cash. While the effective block size has increased with SegWit (which optimizes how transaction data is stored), it still acts as a constraint. This limit, combined with the 10-minute average block time, dictates the network's transaction throughput. Understanding the interplay between transaction fees, the mempool, block size, and the Merkle tree is essential for comprehending how Bitcoin transactions are processed and confirmed on the blockchain.

#### Key concepts
*   **Transaction:** A signed message broadcast to the Bitcoin network, representing a transfer of value from inputs to outputs.
*   **Input:** The unspent transaction output (UTXO) from a previous transaction that is being spent in the current transaction.
*   **Output:** Specifies the recipient's address and the amount of Bitcoin being sent, along with any change returned to the sender.
*   **Signature:** A cryptographic proof generated by the sender's private key, authorizing the spending of funds.
*   **Mempool:** A collection of all unconfirmed transactions waiting to be included in a block by miners.
*   **Transaction Fee:** An optional fee paid by the sender to incentivize miners to include their transaction in a block.
*   **Block Size:** The maximum amount of data (in bytes or "weight units") that can be included in a single Bitcoin block.
*   **Merkle Tree:** A tree-like data structure used to efficiently summarize all transactions in a block into a single hash (the Merkle Root).
*   **Merkle Root:** The single hash at the top of a Merkle tree, included in the block header, representing all transactions in the block.

#### Hands-on activity
**Decoding a Raw Bitcoin Transaction**

In this activity, you'll examine a real Bitcoin transaction using a block explorer to understand its components.

**Instructions:**
1.  Go to a Bitcoin block explorer website, such as [blockchain.com/explorer](https://blockchain.com/explorer) or [mempool.space](https://mempool.space/).
2.  Find a recent, confirmed transaction. You can usually find these on the homepage or by looking at recent blocks. Click on a transaction ID (TxID) to view its details.
3.  Observe the following sections on the transaction details page:
    *   **Transaction ID (TxID):** The unique identifier for this transaction.
    *   **Status:** Confirmed or unconfirmed. If confirmed, how many confirmations?
    *   **Amount:** The total value transferred.
    *   **Fee:** The transaction fee paid to the miner.
    *   **Size/Weight:** The size of the transaction in bytes or weight units.
    *   **Inputs:** A list of Bitcoin addresses (or UTXOs) that provided the funds. Note that each input often links to a previous transaction.
    *   **Outputs:** A list of Bitcoin addresses that received funds from this transaction, including the recipient(s) and any change returned to the sender.
4.  **Reflection:**
    *   Can you identify which output is likely the recipient and which is the change address (if applicable)? (Hint: The change address often sends funds back to an address controlled by the sender's wallet).
    *   How does the total value of inputs compare to the total value of outputs + fee? (They should be equal, demonstrating the conservation of value).
    *   What does the number of confirmations tell you about the security of this transaction?

#### Assessment idea
1.  **Question:** Explain the role of the "mempool" in the Bitcoin network and how transaction fees influence a transaction's journey from the mempool to being included in a block.
    *   **Correct Answer & Explanation:** The mempool (memory pool) is a temporary storage area for all unconfirmed Bitcoin transactions that have been broadcast to the network but not yet included in a block. When a user sends a transaction, it first goes into the mempool of various Bitcoin nodes. Miners then select transactions from their mempool to include in the new block they are trying to mine. Transaction fees play a crucial role in this selection process. Miners are economically incentivized to maximize their earnings, so they typically prioritize transactions that offer higher fees per byte (or per "weight unit"). During periods of high network congestion, the mempool can become very large, and transactions with low fees might wait for a long time or even be dropped if they don't get picked up.

2.  **Question:** Describe the purpose of a Merkle Tree within a Bitcoin block. How does the Merkle Root contribute to the efficiency and security of the blockchain?
    *   **Correct Answer & Explanation:** A Merkle Tree (or hash tree) is a data structure used in Bitcoin blocks to efficiently summarize and verify all the transactions contained within that block. All individual transactions in a block are hashed, then pairs of these hashes are hashed together, and this process continues upwards until a single, final hash, known as the Merkle Root, is produced.
        The Merkle Root is included in the block header. It contributes to efficiency by allowing light clients (SPV clients) to verify the inclusion of a transaction in a block without downloading the entire block's transaction data. They only need the Merkle Root, the transaction hash, and a small number of intermediate hashes (a Merkle path) to prove its inclusion. It enhances security because if even a single transaction within the block is altered, the Merkle Root will change, making the tampering immediately detectable by anyone verifying the block header.

#### AI generation note
Create a 10-minute animated video with integrated browser/terminal demos. Start by illustrating a transaction's components (inputs, outputs, signatures). Then, visually show a transaction being broadcast and entering the mempool, with other transactions queuing. Explain how miners prioritize transactions based on fees. Use a step-by-step animation to demonstrate the construction of a Merkle Tree from individual transaction hashes up to the Merkle Root. Integrate a live block explorer screenshot to highlight TxIDs, inputs, outputs, and fees. Include a drag-and-drop interactive exercise where learners arrange the steps of a transaction's lifecycle.

---

### Chapter 3.3 — Bitcoin Mining: Securing the Network

#### Learning objectives
*   Explain the fundamental purpose and process of Bitcoin mining.
*   Describe the Proof-of-Work (PoW) consensus mechanism and its role in network security.
*   Identify key metrics in mining, such as hash rate and mining difficulty, and their dynamic relationship.
*   Understand the economic incentives for miners, including block rewards and transaction fees.

#### Detailed lesson content
Bitcoin mining is often misunderstood. It's not about "creating" new bitcoins out of thin air in the way a central bank prints money. Instead, Bitcoin mining is the process by which new transactions are verified, added to the blockchain, and new bitcoins are introduced into circulation. Miners are essentially the auditors and record-keepers of the Bitcoin network, performing crucial work to secure the entire system. Their primary job is to gather pending transactions from the mempool, bundle them into a new block, and then solve a complex computational puzzle.

This puzzle is the essence of Bitcoin's Proof-of-Work (PoW) consensus mechanism. Miners compete to be the first to find a specific number, called a "nonce," which, when combined with the block's data (including the Merkle Root of all transactions, the previous block's hash, and a timestamp), produces a cryptographic hash that meets a certain target requirement. This target is typically a hash that starts with a certain number of leading zeros. Finding this nonce is a brute-force guessing game; there's no shortcut. Miners repeatedly modify the nonce and re-hash the block data millions, billions, or even trillions of times per second until they stumble upon a valid hash. The first miner to find such a nonce gets to broadcast their newly validated block to the network. This process requires significant computational power and energy, which is precisely why it's called "Proof-of-Work." The work is difficult to perform but easy for anyone to verify, ensuring that only legitimate blocks are added to the chain.

The computational power dedicated to mining is measured in "hash rate" (e.g., terahashes per second, TH/s). The collective hash rate of the entire Bitcoin network is immense, making it the most powerful computing network in the world. To ensure that new blocks are found consistently, on average, every 10 minutes, Bitcoin has an automatic adjustment mechanism called "mining difficulty." If more miners join the network and the hash rate increases, blocks would be found faster than 10 minutes. The difficulty algorithm automatically increases the target requirement (makes it harder to find a valid hash) every 2016 blocks (roughly every two weeks) to bring the average block time back to 10 minutes. Conversely, if hash rate decreases, difficulty adjusts downwards. This dynamic adjustment is vital for the network's stability and predictable issuance schedule.

Miners are incentivized to perform this work through two primary rewards: the "block reward" and transaction fees. The block reward is a fixed amount of newly minted bitcoins that the miner includes in the block they successfully mine. This reward halves approximately every four years (every 210,000 blocks) in an event known as the "halving," which gradually reduces the supply of new bitcoins until the maximum supply of 21 million is reached. Currently, the block reward is 3.125 BTC. In addition to the block reward, miners also collect all the transaction fees from the transactions they include in their block. These economic incentives ensure that there's always a strong motivation for miners to secure the network. A common mistake is to think mining is a guaranteed profit. It's a highly competitive industry with significant hardware and electricity costs. Safety note: Solo mining is typically not profitable for individuals due to the high difficulty; most miners join "mining pools" to combine their hash power and share rewards.

#### Key concepts
*   **Mining:** The process of verifying transactions, adding them to the blockchain, and creating new bitcoins through Proof-of-Work.
*   **Proof-of-Work (PoW):** A consensus algorithm that requires participants to expend computational effort to solve a cryptographic puzzle, making it costly to create new blocks and secure the network.
*   **Nonce:** A "number used once" that miners repeatedly adjust in the block header until the block's hash meets the target difficulty.
*   **Target Hash:** The specific cryptographic requirement (e.g., a hash starting with a certain number of zeros) that a block's hash must meet to be considered valid.
*   **Hash Rate:** The total computational power (number of hashes per second) that the Bitcoin network or a specific miner is dedicating to mining.
*   **Mining Difficulty:** A measure of how difficult it is to find a hash below the target. It adjusts approximately every two weeks to maintain a 10-minute average block time.
*   **Block Reward:** The amount of newly minted bitcoins awarded to the miner who successfully mines a new block.
*   **Halving:** An event that occurs approximately every four years, reducing the block reward by half.
*   **Mining Pool:** A cooperative group of miners who combine their computational resources to increase their chances of finding a block and then share the rewards proportionally.

#### Hands-on activity
**Simulating Simplified Proof-of-Work**

This activity demonstrates the core concept of Proof-of-Work: finding a "nonce" that makes a hash meet a specific target.

**Instructions:**
1.  Open a Python interpreter or IDE.
2.  Paste the following starter code:

    ```python
    import hashlib
    import time

    def find_proof_of_work(block_header, difficulty_prefix):
        nonce = 0
        start_time = time.time()
        print(f"Searching for a hash starting with '{difficulty_prefix}'...")

        while True:
            # Combine the block header data with the current nonce
            test_string = f"{block_header}{nonce}".encode('utf-8')
            current_hash = hashlib.sha256(test_string).hexdigest()

            # Check if the hash meets the difficulty requirement
            if current_hash.startswith(difficulty_prefix):
                end_time = time.time()
                print(f"Found nonce: {nonce}")
                print(f"Resulting hash: {current_hash}")
                print(f"Time taken: {end_time - start_time:.2f} seconds")
                return nonce, current_hash
            nonce += 1
            # Optional: print progress every N attempts
            # if nonce % 100000 == 0:
            #     print(f"Tried {nonce} nonces...")

    # --- Simulate a simplified block header ---
    # In real Bitcoin, this would be complex data like previous_hash, Merkle root, timestamp etc.
    simplified_block_data = "CohortiaCBPBlock3.3"

    # --- Set a simple difficulty target ---
    # A real Bitcoin difficulty target would be much harder (many more leading zeros)
    difficulty_target = "0000" # Find a hash that starts with four zeros

    # Run the simulation
    found_nonce, final_hash = find_proof_of_work(simplified_block_data, difficulty_target)

    print("\n--- Verification ---")
    # Verify the found nonce and hash
    verified_string = f"{simplified_block_data}{found_nonce}".encode('utf-8')
    verified_hash = hashlib.sha256(verified_string).hexdigest()
    print(f"Verifying hash with found nonce: {verified_hash}")
    print(f"Does it meet the target? {verified_hash.startswith(difficulty_target)}")
    ```
3.  Run the script. Observe how the program iterates through nonces until it finds one that produces a hash starting with the specified number of zeros.
4.  **Experiment:** Change the `difficulty_target` to "00000" or "0" and rerun the script. Notice how the time taken to find a valid nonce increases or decreases significantly, demonstrating the concept of mining difficulty. (Be careful with too many zeros, as it might take a very long time!)

#### Assessment idea
1.  **Question:** Explain what Proof-of-Work (PoW) is in the context of Bitcoin mining. Why is PoW considered essential for the security and integrity of the Bitcoin network?
    *   **Correct Answer & Explanation:** Proof-of-Work (PoW) is the consensus mechanism used by Bitcoin where miners compete to solve a computationally intensive cryptographic puzzle. This puzzle involves finding a "nonce" that, when combined with other block data, produces a hash below a specific target difficulty. The process requires significant computational effort (work) but is easy for any node to verify.
        PoW is essential for Bitcoin's security and integrity because:
        *   **Prevents Double-Spending:** It makes it extremely difficult and costly for a malicious actor to alter past transactions or create conflicting transaction histories, as they would need to redo the PoW for the altered block and all subsequent blocks faster than the rest of the honest network.
        *   **Secures the Network:** The immense computational power (hash rate) dedicated to PoW makes the Bitcoin network incredibly secure against attacks. A 51% attack (where an entity controls more than half the network's hash rate) is theoretically possible but practically very expensive and difficult to sustain.
        *   **Fair Issuance:** It ensures that new bitcoins are introduced into circulation in a predictable and controlled manner, proportional to the work done, without a central authority.

2.  **Question:** Describe the relationship between the network's "hash rate" and "mining difficulty." How does Bitcoin's protocol adjust difficulty, and why is this adjustment mechanism crucial for the network's stability?
    *   **Correct Answer & Explanation:** The network's "hash rate" refers to the total computational power (number of hashes per second) being expended by all miners on the Bitcoin network. "Mining difficulty" is a measure of how hard it is to find a valid block hash.
        Bitcoin's protocol adjusts difficulty approximately every 2016 blocks (roughly every two weeks). This adjustment is based on the time it took to mine the previous 2016 blocks. If those blocks were found faster than the target average of 10 minutes per block (meaning the hash rate increased), the difficulty will increase, making it harder to find the next blocks. Conversely, if blocks were found slower than 10 minutes (meaning the hash rate decreased), the difficulty will decrease.
        This adjustment mechanism is crucial for the network's stability because it ensures that new blocks are consistently found, on average, every 10 minutes, regardless of how many miners are joining or leaving the network. This predictable block time maintains a stable issuance schedule for new bitcoins and ensures a consistent rate of transaction confirmation, which is fundamental to Bitcoin's operation and economic model.

#### AI generation note
Create a 15-minute animated video with conceptual diagrams and a live terminal demo. Start by explaining mining as a "digital lottery" or "puzzle-solving competition." Visually demonstrate the Proof-of-Work process: gathering transactions, constructing a block, repeatedly trying different nonces, and finding a valid hash that meets the target. Show the Python simulation from the hands-on activity in a split-screen terminal view. Illustrate the relationship between hash rate and difficulty with dynamic graphs, showing how difficulty adjusts over time. Explain the block reward and halving events. Include a reflection prompt on the energy consumption implications of PoW.

---

### Chapter 3.4 — Consensus and Forks: Maintaining Agreement

#### Learning objectives
*   Explain how the Bitcoin network achieves consensus among its distributed nodes.
*   Describe the "longest chain rule" (Nakamoto Consensus) and its role in resolving conflicting block histories.
*   Differentiate between soft forks and hard forks, providing examples of each.
*   Understand the implications of network forks and the importance of confirmations for transaction finality.

#### Detailed lesson content
In a decentralized system like Bitcoin, where thousands of independent nodes are constantly processing transactions and validating blocks, maintaining agreement – or "consensus" – on the single, true state of the ledger is paramount. Without a central authority, how does the network decide which block is valid if two miners simultaneously find a valid block? This is where Bitcoin's consensus mechanism, often referred to as Nakamoto Consensus, comes into play. It's built on a simple yet powerful rule: the "longest chain rule."

The longest chain rule dictates that honest nodes will always consider the chain with the most cumulative Proof-of-Work (i.e., the most blocks, or the chain that required the most computational effort to produce) as the valid chain. When two miners find valid blocks at roughly the same time, the network temporarily experiences a "fork." Some nodes might receive Block A first, while others receive Block B first. They will then build on the block they received. However, as soon as one of these chains extends further by finding the *next* block, the network quickly converges. All nodes will then abandon the shorter chain (which contains an "orphan block") and switch to building on the longer chain, even if it means discarding their own recent work. This mechanism ensures that the network eventually agrees on a single, consistent history, making temporary forks a normal and harmless part of Bitcoin's operation.

This concept of "confirmations" directly relates to the longest chain rule. When your transaction is included in a block, it has one confirmation. As subsequent blocks are added on top of that block, your transaction gains more confirmations. Each additional confirmation makes it exponentially harder to reverse that transaction because an attacker would have to re-mine not just your block, but all the blocks built on top of it, plus outpace the honest network. For significant transactions, merchants often wait for 3 to 6 confirmations (which can take 30-60 minutes) to ensure a very high degree of finality and security, minimizing the risk of a double-spend attack. A common mistake is thinking 1 confirmation is enough for high-value transactions; while technically on the blockchain, it's still relatively easy to reverse compared to 6 confirmations.

Beyond these temporary, natural forks, there are also more significant forks that represent changes to Bitcoin's protocol rules. These are broadly categorized as "soft forks" and "hard forks." A **soft fork** is a backward-compatible change to the protocol. This means that older, non-upgraded nodes will still consider blocks produced by upgraded nodes as valid, even if they don't understand the new rules. For example, Segregated Witness (SegWit) was a soft fork that changed how transaction data was structured, effectively increasing block capacity without requiring all nodes to upgrade immediately. Older nodes would simply see the new blocks as valid, even if they couldn't fully process the new data format.

A **hard fork**, on the other hand, is a non-backward-compatible change. If a hard fork occurs, nodes that do not upgrade to the new rules will see blocks produced by upgraded nodes as invalid, and vice-versa. This inevitably leads to a permanent split in the blockchain, creating two separate cryptocurrencies with their own distinct histories. A famous example is the split between Bitcoin (BTC) and Bitcoin Cash (BCH) in 2017. Nodes that adopted the new, larger block size rules formed the Bitcoin Cash chain, while nodes that maintained the original rules continued on the Bitcoin chain. Understanding the implications of these forks is critical for anyone involved in Bitcoin, as they can affect network security, asset value, and the future direction of the protocol. It's a safety note to always be aware of potential forks and their impact on your holdings if you're a user.

#### Key concepts
*   **Consensus:** The process by which all participants in a decentralized network agree on a single, valid state of the ledger.
*   **Nakamoto Consensus:** Bitcoin's specific consensus mechanism, based on Proof-of-Work and the longest chain rule.
*   **Longest Chain Rule:** The rule that honest nodes will always consider the blockchain with the most cumulative Proof-of-Work (the longest chain) as the valid chain.
*   **Orphan Block:** A valid block that is not part of the longest chain, typically because another block was found and extended faster.
*   **Confirmations:** The number of blocks that have been added to the blockchain *after* the block containing a specific transaction, indicating its finality and security.
*   **Soft Fork:** A backward-compatible change to the blockchain protocol. Old nodes will still accept new blocks, even if they don't understand all the new rules.
*   **Hard Fork:** A non-backward-compatible change to the blockchain protocol. Old nodes will reject new blocks, leading to a permanent split in the blockchain if not universally adopted.
*   **Network Split:** The event where a blockchain diverges into two or more separate chains, typically due to a hard fork.
*   **Node:** A computer running the Bitcoin software that participates in the network by validating transactions and blocks.

#### Hands-on activity
**Researching a Historical Bitcoin Fork**

In this activity, you will research a significant historical Bitcoin fork and summarize its causes, implementation, and impact.

**Instructions:**
1.  Choose one of the following historical Bitcoin forks to research:
    *   **Segregated Witness (SegWit) activation (2017):** A soft fork.
    *   **Bitcoin Cash (BCH) hard fork (2017):** A hard fork.
    *   **Bitcoin SV (BSV) hard fork (2018):** A hard fork from Bitcoin Cash.
2.  Use reputable sources (e.g., Bitcoin Wiki, academic papers, well-regarded crypto news archives, official project documentation) to gather information.
3.  Write a brief summary (200-300 words) addressing the following points:
    *   What was the primary technical problem or debate that led to this fork?
    *   Was it a soft fork or a hard fork? Explain what that means for this specific event.
    *   How was consensus achieved (or not achieved) among the network participants (miners, nodes, users)?
    *   What was the immediate and long-term impact of this fork on the Bitcoin ecosystem (e.g., price, new coins, network split, adoption)?
4.  **Self-reflection:** How does this real-world example illustrate the challenges and strengths of decentralized governance in Bitcoin?

#### Assessment idea
1.  **Question:** Explain the "longest chain rule" (Nakamoto Consensus) in Bitcoin. How does this rule help the network maintain a single, agreed-upon history, especially when multiple miners find valid blocks simultaneously?
    *   **Correct Answer & Explanation:** The "longest chain rule," also known as Nakamoto Consensus, is Bitcoin's primary mechanism for achieving agreement among its decentralized nodes. It states that the valid blockchain is always the one that has the most cumulative Proof-of-Work (i.e., the most blocks or the chain that required the most computational effort to produce).
        When multiple miners find valid blocks at nearly the same time, the network temporarily experiences a "fork." Some nodes might extend one chain, while others extend another. However, as soon as one of these chains finds the *next* block, it becomes the "longest" or "heaviest" chain. All honest nodes on the network will then recognize this longer chain as the canonical one, abandon any shorter chains (and their "orphan blocks"), and switch to building on the longest chain. This rapid convergence ensures that the network quickly resolves temporary discrepancies and maintains a single, consistent, and immutable history of transactions.

2.  **Question:** Differentiate between a "soft fork" and a "hard fork" in the context of Bitcoin protocol upgrades. Provide an example for each and explain the key difference in their compatibility.
    *   **Correct Answer & Explanation:**
        *   **Soft Fork:** A soft fork is a backward-compatible change to the Bitcoin protocol. This means that nodes that have *not* upgraded to the new rules will still consider blocks produced by upgraded nodes as valid, even if they don't fully understand or enforce the new rules. The new rules are a *subset* of the old rules, meaning upgraded blocks are still valid under the old rules. An example is **Segregated Witness (SegWit)**, which was activated in 2017. Old nodes saw SegWit transactions as anyone-can-spend transactions but still accepted the blocks.
        *   **Hard Fork:** A hard fork is a non-backward-compatible change to the Bitcoin protocol. This means that nodes that have *not* upgraded to the new rules will consider blocks produced by upgraded nodes as *invalid*, and vice-versa. If not universally adopted, a hard fork leads to a permanent split of the blockchain into two separate, incompatible chains, each with its own set of rules and cryptocurrency. An example is the **Bitcoin Cash (BCH) hard fork** in 2017. Nodes that chose to implement the larger block size rule diverged from the original Bitcoin chain, creating a new cryptocurrency.
        The key difference in compatibility is that soft forks maintain compatibility with older software, while hard forks break compatibility, potentially leading to a permanent network split.

#### AI generation note
Create a 12-minute animated video with historical examples and clear diagrams. Begin by illustrating the concept of consensus in a decentralized system. Visually demonstrate the "longest chain rule" with diverging chains and then converging as one chain extends further, showing orphan blocks. Explain confirmations using a visual timeline. Then, dedicate segments to explaining soft forks and hard forks. Use a split-screen or overlay to show how old nodes react differently to new blocks in each scenario. Use SegWit as an example for a soft fork and Bitcoin Cash for a hard fork, illustrating the chain split. Include a short case study discussion prompt about the impact of a significant fork.

---

## Module 4: Bitcoin Transactions and Network Dynamics

### Module Goal:
To provide a comprehensive understanding of how Bitcoin transactions are constructed, validated, broadcast, and confirmed, and to explore the underlying network infrastructure that supports these operations.

---

### Chapter 4.1 — Bitcoin Transactions Explained

#### Learning objectives
*   Deconstruct the fundamental components of a Bitcoin transaction, including inputs, outputs, and transaction fees.
*   Explain the concept of Unspent Transaction Outputs (UTXOs) and their role in Bitcoin's accounting model.
*   Describe how digital signatures are used to authorize the spending of Bitcoin.
*   Identify common mistakes related to transaction construction, such as neglecting change outputs.

#### Detailed lesson content
Welcome to the fascinating world of Bitcoin transactions! At its core, Bitcoin isn't about accounts or balances in the traditional sense; it's about a chain of transactions, where each transaction spends the outputs of previous transactions. This model is often referred to as the Unspent Transaction Output (UTXO) model, and understanding it is absolutely critical to grasping how Bitcoin works. Imagine your physical wallet doesn't hold a single balance, but rather a collection of specific bills and coins you've received. When you want to pay for something, you don't just deduct from a balance; you select specific bills (UTXOs) to cover the cost. If the bills you select exceed the cost, you receive change back as a new bill. Bitcoin operates similarly.

Every Bitcoin transaction is essentially a record that states: "I, the owner of these specific unspent transaction outputs (UTXOs), authorize their transfer to these new recipients." A UTXO is simply an amount of Bitcoin that has been sent to you and has not yet been spent. When you receive Bitcoin, what you're actually receiving is one or more UTXOs. Your wallet software aggregates these UTXOs to show you a total balance, but internally, it's managing individual "coins" or "bills." When you want to send Bitcoin, your wallet selects existing UTXOs you own as *inputs* to your new transaction. These inputs are entirely consumed. For example, if you have a 0.5 BTC UTXO and a 0.3 BTC UTXO, and you want to send 0.6 BTC, your wallet might choose both UTXOs as inputs, totaling 0.8 BTC.

A transaction also specifies one or more *outputs*. These outputs are new UTXOs that are created by the transaction. In our example, if you're sending 0.6 BTC, one output would be 0.6 BTC to the recipient's address. What about the remaining 0.2 BTC from your 0.8 BTC inputs? This is where the concept of a *change output* comes in. Unless you want to donate the excess to miners, you'll typically have a second output sending the remaining 0.2 BTC back to an address controlled by your own wallet. This change output becomes a new UTXO that your wallet can spend in future transactions. It's a common mistake for beginners to forget about change outputs or misunderstand why they appear. If you don't explicitly create a change output, the leftover amount is implicitly claimed by the miner as an additional transaction fee.

Beyond inputs and outputs, every transaction also includes a *transaction fee*. This fee is the difference between the sum of the inputs and the sum of the outputs (including change). Miners prioritize transactions with higher fees per byte, making transaction fees a crucial incentive for them to include your transaction in a block. The fee is not a fixed amount; it fluctuates based on network congestion and the size of your transaction in bytes. A larger transaction (more inputs, more outputs) will generally require a higher fee to be processed quickly.

Finally, to authorize the spending of UTXOs, a transaction must include *digital signatures*. Bitcoin uses the Elliptic Curve Digital Signature Algorithm (ECDSA). When you create a transaction, your wallet uses your private key to generate a unique digital signature for each input you're spending. This signature proves that you own the private key associated with the public key (or public key hash) that controls the UTXO. Without the correct digital signature, a transaction is invalid and will be rejected by the network. This cryptographic proof of ownership is what prevents unauthorized spending and ensures the security of your funds. It's a core component of Bitcoin's security model, ensuring that only the legitimate owner can spend their Bitcoin.

Here's a simplified, conceptual representation of a Bitcoin transaction structure:

```json
{
  "transaction_id": "...", // Unique identifier for this transaction
  "version": 1,
  "locktime": 0, // Time until transaction can be added to a block (usually 0)
  "inputs": [
    {
      "previous_transaction_id": "...", // ID of the transaction that created the UTXO being spent
      "output_index": 0,                // Index of the specific output in that transaction
      "script_signature": "...",        // Digital signature and public key to unlock the UTXO
      "sequence": 0xFFFFFFFF
    }
    // ... potentially more inputs
  ],
  "outputs": [
    {
      "value": 60000000, // Amount in satoshis (0.6 BTC)
      "script_pubkey": "..." // Script defining who can spend this output (recipient's address)
    },
    {
      "value": 20000000, // Amount in satoshis (0.2 BTC - change)
      "script_pubkey": "..." // Script defining who can spend this output (your change address)
    }
    // ... potentially more outputs
  ]
}
```
This structure, though simplified, highlights the key elements: inputs referencing prior UTXOs, cryptographic proof of ownership via `script_signature`, and outputs defining new UTXOs with `script_pubkey` locking them to new owners. Understanding this flow is fundamental to becoming a Certified Bitcoin Professional.

#### Key concepts
*   **Unspent Transaction Output (UTXO):** An amount of Bitcoin that has been received in a transaction and has not yet been spent. The fundamental unit of Bitcoin's accounting model.
*   **Transaction Input:** A reference to a previously created UTXO that is being spent in the current transaction. Each input must be cryptographically signed by the owner of the UTXO.
*   **Transaction Output:** A new UTXO created by a transaction, specifying an amount of Bitcoin and the conditions (script) under which it can be spent.
*   **Change Output:** An output in a transaction that returns any leftover Bitcoin from the inputs (after paying the recipient and the transaction fee) back to an address controlled by the sender.
*   **Transaction Fee:** The difference between the sum of inputs and the sum of outputs (including change). This fee is paid to the miner who includes the transaction in a block.
*   **Digital Signature (ECDSA):** A cryptographic mechanism used to prove ownership and authorize the spending of UTXOs without revealing the private key.

#### Hands-on activity
**Activity: Deconstructing a Real Bitcoin Transaction**

1.  **Objective:** Understand the components of a real Bitcoin transaction using a block explorer.
2.  **Instructions:**
    *   Open a reliable Bitcoin block explorer (e.g., `blockchain.com/explorer`, `mempool.space`).
    *   Search for a recent, relatively simple transaction. A good starting point might be a transaction with 1-2 inputs and 2 outputs (one for the recipient, one for change). You can often find these by looking at smaller transactions in recent blocks.
    *   Identify the "Transaction ID" (TxID).
    *   Locate the "Inputs" section. For each input, identify:
        *   The TxID of the *previous* transaction that created this UTXO.
        *   The output index (vOut) of that previous transaction.
        *   The amount of BTC being spent from that UTXO.
    *   Locate the "Outputs" section. For each output, identify:
        *   The recipient address (or script type).
        *   The amount of BTC being sent to that address.
        *   Try to identify which output is the main recipient and which is the change output (often the change output goes back to an address similar to the input's origin, or a new address controlled by the sender's wallet).
    *   Calculate the total sum of inputs and the total sum of outputs. The difference should be the transaction fee. Verify this against the "Fee" displayed by the explorer.
    *   Reflect on how the UTXO model differs from a traditional bank account balance.

#### Assessment idea
1.  **Question:** You have two UTXOs in your wallet: one for 0.7 BTC and another for 0.4 BTC. You want to send 0.9 BTC to a friend, and the network fee is 0.0001 BTC. What is the minimum amount of change you would receive, and how many inputs and outputs would your transaction likely have?
    *   **Correct Answer & Explanation:**
        *   To send 0.9 BTC, you would need to use both UTXOs as inputs, totaling 0.7 BTC + 0.4 BTC = 1.1 BTC.
        *   The total amount to be spent is 0.9 BTC (to friend) + 0.0001 BTC (fee) = 0.9001 BTC.
        *   The change received would be 1.1 BTC (total inputs) - 0.9001 BTC (total spent) = 0.1999 BTC.
        *   The transaction would likely have **2 inputs** (your 0.7 BTC and 0.4 BTC UTXOs) and **2 outputs** (0.9 BTC to your friend, and 0.1999 BTC as change back to your wallet).
2.  **Question:** Explain the primary purpose of a digital signature within a Bitcoin transaction.
    *   **Correct Answer & Explanation:** The primary purpose of a digital signature in a Bitcoin transaction is to cryptographically prove that the sender (the owner of the UTXO being spent) has authorized the transaction. It uses the sender's private key to sign the transaction data, and this signature can be verified by anyone using the corresponding public key. This mechanism prevents unauthorized spending of funds and ensures the integrity and authenticity of the transaction, without revealing the private key itself.

#### AI generation note
Create a 12-minute animated explainer video. Start with an analogy of physical cash (bills/coins as UTXOs) versus a bank account balance. Visually demonstrate the UTXO model: show two "coins" (UTXOs) entering a transaction as inputs, being consumed, and then two new "coins" (outputs) emerging (one for the recipient, one for change). Overlay the simplified JSON transaction structure, highlighting inputs, outputs, values, and the `script_signature` and `script_pubkey` fields. Emphasize the calculation of the transaction fee. Include a common mistake visual: a transaction without a change output, showing the leftover amount going to the miner. End with a 2-question interactive quiz on UTXO calculation and digital signature purpose.

---

### Chapter 4.2 — Transaction Lifecycle and Confirmation

#### Learning objectives
*   Trace the journey of a Bitcoin transaction from its creation to its final confirmation on the blockchain.
*   Explain the role of the mempool in the transaction processing pipeline.
*   Describe how miners select transactions for inclusion in a block and the factors influencing this selection.
*   Understand the significance of transaction confirmations and the concept of "finality."

#### Detailed lesson content
Once you've constructed a valid Bitcoin transaction, complete with inputs, outputs, and digital signatures, the next step is to get it processed by the network. This involves a crucial lifecycle that moves your transaction from your wallet to the global, immutable ledger. The journey begins with *broadcasting*. When your wallet sends a transaction, it doesn't send it directly to a miner or a central server. Instead, it broadcasts the transaction to a few connected Bitcoin nodes. These nodes, upon validating the transaction's syntax and ensuring its inputs are unspent, then relay it to their own connected peers, and so on, until the transaction has propagated across a significant portion of the Bitcoin network. This peer-to-peer gossip mechanism ensures decentralization and resilience.

After being broadcast, your transaction enters the *mempool* (memory pool) of various Bitcoin nodes. The mempool is essentially a waiting area, a collection of all unconfirmed transactions that nodes are aware of. Each node maintains its own mempool, which might differ slightly from others due to network latency or specific node configurations. Before adding a transaction to its mempool, a node performs rigorous validation checks. These checks include verifying the digital signatures, ensuring that the inputs are indeed unspent (no double-spending), checking that the transaction format is correct, and confirming that the total input value is greater than or equal to the total output value (to account for fees). If a transaction fails any of these checks, it's rejected and not added to the mempool.

From the mempool, transactions await selection by miners. Miners are the participants responsible for creating new blocks and adding them to the blockchain. When a miner finds a valid proof-of-work solution for a new block, they then construct that block by selecting transactions from their mempool. The primary incentive for miners to include transactions is the *transaction fees*. Miners typically prioritize transactions with higher fees per byte, as this maximizes their revenue. This creates a dynamic marketplace for block space: during periods of high network congestion, transaction fees can spike as users compete to get their transactions included quickly. Conversely, when the network is less busy, lower fees might suffice. Miners also consider the age of a transaction in their mempool and sometimes include older, lower-fee transactions to clear their mempool.

Once a miner successfully creates a block containing your transaction and broadcasts it to the network, other nodes validate this new block. If the block is valid (correct proof-of-work, all included transactions are valid, etc.), they accept it and add it to their copy of the blockchain. At this point, your transaction has received its *first confirmation*. This means it's now part of the immutable history of Bitcoin. However, one confirmation is generally not considered final. Due to the probabilistic nature of Bitcoin's proof-of-work, there's a very small chance that the block containing your transaction could be "orphaned" if another miner simultaneously finds a valid block and that block eventually becomes part of the longest chain.

This is why the concept of *multiple confirmations* is crucial. Each subsequent block added on top of the block containing your transaction adds another layer of security and makes it exponentially harder to reverse the transaction. For smaller transactions, 1-3 confirmations might be sufficient. For larger value transfers, exchanges and services often require 6 confirmations (which typically takes about an hour, given Bitcoin's average 10-minute block time). Six confirmations are widely considered sufficient for "finality" because the probability of a 51% attack successfully reversing a transaction after six blocks is astronomically low. Understanding this progressive finality is key to safely interacting with the Bitcoin network.

Consider a practical scenario: you're sending Bitcoin to an online merchant. Immediately after you broadcast the transaction, it enters the mempool. The merchant might show "pending" or "unconfirmed." Once a miner includes it in a block and that block is added to the blockchain, the merchant might update to "1 confirmation." They might then wait for 3 or 6 confirmations before releasing goods or services, depending on the value of the transaction and their risk tolerance. This entire process, from broadcast to multiple confirmations, defines the transaction lifecycle and ensures the security and integrity of Bitcoin transfers.

#### Key concepts
*   **Broadcast:** The process of sending a newly created transaction to a few connected Bitcoin nodes, which then relay it across the network.
*   **Mempool (Memory Pool):** A collection of unconfirmed transactions that a Bitcoin node has received and validated, waiting to be included in a block by a miner.
*   **Transaction Validation:** The process by which Bitcoin nodes check a transaction for correctness, including signature verification, double-spend prevention, and adherence to protocol rules.
*   **Block Inclusion:** The act of a miner selecting valid transactions from their mempool and incorporating them into a new block they are attempting to mine.
*   **Confirmation:** When a transaction is included in a valid block that is added to the blockchain. Each subsequent block built on top of that block adds another confirmation.
*   **Finality:** The point at which a transaction is considered irreversible due to a sufficient number of confirmations, making the cost of reversing it economically prohibitive.

#### Hands-on activity
**Activity: Monitor a Live Bitcoin Transaction**

1.  **Objective:** Observe a transaction's journey through the mempool and onto the blockchain.
2.  **Instructions:**
    *   If you have a small amount of Bitcoin (e.g., from a testnet faucet or a very small amount on mainnet), create and send a tiny transaction from one of your wallets to another (or to a friend's address). Note the transaction ID (TxID).
    *   Immediately after sending, open a block explorer that shows mempool data (e.g., `mempool.space`).
    *   Paste your TxID into the search bar.
    *   Observe its status: it should initially show "Unconfirmed" or "In Mempool."
    *   Note the estimated fee rate (sats/vB) and compare it to the current average fee rates displayed on the explorer.
    *   Keep refreshing the page periodically.
    *   Once the transaction is included in a block, the status will change to "Confirmed," and it will show the block number.
    *   Continue to monitor as more blocks are added, increasing the number of confirmations.
    *   **Safety Note:** Only use very small amounts for this activity, especially if using mainnet, to avoid any potential loss if you make a mistake.

#### Assessment idea
1.  **Question:** A user broadcasts a Bitcoin transaction with a very low transaction fee during a period of high network congestion. What is the most likely outcome for this transaction, and why?
    *   **Correct Answer & Explanation:** The most likely outcome is that the transaction will remain in the mempool for an extended period, possibly hours or even days, without being confirmed. This is because miners prioritize transactions with higher fees per byte to maximize their revenue. During high congestion, there's a large backlog of transactions, and miners will select those offering the best incentives, leaving lower-fee transactions to wait until network activity subsides or until they are eventually dropped from mempools (though some nodes might hold them indefinitely).
2.  **Question:** Why do exchanges and merchants typically wait for multiple (e.g., 6) confirmations before considering a Bitcoin transaction final, rather than just one?
    *   **Correct Answer & Explanation:** While one confirmation means a transaction has been included in a block, there's a very small, probabilistic chance that the block could be "orphaned" if another valid block is found almost simultaneously and that alternative chain becomes the longest. Each subsequent confirmation (new block built on top of the block containing the transaction) exponentially reduces the probability of a successful double-spend attack or chain reorganization. Waiting for 6 confirmations is a widely accepted industry standard because it makes the cost and difficulty of reversing the transaction economically prohibitive, effectively rendering the transaction irreversible and providing a high degree of "finality."

#### AI generation note
Produce an 11-minute animated video explaining the transaction lifecycle. Start with a visual of a transaction leaving a wallet, then entering a "mempool" holding area. Show various transactions (some with high fees, some low) vying for attention. Illustrate miners picking high-fee transactions to form a block. Animate the block being added to the blockchain, showing the transaction getting 1 confirmation. Then, show subsequent blocks stacking on top, increasing the confirmation count. Include a visual of a block explorer interface showing an unconfirmed vs. confirmed transaction. Use clear, concise language with a professional yet encouraging tone. End with a reflection prompt: "How does the mempool act as a 'market' for block space?"

---

### Chapter 4.3 — Transaction Types and Scripting Basics

#### Learning objectives
*   Differentiate between common Bitcoin transaction types, including Pay-to-Public-Key-Hash (P2PKH) and Pay-to-Script-Hash (P2SH).
*   Understand the fundamental purpose and limitations of Bitcoin Script.
*   Identify basic Bitcoin Script opcodes and their functions in defining spending conditions.
*   Explain how Bitcoin Script enables more complex spending conditions beyond simple "send to address."

#### Detailed lesson content
Bitcoin transactions are not all identical; they come in various types, each designed to achieve specific spending conditions. While the core UTXO model remains constant, the way an output is "locked" to a recipient and "unlocked" by a sender can vary. The most common and fundamental transaction type is **Pay-to-Public-Key-Hash (P2PKH)**. This is what happens when you send Bitcoin to a standard Bitcoin address that starts with a '1' (legacy address) or 'bc1q' (SegWit native address, though P2PKH specifically refers to the older format). In a P2PKH output, the Bitcoin is locked to a hash of the recipient's public key. To spend this output, the sender must provide their public key and a valid digital signature that matches the public key hash and proves ownership. It's like locking a safe with a specific key and then needing to present that key (public key) and a signed note (signature) to open it.

A more advanced and flexible transaction type is **Pay-to-Script-Hash (P2SH)**. These addresses typically start with a '3'. P2SH allows for more complex spending conditions than just a single signature. Instead of locking funds to a public key hash, it locks them to the *hash of a script*. The actual, full script (known as the "redeem script") is not revealed on the blockchain until the funds are spent. This offers several advantages: it allows for multi-signature wallets (e.g., 2-of-3 signatures required), time-locked transactions, or other custom conditions, all while presenting a simple, fixed-length address to the sender. When spending a P2SH output, the spender must provide the original redeem script *and* the necessary data (like signatures) to satisfy the conditions specified in that script. The network then hashes the provided redeem script and checks if it matches the hash in the output. If it does, the script is executed to verify the spending conditions.

Bitcoin Script is the simple, stack-based programming language embedded within Bitcoin transactions that defines these spending conditions. It's not a Turing-complete language like Python or Java; it's intentionally limited to prevent infinite loops and ensure predictable execution. Its primary purpose is to verify that the person attempting to spend a UTXO has met the conditions set by the person who created that UTXO. Every input in a transaction contains a `scriptSig` (script signature) and every output contains a `scriptPubKey` (script public key). When a transaction is validated, the `scriptSig` from the input is combined with the `scriptPubKey` from the UTXO being spent, and the resulting script is executed. If it evaluates to "TRUE," the spending is valid.

Let's look at some basic Bitcoin Script **OP_CODES** (operations):
*   `OP_DUP`: Duplicates the top item on the stack.
*   `OP_HASH160`: Hashes the top item on the stack twice (SHA256 then RIPEMD160). This is used to create the public key hash in P2PKH.
*   `OP_EQUALVERIFY`: Checks if the top two items on the stack are equal. If not, the script fails.
*   `OP_CHECKSIG`: Verifies a digital signature against a public key and the transaction data. This is the core of proving ownership.

A typical P2PKH `scriptPubKey` looks something like this:
`OP_DUP OP_HASH160 <Public Key Hash> OP_EQUALVERIFY OP_CHECKSIG`

To spend this, the `scriptSig` would provide:
`<Signature> <Public Key>`

When combined and executed:
1.  `<Signature>` is pushed onto the stack.
2.  `<Public Key>` is pushed onto the stack.
3.  `OP_DUP` duplicates the public key. Stack: `<Signature> <Public Key> <Public Key>`
4.  `OP_HASH160` hashes the top public key. Stack: `<Signature> <Public Key> <Public Key Hash>`
5.  `<Public Key Hash>` (from the original `scriptPubKey`) is pushed onto the stack. Stack: `<Signature> <Public Key> <Public Key Hash> <Public Key Hash from scriptPubKey>`
6.  `OP_EQUALVERIFY` checks if the two public key hashes match. If they do, they are removed. Stack: `<Signature> <Public Key>`
7.  `OP_CHECKSIG` verifies the signature against the public key and the transaction data. If valid, it pushes `TRUE` onto the stack.

If the final result on the stack is `TRUE`, the transaction is valid. This simple example shows how Bitcoin Script provides the logic for verifying spending conditions. While you won't typically write Bitcoin Script directly as a user, understanding its existence and basic operations is crucial for comprehending the underlying security and flexibility of Bitcoin transactions. It's a common mistake to think Bitcoin Script is a general-purpose programming language; its constrained nature is a feature, not a bug, designed for security and predictability in a decentralized environment.

#### Key concepts
*   **Pay-to-Public-Key-Hash (P2PKH):** The most common Bitcoin transaction type where funds are locked to the hash of a recipient's public key. Spending requires providing the public key and a valid digital signature.
*   **Pay-to-Script-Hash (P2SH):** A transaction type that allows for more complex spending conditions by locking funds to the hash of a script. The full script is only revealed when the funds are spent.
*   **Bitcoin Script:** A simple, stack-based, non-Turing complete programming language used to define the spending conditions for Bitcoin transaction outputs.
*   **OP_CODE:** An operation code in Bitcoin Script that performs a specific function, such as hashing, duplicating, or checking signatures.
*   **`scriptPubKey`:** The script in a transaction output that defines the conditions that must be met to spend that output.
*   **`scriptSig`:** The script in a transaction input that provides the data (e.g., signatures, public keys) required to satisfy the `scriptPubKey` of the UTXO being spent.

#### Hands-on activity
**Activity: Deciphering a P2PKH Script**

1.  **Objective:** Understand the execution flow of a simple P2PKH script.
2.  **Instructions:**
    *   Consider the following P2PKH `scriptPubKey`: `OP_DUP OP_HASH160 <Public Key Hash> OP_EQUALVERIFY OP_CHECKSIG`
    *   And the corresponding `scriptSig`: `<Signature> <Public Key>`
    *   **Task:** Step through the execution of this combined script, tracking the stack state at each `OP_CODE`.
    *   **Example Start:**
        *   Initial stack: Empty
        *   Push `<Signature>`: Stack: `[Signature]`
        *   Push `<Public Key>`: Stack: `[Signature, Public Key]`
        *   `OP_DUP`: Stack: `[Signature, Public Key, Public Key]`
        *   `OP_HASH160`: Stack: `[Signature, Public Key, Public Key Hash (from Public Key)]`
        *   ... (continue for `OP_EQUALVERIFY` and `OP_CHECKSIG`)
    *   What must be the final result on the stack for the script to be valid?
    *   **Template for your answer:**
        ```
        Script Execution Trace:
        1. Initial stack: []
        2. Push <Signature>: [Signature]
        3. Push <Public Key>: [Signature, Public Key]
        4. OP_DUP: [Signature, Public Key, Public Key]
        5. OP_HASH160: [Signature, Public Key, HASH160(Public Key)]
        6. Push <Public Key Hash from scriptPubKey>: [Signature, Public Key, HASH160(Public Key), Public Key Hash from scriptPubKey]
        7. OP_EQUALVERIFY: (Checks if HASH160(Public Key) == Public Key Hash from scriptPubKey. If true, pops both.) Stack: [Signature, Public Key]
        8. OP_CHECKSIG: (Checks if Signature is valid for Public Key and transaction. If true, pops both and pushes TRUE.) Stack: [TRUE]

        Final result for valid script: [TRUE]
        ```

#### Assessment idea
1.  **Question:** What is the primary advantage of using a P2SH (Pay-to-Script-Hash) address over a traditional P2PKH (Pay-to-Public-Key-Hash) address for a multi-signature wallet?
    *   **Correct Answer & Explanation:** The primary advantage of P2SH for multi-signature wallets is that it allows the sender to send Bitcoin to a simple, fixed-length address (starting with '3') without needing to know or embed the complex multi-signature script details into their transaction. The complexity of the multi-signature conditions (e.g., 2-of-3 signatures) is encapsulated within the redeem script, which is only revealed when the funds are actually spent. This simplifies the sending process, reduces transaction size for the sender, and enhances privacy by delaying the exposure of the complex script.
2.  **Question:** Bitcoin Script is often described as "non-Turing complete." What does this mean, and why is this design choice important for Bitcoin's security?
    *   **Correct Answer & Explanation:** "Non-Turing complete" means that Bitcoin Script cannot perform arbitrary computations, loops, or complex data structures like a general-purpose programming language. It is intentionally limited to a very specific set of operations. This design choice is crucial for Bitcoin's security because it prevents malicious or buggy scripts from causing infinite loops, consuming excessive network resources, or creating unpredictable behavior that could destabilize the network. By limiting its capabilities, Bitcoin Script ensures that all transactions can be validated quickly and predictably by any node, contributing to the network's reliability and resistance to denial-of-service attacks.

#### AI generation note
Create a 10-minute animated explainer video that visually differentiates P2PKH and P2SH. Start with a P2PKH example, showing a "lock" (public key hash) and a "key + signature" unlocking it. Then, introduce P2SH as a "safe with a combination lock," where the combination (redeem script hash) is on the outside, but the actual combination (redeem script) is inside and only revealed upon opening. Visually break down the P2PKH script execution step-by-step using a stack animation, showing `OP_DUP`, `OP_HASH160`, `OP_EQUALVERIFY`, `OP_CHECKSIG` and how items are pushed and popped. Use clear, simple diagrams and analogies. Include a short interactive drag-and-drop exercise where learners match `OP_CODE` to its function.

---

### Chapter 4.4 — Network Nodes and Propagation

#### Learning objectives
*   Distinguish between different types of Bitcoin nodes and their respective roles in the network.
*   Explain how transactions and blocks are propagated across the peer-to-peer Bitcoin network.
*   Understand the importance of network decentralization and its contribution to Bitcoin's security and resilience.
*   Identify the trade-offs between running a full node and using a light client (SPV node).

#### Detailed lesson content
The Bitcoin network is a decentralized, peer-to-peer system, meaning there's no central server or authority. Instead, it's composed of thousands of interconnected computers, or "nodes," each running Bitcoin software. These nodes work together to validate transactions, propagate information, and maintain a consistent copy of the blockchain. Understanding the different types of nodes and how they interact is fundamental to appreciating Bitcoin's robustness.

The most important type is the **Full Node**. A full node downloads and validates every single block and transaction that has ever occurred on the Bitcoin blockchain. It independently verifies all rules of the protocol, ensuring that no invalid transactions or blocks are accepted. By doing this, a full node contributes to the security and integrity of the network, acting as an independent auditor. Running a full node requires significant storage (currently over 500 GB and growing), bandwidth, and computational resources. However, it provides the highest level of security and privacy for its user, as you don't need to trust any third party for transaction validation. You are your own bank, verifying everything yourself. Many full nodes also act as "mining nodes" (though not all miners run full nodes, and not all full nodes mine) or "routing nodes," relaying transactions and blocks to other peers. Some full nodes can also be run in "pruned" mode, where they download and validate the entire blockchain but then discard older block data to save storage space, keeping only a recent subset for quick validation.

In contrast to full nodes, **Simplified Payment Verification (SPV) nodes**, often referred to as light clients, do not download the entire blockchain. Instead, they only download block headers, which are much smaller. To verify a transaction, an SPV node requests a Merkle proof from a full node, demonstrating that a transaction is indeed included in a specific block without needing the entire block data. While SPV nodes are much faster and require fewer resources, they come with a significant trade-off: they must trust that the full nodes they connect to are honest and providing accurate information. They don't independently verify all transaction rules; they only check if a transaction is included in a valid block header on the longest chain. Most mobile wallets and some desktop wallets operate as SPV clients, prioritizing convenience over complete trustlessness.

The propagation of transactions and blocks across this diverse network of nodes is a critical process. When a new transaction is created and broadcast by a wallet, it is sent to a few connected full nodes. These nodes validate the transaction against their local mempool and blockchain state. If valid, they add it to their mempool and then "gossip" it to their own connected peers. This process repeats, allowing the transaction to quickly spread across the network. Similarly, when a miner successfully mines a new block, they broadcast this block to their peers. Nodes receiving the new block will first validate it (checking proof-of-work, all transactions within it, etc.). If valid, they will accept it, add it to their blockchain, and then relay it to their own peers. This rapid propagation ensures that all nodes eventually converge on the same, longest chain, maintaining network consensus.

This decentralized network topology is one of Bitcoin's greatest strengths. It means there's no single point of failure that can be attacked or censored. If one node goes offline, others continue to operate. If a government tries to shut down nodes in one region, nodes in other regions persist. This resilience is what makes Bitcoin censorship-resistant and robust. It's a common mistake for new users to assume that simply running a wallet means they are running a full node; most wallets are SPV clients. While SPV clients are convenient, understanding the security implications and the importance of full nodes for the overall health and decentralization of the network is paramount for a Certified Bitcoin Professional. The more full nodes there are, the more robust and secure the network becomes.

#### Key concepts
*   **Full Node:** A Bitcoin node that downloads, validates, and stores a complete copy of the entire Bitcoin blockchain, independently verifying all network rules.
*   **Pruned Node:** A type of full node that downloads and validates the entire blockchain but then discards older block data to save storage space, while still maintaining a recent portion of the chain.
*   **SPV (Simplified Payment Verification) Node / Light Client:** A Bitcoin node that only downloads block headers and relies on full nodes to provide Merkle proofs to verify transaction inclusion, trading off security for convenience and lower resource requirements.
*   **Peer-to-Peer (P2P) Network:** A decentralized network architecture where all participants (nodes) have equal capabilities and communicate directly with each other without a central server.
*   **Transaction Propagation:** The process by which newly created transactions are relayed from node to node across the Bitcoin network until they reach a significant portion of the participants.
*   **Block Propagation:** The process by which newly mined blocks are relayed across the Bitcoin network, allowing all nodes to update their copy of the blockchain and maintain consensus.

#### Hands-on activity
**Activity: Exploring Bitcoin Node Distribution (Conceptual)**

1.  **Objective:** Understand the global distribution and density of Bitcoin full nodes.
2.  **Instructions:**
    *   Visit a website that provides statistics and maps of Bitcoin node distribution (e.g., `bitnodes.io`).
    *   Observe the geographical spread of full nodes.
    *   Note the total number of reachable full nodes reported.
    *   Consider how this distribution contributes to the decentralization and resilience of the network.
    *   Reflect on the implications if a large number of nodes were concentrated in a single geographical area or controlled by a single entity.
    *   **Optional (Conceptual Setup):** If you were to set up a full node, you would typically use `bitcoin-cli` commands to interact with it. For example, to check your node's connections:
        ```bash
        bitcoin-cli getconnectioncount
        bitcoin-cli getpeerinfo
        ```
        (Note: Actual setup and running of a full node is beyond this activity's scope but these commands illustrate interaction.)

#### Assessment idea
1.  **Question:** A user is concerned about their privacy and wants to ensure they are not relying on any third parties to validate their Bitcoin transactions. Which type of Bitcoin node should they run, and why?
    *   **Correct Answer & Explanation:** To ensure maximum privacy and trustlessness, the user should run a **Full Node**. A full node downloads and independently validates every single transaction and block in the Bitcoin blockchain. This means the user does not need to trust any external entity for transaction validation or to confirm their balance, as they are verifying everything themselves directly from the source. This provides the highest level of security and privacy, as their wallet is directly connected to the network and not querying third-party servers.
2.  **Question:** Describe the key trade-off between using an SPV (Simplified Payment Verification) node (light client) and a full node.
    *   **Correct Answer & Explanation:** The key trade-off lies between **convenience/resource efficiency** and **security/trustlessness**.
        *   **SPV nodes** offer convenience: they are fast, require minimal storage and bandwidth, and are suitable for mobile devices. However, they sacrifice security and trustlessness because they don't independently validate the entire blockchain. They must trust that the full nodes they connect to are honest and providing accurate Merkle proofs, making them susceptible to certain types of attacks (e.g., a 51% attack could trick an SPV client into accepting an invalid transaction if it connects to malicious full nodes).
        *   **Full nodes** offer maximum security and trustlessness: they independently verify every rule of the protocol, providing complete certainty and privacy. However, they require significant storage, bandwidth, and computational resources, making them less convenient for everyday mobile use.

#### AI generation note
Create a 12-minute animated video explaining node types and network propagation. Start with a diagram showing a decentralized network of nodes. Visually differentiate full nodes (large, storing entire chain, verifying everything) from SPV nodes (small, connecting to full nodes, relying on Merkle proofs). Use a split-screen or overlay to compare their pros and cons (storage, bandwidth, security, trust). Then, animate the process of a transaction being broadcast from a wallet, propagating through connected nodes, entering mempools, and finally a new block being mined and propagating across the network. Emphasize the "gossip" protocol. Include a visual of a `bitnodes.io` map to show global distribution. End with a reflection prompt asking learners to consider the implications of node distribution.

---

## Module 5: Securing Your Bitcoin: Wallets and Best Practices

Welcome to Module 5! In this crucial module, we shift our focus from the theoretical underpinnings of Bitcoin to the practical, paramount importance of securing your digital assets. Understanding Bitcoin's technology is vital, but without robust security practices, your hard-earned bitcoins remain vulnerable. We will explore the various types of Bitcoin wallets, delve into their functionality, and equip you with the knowledge and best practices necessary to protect your investments from common threats. By the end of this module, you'll be well-versed in choosing, setting up, and maintaining secure Bitcoin storage solutions, a fundamental skill for any Certified Bitcoin Professional.

### Chapter 5.1 — Understanding Bitcoin Wallets: Types and Functionality

#### Learning objectives
*   Differentiate between various types of Bitcoin wallets based on their operational characteristics and security models.
*   Explain the fundamental concept that Bitcoin wallets store private keys, not actual bitcoins.
*   Identify the key advantages and disadvantages of hot wallets versus cold wallets.
*   Describe the core functionality of a Bitcoin wallet, including key generation and transaction signing.

#### Detailed lesson content
A common misconception among newcomers to Bitcoin is that a "wallet" functions like a traditional bank account, holding your digital currency directly. This is fundamentally incorrect and a critical point for any aspiring Certified Bitcoin Professional to grasp. A Bitcoin wallet does not store bitcoins; rather, it stores the cryptographic keys – specifically, the private keys – that allow you to access and spend the bitcoins associated with a particular public address on the blockchain. Think of it less like a physical wallet holding cash, and more like a set of keys to a safe deposit box. The bitcoins themselves reside on the decentralized, public ledger known as the blockchain, and your private key is the sole proof of ownership that grants you the authority to move them. Without your private key, your bitcoins are inaccessible, even if they are visible on the blockchain. Conversely, anyone who gains access to your private key can spend your bitcoins. This distinction underscores why wallet security is paramount.

Bitcoin wallets can be broadly categorized into two main types: "hot" wallets and "cold" wallets, each offering different trade-offs between convenience and security. Hot wallets are those that are connected to the internet, even if intermittently. This connectivity makes them convenient for frequent transactions, but also exposes them to online threats such as hacking, malware, and phishing attacks. Examples of hot wallets include desktop applications, mobile apps, and web-based wallets provided by exchanges or third-party services. While they offer ease of use for day-to-day spending, the inherent risk of internet exposure means they are generally not recommended for storing large amounts of Bitcoin. A common mistake is using a hot wallet on a compromised computer or phone, which can lead to the theft of private keys. Always ensure your device is free from malware and that you're using official, verified wallet software.

In contrast, cold wallets are completely disconnected from the internet, providing a much higher level of security against online attacks. These are typically used for long-term storage of significant Bitcoin holdings, often referred to as "hodling." The most common forms of cold wallets are hardware wallets and paper wallets. Hardware wallets are dedicated physical devices designed to securely store private keys offline and sign transactions without exposing the keys to an internet-connected computer. Paper wallets involve printing private and public keys on a piece of paper, which is then stored physically. While incredibly secure against online threats, cold wallets introduce their own set of challenges, such as physical security (loss, theft, damage) and the inconvenience of setting up and executing transactions. For instance, if a paper wallet is lost or destroyed, the bitcoins are irrecoverable. The choice between a hot and cold wallet, or often a combination of both, depends on your specific needs, the amount of Bitcoin you hold, and your personal risk tolerance.

Regardless of the type, the core functionality of any Bitcoin wallet revolves around key management and transaction creation. When you set up a new wallet, it typically generates a pair of cryptographic keys: a public key and a private key. From the public key, a Bitcoin address is derived, which is what you share with others to receive funds. The private key, on the other hand, is kept secret and is used to create a digital signature that authorizes the spending of bitcoins from your address. When you want to send Bitcoin, your wallet uses your private key to sign a transaction, proving that you are the legitimate owner of the funds. This signed transaction is then broadcast to the Bitcoin network for verification and inclusion in the blockchain. The wallet software also keeps track of your transaction history and current balance by scanning the blockchain for transactions associated with your addresses. Understanding this underlying mechanism is crucial for appreciating why safeguarding your private keys is the absolute cornerstone of Bitcoin security.

#### Key concepts
*   **Bitcoin Wallet:** A software application or physical device that stores private keys, enabling users to send and receive bitcoins. It does not store actual bitcoins.
*   **Private Key:** A secret cryptographic number that proves ownership of bitcoins on the blockchain and authorizes transactions.
*   **Public Key:** A cryptographic key mathematically derived from a private key, used to generate Bitcoin addresses.
*   **Bitcoin Address:** A string of alphanumeric characters derived from a public key, used to receive bitcoins.
*   **Hot Wallet:** A Bitcoin wallet that is connected to the internet, offering convenience but higher risk. Examples include desktop, mobile, and web wallets.
*   **Cold Wallet:** A Bitcoin wallet that is completely disconnected from the internet, offering maximum security against online threats. Examples include hardware wallets and paper wallets.
*   **Seed Phrase (Mnemonic Phrase):** A sequence of 12, 18, or 24 words that serves as a human-readable backup for your private keys, allowing you to recover your wallet.

#### Hands-on activity
**Activity: Exploring a Web-Based Wallet Interface (Testnet Simulation)**

For this activity, you will explore the interface of a web-based wallet using a Bitcoin testnet environment. This allows you to interact with a wallet and send/receive "testnet bitcoins" without any real financial risk.

1.  **Choose a Testnet Wallet:** Go to a reputable testnet wallet provider like `blockchain.info/wallet/#/signup` (ensure you select the testnet option if available, or use a dedicated testnet wallet service like `blockstream.info/liquid/wallet` for Liquid testnet, or search for "Bitcoin testnet wallet" for current options).
2.  **Create a New Wallet:** Follow the instructions to create a new wallet. You will typically be asked to create a password and possibly a seed phrase. **IMPORTANT:** Since this is for learning purposes on a testnet, do NOT use a password you use for any real accounts, and do NOT record any seed phrase as if it were for real funds. This is purely for simulation.
3.  **Explore the Interface:**
    *   Locate your testnet Bitcoin address.
    *   Find the "Send" and "Receive" functions.
    *   Look for transaction history.
    *   Identify any security settings (e.g., 2-Factor Authentication, if offered).
4.  **Obtain Testnet Bitcoins:** Use a Bitcoin testnet faucet (e.g., `coinfaucet.eu/en/btc-testnet/` or `testnet-faucet.mempool.space/`) to get some free testnet bitcoins. Paste your testnet Bitcoin address into the faucet and request funds. It might take a few minutes for the transaction to confirm.
5.  **Send a Testnet Transaction:** Once you have received testnet bitcoins, try sending a small amount to another testnet address (you can find one from another faucet or a friend also doing this activity). Observe the transaction fee and confirmation process.

**Reflection:** What are the key elements you noticed in the wallet interface? How does it differ from a traditional banking app? What security features are present, and what are their limitations given it's a hot wallet?

#### Assessment idea
1.  **Question:** Sarah has a significant amount of Bitcoin and is looking for the most secure way to store it for the long term, with infrequent transactions. Which type of wallet would you recommend for Sarah, and why?
    *   **Correct Answer:** For long-term storage of a significant amount of Bitcoin with infrequent transactions, a **cold wallet**, specifically a **hardware wallet**, is highly recommended. Hardware wallets store private keys offline in a secure element, making them impervious to online threats like malware and hacking. While paper wallets are also cold storage, hardware wallets offer a more user-friendly and robust solution for signing transactions without exposing the private key, mitigating the risks of physical damage or loss associated with paper wallets. Hot wallets (desktop, mobile, web) are less suitable due to their constant internet connectivity and higher exposure to online vulnerabilities.

2.  **Question:** Explain the fundamental difference between how a traditional bank account holds your money and how a Bitcoin wallet "holds" your bitcoins. Why is understanding this distinction crucial for Bitcoin security?
    *   **Correct Answer:** A traditional bank account directly holds your fiat currency (e.g., USD, EUR) in a centralized institution. The bank is responsible for securing your funds, and you interact with your money through their systems. In contrast, a Bitcoin wallet does not "hold" bitcoins. Instead, it stores your **private keys**, which are cryptographic proofs of ownership that allow you to control and spend the bitcoins associated with specific public addresses on the decentralized Bitcoin blockchain. The bitcoins themselves exist as entries on the public ledger. Understanding this distinction is crucial because it highlights that **you are solely responsible for the security of your private keys.** If your private keys are lost, stolen, or compromised, your bitcoins are irrecoverably lost or can be spent by an unauthorized party. There is no central authority to recover them, unlike a bank.

#### AI generation note
Create a 12-minute animated video explaining the core concept of Bitcoin wallets. Use clear analogies (e.g., keys to a safe deposit box vs. a physical wallet). Visually differentiate between hot and cold wallets with distinct icons and background colors. Show a simple flow of how a private key signs a transaction. Include a segment illustrating common mistakes like confusing a wallet with a bank. The tone should be encouraging and foundational. End with a reflection prompt for learners to consider their current digital asset storage practices.

---

### Chapter 5.2 — Setting Up and Using Software Wallets

#### Learning objectives
*   Walk through the step-by-step process of setting up a popular desktop or mobile Bitcoin software wallet.
*   Understand the critical importance of a seed phrase (mnemonic) and best practices for its secure storage.
*   Perform basic operations such as sending and receiving Bitcoin within a software wallet interface.
*   Identify and mitigate common security risks associated with using software wallets.

#### Detailed lesson content
Software wallets, often referred to as "hot wallets" due to their internet connectivity, are popular for their convenience and ease of use, making them an excellent starting point for new Bitcoin users. They come in various forms: desktop applications installed on your computer, mobile apps for smartphones, and web-based wallets accessed through a browser. While they offer accessibility for everyday transactions, it's paramount to understand that their internet connection introduces inherent security risks. Setting up a software wallet correctly and adhering to best practices is crucial to protect your funds. We will focus on the general setup process that applies to most reputable software wallets, emphasizing the critical steps for security.

The first step in setting up any new software wallet is typically downloading the official application. This is a critical juncture where many common mistakes occur. Always download wallet software directly from the official developer's website or a trusted app store. Never click on suspicious links or download from third-party sites, as these can distribute malicious software designed to steal your private keys. Once installed, the wallet will guide you through creating a new wallet. During this process, you will usually be prompted to create a strong password. This password encrypts your wallet file on your device, providing a layer of protection if your device is physically accessed. A strong password should be unique, long, and include a mix of uppercase and lowercase letters, numbers, and symbols. Avoid using easily guessable information like birthdays or common phrases.

The most critical step in wallet setup is the generation and secure backup of your **seed phrase**, also known as a mnemonic phrase (e.g., BIP39). This is a sequence of 12, 18, or 24 seemingly random words that functions as a human-readable representation of your wallet's master private key. If your device is lost, stolen, or damaged, or if you simply need to access your funds from a different wallet application, your seed phrase is the only way to recover your entire wallet and all its associated private keys and addresses. This phrase is the ultimate backup. The wallet will display these words to you, usually one by one, and instruct you to write them down. **This is not a step to skip or take lightly.** You must write down the seed phrase accurately, in the correct order, on a physical medium (like paper) and store it in a secure, private location, preferably multiple locations geographically separated. Never store your seed phrase digitally (e.g., in a text file, email, cloud storage, or screenshot), as this defeats the purpose of offline backup and exposes it to online threats. A common mistake is taking a photo of the seed phrase, which is a severe security vulnerability.

Once your wallet is set up, you can begin to use its core functionalities: sending and receiving Bitcoin. To receive Bitcoin, you simply navigate to the "Receive" section of your wallet. It will display one or more Bitcoin addresses (a long string of alphanumeric characters) and often a QR code. You can share this address or QR code with anyone who wishes to send you Bitcoin. It's safe to share your public address, as it only allows people to send you funds, not access them. To send Bitcoin, you'll go to the "Send" section. Here, you'll need the recipient's Bitcoin address, the amount you wish to send, and you'll typically be able to adjust the transaction fee. Higher fees generally mean faster confirmation times on the network. Always double-check the recipient's address before sending, as Bitcoin transactions are irreversible. A common mistake is sending funds to an incorrect address, leading to permanent loss. Many wallets implement a "copy-paste" verification feature, where they might show the first and last few characters of the copied address for you to quickly confirm.

Beyond initial setup, ongoing security for software wallets involves several practices. Keep your wallet software updated to the latest version, as updates often include critical security patches and bug fixes. Enable two-factor authentication (2FA) if your wallet or associated services offer it, adding an extra layer of security beyond just your password. Consider using a dedicated, clean device for your Bitcoin transactions, separate from your main browsing or gaming machine, to minimize exposure to malware. Regularly back up your wallet (specifically, your seed phrase) and periodically verify your backups. While convenient, remember that software wallets are best suited for smaller amounts of Bitcoin, akin to a "checking account" for everyday spending. For larger holdings, a cold storage solution like a hardware wallet is always recommended to minimize risk.

#### Key concepts
*   **Software Wallet:** A Bitcoin wallet implemented as a software application on a computer (desktop), smartphone (mobile), or accessed via a web browser.
*   **Seed Phrase (Mnemonic Phrase):** A sequence of 12-24 words used to generate and recover all private keys within a deterministic wallet. It is the master backup.
*   **Password:** Used to encrypt the wallet file on your device, protecting it from unauthorized access if the device is compromised.
*   **Receive Address:** A Bitcoin address generated by your wallet that you provide to others to receive funds.
*   **Transaction Fee:** A small amount of Bitcoin paid to miners to process and confirm your transaction on the blockchain.
*   **Two-Factor Authentication (2FA):** An additional layer of security that requires a second form of verification (e.g., a code from an authenticator app or SMS) in addition to your password.

#### Hands-on activity
**Activity: Setting up a Mobile Bitcoin Wallet and Performing a Test Transaction**

In this activity, you will set up a popular mobile Bitcoin wallet (e.g., BlueWallet, Exodus, or Muun) on your smartphone and perform a simulated transaction using testnet Bitcoin, focusing on the seed phrase backup.

1.  **Install a Wallet App:** Download a reputable mobile Bitcoin wallet application (e.g., BlueWallet, Exodus, Muun) from your device's official app store (Google Play Store for Android, Apple App Store for iOS).
2.  **Create a New Wallet:** Open the app and choose the option to "Create New Wallet."
3.  **Secure Your Seed Phrase:**
    *   The app will display your 12- or 24-word seed phrase. **CRITICAL:** For this exercise, you will write it down on a piece of paper, but remember, for a real wallet, you would store this paper securely offline in multiple locations. Do NOT take a screenshot or store it digitally.
    *   The app will likely ask you to verify the seed phrase by re-entering some words. Complete this step.
4.  **Set a Password/PIN:** Create a strong PIN or password for daily access to the app.
5.  **Obtain Testnet Bitcoin:**
    *   Find your wallet's Bitcoin "Receive" address (it will start with `tb1`, `2`, or `m/n` for testnet).
    *   Go to a Bitcoin testnet faucet (e.g., `testnet-faucet.mempool.space/` or `coinfaucet.eu/en/btc-testnet/`) and paste your testnet address to request some testnet BTC.
6.  **Send a Testnet Transaction:**
    *   Once you've received testnet BTC (it might take a few minutes), find another testnet address (e.g., from a friend, or another faucet's donation address).
    *   Go to the "Send" section of your wallet, enter the recipient's testnet address, and a small amount of testnet BTC. Review the transaction details and send.
    *   Observe the transaction status in your wallet.

**Code/Command Snippets (Conceptual for illustration):**
*   **Example Bitcoin Testnet Address:** `tb1qgs4929c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c4p29c

### Chapter 5.3 — Wallet Software: Hot vs. Cold Storage Strategies

#### Learning objectives
*   Differentiate between hot wallets and cold wallets based on their internet connectivity and security implications.
*   Identify various types of hot wallets, including desktop, mobile, web, and exchange wallets, and understand their typical use cases.
*   Identify various types of cold wallets, such as hardware wallets and paper wallets, and recognize their primary security advantages.
*   Evaluate the trade-offs between convenience and security when choosing a Bitcoin wallet strategy.
*   Implement basic security practices for both hot and cold storage solutions to mitigate common risks.

#### Detailed lesson content
As you embark on your journey to become a Certified Bitcoin Professional, understanding how to secure your Bitcoin is paramount. The fundamental choice you'll make regarding wallet software revolves around the concept of "hot" versus "cold" storage. This distinction is critical because it directly impacts the security posture of your funds, balancing accessibility with resilience against theft.

A **hot wallet** is any Bitcoin wallet that is connected to the internet, either directly or indirectly. Think of it as your everyday spending money in your physical wallet – easily accessible for transactions, but also more vulnerable to loss or theft if you're not careful. Hot wallets are convenient because they allow for quick and easy sending and receiving of Bitcoin. Common examples include software wallets installed on your desktop or mobile device, web wallets accessed through a browser, and exchange wallets where your funds are held by a third-party exchange. While these offer unparalleled convenience for frequent transactions, their internet connectivity makes them susceptible to various online threats, such as malware, phishing attacks, and remote hacking attempts if your device or the service provider's systems are compromised. For instance, if your computer is infected with a keylogger, an attacker could potentially capture your wallet password or even your private keys if they are stored unencrypted. Similarly, if you store Bitcoin on an exchange, you are entrusting a third party with your private keys, making your funds vulnerable to the exchange's security practices and potential regulatory actions. A good rule of thumb is to only keep an amount of Bitcoin in a hot wallet that you are comfortable losing, akin to carrying only a limited amount of cash in your pocket.

Conversely, a **cold wallet** is a Bitcoin wallet that is completely disconnected from the internet. This offline nature is its primary security advantage, making it virtually immune to online hacking attempts. Imagine storing your life savings in a bank vault – it's highly secure but not readily accessible for daily expenditures. Cold wallets are ideal for long-term storage of significant amounts of Bitcoin, often referred to as "hodling." The most robust form of cold storage is a hardware wallet, a dedicated physical device designed to securely store private keys and sign transactions offline. Another historical form is a paper wallet, which involves printing your Bitcoin public and private keys (often as QR codes) onto a piece of paper. While seemingly simple, paper wallets come with their own set of challenges, such as susceptibility to physical damage (fire, water), ink fading, and the risk of being compromised during the generation process if the computer used is not truly offline and secure. Brain wallets, where you memorize a passphrase that generates your private key, are generally discouraged due to the extreme difficulty of creating a truly random and unguessable passphrase that can be remembered accurately. The core principle of cold storage is to minimize the "attack surface" by keeping private keys away from any network connection.

The choice between hot and cold storage isn't an either/or proposition; rather, it's about implementing a balanced strategy. Many experienced Bitcoin users employ a hybrid approach: using a small amount of Bitcoin in a hot wallet (e.g., a mobile wallet) for daily spending or small transactions, while keeping the majority of their holdings in a cold wallet (e.g., a hardware wallet) for long-term security. This strategy leverages the convenience of hot wallets for immediate needs while safeguarding the bulk of their assets. Common mistakes often arise from misunderstanding these distinctions. A frequent error is storing a substantial portion of one's Bitcoin on an exchange or a desktop wallet without proper backups or security hygiene. Another mistake is assuming a paper wallet is inherently secure without understanding the risks associated with its generation and physical storage. Always remember that "not your keys, not your Bitcoin" is a fundamental mantra in the crypto space, emphasizing the importance of controlling your own private keys, especially for significant holdings. Regardless of the wallet type, always ensure you have multiple, secure backups of your seed phrase or private keys, stored in different physical locations, and practice good digital hygiene by using strong, unique passwords and enabling two-factor authentication wherever possible.

#### Key concepts
*   **Hot Wallet:** A Bitcoin wallet that is connected to the internet, offering convenience but higher vulnerability to online threats. Examples include desktop, mobile, web, and exchange wallets.
*   **Cold Wallet:** A Bitcoin wallet that is completely disconnected from the internet, providing superior security against online attacks but less convenience. Examples include hardware wallets and paper wallets.
*   **Software Wallet:** A hot wallet application installed on a computer or mobile device that stores private keys and facilitates transactions.
*   **Web Wallet:** A hot wallet accessed through a web browser, where private keys might be managed by a third-party service provider.
*   **Exchange Wallet:** A hot wallet where a cryptocurrency exchange holds and manages your private keys on your behalf.
*   **Hardware Wallet:** A physical, dedicated device designed to securely store private keys offline and sign transactions without exposing the keys to an internet-connected computer.
*   **Paper Wallet:** A cold wallet where Bitcoin private and public keys are printed onto a piece of paper.
*   **Seed Phrase (Recovery Phrase):** A sequence of 12 to 24 words that can be used to recover or restore a Bitcoin wallet and its associated private keys.

#### Hands-on activity
**Activity: Simulating Wallet Setup and Backup Strategies**

In this activity, you will simulate the setup of both a hot and a cold wallet using open-source tools or conceptual steps, focusing on the critical backup process. You will not be using real Bitcoin for this.

**Part 1: Simulating a Hot Wallet (Desktop/Mobile)**
1.  **Choose a simulated wallet:** Imagine you are setting up a desktop wallet like Electrum or a mobile wallet like BlueWallet.
2.  **Initial Setup:** When you first create a new wallet, it will generate a 12- or 24-word seed phrase.
3.  **Backup Task:** Write down a *simulated* 12-word seed phrase on a piece of paper. This represents your critical backup.
    *   Example simulated seed phrase: `apple banana cherry date elderberry fig grape honeydew indigo jackfruit kiwi lemon`
4.  **Security Reflection:** Consider where you would physically store this paper backup to protect it from fire, water, and theft, but also ensure you can access it if your primary device is lost or damaged. Think about why simply taking a screenshot or storing it in a cloud service would be a bad idea for a real wallet.

**Part 2: Simulating a Cold Wallet (Paper Wallet Concept)**
1.  **Generate a conceptual paper wallet:** While we won't generate a *real* paper wallet for security reasons (as it requires a truly offline, secure environment), conceptually understand the process. A paper wallet involves generating a Bitcoin private key and its corresponding public address offline.
2.  **Conceptual Generation Command (for understanding, do NOT run on an online machine with real funds):**
    Imagine running a command like this on an *offline* computer:
    ```bash
    # This is a conceptual example for understanding, NOT for actual use on an online machine.
    # Real paper wallet generation requires an air-gapped, secure environment.
    # For learning purposes, we'll just simulate the output.

    # Imagine this command generates a new private key and address
    # Output:
    # Private Key (WIF): KxM2Y5... (a long string)
    # Public Address: 1A1zP1... (a Bitcoin address)
    ```
3.  **Backup Task:** On a *separate* piece of paper, write down the simulated Private Key (WIF) and Public Address from the conceptual output above.
4.  **Security Reflection:** Compare the security risks of this paper backup versus your hot wallet seed phrase. What are the unique physical risks for a paper wallet? How would you protect it? Why is it crucial that the generation process itself is offline?

**Reflection Questions:**
*   What are the primary differences in how you would back up a hot wallet versus a cold wallet?
*   Why is it generally recommended to use a hardware wallet over a paper wallet for cold storage today?

#### Assessment idea
1.  **Question:** Sarah wants to store a significant amount of Bitcoin (her life savings) for several years without frequently accessing it. She also wants to make a few small, occasional transactions. Which wallet strategy would be most appropriate for Sarah to maximize security while maintaining some usability?
    *   A) Store all Bitcoin on a mobile wallet for convenience.
    *   B) Store all Bitcoin on a cryptocurrency exchange.
    *   C) Use a hardware wallet for the majority of her Bitcoin and a mobile wallet for small, frequent transactions.
    *   D) Print a paper wallet for all her Bitcoin and keep it in her desk drawer.

    **Correct Answer:** C) Use a hardware wallet for the majority of her Bitcoin and a mobile wallet for small, frequent transactions.
    **Explanation:** This approach, known as a hybrid strategy, offers the best balance of security and convenience. A hardware wallet provides robust cold storage for her life savings, protecting it from online threats. A mobile wallet, being a hot wallet, allows for convenient small transactions without exposing her main holdings. Options A, B, and D carry significant risks: A and B expose all funds to online threats and third-party risks, while D is prone to physical damage and potential compromise during generation, and is inconvenient for even small transactions.

2.  **Question:** Which of the following is a primary security risk associated with using a hot wallet, but generally not a concern for a properly secured cold wallet?
    *   A) Physical loss or damage to the storage medium.
    *   B) Forgetting the seed phrase or private key.
    *   C) Theft of funds due to malware or phishing attacks targeting the internet-connected device.
    *   D) Inability to access funds due to a lost PIN.

    **Correct Answer:** C) Theft of funds due to malware or phishing attacks targeting the internet-connected device.
    **Explanation:** Hot wallets are connected to the internet, making them vulnerable to online threats like malware (which can steal private keys or passwords) and phishing (which tricks users into revealing sensitive information). Cold wallets, by definition, are offline, making them immune to these specific types of online attacks. While A, B, and D are general risks for any wallet type (physical loss, forgetting recovery info, lost PIN), C is uniquely a hot wallet concern due to its internet connectivity.

#### AI generation note
Create a 12-minute animated explainer video with clear visual metaphors. Start by illustrating the concept of a "hot" wallet as a physical wallet in a busy street (convenient but risky) and a "cold" wallet as a safe deposit box in a bank vault (secure but less accessible). Show common hot wallet types (desktop GUI, mobile app, web interface with a browser, exchange dashboard) and their associated risks (malware icon, phishing email, server hack). Then, transition to cold wallets, showing a hardware device and a paper printout. Emphasize the offline nature. Include a split-screen comparison table highlighting pros/cons of each. Conclude with a visual representation of a hybrid strategy. Use an encouraging, safety-conscious tone. Include an interactive mini-quiz with two multiple-choice questions about wallet types and their security characteristics.

---

### Chapter 5.4 — Hardware Wallets: Setup, Usage, and Security Best Practices

#### Learning objectives
*   Explain why hardware wallets are considered the most secure option for personal Bitcoin storage.
*   Describe the typical setup process for a new hardware wallet, including seed phrase generation and PIN creation.
*   Demonstrate how to send and receive Bitcoin transactions using a hardware wallet interface.
*   Identify and apply key security best practices when using and storing a hardware wallet.
*   Understand the function of advanced security features like passphrases (25th word) and firmware updates.

#### Detailed lesson content
Having understood the fundamental distinction between hot and cold storage, we now turn our attention to the gold standard for personal Bitcoin security: the hardware wallet. These devices represent the pinnacle of cold storage, offering a robust blend of security, usability, and resilience that surpasses other offline methods like paper wallets. Unlike paper wallets, which are susceptible to physical damage and can be compromised during their generation if not handled with extreme care in an air-gapped environment, hardware wallets are purpose-built to protect your private keys in a secure, tamper-resistant chip. They allow you to sign transactions without ever exposing your private keys to an internet-connected computer, effectively isolating your most valuable asset from online threats.

The setup process for a new hardware wallet, such as a Ledger or Trezor, is a critical first step that lays the foundation for your Bitcoin's security. When you first power on a new device, it will guide you through an initialization process. This typically involves generating a new **seed phrase** (also known as a recovery phrase or mnemonic phrase), which is a sequence of 12, 18, or 24 words. This seed phrase is the *master key* to your Bitcoin and all other cryptocurrencies supported by the wallet. It is absolutely crucial that you write this seed phrase down accurately on the provided recovery sheets and store it in multiple secure, offline locations, separate from the device itself. Never photograph it, type it into a computer, or store it in any digital format. Losing this seed phrase means losing access to your funds if your hardware wallet is lost, stolen, or damaged. You will also be prompted to set up a **PIN code**, which acts as a local password to unlock your device. This PIN protects your device from unauthorized access if it falls into the wrong hands. During setup, the device will often ask you to confirm a few words from your seed phrase to ensure you've written it down correctly – this is a vital step, so pay close attention.

Once your hardware wallet is set up, sending and receiving Bitcoin becomes a straightforward, secure process. To receive Bitcoin, you'll connect your hardware wallet to its companion software (e.g., Ledger Live, Trezor Suite) on your computer or mobile device. The software will display a Bitcoin address generated by your hardware wallet. It is paramount that you **always verify this address on the hardware wallet's screen** before sharing it or sending funds to it. This prevents "address substitution" attacks where malware on your computer might try to swap the legitimate address with an attacker's address. To send Bitcoin, you'll initiate the transaction in the companion software, specifying the recipient address and amount. Crucially, the transaction details (recipient, amount, fees) will then be displayed on your hardware wallet's small screen. You must **review and confirm these details on the device itself** using its physical buttons. This "what you see is what you sign" principle ensures that even if your computer is compromised, the malicious software cannot alter the transaction without your explicit confirmation on the secure hardware. The private key never leaves the device; only the digitally signed transaction is sent back to your computer for broadcast to the Bitcoin network.

Beyond the basic setup and usage, several security best practices are essential for maximizing the protection offered by your hardware wallet. Firstly, **always purchase hardware wallets directly from the official manufacturer or authorized resellers**. Buying from third-party marketplaces (like eBay or Amazon from unofficial sellers) risks receiving a tampered device or one pre-configured with a compromised seed phrase. Secondly, **keep your firmware updated**. Manufacturers regularly release firmware updates to patch vulnerabilities and add new features. Always perform these updates through the official companion software. Thirdly, **protect your seed phrase diligently**. Consider using fireproof and waterproof storage solutions, and store copies in geographically separate locations. For an extra layer of security, some hardware wallets support a **passphrase (often called the 25th word)**, which is an additional word or phrase that you choose and remember, effectively creating a hidden wallet. If someone gains access to your physical device and your 12/24-word seed phrase, they still cannot access your funds without this additional passphrase. This is an advanced feature that requires careful understanding and impeccable memory or secure storage of the passphrase itself, as forgetting it means permanent loss of funds. Common mistakes include neglecting to back up the seed phrase, sharing the seed phrase with anyone, using an easy-to-guess PIN, or failing to verify transaction details on the device screen. Always remember: your hardware wallet is only as secure as your most vulnerable practice.

#### Key concepts
*   **Hardware Wallet:** A physical, dedicated electronic device designed to securely store private keys offline and sign Bitcoin transactions without exposing the keys to an internet-connected computer.
*   **Seed Phrase (Recovery Phrase/Mnemonic):** A sequence of 12, 18, or 24 words generated by the hardware wallet during setup, serving as the master backup for all funds associated with the wallet.
*   **PIN Code:** A numerical password set on the hardware wallet to unlock the device and protect against unauthorized physical access.
*   **Secure Element:** A tamper-resistant chip within the hardware wallet that stores private keys and cryptographic operations, isolating them from the main processor.
*   **Firmware:** The embedded software that controls the hardware wallet's operations, which should be regularly updated for security patches and new features.
*   **Passphrase (25th Word):** An optional, user-defined word or phrase that, when combined with the seed phrase, creates a unique, hidden wallet, adding an extra layer of security.
*   **Address Verification:** The critical step of confirming the Bitcoin receiving address displayed on the hardware wallet's screen matches the address shown on the computer/mobile interface, preventing address substitution attacks.
*   **Transaction Confirmation:** The process of reviewing and approving transaction details (recipient, amount, fees) directly on the hardware wallet's screen using its physical buttons.

#### Hands-on activity
**Activity: Simulating a Hardware Wallet Transaction Flow**

This activity simulates the critical steps of sending Bitcoin with a hardware wallet, focusing on the verification process. You will not use a real hardware wallet or real Bitcoin.

**Scenario:** You want to send 0.01 BTC to a friend whose address is `bc1qxyz...`.

**Part 1: Simulating Transaction Initiation (on computer)**
1.  **Open a text editor or a simple markdown file.**
2.  **Simulate the "companion software" interface.** Write down the following:
    ```
    ---
    **Hardware Wallet Companion Software (Simulated)**

    **Action:** Send Bitcoin

    **Recipient Address:** bc1qxyzabcdefghijklmnopqrstuvwxyz0123456789 (This is your friend's address)
    **Amount:** 0.01 BTC
    **Transaction Fee:** 0.00005 BTC (Example)

    [Simulated "Connect Hardware Wallet" Button]
    [Simulated "Review Transaction" Button]
    ---
    ```
3.  **Simulated Malicious Interference:** Now, imagine your computer has malware. When you click "Review Transaction", the malware attempts to change the recipient address. Modify the `Recipient Address` in your simulated companion software output to a *different, malicious* address:
    ```
    **Recipient Address:** bc1qabc1234567890abcdefghijklmnopqrstuvwxyzABCD (Malicious address)
    ```

**Part 2: Simulating Hardware Wallet Verification (on device screen)**
1.  **Simulate the Hardware Wallet Screen:** In your text editor, create a new section representing the hardware wallet's physical screen.
    ```
    ---
    **Hardware Wallet Screen (Simulated)**

    **CONFIRM TRANSACTION?**

    **Recipient:** bc1qxyzabcdefghijklmnopqrstuvwxyz0123456789
    **Amount:** 0.01 BTC
    **Fee:** 0.00005 BTC

    [Press RIGHT button to Confirm] [Press LEFT button to Cancel]
    ---
    ```
2.  **Critical Verification Step:** Compare the `Recipient Address` shown on your simulated "Hardware Wallet Screen" with the `Recipient Address` shown in your simulated "Companion Software" (which you intentionally modified with malware).
3.  **Decision:** Based on your comparison, would you press the "RIGHT button to Confirm" or the "LEFT button to Cancel"? Explain your decision.

**Reflection Questions:**
*   Why is it absolutely critical to verify the recipient address on the hardware wallet's physical screen, rather than just trusting what's displayed on your computer?
*   What would be the consequence if you failed to perform this verification in a real-world scenario with malware present?

#### Assessment idea
1.  **Question:** You've just purchased a brand new hardware wallet. Which of the following is the *most critical* step during the initial setup to ensure the long-term security and recoverability of your Bitcoin?
    *   A) Setting a very strong PIN code for the device.
    *   B) Updating the device's firmware to the latest version.
    *   C) Accurately writing down and securely storing the generated seed phrase offline.
    *   D) Connecting the device to the internet to register it with the manufacturer.

    **Correct Answer:** C) Accurately writing down and securely storing the generated seed phrase offline.
    **Explanation:** While a strong PIN and updated firmware are important, the seed phrase is the ultimate backup and recovery mechanism for your funds. If your hardware wallet is lost, stolen, or damaged, only the seed phrase can restore access to your Bitcoin. Without a properly recorded and secured seed phrase, your funds are irretrievably lost. Registering the device (D) is generally not required for hardware wallets and could even be a security risk if it involves sharing sensitive information.

2.  **Question:** When sending Bitcoin using a hardware wallet, you initiate the transaction on your computer's companion software. The software displays the recipient address as `1ABC...`. However, when you review the transaction on the hardware wallet's physical screen, the address displayed is `1XYZ...`. What action should you take immediately, and why?
    *   A) Proceed with the transaction, assuming the computer display is correct.
    *   B) Cancel the transaction immediately, as there's a discrepancy that indicates a potential security compromise.
    *   C) Disconnect the hardware wallet and try again, hoping it was a temporary glitch.
    *   D) Contact the recipient to confirm their address, then proceed if it matches `1XYZ...`.

    **Correct Answer:** B) Cancel the transaction immediately, as there's a discrepancy that indicates a potential security compromise.
    **Explanation:** A mismatch between the address displayed on your computer and the address displayed on your hardware wallet's screen is a critical red flag. This is a classic sign of an "address substitution" attack, where malware on your computer is attempting to redirect your funds to an attacker's address. You should immediately cancel the transaction, disconnect your hardware wallet, and thoroughly scan your computer for malware before attempting any further transactions. The hardware wallet's screen is the trusted source for transaction details because it's isolated from the potentially compromised computer.

---

### Chapter 5.5 — Advanced Wallet Concepts and Multisig Security

#### Learning objectives
*   Explain the concept of Hierarchical Deterministic (HD) wallets and their benefits for managing multiple addresses and backups.
*   Understand the role of BIP32, BIP39, and BIP44 standards in HD wallet functionality.
*   Describe what a multisignature (multisig) wallet is and how it enhances security by requiring multiple keys for a transaction.
*   Identify practical use cases for multisig wallets, such as shared funds, escrow, and enhanced personal security.
*   Outline the high-level process of creating and transacting with a multisig wallet.

#### Detailed lesson content
As you become more comfortable with the basics of Bitcoin wallets, it's time to explore some advanced concepts that offer enhanced flexibility, organization, and security. One of the most significant advancements in wallet technology is the **Hierarchical Deterministic (HD) wallet**. Before HD wallets, managing multiple Bitcoin addresses meant backing up each private key individually, a cumbersome and error-prone process. HD wallets, introduced by **BIP32 (Bitcoin Improvement Proposal 32)**, solve this by allowing you to generate an entire tree of public and private keys from a single master seed. This means you only need to back up one seed phrase (typically 12 or 24 words, as per **BIP39**) to recover all your current and future Bitcoin addresses. The "hierarchical" aspect means that keys are derived in a tree-like structure, allowing for organized management of different accounts and sub-accounts. The "deterministic" part means that the same seed phrase will always deterministically generate the same sequence of keys. This dramatically simplifies backups and allows for features like "watch-only" wallets, where you can monitor your balances without exposing your private keys, by sharing only the master public key. **BIP44** further standardizes this by defining a specific path structure for deriving keys for different cryptocurrencies and account types, ensuring interoperability across various HD wallets. For example, a common derivation path might look like `m/44'/0'/0'/0/0`, where `44'` indicates BIP44, `0'` for Bitcoin, the next `0'` for the account, and the final `0` for the specific address.

While HD wallets streamline key management, another powerful security paradigm is the **multisignature (multisig) wallet**. Traditionally, a Bitcoin transaction requires a single private key to sign and authorize it. A multisig wallet, however, requires *multiple* private keys to sign a transaction before it can be broadcast to the network and confirmed. This is often expressed as an "M-of-N" scheme, where M is the minimum number of signatures required out of a total of N possible keys. For example, a 2-of-3 multisig wallet would require any two out of three designated private keys to authorize a transaction. This significantly enhances security by eliminating single points of failure. If one key is lost or compromised, the funds remain safe as long as the required number of other keys are still secure.

Multisig wallets have a wide range of practical use cases. For individuals, a 2-of-3 setup can provide enhanced personal security: you might hold one key on a hardware wallet, a second key on a different hardware wallet stored in a separate location, and a third key with a trusted family member or in a secure vault. This way, if one device is lost or stolen, you still have two keys to access your funds. For businesses, multisig is invaluable for managing corporate treasuries, requiring multiple executives to approve large expenditures. It's also foundational for **escrow services**, where a buyer, seller, and a trusted third-party arbitrator each hold one key in a 2-of-3 setup. Funds are released only when two parties agree, preventing either the buyer or seller from unilaterally absconding with the funds. The underlying mechanism involves constructing a special type of Bitcoin address (a P2SH address) that encodes the multisig spending condition. When a transaction is created from this address, it requires multiple digital signatures, each corresponding to one of the designated private keys, to satisfy the script and be considered valid by the Bitcoin network.

Creating and transacting with a multisig wallet is more complex than a standard single-signature wallet, often requiring specialized software or command-line tools. At a high level, the process involves:
1.  **Generating multiple public keys:** Each participant generates a private key and shares their corresponding public key.
2.  **Creating the multisig address:** These public keys are combined to create a multisig script, which then generates a unique Bitcoin address (e.g., a `3...` or `bc1q...` address for P2SH or Taproot multisig).
3.  **Funding the address:** Bitcoin is sent to this multisig address.
4.  **Initiating a transaction:** When funds need to be spent, one participant creates a raw transaction and partially signs it with their private key.
5.  **Co-signing:** The partially signed transaction is then passed to other required signers, who add their signatures.
6.  **Broadcasting:** Once the required number of signatures (M) is met, the fully signed transaction is broadcast to the Bitcoin network.

Common mistakes with multisig include losing track of keys or their distribution, not having a clear protocol for signing, or failing to properly back up each individual private key (or its seed phrase) involved in the multisig scheme. While multisig offers superior security, it also introduces complexity, making careful planning and execution paramount. Another advanced concept is a **watch-only wallet**, which is a wallet that only contains public keys or addresses. It allows you to monitor incoming transactions and balances without the ability to spend funds, making it useful for auditing or public display without any security risk. This leverages the HD wallet's ability to derive public keys without needing the private keys.

#### Key concepts
*   **Hierarchical Deterministic (HD) Wallet:** A type of Bitcoin wallet that can generate an entire tree of public and private keys from a single master seed phrase, simplifying backups and key management.
*   **BIP32 (Bitcoin Improvement Proposal 32):** The standard that defines the structure and derivation process for HD wallets.
*   **BIP39 (Bitcoin Improvement Proposal 39):** The standard that defines the creation of mnemonic seed phrases (12-24 words) for HD wallets.
*   **BIP44 (Bitcoin Improvement Proposal 44):** The standard that defines a logical path structure for deriving keys for different cryptocurrencies and accounts within an HD wallet.
*   **Multisignature (Multisig) Wallet:** A type of Bitcoin wallet that requires more than one private key signature to authorize a transaction (e.g., 2-of-3, 3-of-5).
*   **M-of-N Scheme:** A notation describing a multisig wallet where 'M' is the minimum number of signatures required out of 'N' total possible keys.
*   **Escrow Service (Multisig):** A use case for multisig where a trusted third party (arbitrator) holds one key, along with the buyer and seller, to facilitate secure transactions.
*   **Watch-Only Wallet:** A wallet that contains only public keys or addresses, allowing users to monitor balances and incoming transactions without the ability to spend funds.

#### Hands-on activity
**Activity: Conceptualizing HD Wallet Key Derivation and Multisig Flow**

This activity will use conceptual examples to illustrate how HD wallets derive keys and how multisig transactions work.

**Part 1: HD Wallet Key Derivation (Conceptual)**
1.  **Imagine your Seed Phrase:**
    `zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo zoo` (This is a simplified, non-secure example for illustration only)
2.  **Conceptual Master Private Key:** From this seed, a master private key `m` is derived.
3.  **Conceptual Account Derivation (BIP44):** From `m`, various accounts are derived. Let's say you have two accounts:
    *   Account 0 (for personal savings): `m/44'/0'/0'`
    *   Account 1 (for daily spending): `m/44'/0'/1'`
4.  **Conceptual Address Derivation:** From each account, individual addresses are derived.
    *   From Account 0, the first receiving address: `m/44'/0'/0'/0/0` -> `1A1zP1...`
    *   From Account 0, the second receiving address: `m/44'/0'/0'/0/1` -> `1BcdE2...`
    *   From Account 1, the first receiving address: `m/44'/0'/1'/0/0` -> `1FghI3...`
5.  **Task:** Write down how a single seed phrase simplifies backups compared to having to back up `1A1zP1...`, `1BcdE2...`, and `1FghI3...` individually. Explain why this is a significant improvement.

**Part 2: Multisig Transaction Flow (Conceptual)**
Imagine a 2-of-3 multisig wallet shared by Alice, Bob, and Carol for their business funds. They want to send 1 BTC to a vendor.

1.  **Step 1: Transaction Initiation.** Alice creates an unsigned transaction to send 1 BTC to the vendor. She then signs it with her private key.
    *   **Task:** Describe what happens to the transaction at this stage. Is it valid on the Bitcoin network? Why or why not?
2.  **Step 2: Co-signing.** Alice sends the partially signed transaction to Bob. Bob reviews the transaction details and signs it with his private key.
    *   **Task:** Describe what happens to the transaction now. Is it valid? Can it be broadcast?
3.  **Step 3: Broadcasting.** The fully signed transaction (by Alice and Bob) is now ready.
    *   **Task:** What is the final step to complete the transaction? What if Carol had signed instead of Bob? Would it still be valid?

#### Assessment idea
1.  **Question:** An HD wallet uses a single seed phrase to generate multiple Bitcoin addresses. Which of the following Bitcoin Improvement Proposals (BIPs) is primarily responsible for defining the standard for this mnemonic seed phrase generation?
    *   A) BIP32
    *   B) BIP39
    *   C) BIP44
    *   D) BIP141 (SegWit)

    **Correct Answer:** B) BIP39
    **Explanation:** BIP39 specifically defines the standard for generating mnemonic seed phrases (lists of words) that can be used to derive a master seed for an HD wallet. BIP32 defines the hierarchical deterministic key derivation structure itself, and BIP44 defines a logical path structure for different accounts and cryptocurrencies derived from that master key. BIP141 is related to Segregated Witness.

2.  **Question:** A small startup decides to use a 2-of-3 multisignature wallet for its operational funds. The three keys are held by the CEO, the CTO, and the CFO. If the CEO's hardware wallet is lost, what is the immediate impact on the company's ability to spend funds from this multisig wallet, and why?
    *   A) All funds are permanently lost because one key is missing.
    *   B) The company can still spend funds, but only if the CTO and CFO both sign the transaction.
    *   C) The company can still spend funds, but only if the CEO's lost key is recovered.
    *   D) The company can spend funds with just one signature from either the CTO or CFO.

    **Correct Answer:** B) The company can still spend funds, but only if the CTO and CFO both sign the transaction.
    **Explanation:** In a 2-of-3 multisig setup, any two out of the three keys are sufficient to authorize a transaction. If the CEO's key is lost, the remaining two keys (CTO's and CFO's) can still collectively meet the 2-of-3 requirement, allowing the company to access and spend its funds. This demonstrates the enhanced resilience against single points of failure that multisig provides.

#### AI generation note
Create an 11-minute animated diagram video explaining HD wallets and multisig. Start with a visual of a single seed phrase branching into a tree of derived keys and addresses, illustrating BIP32, BIP39, and BIP44. Use a clear, step-by-step animation for the derivation path. Transition to multisig by showing three distinct keys (Alice, Bob, Carol) and how a transaction requires two of them to "unlock" funds from a shared vault. Animate the process of partial signing and co-signing. Include real-world scenarios like a business treasury or an escrow service. Use clear labels and color-coding for keys and addresses. The tone should be informative and slightly more technical but still accessible. Include a short, interactive drag-and-drop exercise where learners match BIP standards to their descriptions.

---

## Module 6: Bitcoin's Broader Impact and Future

This module explores the far-reaching implications of Bitcoin beyond its technical architecture, examining its economic and societal influence, the evolving regulatory environment, its relationship with other cryptocurrencies, and critical scalability solutions. We will conclude by looking at the future trajectory of Bitcoin and its place within the burgeoning Web3 ecosystem, preparing you to understand Bitcoin's role in a rapidly changing world.

### Chapter 6.1 — Bitcoin's Economic and Societal Implications

#### Learning objectives
*   Analyze how Bitcoin challenges and potentially disrupts traditional financial systems.
*   Explain Bitcoin's role in facilitating cross-border remittances and promoting financial inclusion.
*   Discuss the concept of Bitcoin as a store of value and its potential as an inflation hedge.
*   Identify the societal benefits and challenges associated with widespread Bitcoin adoption.
*   Understand the economic arguments for and against Bitcoin's long-term viability.

#### Detailed lesson content
Bitcoin's emergence has ignited a profound debate about the future of money and finance, presenting both a challenge and an alternative to the established order. At its core, Bitcoin offers a decentralized, permissionless, and censorship-resistant monetary system, starkly contrasting with traditional fiat currencies controlled by central banks and governments. This fundamental difference has significant economic implications. For instance, Bitcoin's fixed supply cap of 21 million coins introduces scarcity, a property often compared to gold, leading many to view it as a potential hedge against inflation. In economies experiencing hyperinflation or currency devaluation, Bitcoin can offer a lifeline, allowing individuals to preserve their wealth outside the failing traditional system. This is not merely theoretical; real-world examples from countries like Venezuela or Argentina demonstrate how citizens turn to Bitcoin to protect their savings from rapid currency depreciation, bypassing capital controls and accessing a global, liquid market.

One of Bitcoin's most celebrated societal impacts is its potential to foster financial inclusion. Billions of people worldwide remain unbanked or underbanked, lacking access to basic financial services due to high fees, geographical barriers, or lack of identification. Bitcoin, requiring only a smartphone and an internet connection, can bridge this gap. Individuals can receive, hold, and send money without needing a traditional bank account. This capability is particularly transformative for cross-border remittances, a multi-billion-dollar industry often plagued by high fees and slow transfer times. Traditional remittance services can charge anywhere from 5-10% of the transfer amount, significantly eroding the value sent home by migrant workers. Bitcoin transactions, especially when utilizing layer-2 solutions, can be significantly cheaper and faster, ensuring more money reaches its intended recipients. This efficiency not only empowers individuals but also injects more capital into developing economies, fostering local growth and stability.

However, Bitcoin's economic and societal implications are not without their complexities and criticisms. The volatility of Bitcoin's price, while appealing to speculative investors, poses a significant challenge for its adoption as a stable medium of exchange. Businesses accepting Bitcoin face the risk of their revenue fluctuating wildly in fiat terms, making budgeting and financial planning difficult. While solutions like stablecoins or instant fiat conversion services exist, they often reintroduce reliance on traditional financial intermediaries, somewhat diluting Bitcoin's original ethos. Furthermore, the energy consumption associated with Bitcoin mining has drawn considerable environmental scrutiny. While the exact figures and impact are debated, and the industry is increasingly moving towards renewable energy sources, it remains a critical concern that influences public perception and regulatory attitudes. Understanding these trade-offs is crucial for any Certified Bitcoin Professional, as it shapes the narrative around Bitcoin's adoption and its integration into the global economy.

Beyond individual transactions, Bitcoin's broader economic impact extends to challenging the very notion of monetary policy. With a predetermined, algorithmic supply schedule, Bitcoin removes the ability of central authorities to manipulate the money supply through quantitative easing or interest rate adjustments. This "hard money" philosophy appeals to those who distrust central banks and advocate for a return to sound money principles. The idea of "hyperbitcoinization" posits a future where Bitcoin becomes the world's dominant currency, driven by its superior properties compared to fiat. While this remains a highly speculative long-term vision, the ongoing experimentation with Bitcoin as legal tender in countries like El Salvador demonstrates a tangible shift in how nation-states perceive and interact with decentralized digital assets. This experiment, while facing significant hurdles, highlights Bitcoin's potential to reshape national economies, particularly in regions seeking greater monetary independence or stability.

Finally, it's important to acknowledge the socio-political dimensions. Bitcoin empowers individuals with greater financial sovereignty, reducing reliance on intermediaries and potentially fostering greater economic freedom. However, this freedom also comes with increased personal responsibility; there are no "chargebacks" or central authorities to appeal to if funds are lost or stolen due to user error. The digital divide also presents a challenge, as access to smartphones and reliable internet is not universal, potentially excluding some of the very populations Bitcoin aims to serve. As a Certified Bitcoin Professional, you must be prepared to articulate both the immense opportunities and the inherent challenges, promoting responsible adoption and educating users on the necessary precautions. The journey of Bitcoin from a niche technology to a global economic force is ongoing, and its full impact is still unfolding.

#### Key concepts
*   **Financial Inclusion:** Providing access to affordable financial products and services to individuals and businesses, especially those traditionally underserved.
*   **Remittances:** Money sent by a person in one country to a recipient in another, often a family member.
*   **Store of Value:** An asset that maintains its purchasing power over time without depreciating.
*   **Hyperbitcoinization:** A theoretical future scenario where Bitcoin becomes the world's dominant currency, replacing fiat money.
*   **Decentralized Finance (DeFi):** An emerging financial technology based on secure distributed ledgers similar to those used by cryptocurrencies, aiming to remove intermediaries from financial transactions.
*   **Monetary Policy:** Actions undertaken by a central bank to influence the availability and cost of money and credit to help promote national economic goals.

#### Hands-on activity
**Scenario Analysis: Bitcoin for Remittances**

Imagine you are advising a small business that facilitates international remittances. They are considering integrating Bitcoin to reduce fees and speed up transfers for their clients, many of whom send money from the US to El Salvador.

**Task:**
1.  Identify the key benefits Bitcoin offers for this specific remittance corridor compared to traditional methods (e.g., Western Union).
2.  Identify at least three significant challenges or risks the business would face by adopting Bitcoin for remittances.
3.  Propose a simplified workflow for a client sending $100 via Bitcoin, assuming the recipient has a Bitcoin wallet.
4.  Consider how the business could mitigate the identified challenges.

**Template for your analysis:**

```markdown
**Remittance Scenario Analysis: US to El Salvador via Bitcoin**

**1. Key Benefits of Bitcoin for Remittances:**
*   Benefit 1: [Explain benefit, e.g., Lower transaction fees]
*   Benefit 2: [Explain benefit, e.g., Faster settlement times]
*   Benefit 3: [Explain benefit, e.g., Financial inclusion for unbanked recipients]

**2. Challenges/Risks of Bitcoin Adoption:**
*   Challenge 1: [Explain challenge, e.g., Price volatility]
*   Challenge 2: [Explain challenge, e.g., Regulatory uncertainty]
*   Challenge 3: [Explain challenge, e.g., User education/technical literacy]

**3. Simplified Bitcoin Remittance Workflow ($100 from US to El Salvador):**
1.  Sender initiates transfer with the business, providing fiat ($100 USD).
2.  Business converts USD to [Specify how: e.g., Bitcoin on a crypto exchange].
3.  Business sends Bitcoin to recipient's [Specify wallet type: e.g., Lightning-enabled wallet like Chivo or Muun].
4.  Recipient receives Bitcoin and can [Specify action: e.g., convert to USD at an ATM, spend directly].

**4. Mitigation Strategies for Challenges:**
*   Mitigation for Challenge 1 (Price Volatility): [Suggest a strategy, e.g., Instant conversion to stablecoin or fiat upon receipt]
*   Mitigation for Challenge 2 (Regulatory Uncertainty): [Suggest a strategy, e.g., Partner with compliant local exchanges, stay updated on FATF guidelines]
*   Mitigation for Challenge 3 (User Education): [Suggest a strategy, e.g., Provide clear tutorials, offer customer support for wallet setup]
```

#### Assessment idea
1.  **Question:** In what ways can Bitcoin contribute to financial inclusion for individuals who are unbanked or underbanked?
    **Correct Answer & Explanation:** Bitcoin can contribute to financial inclusion by providing a decentralized, permissionless financial system accessible with just a smartphone and internet connection. It bypasses the need for traditional bank accounts, credit checks, or extensive paperwork, which are often barriers for underserved populations. This allows individuals to store value, send and receive money globally with lower fees and faster speeds than traditional services, empowering them with greater financial autonomy and access to the global economy.

2.  **Question:** A common criticism of Bitcoin's economic viability is its price volatility. How might a business that accepts Bitcoin payments mitigate the risk of price fluctuations?
    **Correct Answer & Explanation:** A business can mitigate Bitcoin's price volatility by immediately converting received Bitcoin into fiat currency (e.g., USD, EUR) or stablecoins upon receipt. Many payment processors offer this service automatically, allowing the business to accept Bitcoin while settling in their preferred fiat currency, thereby eliminating exposure to Bitcoin's price swings. Alternatively, they could hedge their Bitcoin holdings using derivatives, though this is a more complex strategy typically employed by larger financial entities.

#### AI generation note
Create a 12-minute animated explainer video. Start by visually contrasting traditional banking with Bitcoin's decentralized nature. Use animated infographics to show high remittance fees versus low Bitcoin transaction costs. Feature a split-screen demonstrating a person in a developing country using Bitcoin on a smartphone to receive funds. Include a segment on Bitcoin's energy consumption, showing a transition from fossil fuels to renewable energy sources for mining. Conclude with a short interview snippet (simulated) of a financial expert discussing Bitcoin's potential as an inflation hedge. The interactive element should be a drag-and-drop exercise matching economic problems (e.g., high inflation, slow remittances) to Bitcoin solutions.

---

### Chapter 6.2 — Regulatory Landscape and Legal Considerations

#### Learning objectives
*   Identify the key regulatory bodies and frameworks influencing Bitcoin globally.
*   Explain the concepts of Know Your Customer (KYC) and Anti-Money Laundering (AML) in the context of cryptocurrency.
*   Analyze the diverse approaches taken by different jurisdictions regarding Bitcoin's legality and taxation.
*   Discuss the legal challenges and risks associated with Bitcoin, including fraud and illicit activities.
*   Understand the importance of regulatory compliance for businesses and individuals operating with Bitcoin.

#### Detailed lesson content
The regulatory landscape surrounding Bitcoin is a complex and constantly evolving patchwork, reflecting the diverse legal and economic philosophies of nations worldwide. Unlike traditional financial instruments, Bitcoin operates without a central issuer or governing body, presenting unique challenges for regulators accustomed to centralized control. Globally, bodies like the Financial Action Task Force (FATF) play a significant role in setting international standards for combating money laundering and terrorist financing, which directly impact how countries regulate virtual assets. The FATF's recommendations, for example, have pushed many jurisdictions to implement "Travel Rule" requirements, mandating that virtual asset service providers (VASPs) share sender and recipient information for transactions above a certain threshold, similar to traditional wire transfers. This directly affects exchanges and custodial wallet providers, requiring them to collect and store user data.

Central to cryptocurrency regulation are the principles of Know Your Customer (KYC) and Anti-Money Laundering (AML). KYC procedures require financial institutions, including crypto exchanges, to verify the identity of their clients. This typically involves collecting personal information such as name, address, date of birth, and government-issued identification documents. The purpose is to prevent fraud, identity theft, and the use of financial systems for illicit activities. AML regulations, on the other hand, are designed to detect and prevent the proceeds of criminal activity from being laundered through the financial system. For Bitcoin, this means monitoring transactions for suspicious patterns, reporting large or unusual activities to financial intelligence units, and implementing robust internal controls. While Bitcoin's pseudonymous nature offers a degree of privacy, the on-chain transparency means that once an identity is linked to an address, all associated transactions can be traced, which is a powerful tool for law enforcement. Many exchanges use sophisticated blockchain analytics tools to identify and flag suspicious transactions.

Jurisdictions around the world have adopted vastly different stances on Bitcoin. Some, like El Salvador, have embraced Bitcoin as legal tender, integrating it into their national economy and actively promoting its use. Others, like China, have implemented outright bans on cryptocurrency mining and trading, citing financial stability risks and capital controls. The United States has a more nuanced approach, with various federal and state agencies (e.g., SEC, CFTC, FinCEN, IRS) asserting jurisdiction over different aspects of Bitcoin, classifying it variously as a commodity, property, or even a security depending on its specific use case. For instance, the IRS treats Bitcoin as property for tax purposes, meaning capital gains or losses apply when it's sold or exchanged. European Union countries are working towards a unified regulatory framework through initiatives like MiCA (Markets in Crypto-Assets), aiming to provide legal clarity and consumer protection across member states. This fragmented regulatory environment creates significant challenges for global businesses and individuals, requiring careful navigation and adherence to local laws.

The legal challenges extend beyond compliance to include issues of fraud, scams, and illicit use. While Bitcoin itself is a neutral technology, it can be exploited by criminals for ransomware, money laundering, or funding illegal activities due to its pseudonymous nature and global reach. Common mistakes for users include falling for phishing scams, investing in fraudulent ICOs (Initial Coin Offerings) or "rug pulls," or sending Bitcoin to incorrect addresses, as transactions are irreversible. Safety notes for users often emphasize the importance of due diligence, using reputable exchanges, enabling two-factor authentication, and being wary of unsolicited investment opportunities. For a Certified Bitcoin Professional, understanding these risks is paramount, not only for personal security but also for advising others on best practices and identifying red flags.

Regulatory compliance is not just a burden; it is increasingly seen as a pathway to mainstream adoption and institutional investment. Businesses that prioritize robust KYC/AML frameworks and adhere to local regulations are more likely to gain trust from traditional financial institutions, partners, and customers. This compliance helps legitimize the industry and reduces the perception of Bitcoin as solely a tool for illicit activities. For individuals, understanding tax obligations (e.g., tracking cost basis for capital gains) is crucial to avoid legal penalties. As the industry matures, the expectation is that regulatory clarity will improve, leading to a more standardized and predictable environment for Bitcoin operations. However, the decentralized nature of Bitcoin means that a complete, uniform global regulation is unlikely, requiring continuous vigilance and adaptation from all participants.

#### Key concepts
*   **FATF (Financial Action Task Force):** An intergovernmental organization that sets international standards to prevent illegal activities like money laundering and terrorist financing.
*   **KYC (Know Your Customer):** The process of verifying the identity of clients to prevent fraud and illicit activities.
*   **AML (Anti-Money Laundering):** A set of regulations and procedures designed to prevent criminals from disguising illegally obtained funds as legitimate income.
*   **VASP (Virtual Asset Service Provider):** Any natural or legal person who conducts one or more of the following activities or operations for or on behalf of another natural or legal person: exchange between virtual assets and fiat currencies, exchange between one or more forms of virtual assets, transfer of virtual assets, safekeeping and/or administration of virtual assets or instruments enabling control over virtual assets, and participation in and provision of financial services related to an issuer's offer and/or sale of a virtual asset.
*   **Travel Rule:** An FATF recommendation requiring VASPs to obtain and transmit certain customer information for transactions above a specified threshold.
*   **Capital Gains Tax:** A tax levied on the profit realized from the sale of a non-inventory asset (like Bitcoin) that was purchased at a lower price.

#### Hands-on activity
**Regulatory Compliance Scenario: Exchange Onboarding**

Imagine you are a compliance officer at a new Bitcoin exchange operating in a jurisdiction that adheres to FATF guidelines. A new user, Alice, wants to deposit funds and start trading.

**Task:**
1.  List the minimum KYC information you would need to collect from Alice to comply with standard regulations.
2.  Describe two specific AML measures your exchange would implement to monitor Alice's activities after onboarding.
3.  Explain why these measures are important for both the exchange and the broader financial system.

**Template for your response:**

```markdown
**Regulatory Compliance Scenario: Exchange Onboarding**

**1. Minimum KYC Information for Alice:**
*   Full Legal Name:
*   Date of Birth:
*   Residential Address:
*   Nationality:
*   Government-Issued ID (e.g., Passport, Driver's License): [Specify what details from ID you'd verify]
*   Proof of Address (e.g., Utility Bill): [Explain why this is needed]

**2. AML Measures for Monitoring Alice's Activities:**
*   **Measure 1 (Transaction Monitoring):** [Describe a specific monitoring activity, e.g., flagging large, unusual transactions or frequent transactions with high-risk jurisdictions.]
*   **Measure 2 (Behavioral Analysis):** [Describe another specific monitoring activity, e.g., identifying sudden changes in transaction patterns or attempts to obscure source of funds.]

**3. Importance of KYC/AML Measures:**
*   **For the Exchange:** [Explain benefits for the exchange, e.g., legal protection, reputation, ability to partner with banks.]
*   **For the Broader Financial System:** [Explain benefits for the system, e.g., preventing terrorism financing, combating organized crime, maintaining financial stability.]
```

#### Assessment idea
1.  **Question:** Explain the primary difference between KYC and AML in the context of cryptocurrency exchanges, and why both are crucial for regulatory compliance.
    **Correct Answer & Explanation:** KYC (Know Your Customer) focuses on verifying the identity of clients *before* they can use a service, collecting personal information to prevent identity fraud and ensure the exchange knows who its users are. AML (Anti-Money Laundering) focuses on monitoring *after* onboarding, analyzing transaction patterns and user behavior to detect and prevent the use of the platform for illicit activities like money laundering or terrorist financing. Both are crucial because KYC establishes a baseline of legitimate users, while AML continuously monitors for suspicious behavior, together forming a robust defense against financial crime and ensuring the exchange operates legally and maintains trust with traditional financial partners.

2.  **Question:** The FATF's "Travel Rule" has significant implications for Virtual Asset Service Providers (VASPs). What is the core requirement of the Travel Rule, and how does it impact a Bitcoin exchange?
    **Correct Answer & Explanation:** The core requirement of the FATF's Travel Rule is that VASPs must obtain and transmit certain identifying information about both the sender and the recipient of virtual asset transfers above a specified threshold. This information typically includes names, account numbers, and physical addresses. For a Bitcoin exchange, this means that when a user sends Bitcoin from their exchange wallet to another VASP or receives Bitcoin from another VASP, the exchange must collect and share this data with the counterparty VASP, essentially mirroring the data requirements for traditional wire transfers. This impacts exchanges by requiring them to implement new data collection and sharing protocols, potentially increasing operational complexity and privacy concerns for users.

#### AI generation note
Produce a 10-minute interactive slide deck with voiceover. Each slide should feature a different country's regulatory approach (e.g., US, China, El Salvador, EU), using a world map overlay to highlight the region. Include animated text boxes explaining KYC/AML steps with examples of required documents. Present a "spot the red flag" interactive quiz where learners identify suspicious transaction patterns. Use a professional, informative tone. The interactive element should be a click-to-reveal explanation of different regulatory bodies (e.g., SEC, FinCEN) and their roles.

---

### Chapter 6.3 — Altcoins and Competing Cryptocurrencies

#### Learning objectives
*   Differentiate between Bitcoin and various categories of altcoins (e.g., smart contract platforms, stablecoins, privacy coins).
*   Explain the concept of a blockchain fork and distinguish between soft forks and hard forks in the context of Bitcoin and altcoins.
*   Identify the key features and use cases of prominent altcoins like Ethereum, Litecoin, and Bitcoin Cash.
*   Analyze the reasons for the proliferation of altcoins and their impact on the broader crypto ecosystem.
*   Understand the risks and opportunities associated with investing in or using altcoins compared to Bitcoin.

#### Detailed lesson content
While Bitcoin pioneered the concept of decentralized digital money, its success inevitably led to the creation of thousands of other cryptocurrencies, collectively known as "altcoins" (alternative coins). These altcoins emerged with various goals: to improve upon Bitcoin's perceived limitations, introduce new functionalities, or serve entirely different use cases. Understanding the landscape of altcoins is crucial for a Certified Bitcoin Professional, as they often interact with Bitcoin's ecosystem and represent different facets of the broader blockchain revolution. Altcoins can be broadly categorized. For instance, **smart contract platforms** like Ethereum (ETH) introduced the ability to run decentralized applications (dApps) and execute self-executing contracts directly on the blockchain, vastly expanding the utility beyond simple value transfer. This allows for complex financial instruments, gaming, and identity management, which Bitcoin's scripting language is not designed for.

Another significant category is **stablecoins**, such as Tether (USDT) or USD Coin (USDC). These cryptocurrencies are designed to maintain a stable value, typically pegged to a fiat currency like the US dollar. They achieve stability by being backed by reserves (fiat, commodities, or other cryptocurrencies) or through algorithmic mechanisms. Stablecoins are critical for traders seeking to move in and out of volatile cryptocurrencies without converting back to fiat, and for facilitating fast, low-cost international payments without price risk. Then there are **privacy coins** like Monero (XMR) or Zcash (ZEC), which prioritize enhanced anonymity for transactions, using advanced cryptographic techniques to obscure sender, recipient, and transaction amounts. While appealing to privacy advocates, their features have also raised regulatory concerns due to potential misuse for illicit activities. Finally, **utility tokens** are designed to provide access to a specific product or service within a blockchain ecosystem, while **governance tokens** grant holders voting rights over the future development of a decentralized protocol.

The concept of a **blockchain fork** is fundamental to understanding the origin of many altcoins, particularly those closely related to Bitcoin. A fork occurs when a blockchain splits into two separate paths, often due to a change in the network's rules. A **soft fork** is a backward-compatible change, meaning older nodes that haven't upgraded can still validate blocks created by newer nodes (though they might not understand the new rules). An example in Bitcoin is Taproot, which introduced new transaction types but didn't break compatibility with older wallets. **Hard forks**, however, are not backward-compatible. They require all nodes to upgrade to the new rules; otherwise, they will operate on a separate blockchain. If a significant portion of the community adopts the new rules, a new cryptocurrency can be born. A prominent example is **Bitcoin Cash (BCH)**, which hard-forked from Bitcoin in 2017 primarily to increase the block size limit, aiming for faster and cheaper transactions. This created a new chain and a new coin, reflecting a fundamental disagreement within the community about Bitcoin's scaling strategy.

Beyond forks, some altcoins were built from scratch or are entirely different blockchain architectures. **Litecoin (LTC)**, for instance, was created in 2011 by Charlie Lee, often described as "silver to Bitcoin's gold." It shares much of Bitcoin's codebase but features a faster block generation time (2.5 minutes vs. Bitcoin's 10 minutes) and a different hashing algorithm (Scrypt vs. SHA-256), making it more accessible for GPU mining in its early days. Litecoin aimed to be more suitable for everyday transactions. While it hasn't achieved Bitcoin's market dominance, it remains a significant cryptocurrency, often used for testing new technologies before their implementation on Bitcoin. The proliferation of altcoins is driven by a combination of factors: technological innovation, community disagreements leading to forks, speculative investment, and the desire to create niche applications.

However, navigating the altcoin market comes with significant risks. Many altcoins have low liquidity, making them difficult to buy or sell without significant price impact. They are also often highly volatile, with prices susceptible to rapid and dramatic swings. Furthermore, the sheer number of altcoins means many are speculative, lack genuine utility, or are outright scams. Common mistakes include chasing "pump and dump" schemes, investing in projects with unclear roadmaps or inexperienced teams, and failing to secure private keys properly. Safety notes emphasize thorough research (due diligence), understanding the project's whitepaper, team, and community, and never investing more than you can afford to lose. While Bitcoin remains the dominant and most secure cryptocurrency, altcoins represent a vibrant and experimental frontier, pushing the boundaries of blockchain technology and exploring new applications that may someday complement or even compete with Bitcoin in specific niches.

#### Key concepts
*   **Altcoin:** Any cryptocurrency other than Bitcoin.
*   **Smart Contract Platform:** A blockchain that allows for the creation and execution of self-executing contracts and decentralized applications (dApps), e.g., Ethereum.
*   **Stablecoin:** A cryptocurrency designed to maintain a stable value, typically pegged to a fiat currency or commodity.
*   **Privacy Coin:** A cryptocurrency that uses advanced cryptography to enhance anonymity for transactions, obscuring sender, recipient, and transaction amounts.
*   **Blockchain Fork:** A divergence in a blockchain's history, leading to two or more separate chains.
*   **Soft Fork:** A backward-compatible change to a blockchain's protocol, where new rules are stricter than old ones.
*   **Hard Fork:** A non-backward-compatible change to a blockchain's protocol, requiring all nodes to upgrade to the new rules, often resulting in a new cryptocurrency.
*   **Bitcoin Cash (BCH):** A cryptocurrency that resulted from a hard fork of Bitcoin in 2017, primarily to increase the block size limit.
*   **Litecoin (LTC):** An early altcoin often called "silver to Bitcoin's gold," sharing much of Bitcoin's codebase but with faster block times and a different hashing algorithm.

#### Hands-on activity
**Altcoin Comparison Chart**

You are tasked with educating a new investor about the differences between Bitcoin and some prominent altcoins. Create a comparison chart highlighting key features, use cases, and a potential risk for each.

**Task:**
Complete the table below for Bitcoin, Ethereum, and Litecoin.

**Template:**

```markdown
**Cryptocurrency Comparison Chart**

| Feature/Coin     | Bitcoin (BTC)                                   | Ethereum (ETH)                                  | Litecoin (LTC)                                   |
| :--------------- | :---------------------------------------------- | :---------------------------------------------- | :----------------------------------------------- |
| **Primary Use Case** | Digital Gold, Store of Value, Peer-to-Peer Cash | Smart Contract Platform, dApps, DeFi, NFTs      | Faster Peer-to-Peer Payments, Testbed for Bitcoin |
| **Consensus Mechanism** | Proof-of-Work (SHA-256)                         | Proof-of-Stake (after "The Merge")              | Proof-of-Work (Scrypt)                           |
| **Block Time (Approx.)** | 10 minutes                                      | ~12-15 seconds                                  | 2.5 minutes                                      |
| **Total Supply (Max)** | 21 million BTC                                  | Unlimited (inflationary, but with burning mechanism) | 84 million LTC                                   |
| **Key Differentiating Feature** | First cryptocurrency, fixed supply, most secure | Smart contract functionality, Turing complete   | Faster transactions, different hashing algorithm |
| **Potential Risk** | Price volatility, scalability concerns          | Network congestion, high gas fees, smart contract bugs | Less widespread adoption than BTC/ETH, competition |
```

#### Assessment idea
1.  **Question:** Explain the fundamental difference between a soft fork and a hard fork in blockchain technology, using an example of each (even if hypothetical).
    **Correct Answer & Explanation:** A **soft fork** is a backward-compatible change to a blockchain's protocol, meaning nodes that haven't upgraded can still validate blocks from upgraded nodes, though they might not fully understand the new rules. It essentially tightens existing rules. An example is Bitcoin's Taproot upgrade; older wallets could still process transactions from Taproot-enabled wallets, even if they couldn't utilize the new features. A **hard fork**, conversely, is a non-backward-compatible change that requires all nodes to upgrade to the new rules. If some nodes don't upgrade, they will operate on a separate chain, effectively creating a new cryptocurrency. Bitcoin Cash (BCH) is a classic example, where a disagreement over block size led to a hard fork, creating a new chain and coin incompatible with the original Bitcoin chain.

2.  **Question:** A new altcoin claims to offer "instant, private transactions" and promises guaranteed 100x returns in a month. As a Certified Bitcoin Professional, what immediate red flags would you identify, and what advice would you give to someone considering investing?
    **Correct Answer & Explanation:** Several immediate red flags exist:
    *   **Guaranteed Returns:** Any investment promising guaranteed, high returns (especially 100x in a month) is almost certainly a scam. Legitimate investments carry risk and do not offer such guarantees.
    *   **"Instant" Transactions:** While some altcoins are faster than Bitcoin, truly "instant" (meaning irreversible and fully settled immediately) transactions are a technical challenge for decentralized systems. This claim often oversimplifies or misrepresents the underlying technology.
    *   **Privacy Claims:** While privacy coins exist, the combination of "instant" and "private" often comes with trade-offs or could be a cover for illicit activity, raising regulatory concerns.
    My advice would be: **Do your own thorough research (DYOR).** Investigate the project's whitepaper, team, technology, and community. Be extremely skeptical of promises that sound too good to be true. Understand the underlying tech, the problem it solves, and its market demand. Never invest more than you can afford to lose, and be wary of social media hype or pressure to invest quickly.

#### AI generation note
Design a 15-minute interactive web module. Start with a visually engaging comparison table of Bitcoin, Ethereum, and Litecoin, highlighting key specs. Include animated pop-ups for definitions of "soft fork" and "hard fork" with simple diagrams. Feature a "choose your adventure" style scenario where learners decide whether to invest in a new altcoin based on presented information, revealing risks and rewards. Use a balanced, educational tone. The interactive element should be a mini-quiz asking users to categorize different altcoins (e.g., stablecoin, smart contract platform) based on their descriptions.

---

### Chapter 6.4 — Scalability Solutions: Lightning Network and Beyond

#### Learning objectives
*   Explain the fundamental scalability challenges faced by the Bitcoin network.
*   Describe the architecture and operational principles of the Lightning Network.
*   Analyze the benefits and limitations of using the Lightning Network for Bitcoin transactions.
*   Identify other layer-2 solutions and sidechains designed to enhance Bitcoin's scalability.
*   Understand how scalability solutions contribute to Bitcoin's long-term viability as a global currency.

#### Detailed lesson content
Bitcoin's foundational design, prioritizing security and decentralization, inherently presents scalability challenges. The network's core limitation stems from its fixed block size (1MB) and average block time (10 minutes). This means the Bitcoin blockchain can only process a limited number of transactions per second, typically around 7 transactions per second (tps). While sufficient for its early days, this throughput is far too low to accommodate global demand for everyday payments, especially when compared to traditional payment networks like Visa, which handle thousands of tps. As adoption grows, this limitation leads to network congestion, higher transaction fees (as users bid for limited block space), and slower confirmation times. For Bitcoin to evolve from a "digital gold" (store of value) to a widely used "digital cash" (medium of exchange), these scalability hurdles must be addressed without compromising its core principles.

The most prominent and widely adopted layer-2 solution for Bitcoin is the **Lightning Network**. This innovative technology operates *off-chain*, meaning it doesn't record every transaction directly on the main Bitcoin blockchain. Instead, it creates a network of **payment channels** between users. When two users want to transact frequently, they open a payment channel by committing a small amount of Bitcoin to a 2-of-2 multisignature address on the main blockchain. This initial transaction is recorded on the main chain. Once the channel is open, they can conduct an unlimited number of transactions between themselves almost instantly and with extremely low fees, updating their respective balances within the channel without touching the main blockchain. Only when they decide to close the channel, or if one party wants to settle, is the *final* state of their channel balances broadcast and recorded back onto the main Bitcoin blockchain.

The true power of the Lightning Network lies in its ability to route payments through a network of connected channels. If Alice has an open channel with Bob, and Bob has an open channel with Carol, Alice can send a payment to Carol through Bob, even if Alice and Carol don't have a direct channel. This creates a mesh network where payments can hop across multiple channels, significantly expanding reach. The benefits are substantial: **near-instant transaction speeds**, **micro-payments** (fractions of a cent), and **drastically reduced fees** compared to on-chain transactions. This makes Bitcoin viable for everyday purchases, streaming payments, and small tips. For example, a user could pay for a coffee with Bitcoin via Lightning, with the transaction confirming in seconds and costing almost nothing.

However, the Lightning Network also has its limitations and common mistakes. One challenge is **channel liquidity**: for a payment to be routed, there must be sufficient funds on both sides of the payment path. If a channel is unbalanced (e.g., one side has sent all its funds), it cannot route payments in the opposite direction without rebalancing. Users might also face issues if their node goes offline, as channels require constant monitoring to prevent fraud (though watchtowers can mitigate this). Common mistakes include not properly managing channel liquidity, opening too few channels, or failing to back up channel state, which can lead to loss of funds if a node crashes. Safety notes for Lightning users emphasize running a reliable node, understanding channel management, and using reputable Lightning wallets that abstract away much of the complexity.

Beyond the Lightning Network, other scalability solutions are being explored. **Sidechains** are separate blockchains that are "pegged" to the Bitcoin main chain, allowing Bitcoin to be transferred to and from the sidechain. This enables sidechains to experiment with different consensus mechanisms, block sizes, and functionalities (like smart contracts) without altering Bitcoin's core protocol. Liquid Network, developed by Blockstream, is a prominent example of a Bitcoin sidechain used by exchanges and institutions for faster, confidential transactions. Another area of research involves **drivechains**, which propose a more decentralized way to peg Bitcoin to sidechains. While not as widely adopted as Lightning, these layer-2 and sidechain solutions collectively aim to offload transaction volume from the main Bitcoin chain, allowing it to remain a secure, decentralized settlement layer while enabling high-frequency, low-cost payments on secondary layers. This multi-layered approach is critical for Bitcoin's long-term evolution and its ability to serve a global user base.

#### Key concepts
*   **Scalability:** The ability of a system to handle a growing amount of work or its potential to be enlarged to accommodate that growth.
*   **Layer-2 Solution:** A framework or protocol built on top of an existing blockchain (Layer 1) to improve its scalability and efficiency by processing transactions off-chain.
*   **Lightning Network:** A layer-2 payment protocol built on top of Bitcoin, enabling fast, low-cost, off-chain transactions through payment channels.
*   **Payment Channel:** A two-party smart contract that allows participants to make multiple transactions off-chain, only settling the net result on the main blockchain.
*   **Off-chain Transaction:** A transaction that occurs outside the main blockchain, typically on a layer-2 network, and is not immediately recorded on the main ledger.
*   **Channel Liquidity:** The amount of funds available within a payment channel to facilitate transactions in a particular direction.
*   **Sidechain:** A separate blockchain that is cryptographically linked to a main blockchain (like Bitcoin), allowing assets to be transferred between the two chains.
*   **Liquid Network:** A Bitcoin sidechain developed by Blockstream, designed for faster, confidential transactions and the issuance of tokenized assets.

#### Hands-on activity
**Lightning Network Payment Simulation**

You want to send a small Bitcoin payment using the Lightning Network. Let's simulate the steps involved.

**Task:**
1.  Describe the initial on-chain transaction required to *open* a payment channel.
2.  Describe how multiple payments would occur *within* that open channel without touching the main chain.
3.  Describe the final on-chain transaction required to *close* the channel and settle the net balances.
4.  Provide an example of a Lightning Network invoice (no real funds needed, just the format).

**Template:**

```markdown
**Lightning Network Payment Simulation**

**Scenario:** Alice and Bob want to make frequent small payments to each other using the Lightning Network.

**1. Opening a Payment Channel (On-chain):**
*   Alice and Bob agree to open a channel.
*   They both commit a certain amount of Bitcoin (e.g., 0.01 BTC each) to a 2-of-2 multisignature address.
*   This transaction is broadcast to the Bitcoin network and confirmed in a block.
*   The transaction ID for this channel opening might look like: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2:0` (a real transaction ID followed by output index).

**2. Payments within the Open Channel (Off-chain):**
*   Once the channel is open, Alice can send 0.001 BTC to Bob. Their channel balance updates internally (Alice: 0.009 BTC, Bob: 0.011 BTC).
*   Bob can then send 0.0005 BTC back to Alice. Their channel balance updates again (Alice: 0.0095 BTC, Bob: 0.0105 BTC).
*   These updates are signed by both parties but are NOT broadcast to the main Bitcoin blockchain. They are instant and incur minimal fees.
*   This process can repeat many times.

**3. Closing the Payment Channel (On-chain):**
*   When Alice and Bob decide to stop transacting or one party wants to settle, they sign a final transaction that reflects their current net balances (e.g., Alice receives 0.0095 BTC, Bob receives 0.0105 BTC).
*   This final transaction is broadcast to the Bitcoin network and confirmed in a block.
*   This is the only other on-chain transaction besides the opening.

**4. Example Lightning Network Invoice:**
*   `lnbc10u1pjg202spp5h554h2k8f4702j822294q684f50k02047p2f47q74q5q4q3q2q1q0q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q55q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q55q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5

### Chapter 6.5 — Emerging Technologies and the Broader Blockchain Ecosystem

#### Learning objectives
*   Explain how Bitcoin's underlying technology inspired the development of alternative cryptocurrencies (altcoins).
*   Differentiate between various categories of altcoins, such as Layer 1 blockchains, utility tokens, and stablecoins.
*   Describe the core concepts of Decentralized Finance (DeFi) and its relationship to traditional financial services.
*   Understand Non-Fungible Tokens (NFTs) and their applications beyond digital art.
*   Discuss the role of enterprise blockchain solutions and their distinction from public blockchains like Bitcoin.

#### Detailed lesson content
Bitcoin, as the pioneering cryptocurrency, laid the foundational principles for an entirely new digital economy. Its revolutionary use of cryptography, distributed ledgers, and consensus mechanisms proved that a decentralized, peer-to-peer digital cash system was not only possible but could thrive. However, Bitcoin was designed with a very specific purpose: to be a robust, censorship-resistant, and scarce digital store of value and medium of exchange. While incredibly successful in this regard, its design choices, such as a relatively simple scripting language and a focus on security over transaction throughput, led many innovators to explore alternative blockchain designs. This exploration gave rise to a vast and diverse ecosystem of "altcoins" – cryptocurrencies other than Bitcoin – each aiming to address different use cases, improve upon perceived limitations, or introduce entirely new functionalities. Understanding this broader ecosystem is crucial for any Certified Bitcoin Professional, as it highlights Bitcoin's influence while also showcasing the diverse directions blockchain technology has taken.

The altcoin landscape is incredibly varied, but we can categorize them to better understand their roles. One significant category comprises **Layer 1 blockchains**, which are entirely new blockchain networks with their own native cryptocurrency, often designed to support more complex applications than Bitcoin. Ethereum, for instance, introduced **smart contracts**, which are self-executing contracts with the terms of the agreement directly written into code. This innovation allowed developers to build decentralized applications (dApps) on top of its blockchain, leading to a programmable money paradigm. Other Layer 1 blockchains like Solana, Avalanche, or Polkadot aim to improve scalability, interoperability, or offer different consensus mechanisms. Beyond these foundational blockchains, we find **utility tokens**, which grant holders access to a specific product or service within an ecosystem. For example, Filecoin (FIL) tokens are used to pay for decentralized storage, while Basic Attention Token (BAT) rewards users for viewing privacy-respecting ads. A crucial development in the altcoin space has been the emergence of **stablecoins**, cryptocurrencies designed to minimize price volatility by being pegged to a stable asset, typically fiat currencies like the US dollar (e.g., USDT, USDC) or even commodities. Stablecoins are vital for providing stability within the highly volatile crypto markets, facilitating trading, lending, and payments without the constant risk of price fluctuations. Understanding these different types helps us appreciate the diverse solutions and innovations that have blossomed from Bitcoin's original seed.

One of the most impactful innovations stemming from smart contract platforms is **Decentralized Finance (DeFi)**. DeFi refers to an ecosystem of financial applications built on blockchain technology, primarily Ethereum, that aim to recreate traditional financial services in a decentralized, permissionless, and transparent manner. Instead of relying on central intermediaries like banks or brokers, DeFi protocols use smart contracts to automate transactions and enforce agreements. Key components of DeFi include **decentralized exchanges (DEXs)** like Uniswap or SushiSwap, which allow users to trade cryptocurrencies directly from their wallets without needing to deposit funds with a centralized entity. Lending and borrowing protocols, such as Aave or Compound, enable users to lend out their crypto assets to earn interest or borrow against their holdings. Other DeFi applications include yield farming, insurance, and synthetic assets. While DeFi offers unprecedented access to financial services and often higher returns, it comes with its own set of risks. These include potential smart contract bugs, which can lead to loss of funds, impermanent loss in liquidity pools, and the inherent volatility of the underlying crypto assets. As a CBP, it's important to recognize that while Bitcoin itself is not a DeFi platform, its existence paved the way for the underlying technology and philosophical shift towards decentralization that underpins DeFi.

Another significant innovation in the broader blockchain ecosystem is **Non-Fungible Tokens (NFTs)**. Unlike Bitcoin or other fungible cryptocurrencies, where each unit is identical and interchangeable, NFTs are unique digital assets stored on a blockchain. They represent ownership or proof of authenticity of a specific item, whether digital or physical. Initially gaining prominence through digital art and collectibles, NFTs have expanded into various domains. In gaming, NFTs can represent in-game items, characters, or land, allowing players true ownership and the ability to trade them outside the game's ecosystem. They are also being explored for ticketing, real estate deeds, digital identity, and even supply chain tracking. Most NFTs are built on the Ethereum blockchain using specific token standards like ERC-721 (for unique items) or ERC-1155 (for semi-fungible items). The value of an NFT often derives from its verifiable scarcity, provenance (the history of ownership), and the community or utility associated with it. While the NFT market has seen periods of intense speculation, the underlying technology offers powerful tools for managing digital ownership and rights in a decentralized manner. Common mistakes include viewing NFTs solely as "JPEGs" without understanding the underlying smart contract and ownership implications, or underestimating the potential for market manipulation and scams.

Finally, while Bitcoin and the public blockchain ecosystem thrive on permissionless access and decentralization, a parallel development has been the rise of **enterprise blockchain solutions**. These are typically **permissioned blockchains**, meaning that participants must be approved to join the network, and access rights are often managed by a central authority or consortium. Unlike Bitcoin's open and anonymous nature, enterprise blockchains prioritize privacy, control, and scalability for specific business applications. Use cases include supply chain management (tracking goods from origin to consumer), interbank settlements (streamlining cross-border payments), and digital identity management. Prominent examples include Hyperledger Fabric (an open-source project hosted by the Linux Foundation) and R3 Corda. These solutions often leverage distributed ledger technology (DLT) similar to Bitcoin but adapt it to meet corporate governance and regulatory requirements. While they may not embody the pure decentralization ethos of Bitcoin, they demonstrate the versatility of blockchain technology in solving real-world business problems. It's crucial for a CBP to understand that while these enterprise solutions share technological roots with Bitcoin, their design philosophy, governance models, and target applications are distinctly different, often sacrificing some degree of decentralization for efficiency and regulatory compliance.

#### Key concepts
*   **Altcoins:** Cryptocurrencies other than Bitcoin, often designed for specific use cases or to improve upon perceived limitations of Bitcoin.
*   **Layer 1 Blockchains:** Independent blockchain networks with their own native cryptocurrency, designed to host decentralized applications and smart contracts (e.g., Ethereum).
*   **Smart Contracts:** Self-executing contracts with the terms of the agreement directly written into code, running on a blockchain.
*   **Decentralized Finance (DeFi):** An ecosystem of financial applications built on blockchain technology that aims to recreate traditional financial services in a decentralized, permissionless, and transparent manner.
*   **Decentralized Exchanges (DEXs):** Platforms that allow users to trade cryptocurrencies directly from their wallets without needing a central intermediary.
*   **Stablecoins:** Cryptocurrencies designed to maintain a stable value by being pegged to a stable asset, typically fiat currency (e.g., USDT, USDC).
*   **Non-Fungible Tokens (NFTs):** Unique digital assets stored on a blockchain, representing ownership or proof of authenticity of a specific item.
*   **ERC-721 / ERC-1155:** Ethereum token standards commonly used for creating NFTs. ERC-721 is for unique, non-fungible tokens, while ERC-1155 supports both fungible and non-fungible tokens.
*   **Enterprise Blockchain:** Blockchain solutions designed for specific business applications, often permissioned, prioritizing privacy, control, and scalability over public decentralization.
*   **Permissioned Blockchain:** A type of blockchain where participants must be approved to join the network, and access rights are managed by a central authority or consortium.

#### Hands-on activity
**Altcoin Comparison Research**

**Objective:** To understand the fundamental differences and design philosophies between Bitcoin and a prominent altcoin, specifically one that introduced smart contract functionality.

**Instructions:**
1.  Choose one of the following Layer 1 altcoins: Ethereum (ETH), Solana (SOL), or Cardano (ADA).
2.  Conduct research to identify and compare the chosen altcoin with Bitcoin across the following criteria:
    *   **Primary Design Goal/Purpose:** What problem was each designed to solve?
    *   **Consensus Mechanism:** How do transactions get validated and new blocks added to the chain for each? (e.g., Proof-of-Work, Proof-of-Stake).
    *   **Programmability/Smart Contracts:** Does it support smart contracts? If so, what are the implications?
    *   **Transaction Speed & Cost:** General comparison of how quickly transactions are processed and their typical fees.
    *   **Scalability Approach:** How does each project aim to handle a growing number of users and transactions?
    *   **Decentralization Philosophy:** How does each project approach decentralization in practice?

3.  Present your findings in a short report (e.g., a few paragraphs or a simple table) highlighting the key differences and similarities. Reflect on why these differences matter for the respective use cases.

**Example Research Template (for Ethereum vs. Bitcoin):**

| Feature                   | Bitcoin (BTC)                                        | Ethereum (ETH)                                        |
| :------------------------ | :--------------------------------------------------- | :---------------------------------------------------- |
| **Primary Design Goal**   | Decentralized digital cash, store of value.          | World computer, platform for dApps and smart contracts. |
| **Consensus Mechanism**   | Proof-of-Work (PoW)                                  | Currently Proof-of-Stake (PoS) via "The Merge"        |
| **Programmability**       | Limited scripting language (UTXO-based).             | Turing-complete smart contracts (Account-based).      |
| **Transaction Speed**     | ~7 transactions per second (TPS), 10-minute blocks.  | ~15-30 TPS (pre-sharding), ~12-second blocks.         |
| **Transaction Cost**      | Varies, dependent on network congestion and block space. | Varies significantly ("gas fees"), dependent on network congestion and computation complexity. |
| **Scalability Approach**  | Layer 2 solutions (e.g., Lightning Network), SegWit. | Sharding, Layer 2 solutions (e.g., rollups).          |
| **Decentralization**      | High, large number of independent miners/nodes.      | High, but PoS introduces different centralization vectors (staking pools). |

#### Assessment idea
1.  **Question:** Which of the following best describes a stablecoin and its primary purpose?
    a) A cryptocurrency designed to be an alternative to Bitcoin, offering faster transaction speeds.
    b) A unique digital asset stored on a blockchain, representing ownership of a specific item.
    c) A cryptocurrency whose value is pegged to a stable asset like a fiat currency, aiming to reduce price volatility.
    d) A token that grants holders access to specific services or features within a decentralized application.

    **Correct Answer:** c) A cryptocurrency whose value is pegged to a stable asset like a fiat currency, aiming to reduce price volatility.
    **Explanation:** Stablecoins like USDT or USDC are specifically designed to maintain a stable value, typically by being collateralized or algorithmically linked to a fiat currency. This stability makes them useful for trading, lending, and payments within the volatile cryptocurrency market, differentiating them from speculative altcoins, unique NFTs, or utility tokens.

2.  **Question:** A company wants to track the origin and journey of its high-value products through its supply chain, ensuring transparency and reducing fraud, but needs to control who can view and add data to the ledger. Which type of blockchain solution would be most suitable for this scenario, and why?
    a) A public, permissionless blockchain like Bitcoin, because it offers the highest level of decentralization.
    b) A Layer 1 smart contract platform like Ethereum, because it allows for complex programmable logic.
    c) A stablecoin, because it provides price stability for transactions within the supply chain.
    d) An enterprise, permissioned blockchain solution (e.g., Hyperledger Fabric), because it allows for controlled access, privacy, and scalability tailored for business needs.

    **Correct Answer:** d) An enterprise, permissioned blockchain solution (e.g., Hyperledger Fabric), because it allows for controlled access, privacy, and scalability tailored for business needs.
    **Explanation:** While public blockchains offer decentralization, a company often requires control over who participates and views sensitive supply chain data. Permissioned enterprise blockchains are designed for such scenarios, providing the benefits of DLT (transparency, immutability) while allowing organizations to manage access, comply with regulations, and optimize for specific business processes without the openness of a public network.

#### AI generation note
Create a 12-15 minute mixed-format lesson. Start with an animated explainer video (6-8 minutes) illustrating the evolution from Bitcoin to altcoins, DeFi, and NFTs, using clear visual analogies for each concept (e.g., Bitcoin as digital gold, Ethereum as a programmable world computer, NFTs as digital certificates of authenticity). Follow this with interactive diagrams (4-5 minutes) that allow learners to click on different altcoin categories (Layer 1, Stablecoin, Utility Token) or DeFi components (DEX, Lending Protocol) to reveal pop-up explanations and specific project examples. Include a side-by-side comparison table for Bitcoin vs. Ethereum, highlighting key differences in purpose and technology. Conclude with a 2-minute segment discussing enterprise blockchains with a simple architecture diagram showing permissioned access. The tone should be professional and informative, with clear warnings about the risks and speculative nature of parts of the broader ecosystem. End with a drag-and-drop interactive exercise where learners categorize 5-6 crypto projects (e.g., Bitcoin, Ethereum, USDT, an NFT marketplace, a specific enterprise blockchain) into their appropriate ecosystem roles. Ensure all visuals have descriptive alt text and the video includes full captions and a transcript.
---

## Final Capstone Project

Congratulations on reaching this stage! The capstone project is your opportunity to apply the knowledge and skills you've gained throughout the Certified Bitcoin Professional course. You'll choose one of the following projects to demonstrate your understanding of Bitcoin's core concepts, security principles, and practical applications. Each project is designed to integrate learning from multiple modules, providing a holistic assessment of your capabilities. Remember to focus on clarity, accuracy, and a strong understanding of the underlying Bitcoin principles.

### Project Option 1: Bitcoin Transaction Explorer & UTXO Visualizer

**Description:**
Develop a simple web-based or command-line application that allows users to input a Bitcoin address or transaction ID and retrieve relevant information. The core functionality will be to display transaction details, including inputs, outputs, amounts, and confirmations. For an address, it should list recent transactions and attempt to visualize the Unspent Transaction Output (UTXO) set associated with that address, showing how funds are received and spent. This project will deepen your understanding of transaction structure, UTXOs, and how to interact with public blockchain data.

**Requirements:**
*   **Input:** Accept a Bitcoin address or transaction ID from the user.
*   **Data Retrieval:** Utilize a public Bitcoin API (e.g., Blockstream.info API, BlockCypher API, or similar) to fetch transaction and address data. You are not expected to run your own full node.
*   **Transaction Display:** For a given transaction ID, display: transaction hash, block height, confirmation count, total input value, total output value, transaction fee, and a clear list of all input and output addresses with their respective amounts.
*   **Address UTXO Summary:** For a given address, list its current balance and display a simplified view of its UTXO set. This could be a list of unspent transaction outputs, each showing the transaction ID, output index, and amount.
*   **User Interface (Optional but Recommended):** A basic command-line interface (CLI) or a simple HTML/CSS/JavaScript web page to present the information clearly.
*   **Code Structure:** Well-commented, readable code in a language like Python, JavaScript, or Go.

**Stretch Goals:**
*   **Transaction Graph:** Attempt to visualize the flow of funds for a specific transaction, showing which UTXOs were consumed and which new UTXOs were created.
*   **Address History:** Display the full transaction history for an address, not just its UTXOs.
*   **Error Handling:** Implement robust error handling for invalid inputs or API failures.
*   **Multiple Networks:** Allow users to switch between mainnet and testnet data.

**Evaluation Criteria:**
*   **Accuracy:** Correct retrieval and display of Bitcoin data (transaction details, UTXOs).
*   **Functionality:** All core requirements are met and work as expected.
*   **Understanding of Concepts:** The project demonstrates a clear understanding of UTXOs, transaction inputs/outputs, and blockchain explorers.
*   **Code Quality:** Readability, comments, and logical structure.
*   **Security Awareness:** Proper handling of API keys (if any) and understanding that this is a read-only tool, not a wallet.

**Estimated Time:** 15-20 hours

### Project Option 2: Simplified Bitcoin Wallet Address Generator & Validator

**Description:**
Create a program that conceptually demonstrates how Bitcoin addresses are generated from private keys and how addresses can be validated. This project will involve generating a random private key (for demonstration purposes, not for real funds), deriving its corresponding public key, and then generating a P2PKH (Pay-to-Public-Key-Hash) Bitcoin address. You will also implement a basic address validation function that checks the format and checksum of a given Bitcoin address. **Crucially, this project is for educational purposes only; the generated keys should NEVER be used for real Bitcoin, and strong warnings about real-world key generation security must be included.**

**Requirements:**
*   **Private Key Generation (Conceptual):** Generate a random 256-bit number (represented as a hexadecimal string) to serve as a private key.
*   **Public Key Derivation (Conceptual):** From the private key, derive the corresponding uncompressed public key (X and Y coordinates). You can use a cryptographic library for elliptic curve operations (e.g., `ecdsa` in Python, `elliptic` in JavaScript, or `secp256k1` bindings).
*   **P2PKH Address Generation:** From the public key, perform the SHA-256 and RIPEMD-160 hashing steps, add the network byte (0x00 for mainnet), and then perform double SHA-256 for the checksum. Finally, Base58Check encode the result to produce a P2PKH Bitcoin address.
*   **Address Validation:** Implement a function that takes a Base58Check encoded Bitcoin address, decodes it, and verifies its checksum. Report whether the address is valid or invalid.
*   **Security Warning:** Prominently display warnings that this tool is for educational purposes only and should not be used to generate keys for real funds due to insecure randomness and lack of proper wallet practices.

**Stretch Goals:**
*   **WIF (Wallet Import Format) Encoding:** Implement the encoding of the private key into WIF format.
*   **Testnet Address Generation:** Add support for generating testnet addresses (network byte 0x6F).
*   **SegWit Address (Bech32) Validation (Conceptual):** Research and conceptually describe the validation steps for Bech32 addresses, even if full implementation is beyond the scope.
*   **Mnemonic Phrase (Seed) Conceptualization:** Explain how mnemonic phrases are used to generate private keys, without actually implementing BIP-39.

**Evaluation Criteria:**
*   **Accuracy of Derivation:** Correct application of cryptographic steps (hashing, Base58Check) to derive and validate addresses.
*   **Understanding of Key Concepts:** Clear demonstration of private keys, public keys, hashing, and Base58Check encoding.
*   **Functionality:** Both generation and validation functions work correctly.
*   **Security Awareness:** Strong emphasis on the educational nature of the tool and explicit warnings about real-world key security.
*   **Code Quality:** Readability, comments, and logical structure.

**Estimated Time:** 18-22 hours

### Project Option 3: Bitcoin Block Header Parser & Difficulty Calculator

**Description:**
Develop a program that can parse a raw Bitcoin block header and extract its key components. Given a hexadecimal string representing a block header, your program should correctly identify and display the version, previous block hash, Merkle root, timestamp, difficulty target (nBits), and nonce. Additionally, you will implement a function to calculate the actual difficulty from the nBits field and compare it to the target. This project reinforces your understanding of block structure, hashing, and the difficulty adjustment mechanism.

**Requirements:**
*   **Input:** Accept a raw hexadecimal string representing a Bitcoin block header (80 bytes).
*   **Header Parsing:** Correctly parse the 80-byte header into its constituent fields:
    *   `version` (4 bytes, little-endian)
    *   `prev_block_hash` (32 bytes, little-endian, then reversed for display)
    *   `merkle_root` (32 bytes, little-endian, then reversed for display)
    *   `timestamp` (4 bytes, little-endian, Unix epoch time)
    *   `nBits` (4 bytes, little-endian, compact representation of difficulty target)
    *   `nonce` (4 bytes, little-endian)
*   **Display:** Present the parsed fields in a human-readable format. For hashes, display them in big-endian (standard) format. Convert the timestamp to a human-readable date/time.
*   **Difficulty Calculation:** Implement a function that takes the `nBits` value and calculates the actual target hash and the human-readable difficulty value based on the Bitcoin protocol's definition (e.g., `target = coefficient * 2^(8 * (exponent - 3))`).
*   **Example Headers:** Provide a few example block headers (e.g., genesis block, a recent block) for testing.
*   **Code Structure:** Well-commented, readable code in a language like Python, JavaScript, or Go.

**Stretch Goals:**
*   **Block Hash Verification:** Calculate the double SHA-256 hash of the parsed block header and compare it to a known block hash (if provided).
*   **Target Comparison:** Visually compare the calculated target hash with the actual block hash to illustrate the "proof of work" concept.
*   **Difficulty Adjustment Logic (Conceptual):** Briefly explain or outline the logic behind Bitcoin's 2016-block difficulty adjustment.
*   **Block Explorer Link:** Generate a link to a block explorer for the parsed block hash.

**Evaluation Criteria:**
*   **Accuracy of Parsing:** Correctly extracts and interprets all fields from the raw block header.
*   **Correct Difficulty Calculation:** The `nBits` to difficulty conversion is accurate according to Bitcoin's protocol.
*   **Understanding of Concepts:** Demonstrates a clear understanding of block structure, hashing, timestamps, and the difficulty mechanism.
*   **Functionality:** All parsing and calculation functions work as expected.
*   **Code Quality:** Readability, comments, and logical structure.

**Estimated Time:** 16-20 hours

---

## Final Examination

This final examination assesses your comprehensive understanding of Bitcoin's technology, economics, and security principles covered throughout the Certified Bitcoin Professional course. Aim for clarity, precision, and thoroughness in your answers.

### Section 1: Concept Definitions (4 questions)

**Question 1:** Define "Unspent Transaction Output (UTXO)" and explain its role in Bitcoin's accounting model.
**Answer:**
An Unspent Transaction Output (UTXO) is an amount of Bitcoin that has been received in a transaction and has not yet been spent. It represents a discrete, spendable unit of value. In Bitcoin's accounting model, instead of tracking account balances like a traditional bank, the network tracks all UTXOs. When a new transaction is created, it consumes one or more existing UTXOs as inputs and creates new UTXOs as outputs. The sum of the input UTXOs must be greater than or equal to the sum of the new output UTXOs, with the difference typically becoming the transaction fee. This model prevents double-spending and ensures that every unit of Bitcoin has a clear, traceable origin and destination.

**Question 2:** What is a "Merkle Tree" and how is it used in Bitcoin blocks?
**Answer:**
A Merkle Tree (also known as a hash tree) is a data structure used in Bitcoin to efficiently summarize all transactions in a block. It's a binary tree where every leaf node is a hash of a transaction, and every non-leaf node is a hash of its two child nodes. The topmost hash is called the Merkle Root. The Merkle Root is included in the block header. This structure allows for efficient verification of transaction inclusion: a full node can quickly verify if a specific transaction is part of a block by checking its hash against a small number of hashes (a "Merkle proof") leading up to the Merkle Root, without needing to download and process every single transaction in the block.

**Question 3:** Explain the concept of "Difficulty Adjustment" in Bitcoin. Why is it necessary, and how often does it occur?
**Answer:**
Difficulty Adjustment is a mechanism in Bitcoin that automatically recalibrates the mining difficulty to ensure that new blocks are found, on average, every 10 minutes. It is necessary to maintain a consistent block production rate regardless of changes in the total mining power (hash rate) on the network. Without it, if more miners join, blocks would be found too quickly; if miners leave, blocks would be found too slowly. The adjustment occurs approximately every 2016 blocks, which is roughly every two weeks (2016 blocks * 10 minutes/block = 20160 minutes = 14 days). The network compares the actual time it took to mine the previous 2016 blocks against the target time (14 days) and adjusts the difficulty proportionally.

**Question 4:** What is "Segregated Witness (SegWit)" and what problems did it aim to solve?
**Answer:**
Segregated Witness (SegWit) is a soft fork upgrade to the Bitcoin protocol activated in 2017. Its primary purpose was to "segregate" (separate) transaction witness data (digital signatures and public keys) from the transaction's core data. This separation allowed for two main benefits:
1.  **Transaction Malleability Fix:** By moving the witness data outside the transaction ID (TxID) calculation, SegWit fixed a long-standing issue where a third party could slightly alter a transaction's signature without changing its core intent, thus changing its TxID before it was confirmed. This was particularly problematic for multi-step transactions like those used in the Lightning Network.
2.  **Block Size Increase (Effective):** By moving witness data to a separate part of the block that is weighted differently (witness data is counted as 1/4th the size of regular transaction data for block weight calculation), SegWit effectively increased the block capacity without changing the strict 1MB block size limit. This allowed more transactions to fit into each block, improving network throughput.

### Section 2: Code Tracing & Interpretation (3 questions)

**Question 5:** Consider the following simplified Python code snippet for hashing. What would be the output of `print(hash_data("Hello Bitcoin!"))`?

```python
import hashlib

def hash_data(data_string):
    # Encode the string to bytes, then apply SHA-256
    hashed_bytes = hashlib.sha256(data_string.encode('utf-8')).hexdigest()
    return hashed_bytes

# What is the output?
# print(hash_data("Hello Bitcoin!"))
```

**Answer:**
The output would be:
`422791443657b9871146607212d1b0d268a261266e74b3310f81d5822e03222a`

**Explanation:** The `hashlib.sha256()` function takes bytes as input. `data_string.encode('utf-8')` converts the string "Hello Bitcoin!" into its UTF-8 byte representation. Then, `hexdigest()` converts the resulting 32-byte hash into a hexadecimal string, which is the standard way to represent SHA-256 hashes.

**Question 6:** Imagine a Bitcoin transaction `TxA` has two inputs and three outputs. One of the outputs from `TxA` (let's say Output #1, with 0.5 BTC) is then used as an input for a new transaction `TxB`. Describe how `TxB` would reference `TxA`'s Output #1 as its input.
**Answer:**
Transaction `TxB` would reference `TxA`'s Output #1 as an input by including two key pieces of information within its input structure:
1.  **Transaction ID (TxID) of `TxA`:** This is the unique identifier (hash) of the transaction that created the UTXO being spent.
2.  **Output Index of `TxA`:** This is the specific index number (0-based) of the output within `TxA` that is being spent. In this case, it would be `1` (since it's Output #1).

So, `TxB`'s input would effectively say: "I am spending the output at index 1 from the transaction identified by [TxID of TxA]." This precise referencing ensures that only a specific UTXO can be spent and prevents ambiguity.

**Question 7:** Given the following simplified representation of a private key and its corresponding public key. If you were to create a P2PKH Bitcoin address from this, what would be the *next conceptual step* after hashing the public key with SHA-256, and what would be the *purpose* of that step?

*   **Private Key (conceptual):** `K`
*   **Public Key (conceptual):** `P = K * G` (where G is the generator point)
*   **Step 1: SHA-256(P)** -> `H1`

**Answer:**
The next conceptual step after `SHA-256(P)` (resulting in `H1`) would be to apply the **RIPEMD-160 hash function** to `H1`.

**Purpose:** The purpose of this step is to further compress the hash and create a shorter, fixed-size hash (160 bits or 20 bytes) that is used as the core identifier for the Bitcoin address. This 20-byte hash is known as the Public Key Hash (PKH). This shorter hash is more efficient for storage and transmission, and it reduces the chance of collisions compared to using the full SHA-256 hash of the public key directly for address creation. The resulting 20-byte hash (`RIPEMD-160(SHA-256(P))`) is what gets encoded into the final P2PKH Bitcoin address.

### Section 3: Code Writing & Application (4 questions)

**Question 8:** Write a Python function `satoshi_to_btc(satoshi_amount)` that takes an integer `satoshi_amount` and returns its equivalent value in Bitcoin (BTC) as a float. Remember that 1 BTC = 100,000,000 satoshis.
**Answer:**

```python
def satoshi_to_btc(satoshi_amount):
    """
    Converts a satoshi amount to its equivalent Bitcoin (BTC) value.

    Args:
        satoshi_amount (int): The amount in satoshis.

    Returns:
        float: The equivalent amount in BTC.
    """
    if not isinstance(satoshi_amount, int) or satoshi_amount < 0:
        raise ValueError("satoshi_amount must be a non-negative integer.")
    
    # 1 BTC = 100,000,000 satoshis
    btc_amount = satoshi_amount / 100_000_000.0
    return btc_amount

# Example usage:
# print(satoshi_to_btc(50000000)) # Expected: 0.5
# print(satoshi_to_btc(100000000)) # Expected: 1.0
# print(satoshi_to_btc(1)) # Expected: 1e-08
```

**Partial Credit Guidance:** Full credit for correct division and return type. Partial credit for correct logic but incorrect handling of float conversion or edge cases (e.g., negative input).

**Question 9:** Describe the basic steps (without writing full code) to generate a new, random private key suitable for a Bitcoin wallet. What are the critical security considerations for this process?
**Answer:**
**Basic Steps:**
1.  **Generate a Cryptographically Secure Random Number:** The fundamental step is to generate a truly random 256-bit number. This number will serve as the private key. This randomness must come from a high-quality entropy source, such as a hardware random number generator (HRNG) or a cryptographically secure pseudo-random number generator (CSPRNG) seeded with sufficient entropy from the operating system (e.g., `/dev/urandom` on Linux, `CryptGenRandom` on Windows).
2.  **Ensure it's within Range:** The generated 256-bit number must be greater than 0 and less than the order of the secp256k1 elliptic curve (N), which is a very large prime number (approximately 2^256). If it falls outside this range, it should be discarded and a new number generated.
3.  **Represent as Hexadecimal:** The 256-bit number is typically represented as a 64-character hexadecimal string.

**Critical Security Considerations:**
*   **True Randomness:** This is paramount. If the random number generation is predictable, biased, or has insufficient entropy, an attacker could potentially guess or reproduce the private key, leading to the loss of funds. Never use simple `rand()` functions from standard libraries.
*   **Offline Generation:** For maximum security, private keys should ideally be generated on an air-gapped (offline) computer that has never been connected to the internet. This prevents malware or network eavesdropping from compromising the key during generation.
*   **Secure Storage:** Once generated, the private key must be stored securely. This means encryption, physical security, or mnemonic phrases (BIP-39 seeds) stored offline. Never store unencrypted private keys on an internet-connected device.
*   **Backup:** A secure backup strategy is essential. If the private key is lost or destroyed, the funds associated with it are permanently inaccessible.
*   **No Reuse:** While not strictly part of generation, it's a best practice to avoid reusing private keys for multiple addresses, though modern wallets handle this with hierarchical deterministic (HD) key generation.

**Question 10:** You are building a simple script to monitor the Bitcoin network. Write a Python function `is_valid_block_hash(block_hash)` that checks if a given string `block_hash` *could potentially* be a valid Bitcoin block hash. A valid block hash is a 64-character hexadecimal string.
**Answer:**

```python
import re

def is_valid_block_hash(block_hash):
    """
    Checks if a given string could potentially be a valid Bitcoin block hash.
    A valid block hash is a 64-character hexadecimal string.

    Args:
        block_hash (str): The string to check.

    Returns:
        bool: True if it's a 64-character hexadecimal string, False otherwise.
    """
    if not isinstance(block_hash, str):
        return False
    
    # Use a regular expression to check for 64 hexadecimal characters
    # ^ asserts position at start of the string
    # [0-9a-fA-F] matches any hexadecimal character
    # {64} matches exactly 64 occurrences of the preceding character set
    # $ asserts position at the end of the string
    return bool(re.fullmatch(r'^[0-9a-fA-F]{64}$', block_hash))

# Example usage:
# print(is_valid_block_hash("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f")) # True (Genesis block hash)
# print(is_valid_block_hash("abc123def456")) # False (too short)
# print(is_valid_block_hash("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26G")) # False (invalid char 'G')
# print(is_valid_block_hash(12345)) # False (not a string)
```

**Partial Credit Guidance:** Full credit for correct regex or equivalent manual string checks (length and character set). Partial credit for checking only length or only hexadecimal characters.

**Question 11:** Explain how a Bitcoin transaction fee is determined and why it's necessary. What happens if a transaction has too low a fee?
**Answer:**
A Bitcoin transaction fee is an incentive paid by the sender of a transaction to the miner who includes that transaction in a block. It is not a fixed amount but is typically determined by the transaction's size in bytes (or "virtual bytes" for SegWit transactions) and the current demand for block space. Senders usually specify a "fee rate" (e.g., satoshis per virtual byte) they are willing to pay.

**How it's determined:**
The fee is implicitly calculated as the difference between the sum of the input UTXO values and the sum of the output UTXO values.
`Fee = Sum(Input UTXOs) - Sum(Output UTXOs)`
Miners prioritize transactions with higher fee rates because they want to maximize their revenue.

**Why it's necessary:**
1.  **Incentive for Miners:** Fees compensate miners for their work in securing the network, processing transactions, and expending electricity. This incentive is crucial as the block subsidy (newly minted Bitcoin) halves over time.
2.  **Spam Prevention:** Fees act as a deterrent against network spam. Without fees, an attacker could flood the network with tiny, economically worthless transactions, potentially clogging the blockchain.
3.  **Resource Allocation:** Fees help allocate the scarce resource of block space. When the network is busy, higher fees are required to get a transaction confirmed quickly, ensuring that economically valuable transactions are prioritized.

**What happens if a transaction has too low a fee:**
If a transaction has too low a fee, miners will likely ignore it in favor of transactions offering higher fees. This can lead to the transaction being:
*   **Unconfirmed for a long time:** It might sit in the mempool (a pool of unconfirmed transactions) for hours, days, or even weeks.
*   **Dropped from the mempool:** Many nodes have policies to drop transactions with very low fees after a certain period or if their mempool gets too full, meaning the transaction might never get confirmed unless rebroadcast with a higher fee (using Replace-by-Fee, RBF, or Child-Pays-For-Parent, CPFP).
*   **Eventually confirmed (but slowly):** During periods of low network activity, even low-fee transactions might eventually be picked up by a miner.

### Section 4: Design & Debugging Problems (3 questions)

**Question 12:** A new Bitcoin user is confused about why their wallet shows a different balance than simply adding up all the Bitcoin they've ever received. Explain to them, using the concept of UTXOs, why this discrepancy might occur and how their wallet actually calculates their spendable balance.
**Answer:**
"That's a very common point of confusion, and it highlights one of the unique aspects of Bitcoin's design! You're right, your wallet doesn't just sum up every incoming transaction. Instead, it uses something called 'Unspent Transaction Outputs,' or UTXOs.

Imagine Bitcoin isn't like a bank account where you have a single running balance. Think of it more like having a collection of physical cash notes of different denominations. Every time someone sends you Bitcoin, it's like they're giving you a new 'note' (a UTXO) for a specific amount. When you want to spend Bitcoin, you don't just deduct from a total balance; you actually have to 'spend' one or more of these existing 'notes' (UTXOs) in their entirety.

So, if you've received 0.1 BTC, then 0.2 BTC, and then 0.05 BTC, your wallet doesn't see a single 0.35 BTC balance. It sees three separate UTXOs: one for 0.1 BTC, one for 0.2 BTC, and one for 0.05 BTC.

Your 'spendable balance' that your wallet displays is simply the *sum of all these individual UTXOs* that are currently owned by your wallet's addresses and haven't been spent yet. If you've spent some of those 'notes' in previous transactions, they are no longer part of your UTXO set, and therefore no longer contribute to your spendable balance, even if you technically 'received' them at some point. This UTXO model is what makes Bitcoin so secure and prevents double-spending."

**Question 13:** A user reports that their Bitcoin transaction, sent an hour ago, is still unconfirmed. They used a standard wallet and didn't specify a custom fee. What are the most likely reasons for this delay, and what steps could they potentially take (if any) to expedite it?
**Answer:**
"It's frustrating when a transaction takes longer than expected to confirm, but there are a few common reasons for this, especially if you didn't specify a custom fee:

**Most Likely Reasons for Delay:**
1.  **Network Congestion:** The most frequent reason is that the Bitcoin network is experiencing high demand. When many people are sending transactions simultaneously, the 'mempool' (where unconfirmed transactions wait) gets full. Miners prioritize transactions with higher fees to maximize their profit, so if your transaction's fee rate is lower than others, it will simply wait longer.
2.  **Low Default Fee:** Many wallets use a default or 'average' fee rate. If the network suddenly becomes busy, that 'average' fee might become too low to be prioritized by miners.
3.  **Transaction Size:** Larger transactions (those with more inputs or outputs) take up more block space, and even with the same fee rate, they might be slightly less attractive to miners than smaller transactions with the same fee rate, though this is less common than overall fee rate being the primary factor.

**Potential Steps to Expedite (if applicable):**
1.  **Check Mempool Status:** First, check a mempool explorer (like mempool.space) to see the current network congestion and typical fee rates required for fast confirmation. You can also look up your transaction ID to see its current status.
2.  **Replace-by-Fee (RBF):** If your wallet supports RBF and you enabled it when sending the transaction, you might be able to 'bump' the fee. This involves creating a new transaction with the same inputs but a higher fee, which replaces the original unconfirmed transaction in the mempool.
3.  **Child-Pays-For-Parent (CPFP):** If RBF wasn't enabled or isn't an option, you could try a CPFP transaction. This involves spending one of the unconfirmed outputs of your original transaction in a *new* transaction, and giving that *new* transaction a very high fee. Miners who pick up the high-fee child transaction are incentivized to also include the low-fee parent transaction (your original one) because they need the parent to be confirmed first for the child to be valid. This requires you to have control over one of the outputs of the original transaction.
4.  **Wait:** Sometimes, the simplest (though least satisfying) solution is to simply wait. Network congestion often clears, and eventually, even lower-fee transactions get confirmed, especially during off-peak hours. If it's very low, it might eventually be dropped from mempools, and the funds will become spendable again (as if the transaction never happened).

It's always a good idea to check current network conditions before sending time-sensitive transactions, or to enable RBF if your wallet supports it."

**Question 14:** You are designing a simple user interface for a Bitcoin wallet. What are three distinct pieces of information you would prominently display to the user regarding their wallet's status, and why is each important?
**Answer:**
When designing a user interface for a Bitcoin wallet, three distinct and crucial pieces of information to prominently display are:

1.  **Current Spendable Balance (in BTC and Fiat Equivalent):**
    *   **Why it's important:** This is the most fundamental piece of information a user expects. It tells them, at a glance, how much Bitcoin they currently hold and can spend. Displaying it in both BTC and a local fiat currency (e.g., USD, EUR) helps users understand the real-world value of their holdings, especially given Bitcoin's price volatility.
    *   **User Benefit:** Provides immediate financial status, helps in making spending decisions, and offers a quick overview of their assets.

2.  **Recent Transaction History (with Status):**
    *   **Why it's important:** Users need to see a chronological list of their incoming and outgoing transactions. Crucially, each transaction should display its current confirmation status (e.g., "Pending," "1/6 Confirmations," "Confirmed"). This transparency builds trust and allows users to track their funds and verify payments.
    *   **User Benefit:** Allows users to track payments, identify any unconfirmed transactions, and understand the flow of their funds. It helps them debug if a payment hasn't arrived or if their own outgoing transaction is stuck.

3.  **Receive Address(es) / QR Code:**
    *   **Why it's important:** To receive Bitcoin, users need a clear, easily accessible address. Displaying a new address (or a few recent ones) along with a QR code makes it simple for others to send them funds. It's also important to convey that new addresses can be generated for privacy.
    *   **User Benefit:** Facilitates receiving payments quickly and easily. The QR code reduces errors from manual address entry. Educates users about address generation for better privacy practices.

---

## Course Conclusion

Congratulations on completing the Certified Bitcoin Professional (CBP) course! You've embarked on a comprehensive journey through the foundational principles of Bitcoin, from its cryptographic underpinnings to its economic implications and practical usage. You are no longer just a casual observer; you now possess a robust understanding of how Bitcoin works at a technical level, its security mechanisms, and its place in the global financial landscape.

You can now confidently explain Bitcoin's distributed ledger technology, differentiate between various cryptographic components like private keys, public keys, and addresses, and articulate the lifecycle of a Bitcoin transaction. You understand the critical role of miners, the significance of the difficulty adjustment, and the importance of UTXOs in maintaining network integrity. Furthermore, you are equipped with the knowledge of best practices for securing your own Bitcoin and navigating the ecosystem responsibly. This certification marks your readiness to engage with the Bitcoin world on a professional and informed level.

### Where to go next: Continuing Your Bitcoin Journey

The world of Bitcoin and blockchain is constantly evolving. Your CBP certification is a fantastic starting point, but the learning never stops! Here are some recommended next steps and resources to deepen your expertise:

1.  **Read "Mastering Bitcoin" by Andreas M. Antonopoulos:** This seminal book is often considered the "bible" for understanding Bitcoin's technical details. It will take you much deeper into cryptography, transaction scripting, and advanced concepts.
2.  **Explore the Lightning Network:** Bitcoin's layer-2 scaling solution is a fascinating area. Research how it works, its benefits for instant, low-cost transactions, and consider running a Lightning node or using a Lightning-enabled wallet.
3.  **Engage with the Community:** Join online forums (e.g., Bitcoin Stack Exchange, Reddit communities like r/Bitcoin, r/BitcoinBeginners), attend local Bitcoin meetups, or participate in online discussions. Learning from and contributing to the community is invaluable.
4.  **Hands-on Development (Even Small Projects):** If you're inclined towards programming, try building small tools using Bitcoin libraries in Python (e.g., `python-bitcoinlib`, `electrum`) or JavaScript. Even simple scripts for address generation, transaction parsing, or API interaction will solidify your understanding.
5.  **Dive into Altcoins and Other Blockchains:** While Bitcoin is foundational, exploring other cryptocurrencies and blockchain platforms (e.g., Ethereum, Solana) can broaden your perspective on different consensus mechanisms, smart contracts, and use cases. However, always approach with a critical, Bitcoin-first mindset.
6.  **Advanced Cryptography Courses:** For those who truly want to understand the mathematical underpinnings, consider online courses or university modules on cryptography, elliptic curve mathematics, and zero-knowledge proofs.

Keep practicing, keep questioning, and keep building. Your journey as a Certified Bitcoin Professional has just begun, and the opportunities in this space are immense. We encourage you to continue exploring, contributing, and helping to secure the future of decentralized finance.

---


> End of Syllabus: Certified Bitcoin Professional (CBP)
> Course ID: certified-bitcoin-professional-cbp
> Total modules: 6
> Total chapters: 24
> Level: Beginner
> Subcategory: Blockchain & Web3
> Generated by: Cohortia Syllabus Generator
> Format: Markdown
