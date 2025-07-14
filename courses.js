const cursos = [
  // Año 1 - I Semestre (1)
  { codigo: "BSC-111", nombre: "Introducción a las Ciencias Sociales", semestre: 1, creditos: 7, prereqs: [] },
  { codigo: "BSC-112", nombre: "Matemática Aplicada a la CCSSEE I", semestre: 1, creditos: 7, prereqs: [] },
  { codigo: "BSC-113", nombre: "Epistemología de las CCSS", semestre: 1, creditos: 5, prereqs: [] },
  { codigo: "BSC-114", nombre: "Economía y Sociedad", semestre: 1, creditos: 5, prereqs: [] },
  { codigo: "BSC-115", nombre: "Comunicación Oral y Escrita", semestre: 1, creditos: 3, prereqs: [] },
  { codigo: "BSC-116", nombre: "TICS para las CCSSEE", semestre: 1, creditos: 3, prereqs: [] },

  // Año 1 - II Semestre (2)
  { codigo: "BSC-121", nombre: "Fenómenos y Contextos Sociales", semestre: 2, creditos: 4, prereqs: [] },
  { codigo: "BSC-122", nombre: "Historia Social y Política de Chile", semestre: 2, creditos: 4, prereqs: [] },
  { codigo: "BSC-123", nombre: "Matemática Aplicada a la CCSSEE II", semestre: 2, creditos: 5, prereqs: ["BSC-112"] },
  { codigo: "BSC-124", nombre: "Introducción a la Investigación en Ciencias Sociales", semestre: 2, creditos: 6, prereqs: ["BSC-113"] },
  { codigo: "BSC-125", nombre: "Macroeconomía", semestre: 2, creditos: 5, prereqs: ["BSC-114"] },
  { codigo: "BSC-126", nombre: "Comunicación para la Investigación", semestre: 2, creditos: 3, prereqs: ["BSC-115"] },
  { codigo: "IFG-100", nombre: "Inglés I", semestre: 2, creditos: 3, prereqs: [] },

  // Año 2 - III Semestre (3)
  { codigo: "BSC-211", nombre: "Territorios y actores socioeconómicos", semestre: 3, creditos: 4, prereqs: [] },
  { codigo: "BSC-212", nombre: "Metodología Cuantitativa", semestre: 3, creditos: 6, prereqs: ["BSC-123", "BSC-124"] },
  { codigo: "BSC-213", nombre: "Metodología Cualitativa", semestre: 3, creditos: 6, prereqs: ["BSC-124"] },
  { codigo: "BSC-214", nombre: "Microeconomía", semestre: 3, creditos: 5, prereqs: ["BSC-123"] },
  { codigo: "BSC-215", nombre: "Profundización I", semestre: 3, creditos: 5, prereqs: ["BSC-123"] },
  { codigo: "IFG-200", nombre: "Inglés II", semestre: 3, creditos: 3, prereqs: ["IFG-100"] },

  // Año 2 - IV Semestre (4)
  { codigo: "BSC-221", nombre: "Organizaciones", semestre: 4, creditos: 4, prereqs: [] },
  { codigo: "BSC-222", nombre: "Estadísticas para las Ciencias Sociales y Administrativas", semestre: 4, creditos: 6, prereqs: ["BSC-212"] },
  { codigo: "BSC-223", nombre: "Taller de Diseño de Proyectos de Investigación", semestre: 4, creditos: 8, prereqs: [] }, // Requiere todos hasta el III semestre: para simplificar, se desbloquea al aprobar semestre 3
  { codigo: "BSC-224", nombre: "Economía y Territorio", semestre: 4, creditos: 5, prereqs: ["BSC-125"] },
  { codigo: "ICM-225", nombre: "Profundización II: Marketing I", semestre: 4, creditos: 5, prereqs: [] },
  { codigo: "IFG-300", nombre: "Inglés III", semestre: 4, creditos: 3, prereqs: ["IFG-200"] },

  // Año 3 - V Semestre (5)
  { codigo: "ICM-311", nombre: "Administración", semestre: 5, creditos: 4, prereqs: ["BSC-221"] },
  { codigo: "ICM-312", nombre: "Derecho y Empresa", semestre: 5, creditos: 4, prereqs: ["BSC-221"] },
  { codigo: "ICM-313", nombre: "Inferencia Estadística para Economía y Negocios", semestre: 5, creditos: 5, prereqs: ["BSC-222"] },
  { codigo: "ICM-314", nombre: "Contabilidad Financiera", semestre: 5, creditos: 4, prereqs: [] },
  { codigo: "ICM-315", nombre: "Macroeconomía para la Gestión", semestre: 5, creditos: 4, prereqs: ["BSC-125"] },
  { codigo: "ICM-316", nombre: "Marketing II", semestre: 5, creditos: 4, prereqs: ["ICM-225"] },
  { codigo: "MFG-114", nombre: "Introducción a la Fe", semestre: 5, creditos: 5, prereqs: [] },

  // Año 3 - VI Semestre (6)
  { codigo: "ICM-321", nombre: "Gestión de personas", semestre: 6, creditos: 4, prereqs: ["ICM-311"] },
  { codigo: "ICM-322", nombre: "Cálculo Financiero y Presupuestario", semestre: 6, creditos: 4, prereqs: ["BSC-215"] },
  { codigo: "ICM-323", nombre: "Organización Industrial", semestre: 6, creditos: 4, prereqs: ["BSC-214"] },
  { codigo: "ICM-324", nombre: "Contabilidad de Gestión", semestre: 6, creditos: 5, prereqs: ["BSC-215", "ICM-314"] },
  { codigo: "ICM-325", nombre: "Emprendimiento", semestre: 6, creditos: 4, prereqs: ["ICM-311", "ICM-316"] },
  { codigo: "CFG", nombre: "Certificación I", semestre: 6, creditos: 5, prereqs: [] },
  { codigo: "MFG-216", nombre: "Ética Cristiana", semestre: 6, creditos: 5, prereqs: ["MFG-114"] },

  // Año 4 - VII Semestre (7)
  { codigo: "ICM-411", nombre: "Estrategia", semestre: 7, creditos: 4, prereqs: ["ICM-311", "ICM-323"] },
  { codigo: "ICM-412", nombre: "Gestión del Cambio Organizacional", semestre: 7, creditos: 4, prereqs: ["ICM-321"] },
  { codigo: "ICM-413", nombre: "Econometría", semestre: 7, creditos: 4, prereqs: ["BSC-215", "ICM-313", "ICM-315", "ICM-323"] },
  { codigo: "ICM-414", nombre: "Gestión Financiera", semestre: 7, creditos: 4, prereqs: ["ICM-322"] },
  { codigo: "ICM-415", nombre: "Innovación Empresarial", semestre: 7, creditos: 4, prereqs: ["ICM-325"] },
  { codigo: "ICM-416", nombre: "Sustentabilidad y Responsabilidad Social Empresarial", semestre: 7, creditos: 4, prereqs: ["ICM-321"] },
  { codigo: "CFG2", nombre: "Certificación II", semestre: 7, creditos: 5, prereqs: ["CFG"] },

  // Año 4 - VIII Semestre (8)
  { codigo: "ICM-421", nombre: "Práctica Inicial", semestre: 8, creditos: 10, prereqs: [] }, // Requiere aprobar todo hasta el VII semestre, para simplificar lo dejamos desbloqueado
  { codigo: "ICM-422", nombre: "Implementación Estratégica", semestre: 8, creditos: 3, prereqs: ["ICM-411", "ICM-316"] },
  { codigo: "ICM-423", nombre: "Gestión de operaciones", semestre: 8, creditos: 4, prereqs: ["ICM-414", "BSC-215"] },
  { codigo: "ICM-424", nombre: "Análisis Financiero", semestre: 8, creditos: 5, prereqs: ["ICM-414"] },
  { codigo: "ICM-425", nombre: "Seminario de Tesis I", semestre: 8, creditos: 4, prereqs: [] },
  { codigo: "MFG-314", nombre: "Filosofía Social", semestre: 8, creditos: 5, prereqs: ["MFG-216"] },

  // Año 5 - IX Semestre (9)
  { codigo: "ICM-511", nombre: "Seminario de Tesis II", semestre: 9, creditos: 5, prereqs: ["ICM-425"] },
  { codigo: "ICM-512", nombre: "Práctica Profesional", semestre: 9, creditos: 15, prereqs: ["ICM-421"] },
  { codigo: "ICM-513", nombre: "Curso de Profundización", semestre: 9, creditos: 6, prereqs: ["ICM-415"] },

  // Año 5 - X Semestre (10)
  { codigo: "ICM-611", nombre: "Seminario de Titulación", semestre: 10, creditos: 5, prereqs: ["ICM-511"] },
];
