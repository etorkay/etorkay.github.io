// TODO Add a couple lines about each project
const data = [
  {
    title: 'Forward Converter for a Residual Number System (RNS) based on the moduli set (2<sup>N</sup> − 1, 2<sup>N</sup>, 2<sup>N</sup> + 1)',
    subtitle: '',
    image: '',
    start_date: '2023-01-20',
    end_date: '2023-09-20',
    desc:
      'Created algorithm to exploit bit representation to perform memoryless forward conversion to RNS domain\n'
      + 'Implemented generic forward convertor in VHDL, adaptable to the moduli set where N is greater than 1\n'
      + 'Wrote test programs in C++ to test output and verify the output to the system\n'
      + 'Synthesized a demo on Spartan 3 FPGA',
  },
  {
    title: 'Single Cycle RNS Forward and Backward Converter for moduli set (2<sup>N</sup> − 1, 2<sup>N</sup>, 2<sup>N</sup> + 1)',
    subtitle: '',
    image: '',
    start_date: '2023-08-20',
    end_date: '2023-10-20',
    desc:
      'Implemented design iterations of single cycle generic forward and backward converter for the moduli set\n' +
      'Wrote test programs in C++ to test output and verify the output to the system',
  },
  {
    title: 'DES encryption and decryption tool implemented on FPGA',
    subtitle: '',
    image: '',
    start_date: '2022-08-20',
    end_date: '2022-12-20',
    desc:
      'Implemented Data Encryption Standard (DES) and Presented Cipher in a digital circuit design\n'+
      'Implemented digital designs in VHDL, simulated and verified design in Xilinx ISE\n'+
      'Synthesized digital designs of cyphers on Spartan 3 FPGA',
  },
  {
    title: '16‑bit RISC Microprocessor',
    subtitle: '',
    image: '',
    start_date: '2022-01-20',
    end_date: '2022-04-20',
    desc:
      'Designed and tested 16‑bit MIPS microprocessor using Logisim Software\n'+
      'The microprocessor consists of an ALU, a register, a CPU, RAM, and a control unit.\n'+
      'It performs the functions; BEQ, R‑type, J‑type, store‑word, and load‑word instructions.',
  },
  {
    title: 'Inverter Design and Layout',
    subtitle: '',
    image: '',
    start_date: '2023-05-20',
    end_date: '2023-09-20',
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
    start_date: '2024-05-20',
    end_date: '2024-07-20',
    desc:
      'Designed an OTA schematic and its symbol in Cadence Virtuoso using MOSFET types (PMOS and NMOS) in the gpdk180 nm and Analog library.\n' +
      'Designed a three current‑mirror OTA with Cadence &apos;s Virtuoso and Spectre.',
  },
  {
    title: '8‑bit Dedicated Processors',
    subtitle: '',
    image: '',
    start_date: '2022-08-20',
    end_date: '2022-12-20',
    desc:
      'Created a multicycle dedicated processor to perform division, multiplication, and finding even and odd numbers.\n' +
      'Implemented design in VHDL, simulated design on Xilinx ISE\n' +
      'Synthesized design onto Spartan 3 FPGA, while utilizing 7 Segment Display',
  },
  {
    title: 'Telegram Bot',
    subtitle: '',
    image: '',
    start_date: '2021-03-20',
    end_date: '2021-07-20',
    desc:
      'Contributed to a Telegram Bot for finding English word definitions written using Python\n' +
      'Paired programmed with a colleague to fix critical bugs.',
  },
  {
    title: 'Android App to Report Issues on KNUST Campus',
    subtitle: '',
    image: '',
    start_date: '2022-05-20',
    end_date: '2022-09-20',
    desc:
      'Led a team of developers to build an Androidapp using Flutter Framework and NodeJs\n' +
      'The app was for reporting issue tickets to relevant authorities and bodies to resolve the issues',
  },
  {
    title: 'App to calculate Reliability of a System',
    subtitle: '',
    image: '',
    start_date: '2023-08-20',
    end_date: '2023-09-20',
    desc:
      'Developed a pyQt‑based GUI app to compute Reliability values of systems\n' +
      'Implementation was made in python built on PyQt',
  },

];

export default data;
