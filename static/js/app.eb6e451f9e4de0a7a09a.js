webpackJsonp([1],{"5W1q":function(f,e){},EEbw:function(f,e){f.exports={version:"0.20.6"}},NHnr:function(f,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t("7+uW"),a={render:function(){var f=this.$createElement,e=this._self._c||f;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=t("VU/8")({name:"App"},a,!1,function(f){t("vGjf")},null,null).exports,o=t("/ocq"),i={1:"Main Net",2:"Deprecated Morden test network",3:"Ropsten test network",4:"Rinkeby test network",42:"Kovan test network",4447:"Truffle Develop Network",5777:"Ganache Blockchain"},r=t("NYxO"),c={name:"hello-metamask",computed:Object(r.b)({isInjected:function(f){return f.web3.isInjected},network:function(f){return i[f.web3.networkId]},coinbase:function(f){return f.web3.coinbase},balance:function(f){return f.web3.balance},ethBalance:function(f){if(null!==f.web3.web3Instance)return f.web3.web3Instance().fromWei(f.web3.balance,"ether")}})},u={render:function(){var f=this,e=f.$createElement,t=f._self._c||e;return t("div",{staticClass:"metamask-info"},[t("h1",[f._v("欢迎使用token发行小站")]),f._v(" "),t("br"),f._v(" "),f.isInjected?t("p",{attrs:{id:"has-metamask"}},[t("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}}),f._v("Metamask插件正常")]):t("p",{attrs:{id:"no-metamask"}},[t("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}}),f._v("未检测到Metamask插件")]),f._v(" "),t("p",[f._v("以太坊网络: "+f._s(f.network))]),f._v(" "),t("p",[f._v("账户地址: "+f._s(f.coinbase))]),f._v(" "),t("p",[f._v("账户余额: "+f._s(f.balance)+" Wei // "+f._s(f.ethBalance)+" Eth")])])},staticRenderFns:[]};var d=t("VU/8")(c,u,!1,function(f){t("ygDB")},"data-v-44873b4a",null).exports,p=t("Dd8w"),m=t.n(p),b=t("8k0n"),l=t.n(b),y=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"balances",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"address"}],name:"allowed",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"remaining",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{name:"_initialAmount",type:"uint256"},{name:"_tokenName",type:"string"},{name:"_decimalUnits",type:"uint8"},{name:"_tokenSymbol",type:"string"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"_from",type:"address"},{indexed:!0,name:"_to",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_owner",type:"address"},{indexed:!0,name:"_spender",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"Approval",type:"event"}],v={name:"casino",data:function(){return{initialAmount:null,name:"",tokenSymbo:"",owneraddress:"",pending:!1,sucess:!1,msg:"",casinoContractInstance:null,oldbalance:0}},computed:m()({},Object(r.b)({currentChange:function(f){return f.web3.change}})),watch:{currentChange:function(){this.pending=!1,this.msg="代币已发送到指定钱包，请注意查收"}},methods:{depolyContract:function(){var f=new l.a(window.web3.currentProvider),e=f.eth.contract(y);if(null!=this.initialAmount&&""!=this.name&&""!=this.tokenSymbo&&""!=this.owneraddress){this.pending=!1,this.msg="等待支付，支付成功后开始部署合约";var t=this;e.new(this.initialAmount,this.name,0,this.tokenSymbo,{from:f.eth.accounts[0],data:"0x608060405234801561001057600080fd5b50604051610e30380380610e308339810180604052810190808051906020019092919080518201929190602001805190602001909291908051820192919050505083600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508360008190555082600390805190602001906100b29291906100ee565b5081600460006101000a81548160ff021916908360ff16021790555080600590805190602001906100e49291906100ee565b5050505050610193565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061012f57805160ff191683800117855561015d565b8280016001018555821561015d579182015b8281111561015c578251825591602001919060010190610141565b5b50905061016a919061016e565b5090565b61019091905b8082111561018c576000816000905550600101610174565b5090565b90565b610c8e806101a26000396000f3006080604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100b4578063095ea7b31461014457806318160ddd146101a957806323b872dd146101d457806327e235e314610259578063313ce567146102b05780635c658165146102e157806370a082311461035857806395d89b41146103af578063a9059cbb1461043f578063dd62ed3e146104a4575b600080fd5b3480156100c057600080fd5b506100c961051b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101095780820151818401526020810190506100ee565b50505050905090810190601f1680156101365780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561015057600080fd5b5061018f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506105b9565b604051808215151515815260200191505060405180910390f35b3480156101b557600080fd5b506101be6106ab565b6040518082815260200191505060405180910390f35b3480156101e057600080fd5b5061023f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106b1565b604051808215151515815260200191505060405180910390f35b34801561026557600080fd5b5061029a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061094b565b6040518082815260200191505060405180910390f35b3480156102bc57600080fd5b506102c5610963565b604051808260ff1660ff16815260200191505060405180910390f35b3480156102ed57600080fd5b50610342600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610976565b6040518082815260200191505060405180910390f35b34801561036457600080fd5b50610399600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061099b565b6040518082815260200191505060405180910390f35b3480156103bb57600080fd5b506103c46109e4565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104045780820151818401526020810190506103e9565b50505050905090810190601f1680156104315780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561044b57600080fd5b5061048a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a82565b604051808215151515815260200191505060405180910390f35b3480156104b057600080fd5b50610505600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610bdb565b6040518082815260200191505060405180910390f35b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105b15780601f10610586576101008083540402835291602001916105b1565b820191906000526020600020905b81548152906001019060200180831161059457829003601f168201915b505050505081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60005481565b600080600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101580156107825750828110155b151561078d57600080fd5b82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555082600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8110156108da5782600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a360019150509392505050565b60016020528060005260406000206000915090505481565b600460009054906101000a900460ff1681565b6002602052816000526040600020602052806000526040600020600091509150505481565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60058054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a7a5780601f10610a4f57610100808354040283529160200191610a7a565b820191906000526020600020905b815481529060010190602001808311610a5d57829003601f168201915b505050505081565b600081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610ad257600080fd5b81600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050929150505600a165627a7a7230582025471d3ff6ce910a1fa077287d54290d556b018197ad65bf8b0fd1bd5ec446e00029",gas:"3000000",gasPrice:0},function(f,n){f?console.log("发生错误："+f):(t.msg="支付成功，开始部署合约。。。",t.pending=!0,void 0!==n.address?(t.msg="合约部署完成",console.log("合约部署地址: "+n.address+" 交易哈希: "+n.transactionHash),t.casinoContractInstance=function(){return e.at(n.address)},t.transfer()):console.log("第一次回调： "+n.transactionHash))})}else this.msg="请完整填写相关信息"},transfer:function(){var f=this;this.pending=!1,this.msg="代币发行成功，请继续支付，支付完成后开始转移代币",this.casinoContractInstance().transfer(this.owneraddress,this.initialAmount,{from:this.$store.state.web3.coinbase},function(e,t){e?console.log("代币转移失败:"+e):(f.pending=!0,f.msg="支付成功，开始转移代币...",f.$store.commit("isReadyMakeCoin"))})},balanceOf:function(){this.$store.state.contractInstance().balanceOf(this.owneraddress,{from:this.$store.state.web3.coinbase},function(f,e){f?console.log(f):console.log(e)})}}},g={render:function(){var f=this,e=f.$createElement,t=f._self._c||e;return t("div",{staticClass:"casino container"},[t("div",{staticClass:"row"},[t("h3",[f._v("填写token相关信息")]),f._v(" "),t("br"),f._v(" "),t("form",{staticClass:"form-horizontal",attrs:{role:"form"}},[t("div",{staticClass:"col-sm-4 height margin"}),f._v(" "),t("div",{staticClass:"form-group col-sm-4 height margin"},[t("label",{staticClass:"col-sm-4 control-label",attrs:{for:"firstname"}},[f._v("代币数量")]),f._v(" "),t("div",{staticClass:"col-sm-8"},[t("input",{directives:[{name:"model",rawName:"v-model",value:f.initialAmount,expression:"initialAmount"}],staticClass:"form-control",attrs:{type:"text",placeholder:"例如: 21000000",required:"required"},domProps:{value:f.initialAmount},on:{input:function(e){e.target.composing||(f.initialAmount=e.target.value)}}})])]),f._v(" "),t("div",{staticClass:"col-sm-4 height margin"}),f._v(" "),t("div",{staticClass:"col-sm-4 height margin"}),f._v(" "),t("div",{staticClass:"form-group col-sm-4 height"},[t("label",{staticClass:"col-sm-4 control-label",attrs:{for:"firstname"}},[f._v("代币名称")]),f._v(" "),t("div",{staticClass:"col-sm-8"},[t("input",{directives:[{name:"model",rawName:"v-model",value:f.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"例如: SiaCoin",required:"required"},domProps:{value:f.name},on:{input:function(e){e.target.composing||(f.name=e.target.value)}}})])]),f._v(" "),t("div",{staticClass:"col-sm-4 height margin"}),f._v(" "),t("div",{staticClass:"col-sm-4 height margin"}),f._v(" "),t("div",{staticClass:"form-group col-sm-4 height"},[t("label",{staticClass:"col-sm-4 control-label",attrs:{for:"firstname"}},[f._v("代币符号")]),f._v(" "),t("div",{staticClass:"col-sm-8"},[t("input",{directives:[{name:"model",rawName:"v-model",value:f.tokenSymbo,expression:"tokenSymbo"}],staticClass:"form-control",attrs:{type:"text",placeholder:"例如: SC",required:"required"},domProps:{value:f.tokenSymbo},on:{input:function(e){e.target.composing||(f.tokenSymbo=e.target.value)}}})])]),f._v(" "),t("div",{staticClass:"col-sm-4 height margin"}),f._v(" "),t("div",{staticClass:"col-sm-4 height margin"}),f._v(" "),t("div",{staticClass:"form-group col-sm-4 height margin"},[t("label",{staticClass:"col-sm-4 control-label",attrs:{for:"firstname"}},[f._v("钱包地址")]),f._v(" "),t("div",{staticClass:"col-sm-8"},[t("input",{directives:[{name:"model",rawName:"v-model",value:f.owneraddress,expression:"owneraddress"}],staticClass:"form-control",attrs:{type:"text",placeholder:"例如: 0x14acXXXXXX"},domProps:{value:f.owneraddress},on:{input:function(e){e.target.composing||(f.owneraddress=e.target.value)}}})])]),f._v(" "),t("div",{staticClass:"col-sm-4 height margin"},[t("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:f.depolyContract}},[f._v("发行代币")])]),f._v(" "),f.pending?t("img",{attrs:{id:"loader",src:"https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif"}}):f._e(),f._v(" "),t("div",{staticClass:"col-sm-12 height margin"},[t("h4",[f._v(f._s(f.msg))])])])])])},staticRenderFns:[]};var w={name:"casino-dapp",beforeCreate:function(){console.log("registerWeb3 Action dispatched from casino-dapp.vue"),this.$store.dispatch("registerWeb3")},components:{"hello-metamask":d,"casino-component":t("VU/8")(v,g,!1,function(f){t("bLhK")},"data-v-4bdbe190",null).exports}},h={render:function(){var f=this.$createElement,e=this._self._c||f;return e("div",[e("hello-metamask"),this._v(" "),e("casino-component")],1)},staticRenderFns:[]};var _=t("VU/8")(w,h,!1,function(f){t("be1M")},"data-v-2fbf568d",null).exports;n.a.use(o.a);var C=new o.a({routes:[{path:"/",name:"casino-dapp",component:_}]}),x={web3:{isInjected:!1,web3Instance:null,networkId:null,coinbase:null,balance:null,error:null,flag:null,change:0},contractInstance:null},k=t("woOf"),I=t.n(k),M=t("//Fk"),W=t.n(M),A=new W.a(function(f,e){var t=window.web3;if(void 0!==t){var n=new l.a(t.currentProvider);f({injectedWeb3:n.isConnected(),web3:function(){return n}})}else e(new Error("不能连接到 Metamask"))}).then(function(f){return new W.a(function(e,t){f.web3().version.getNetwork(function(n,a){n?t(new Error("Unable to retrieve network ID")):(f=I()({},f,{networkId:a}),e(f))})})}).then(function(f){return new W.a(function(e,t){f.web3().eth.getCoinbase(function(n,a){n?t(new Error("Unable to retrieve coinbase")):(f=I()({},f,{coinbase:a}),e(f))})})}).then(function(f){return new W.a(function(e,t){f.web3().eth.getBalance(f.coinbase,function(n,a){n?t(new Error("Unable to retrieve balance for address: "+f.coinbase)):(f=I()({},f,{balance:a}),e(f))})})}),S=function(f){var e=window.web3;e=new l.a(e.currentProvider),setInterval(function(){if(e&&j.state.web3.web3Instance)if(e.eth.coinbase!==j.state.web3.coinbase){var f=e.eth.coinbase;e.eth.getBalance(e.eth.coinbase,function(e,t){e?console.log(e):j.dispatch("pollWeb3",{coinbase:f,balance:parseInt(t,10)})})}else e.eth.getBalance(j.state.web3.coinbase,function(f,e){f?console.log(f):parseInt(e,10)!==j.state.web3.balance&&j.dispatch("pollWeb3",{coinbase:j.state.web3.coinbase,balance:e})})},500)};n.a.use(r.a);var j=new r.a.Store({strict:!0,state:x,mutations:{registerWeb3Instance:function(f,e){console.log("registerWeb3instance Mutation being executed",e);var t=e,n=f.web3;n.coinbase=t.coinbase,n.networkId=t.networkId,n.balance=parseInt(t.balance,10),n.isInjected=t.injectedWeb3,n.web3Instance=t.web3,f.web3=n,S()},pollWeb3Instance:function(f,e){console.log("pollWeb3Instance mutation being executed",e),f.web3.coinbase=e.coinbase,f.web3.balance=parseInt(e.balance,10),f.web3.flag&&(f.web3.change=f.web3.change+1,f.web3.flag=!1)},registerContractInstance:function(f,e){console.log("Casino contract instance: ",e),f.contractInstance=function(){return e}},isReadyMakeCoin:function(f){f.web3.flag=!0}},actions:{registerWeb3:function(f){var e=f.commit;console.log("注册web3实例"),A.then(function(f){e("registerWeb3Instance",f)}).catch(function(f){console.log("error in action registerWeb3",f)})},pollWeb3:function(f,e){var t=f.commit;console.log("pollWeb3 action being executed"),t("pollWeb3Instance",e)}}});t("5W1q"),t("qb6w");n.a.config.productionTip=!1,new n.a({el:"#app",router:C,store:j,components:{App:s},template:"<App/>"})},"R/pS":function(f,e){f.exports=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"name",outputs:[{name:"o_name",type:"bytes32"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"owner",outputs:[{name:"",type:"address"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"content",outputs:[{name:"",type:"bytes32"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"addr",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"reserve",outputs:[],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"subRegistrar",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_newOwner",type:"address"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_registrar",type:"address"}],name:"setSubRegistrar",outputs:[],type:"function"},{constant:!1,inputs:[],name:"Registrar",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_a",type:"address"},{name:"_primary",type:"bool"}],name:"setAddress",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_content",type:"bytes32"}],name:"setContent",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"disown",outputs:[],type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"_name",type:"bytes32"},{indexed:!1,name:"_winner",type:"address"}],name:"AuctionEnded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_name",type:"bytes32"},{indexed:!1,name:"_bidder",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"NewBid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"}],name:"Changed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"},{indexed:!0,name:"addr",type:"address"}],name:"PrimaryChanged",type:"event"}]},UIsv:function(f,e){f.exports=[{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"owner",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_refund",type:"address"}],name:"disown",outputs:[],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"addr",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"reserve",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_newOwner",type:"address"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_a",type:"address"}],name:"setAddr",outputs:[],type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"}],name:"Changed",type:"event"}]},bLhK:function(f,e){},be1M:function(f,e){},oPsS:function(f,e){f.exports=[{constant:!1,inputs:[{name:"from",type:"bytes32"},{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"from",type:"bytes32"},{name:"to",type:"address"},{name:"indirectId",type:"bytes32"},{name:"value",type:"uint256"}],name:"icapTransfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"to",type:"bytes32"}],name:"deposit",outputs:[],payable:!0,type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"AnonymousDeposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"bytes32"},{indexed:!1,name:"value",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"bytes32"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"bytes32"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"indirectId",type:"bytes32"},{indexed:!1,name:"value",type:"uint256"}],name:"IcapTransfer",type:"event"}]},qb6w:function(f,e){},vGjf:function(f,e){},ygDB:function(f,e){}},["NHnr"]);
//# sourceMappingURL=app.eb6e451f9e4de0a7a09a.js.map