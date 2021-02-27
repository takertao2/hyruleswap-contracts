compile:
	npx hardhat compile
test:
	npx hardhat test

deploy:
	npx hardhat run scripts/deploy.js --network mainnet

verify:
	npx hardhat verify --network mainnet 
