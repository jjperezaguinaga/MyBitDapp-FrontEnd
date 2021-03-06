export const ADDRESS = '0x7468b3e61888EeAd21f45e7130548c37886aF0E1';
export const ABI = [
  {
    constant: true,
    inputs: [
      {
        name: '_param',
        type: 'address',
      },
    ],
    name: 'addressHash',
    outputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_name',
        type: 'string',
      },
    ],
    name: 'stringHash',
    outputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_param',
        type: 'string',
      },
      {
        name: '_paramTwo',
        type: 'string',
      },
    ],
    name: 'stringString',
    outputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_assetID',
        type: 'bytes',
      },
      {
        name: '_user',
        type: 'address',
      },
      {
        name: '_amount',
        type: 'uint256',
      },
      {
        name: '_price',
        type: 'uint256',
      },
      {
        name: '_buyOrder',
        type: 'bool',
      },
    ],
    name: 'getOrderID',
    outputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_param',
        type: 'string',
      },
      {
        name: '_paramTwo',
        type: 'bytes32',
      },
      {
        name: '_paramThree',
        type: 'address',
      },
    ],
    name: 'stringBytesAddress',
    outputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_param',
        type: 'uint256',
      },
    ],
    name: 'uintHash',
    outputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_param',
        type: 'string',
      },
      {
        name: '_paramTwo',
        type: 'uint256',
      },
    ],
    name: 'stringUint',
    outputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'nullAddress',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_staker',
        type: 'address',
      },
      {
        name: '_blockNumber',
        type: 'uint256',
      },
      {
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'getStakingID',
    outputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_param',
        type: 'string',
      },
      {
        name: '_paramTwo',
        type: 'bytes32',
      },
    ],
    name: 'stringBytes',
    outputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_param',
        type: 'address',
      },
      {
        name: '_paramTwo',
        type: 'uint256',
      },
      {
        name: '_paramThree',
        type: 'uint256',
      },
    ],
    name: 'addressUintUint',
    outputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_param',
        type: 'string',
      },
      {
        name: '_paramTwo',
        type: 'address',
      },
    ],
    name: 'stringAddress',
    outputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'nullBytes',
    outputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_name',
        type: 'string',
      },
    ],
    name: 'contractHash',
    outputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_paramOne',
        type: 'uint256',
      },
      {
        name: '_paramTwo',
        type: 'uint256',
      },
      {
        name: '_paramThree',
        type: 'uint256',
      },
    ],
    name: 'uintUintUint',
    outputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_contractAddress',
        type: 'address',
      },
      {
        name: '_owner',
        type: 'address',
      },
      {
        name: '_fnName',
        type: 'string',
      },
      {
        name: '_recipient',
        type: 'bytes32',
      },
    ],
    name: 'getAuthorizeHash',
    outputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
];
