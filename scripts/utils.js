function expandDecimals(n, decimals) {
    return bigNumberify(n).mul(bigNumberify(10).pow(decimals))
}

function bigNumberify(n) {
    return ethers.BigNumber.from(n)
  }

async function deployContract(name, args, label) {
    let info = name
    if (label) { info = name + ":" + label }
    const contractFactory = await ethers.getContractFactory(name)
    const contract = await contractFactory.deploy(...args)
    const argStr = args.map((i) => `"${i}"`).join(" ")
    console.info(`Deploying ${info} ${contract.address} ${argStr}`)
    await contract.deployTransaction.wait()
    console.info("... Completed!")
    return contract
}
async function contractAt(name, address) {
    const contractFactory = await ethers.getContractFactory(name)
    return await contractFactory.attach(address)
  }
  
module.exports = {
    contractAt,
    bigNumberify,
    expandDecimals,
    deployContract
}