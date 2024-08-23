/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Department of Computer Engineering, KNUST',
    position: 'Research Assistant',
    url: 'https://compeng.knust.edu.gh/',
    startDate: '2023-09-01',
    summary: ``,
    highlights: [
      'Implemented digital designs to specification in VHDL and Verilog for FPGA and ASIC implementation.',
      'Conducted research into Residual Number System single cycle Forward and Backward conversion.',
      'Reviewed literature on Network on Chips, interconnects, switches and on‑chip routers.',
      'Implemented routers in hardware, for swtiching packets in SoCs',
      'Reviewed literature on branch prediction: direction and target address prediction.'
    ],
  },
  {
    name: 'Department of Computer Engineering, KNUST',
    position: 'Teaching Assistant',
    url: 'https://compeng.knust.edu.gh/',
    startDate: '2023-10-01',
    summary: `I tutored students and faciliated their lab sessions in the following courses: Digital Systems Design, Computer Architecture, Linear Electroncs, Operating Systems and VLSI. Typically, the number of students who take VLSI and hardware related courses are less than 20. I was able to spark interest in more 10 students to persue hardware related fields, I helped them understand why they are doing all the courses they do and how they all come together beautifully to create complex systems we see now. In some cases we went back to the first principles. I was able to help students understand the concepts better and also help them with their lab assignments.`,
    highlights: [
      'Guided final year undergraduate students in the capstone project, ”SwayFit: A corrective sitting posture wearable.”',
      'Assisted in the instruction of the undergraduate level Electrical & Computer Engineering courses',
      'Instructed and assisted undergraduate students in preparation for resit examinations in Digital Systems Design and Computer Architecture'
    ],
  },
  {
    name: 'TI - Cadence Lab, Department of Computer Engineering, KNUST',
    position: 'Internship Facilitator and Instructor',
    url: 'https://compeng.knust.edu.gh/',
    startDate: '2023-09-01',
    endDate: '2023-12-01',
    summary: ``,
    highlights: [
      'Facilitated an internship program aimed at extending exposure to already‑taught and newer subjects',
      'Instructed participant groups about HDLs, basic CPU microarchitectures and symmetric Cryptography Ciphers',
      'Facilitated participant groups to synthesize digital designs on FPGA implementations',
    ],
  },
  {
    name: 'TI Cadence Lab, KNUST',
    position: 'Intern',
    url: 'https://compeng.knust.edu.gh/',
    startDate: '2022-09-01',
    endDate: '2022-12-01',
    summary: ``,
    highlights: [
      'Designed and implemented 8 and 16‑bit dedicated processors in VHDL.',
      'Implemented DES cipher on an FPGA and verified Design',
      'Simulated MIPS processor in MARS simulator',

    ],
  },
  {
    name: 'FOCUS FM, KNUST',
    position: 'Volunteer',
    url: 'https://focusfmknust.com/',
    startDate: '2022-01-01',
    endDate: '2022-11-01',
    summary: ``,
    highlights: [
      'Provided technical support, servicing computers and IT tools',
      'Produced the Teknokrat show live on air and Facebook',
      'Sourced and edited footage to make ready for the Teknokrat show',
      'Created marketing materials for social media'
    ],
  },
  {
    name: 'JJJ Woolley International School, Accra',
    position: 'Pupil Teacher',
    url: '',
    startDate: '2018-09-01',
    endDate: '2019-07-01',
    summary: ``,
    highlights: [
      'Tutored pupils in Mathematics, Natural Science and Information Communication Technology',
      '15 learners improved drastically in their performance and understanding of the related subjects'
    ],
  },
 
];

export default work;
