import { showConnect } from "@stacks/connect";
import { makeContractCall, stringAsciiCV, uintCV } from "@stacks/transactions";
import { StacksTestnet } from "@stacks/network";

const network = new StacksTestnet();

// TODO: replace after deploy
const CONTRACT_ADDRESS = "STXXXXXXXXXXXXXXX";
const CONTRACT_NAME = "todo";

document.getElementById("connect").onclick = () => {
  showConnect({
    appDetails: {
      name: "Stacks Todo DApp",
      icon: window.location.origin + "/logo.png",
    },
  });
};

document.getElementById("add").onclick = async () => {
  const text = document.getElementById("text").value;

  await makeContractCall({
    contractAddress: CONTRACT_ADDRESS,
    contractName: CONTRACT_NAME,
    functionName: "add-todo",
    functionArgs: [stringAsciiCV(text)],
    network,
    onFinish: (data) => {
      document.getElementById("status").innerText =
        "Todo added! TxID: " + data.txId;
    },
    onCancel: () => {
      document.getElementById("status").innerText = "Cancelled";
    },
  });
};

document.getElementById("toggle").onclick = async () => {
  const id = document.getElementById("toggleId").value;

  await makeContractCall({
    contractAddress: CONTRACT_ADDRESS,
    contractName: CONTRACT_NAME,
    functionName: "toggle-done",
    functionArgs: [uintCV(id)],
    network,
    onFinish: (data) => {
      document.getElementById("status").innerText =
        "Todo toggled! TxID: " + data.txId;
    },
    onCancel: () => {
      document.getElementById("status").innerText = "Cancelled";
    },
  });
};
  
