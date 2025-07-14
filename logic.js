const mallaContainer = document.getElementById("malla");

const cursosPorSemestre = {};
cursos.forEach(curso => {
  if (!cursosPorSemestre[curso.semestre]) cursosPorSemestre[curso.semestre] = [];
  cursosPorSemestre[curso.semestre].push(curso);
});

function renderMalla() {
  for (let semestre = 1; semestre <= 10; semestre++) {
    const divSemestre = document.createElement("div");
    divSemestre.className = "semestre";
    divSemestre.innerHTML = `<h2>Semestre ${semestre}</h2>`;

    const cursos = cursosPorSemestre[semestre] || [];
    cursos.forEach(curso => {
      const divCurso = document.createElement("div");
      divCurso.className = "curso";
      divCurso.dataset.codigo = curso.codigo;
      divCurso.dataset.prereqs = JSON.stringify(curso.prereqs);
      divCurso.innerHTML = `<strong>${curso.codigo}</strong>: ${curso.nombre}<br><small>${curso.creditos} SCT</small>`;

      divSemestre.appendChild(divCurso);
    });

    mallaContainer.appendChild(divSemestre);
  }
  evaluarDesbloqueo();
}

function evaluarDesbloqueo() {
  const cursosDOM = document.querySelectorAll(".curso");
  cursosDOM.forEach(divCurso => {
    const prereqs = JSON.parse(divCurso.dataset.prereqs);
    // Un curso se desbloquea si todos sus prerrequisitos están aprobados
    const aprobado = prereqs.every(code => localStorage.getItem(code) === "aprobado");
    if (aprobado || prereqs.length === 0) {
      divCurso.classList.add("unlocked");
      divCurso.classList.remove("locked");
    } else {
      divCurso.classList.add("locked");
      divCurso.classList.remove("unlocked");
    }

    // Click para cambiar estado aprobado/pendiente
    divCurso.onclick = () => {
      if (divCurso.classList.contains("unlocked")) {
        const codigo = divCurso.dataset.codigo;
        const estado = localStorage.getItem(codigo);
        if (estado === "aprobado") {
          localStorage.setItem(codigo, "pendiente");
          divCurso.style.textDecoration = "none";
        } else {
          localStorage.setItem(codigo, "aprobado");
          divCurso.style.textDecoration = "line-through";
        }
        evaluarDesbloqueo();
      }
    };

    // Mostrar línea tachada si aprobado
    if (localStorage.getItem(divCurso.dataset.codigo) === "aprobado") {
      divCurso.style.textDecoration = "line-through";
    } else {
      divCurso.style.textDecoration = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", renderMalla);
