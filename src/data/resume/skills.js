const skills = [

  //Languages
  {
    title: 'C',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Vala',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Rust',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Matlab',
    competency: 3,
    category: ['Languages', 'EDA'],
  },
  {
    title: 'Cmake',
    competency: 3,
    category: ['Languages', 'Tools'],
  },


  //Scripting Languages
  {
    title: 'Bash',
    competency: 3,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Perl',
    competency: 3,
    category: ['Tools', 'Languages'],
  },

  //Simulators and Assemblers
  {
    title: 'MARS',
    competency: 4,
    category: ['Tools', 'Simulators'],
  },
  {
    title: 'MASM',
    competency: 4,
    category: ['Tools', 'Simulators'],
  },
  

  // Hardware Description Languages
  {
    title: 'VHDL',
    competency: 5,
    category: ['Languages', 'HDLs'],
  },
  {
    title: 'Verilog',
    competency: 4,
    category: ['Languages', 'HDLs'],
  },
  {
    title: 'SystemVerilog',
    competency: 3,
    category: ['Languages', 'HDLs'],
  },

  //EDA Tools
  {
    title: 'Xilinx ISE',
    competency: 5,
    category: ['Tools', 'EDA'],
  },
  {
    title: 'Xilinx Vivado',
    competency: 5,
    category: ['Tools', 'EDA'],
  },
  {
    title: 'Candance Virtuoso',
    competency: 4,
    category: ['Tools', 'EDA'],
  },

  
  //ISA and Architecture
  {
    title: 'MIPS',
    competency: 4,
    category: ['ISA', 'Assembly'],
  },
  {
    title: 'RISC-V',
    competency: 2,
    category: ['ISA', 'Assembly'],
  },
  {
    title: 'ARM',
    competency: 2,
    category: ['ISA', 'Assembly'],
  },

  //Operating Systems


].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
