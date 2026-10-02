import { FaJava, FaAws, FaLinux } from 'react-icons/fa6'
import {
  SiSpringboot,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiReact,
  SiAngular,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiJunit5,
  SiJsonwebtokens,
} from 'react-icons/si'
import { TbBrandCSharp, TbServerBolt } from 'react-icons/tb'
import { DiMsqlServer } from 'react-icons/di'
import { GrOracle } from 'react-icons/gr'

// Official AI SVGs from src/assets/svg-ia
import antigravitySvg from '../assets/svg-ia/antigravity-color.svg'
import claudecodeSvg from '../assets/svg-ia/claudecode-color.svg'
import codexSvg from '../assets/svg-ia/codex-color.svg'
import deepseekSvg from '../assets/svg-ia/deepseek-color.svg'
import geminiSvg from '../assets/svg-ia/gemini-color.svg'

export const techStackData = [
  // Backend & Core
  {
    name: 'Java',
    category: 'Backend',
    color: '#E76F00',
    bg: '#FFF5EB',
    level: 'Empresarial',
    icon: <FaJava className="w-8 h-8 text-[#E76F00]" />,
  },
  {
    name: 'Spring Boot',
    category: 'Backend',
    color: '#6DB33F',
    bg: '#F2F9EE',
    level: 'Core Microservicios',
    icon: <SiSpringboot className="w-8 h-8 text-[#6DB33F]" />,
  },
  {
    name: 'C#',
    category: 'Backend',
    color: '#239120',
    bg: '#F0F9F0',
    level: 'Servicios Backend',
    icon: <TbBrandCSharp className="w-8 h-8 text-[#239120]" />,
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    color: '#3178C6',
    bg: '#EDF5FC',
    level: 'Tipado Estricto (76%)',
    icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" />,
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    color: '#D4AC0D',
    bg: '#FEFAE6',
    level: 'ES6+ / Fullstack',
    icon: <SiJavascript className="w-8 h-8 text-[#D4AC0D]" />,
  },
  {
    name: 'Node.js',
    category: 'Backend',
    color: '#339933',
    bg: '#EFF8EF',
    level: 'Runtime & APIs',
    icon: <SiNodedotjs className="w-8 h-8 text-[#339933]" />,
  },

  // Databases
  {
    name: 'PostgreSQL',
    category: 'Bases de Datos',
    color: '#4169E1',
    bg: '#EEF4F8',
    level: 'Relacional Avanzado',
    icon: <SiPostgresql className="w-8 h-8 text-[#4169E1]" />,
  },
  {
    name: 'Oracle / PL-SQL',
    category: 'Bases de Datos',
    color: '#F80000',
    bg: '#FFF0F0',
    level: 'Tuning & Triggers (82%)',
    icon: <GrOracle className="w-8 h-8 text-[#F80000]" />,
  },
  {
    name: 'SQL Server',
    category: 'Bases de Datos',
    color: '#CC292B',
    bg: '#FAF0F0',
    level: 'T-SQL & Modelado',
    icon: <DiMsqlServer className="w-8 h-8 text-[#CC292B]" />,
  },
  {
    name: 'MySQL',
    category: 'Bases de Datos',
    color: '#4479A1',
    bg: '#F0F5FA',
    level: 'Motores RDBMS',
    icon: <SiMysql className="w-8 h-8 text-[#4479A1]" />,
  },
  {
    name: 'MongoDB',
    category: 'Bases de Datos',
    color: '#47A248',
    bg: '#F0F8F0',
    level: 'NoSQL / BSON',
    icon: <SiMongodb className="w-8 h-8 text-[#47A248]" />,
  },

  // Frontend
  {
    name: 'Angular',
    category: 'Frontend',
    color: '#DD0031',
    bg: '#FFF0F3',
    level: 'SPAs Empresariales',
    icon: <SiAngular className="w-8 h-8 text-[#DD0031]" />,
  },
  {
    name: 'React',
    category: 'Frontend',
    color: '#087EA4',
    bg: '#F0FBFF',
    level: 'Componentes Reactivos',
    icon: <SiReact className="w-8 h-8 text-[#087EA4]" />,
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    color: '#06B6D4',
    bg: '#ECFEFF',
    level: 'Diseño & Tokens',
    icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />,
  },

  // Cloud & DevOps
  {
    name: 'AWS Cloud',
    category: 'Cloud & DevOps',
    color: '#FF9900',
    bg: '#FFF9F0',
    level: 'ECS / S3 / CloudFront',
    icon: <FaAws className="w-8 h-8 text-[#FF9900]" />,
  },
  {
    name: 'Docker',
    category: 'Cloud & DevOps',
    color: '#2496ED',
    bg: '#F0F8FF',
    level: 'Contenedores (75%)',
    icon: <SiDocker className="w-8 h-8 text-[#2496ED]" />,
  },
  {
    name: 'Linux',
    category: 'Cloud & DevOps',
    color: '#191B23',
    bg: '#FFFDF0',
    level: 'Servidores & Bash',
    icon: <FaLinux className="w-8 h-8 text-[#191B23]" />,
  },
  {
    name: 'Git',
    category: 'Cloud & DevOps',
    color: '#F05032',
    bg: '#FFF2F0',
    level: 'Control de Versiones',
    icon: <SiGit className="w-8 h-8 text-[#F05032]" />,
  },
  {
    name: 'GitHub',
    category: 'Cloud & DevOps',
    color: '#181717',
    bg: '#F5F5F7',
    level: 'Repositorios & CI/CD',
    icon: <SiGithub className="w-8 h-8 text-[#181717]" />,
  },

  // IA, Testing & Protocols
  {
    name: 'Claude Code',
    category: 'IA & Tooling',
    color: '#D97757',
    bg: '#FDF2EE',
    level: 'Agentic Coding',
    icon: (
      <img
        src={claudecodeSvg}
        alt="Claude Code"
        className="w-8 h-8 object-contain"
      />
    ),
  },
  {
    name: 'Antigravity',
    category: 'IA & Tooling',
    color: '#3186FF',
    bg: '#F0F5FF',
    level: 'Google DeepMind AI',
    icon: (
      <img
        src={antigravitySvg}
        alt="Google Antigravity"
        className="w-8 h-8 object-contain"
      />
    ),
  },
  {
    name: 'OpenAI Codex',
    category: 'IA & Tooling',
    color: '#10A37F',
    bg: '#EEFAF6',
    level: 'Generación de Código',
    icon: (
      <img
        src={codexSvg}
        alt="OpenAI Codex"
        className="w-8 h-8 object-contain"
      />
    ),
  },
  {
    name: 'DeepSeek',
    category: 'IA & Tooling',
    color: '#1E56A0',
    bg: '#F0F4FA',
    level: 'Modelos de Razonamiento',
    icon: (
      <img
        src={deepseekSvg}
        alt="DeepSeek"
        className="w-8 h-8 object-contain"
      />
    ),
  },
  {
    name: 'Google Gemini',
    category: 'IA & Tooling',
    color: '#1B73E8',
    bg: '#EEF4FC',
    level: 'Inferencia Multimodal',
    icon: (
      <img
        src={geminiSvg}
        alt="Google Gemini"
        className="w-8 h-8 object-contain"
      />
    ),
  },
  {
    name: 'Servidores MCP',
    category: 'IA & Tooling',
    color: '#004BD6',
    bg: '#EDF3FD',
    level: 'Model Context Protocol',
    icon: <TbServerBolt className="w-8 h-8 text-[#004BD6]" />,
  },
  {
    name: 'JUnit 5',
    category: 'IA & Tooling',
    color: '#25A162',
    bg: '#EAF8F1',
    level: 'Testing & Mockito (80%)',
    icon: <SiJunit5 className="w-8 h-8 text-[#25A162]" />,
  },
  {
    name: 'Postman',
    category: 'IA & Tooling',
    color: '#FF6C37',
    bg: '#FFF1EC',
    level: 'Testing de APIs REST',
    icon: <SiPostman className="w-8 h-8 text-[#FF6C37]" />,
  },
  {
    name: 'JWT / OAuth 2.0',
    category: 'IA & Tooling',
    color: '#D63AFF',
    bg: '#FAF0FF',
    level: 'Seguridad Distribuida',
    icon: <SiJsonwebtokens className="w-8 h-8 text-[#D63AFF]" />,
  },
]
