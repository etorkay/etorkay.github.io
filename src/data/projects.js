// TODO Add a couple lines about each project
const data = [
  {
    title: 'Forward Converter for a Residual Number System (RNS) based on the moduli set (2𝑁 − 1, 2𝑁 , 2𝑁 + 1)',
    subtitle: '',
    image: '',
    date: '2015-11-20',
    desc:
      'Created algorithm to exploit bit representation to perform memoryless forward conversion to RNS domain\n'
      + 'Implemented generic forward convertor in VHDL, adaptable to moduli set (2𝑁 − 1, 2𝑁, 2𝑁 + 1) where N is greater than 1\n'
      + 'Designed programs to test output and verify the output to the system\n'
      + 'Synthesized a demo on Spartan 3 FPGA',
  },
  {
    title: 'Single Cycle RNS Forward and Backward Converter for moduli set (2𝑁 − 1, 2𝑁 , 2𝑁 + 1)',
    subtitle: '',
    link: '',
    image: '',
    date: '2015-09-20',
    desc:
      'Implemented design iterations of single cycle generic forward and backward converter for the moduli set (2𝑁 − 1, 2𝑁, 2𝑁 + 1)\n' +
      'Designed programs to test output and verify the output to the system',
  },
  {
    title: 'DES encryption and decryption tool implemented on FPGA',
    subtitle: 'A kickstarter funded potato powered weather balloon.',
    link: '',
    image: '',
    date: '2015-06-28',
    desc:
      'Implemented Data Encryption Standard (DES) and Presented Cipher in a digital circuit design\n'+
      'Implemented digital designs in VHDL, simulated and verified design in Xilinx ISE\n'+
      'Synthesized digital designs of cyphers on Spartan 3 FPGA',
  },
  {
    title: '16‑bit RISC Microprocessor',
    subtitle: '',
    image: '',
    date: '2015-05-15',
    desc:
      'Designed and tested 16‑bit MIPS microprocessor using Logisim Software\n'+
      'The microprocessor consists of an ALU, a register, a CPU, RAM, and a control unit.\n'+
      'It performs the functions; BEQ, R‑type, J‑type, store‑word, and load‑word instructions.',
  },
  {
    title: 'Inverter Design and Layout',
    subtitle: '',
    image: '',
    date: '2015-05-15',
    desc:
      'Designed an Inverter schematic and its symbol in Cadence Virtuoso using MOSFET types (PMOS and NMOS) in the gpdk180 nm and Analog library.\n' +
      'Generated the layout from the source of the schematic, connected the MOSFETs with the sources just as in the schematic.\n' +
      'Checked the DRC (Design Rule Check) and LVS (Layout Versus Schematic) of the layout design which gave errors, but was corrected very. Thus having an error‑free work.\n' +
      'In order to appreciate the behaviour of the inverter, a testbench was created and ran a simulation, doing a DC sweep, using the input\n' +
      'voltage as the weep parameter and plotting it against the output.'
  },
  {
    title: 'Operational Transconductance Amplifier (OTA) Design and Layout',
    subtitle: '',
    image: '',
    date: '2015-05-15',
    desc:
      'Designed an OTA schematic and its symbol in Cadence Virtuoso using MOSFET types (PMOS and NMOS) in the gpdk180 nm and Analog library.\n' +
      'Designed a three current‑mirror OTA with Cadence &apos;s Virtuoso and Spectre.',
  },
  {
    title: '8‑bit Dedicated Processors',
    subtitle: '',
    image: '',
    date: '2015-05-15',
    desc:
      'Created a multicycle dedicated processor to perform division, multiplication, and finding even and odd numbers.\n' +
      'Implemented design in VHDL, simulated design on Xilinx ISE\n' +
      'Synthesized design onto Spartan 3 FPGA, while utilizing 7 Segment Display',
  },
  {
    title: 'Telegram Bot',
    subtitle: '',
    image: '',
    date: '2015-05-15',
    desc:
      'Contributed to a Telegram Bot for finding English word definitions written using Python\n' +
      'Paired programmed with a colleague to fix critical bugs\n',
  },
  {
    title: 'Android App to Report Issues on KNUST Campus',
    subtitle: '',
    image: '',
    date: '2015-05-15',
    desc:
      'Contributed to a Telegram Bot for finding English word definitions written using  Led a team of developers to build an Androidapp using Flutter Framework and NodeJs\n' +
      'The app was for reporting issue tickets to relevant authorities and bodies to resolve the issues',
  },

];

export default data;
