# CROWDFUNDING-PROJECT

*Empower Ideas, Fuel Dreams, Transform Communities Together*

![last commit](https://img.shields.io/github/last-commit/MuzamilChouhan/crowdfunding-project)
![license](https://img.shields.io/github/license/MuzamilChouhan/crowdfunding-project)
![language](https://img.shields.io/github/languages/top/MuzamilChouhan/crowdfunding-project)

### 🛠 Built With:

![JSON](https://img.shields.io/badge/-JSON-informational)
![Markdown](https://img.shields.io/badge/-Markdown-informational)
![npm](https://img.shields.io/badge/-npm-informational)
![AutoRest](https://img.shields.io/badge/-AutoRest-informational)
![PostCSS](https://img.shields.io/badge/-PostCSS-informational)
![JavaScript](https://img.shields.io/badge/-JavaScript-informational)
![React](https://img.shields.io/badge/-React-informational)
![Ethers](https://img.shields.io/badge/-Ethers-informational)
![Hardhat](https://img.shields.io/badge/-Hardhat-informational)
![Next.js](https://img.shields.io/badge/-Next.js-informational)
![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-informational)

---

## Table of Contents

* [Overview](#overview)
* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Running a Local Blockchain](#running-a-local-blockchain)
* [Compiling and Deploying Contracts](#compiling-and-deploying-contracts)
* [Testing](#testing)
* [License](#license)
* [Contribution](#contribution)
* [Acknowledgements](#acknowledgements)

---

## Overview

**Crowdfunding Project** is a powerful platform designed to revolutionize fundraising through seamless blockchain integration, built on **Next.js** and **React** for a modern web experience.

### Why Crowdfunding Project?

This project connects creators with backers, streamlining the fundraising process while fostering community engagement. The core features include:

* 🚀 **Next.js and React Integration**: Streamlined development and deployment processes for efficient collaboration.
* 🔒 **Blockchain Interactions**: Facilitates secure and transparent transactions through Ethereum smart contracts.
* 🎯 **User-Friendly Interface**: Intuitive components for managing crowdfunding campaigns, enhancing user engagement.
* 🧪 **Robust Testing Framework**: Ensures reliability and security of smart contracts through comprehensive unit tests.
* 🎨 **Tailwind CSS Configuration**: Enables a flexible and customizable design system for a responsive user interface.
* 🧩 **Modular Architecture**: Promotes reusability and maintainability of components, simplifying development workflows.

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

* **Node.js** (v16 or later)
* **npm** (v8 or later)
* **Hardhat** (for Ethereum development)

### Installation

Build crowdfunding-project from the source and install dependencies:

1. **Clone the repository**

```bash
git clone https://github.com/MuzamilChouhan/crowdfunding-project
```

2. **Navigate to the project directory**

```bash
cd crowdfunding-project
```

3. **Install the dependencies**

```bash
npm install
```

4. **Install Hardhat locally (if not installed)**

```bash
npm install --save-dev hardhat
```

5. **Initialize Hardhat project (if needed)**

```bash
npx hardhat
```

Choose "Create a basic sample project" and follow the prompts.

---

## Usage

To run the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to view the application.

---

## Running a Local Blockchain

To simulate a blockchain environment locally, start a local Ethereum node with Hardhat:

```bash
npx hardhat node
```

This will start a local Ethereum network and provide you with test accounts and a local RPC URL ([http://127.0.0.1:8545](http://127.0.0.1:8545)).

---

## Compiling and Deploying Contracts

1. **Compile your smart contracts**:

```bash
npx hardhat compile
```

2. **Deploy contracts to the local network**:

Create a deployment script inside the `scripts/` folder (e.g., `deploy.js`) and include your deployment logic.

Then run:

```bash
npx hardhat run scripts/deploy.js --network localhost
```

Make sure the Hardhat node is running before deploying.

---

## Testing

To test the smart contracts:

```bash
npx hardhat test
```

---

## License

This project is licensed under the MIT License.

---

## Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## Acknowledgements

* Ethereum Community
* Next.js Documentation
* TailwindCSS Contributors
* Open Source Tools
* Hardhat by Nomic Foundation
