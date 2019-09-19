"use strict";
var nodes = function() {};
nodes.customNode = require("./nodeHelpers/customNode");
nodes.infuraNode = require("./nodeHelpers/infura");
nodes.metamaskNode = require("./nodeHelpers/metamask");
nodes.nodeTypes = {
  ENIX: "ENIX",
  Custom: "CUSTOM ETH"
};
nodes.ensNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.ensSubNodeTypes = [nodes.nodeTypes.ETH];
nodes.domainsaleNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
  name: "CUS",
  blockExplorerTX: "",
  blockExplorerAddr: "",
  type: nodes.nodeTypes.Custom,
  eip155: false,
  chainId: "",
  tokenList: [],
  abiList: [],
  service: "Custom",
  lib: null
};
nodes.nodeList = {
  ENIX: {
    name: "ENIX",
    blockExplorerTX: "https://explorer.enix.ai/tx/[[txHash]]",
    blockExplorerAddr: "https://explorer.enix.ai/address/[[address]]",
    type: nodes.nodeTypes.ENIX,
    eip155: true,
    chainId: 418,
    tokenList: require("./tokens/enixTokens.json"),
    abiList: require("./abiDefinitions/enixAbi.json"),
    estimateGas: true,
    service: "enix.ai",
    lib: new nodes.customNode("https://rpc.enix.ai", "")
  }
};

nodes.ethPrice = require("./nodeHelpers/ethPrice");
module.exports = nodes;
