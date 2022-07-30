const { ethers } = require("ethers");
const fs = require("fs-extra");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(
    "HTTP://127.0.0.1:7545" //this is ganash network
  );

  const wallet = new ethers.Wallet(
    "d5d9d772b766477bd91ac6662a905f9a1cc1a1d1e8297d7ea44b52437d1ea968",
    provider
  );

  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);

  console.log("Deploying, please wait....");
  const contract = await contractFactory.deploy();
  console.log(contract);
}

main();
