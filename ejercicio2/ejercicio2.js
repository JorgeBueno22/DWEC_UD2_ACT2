class Grupo {
    constructor(codigoGrupo, numeroAlumnos) {
      this.codigoGrupo = codigoGrupo;
      this.numeroAlumnos = numeroAlumnos;
    }
  }
  
  class Instituto {
    constructor(codigoInstituto, nombre) {
      this.codigoInstituto = codigoInstituto;
      this.nombre = nombre;
      this.grupos = [];
    }

    obtenerCodigoInstituto() {
      return this.codigoInstituto;
    }
  
    agregarGrupo(codigoGrupo, numeroAlumnos) {
      const nuevoGrupo = new Grupo(codigoGrupo, numeroAlumnos);
      this.grupos.push(nuevoGrupo);
    }
  
    obtenerNumeroTotalAlumnos() {
      let totalAlumnos = 0;
      for (const grupo of this.grupos) {
        totalAlumnos += grupo.numeroAlumnos;
      }
      return totalAlumnos;
    }
  }
  
  const miInstituto = new Instituto("I1", "Instituto Ejemplo");
  miInstituto.agregarGrupo("G1", 30);
  miInstituto.agregarGrupo("G2", 25);
  
  console.log("Código del instituto:", miInstituto.obtenerCodigoInstituto());
  console.log("Número total de alumnos del centro:", miInstituto.obtenerNumeroTotalAlumnos());