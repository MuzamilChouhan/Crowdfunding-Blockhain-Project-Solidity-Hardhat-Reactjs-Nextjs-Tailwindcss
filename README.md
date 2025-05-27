CROWDFUNDING-PROJECT

Empower Ideas, Fuel Dreams, Transform Communities Together





Built with the tools and technologies:











Table of Contents

Overview

Getting Started

Prerequisites

Installation

Usage

Running a Local Blockchain

Compiling and Deploying Contracts

Testing

License

Contribution

Acknowledgements

Overview

Crowdfunding Project is a powerful platform designed to revolutionize fundraising through seamless blockchain integration, built on Next.js and React for a modern web experience.

Why Crowdfunding Project?

This project connects creators with backers, streamlining the fundraising process while fostering community engagement. The core features include:

🚀 Next.js and React Integration: Streamlined development and deployment processes for efficient collaboration.

🔒 Blockchain Interactions: Facilitates secure and transparent transactions through Ethereum smart contracts.

🎯 User-Friendly Interface: Intuitive components for managing crowdfunding campaigns, enhancing user engagement.

🧪 Robust Testing Framework: Ensures reliability and security of smart contracts through comprehensive unit tests.

🎨 Tailwind CSS Configuration: Enables a flexible and customizable design system for a responsive user interface.

🧩 Modular Architecture: Promotes reusability and maintainability of components, simplifying development workflows.

Getting Started

Prerequisites

This project requires the following dependencies:

Node.js (v16 or later)

npm (v8 or later)

Hardhat (for Ethereum development)

Installation

Build crowdfunding-project from the source and install dependencies:

Clone the repository

git clone https://github.com/MuzamilChouhan/crowdfunding-project

Navigate to the project directory

cd crowdfunding-project

Install the dependencies

npm install

Install Hardhat globally (if not installed)

npm install --save-dev hardhat

Usage

To run the development server:

npm run dev

Visit http://localhost:3000 to view the application.

Running a Local Blockchain

To simulate a blockchain environment locally, start a local Ethereum node with Hardhat:

npx hardhat node

This will start a local Ethereum network and provide you with test accounts and a local RPC URL (http://127.0.0.1:8545).

Compiling and Deploying Contracts

Compile your smart contracts:

npx hardhat compile

Deploy contracts to the local network:
Create a script in the scripts/ folder, for example deploy.js, and run:

npx hardhat run scripts/deploy.js --network localhost

Make sure the Hardhat node is running before deploying.

Testing

To test the smart contracts:

npx hardhat test

License

This project is licensed under the MIT License.

Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Acknowledgements

Ethereum Community

Next.js Documentation

TailwindCSS Contributors

Open Source Tools

Hardhat by Nomic Foundation
