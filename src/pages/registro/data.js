const candidatos = [
  {
    DatosGenerales: [
      {
        nombreEl: "",
        nombreElla: "",
        FechaNacimientoEl: "DD/MM/AA",
        FechaNacimientoElla: "DD/MM/AA",
        LugarNacimientoEl: "",
        LugarNacimientoElla: "",
        NacionalidadEl: "",
        NacionalidadElla: "",
        EstadoCivilEl: "",
        EstadoCivilElla: "",
        FechaDeMatrimonio: "DD/MM/AA",
        EscolaridadEl: "",
        EscolaridadElla: "",
        ProfesionEl: "",
        ProfesionElla: "",
        OcupacionEl: "",
        OcupacionElla: "",
        ReligionEl: "",
        ReligionElla: "",
        EstaturaEl: "",
      },
    ],
    DescripcionFisica: [
      {
        EstaturaEl: 0,
        EstaturaElla: 0,
        PesoEl: 0,
        PesoElla: 0,
        ColorOjosEl: "",
        ColorOjosElla: "",
        ComplexionEl: "",
        ComplexionElla: "",
        TezEl: "",
        TezElla: "",
      },
    ],
    Domicilio: [
      {
        calle: "",
        colonia: "",
        estado: "",
        telefono: "",
        numero: "",
        municipio: "",
        codigoPostal: 0,
      },
    ],
    OrganizacionFamiliar: [
      {
        hijos: false,
        cantidadHijos: 0,
        nombreHijo1: "",
        edadHijo1: 0,
        fechaNacimientoHijo1: "DD/MM/AA",
        lugarNacimientoHijo1: "DD/MM/AA",
        nacionalidadHijo1: "DD/MM/AA",
        escolaridadHijo1: "DD/MM/AA",
        otrasPersonasEnCasa: false,
        otrasPersonas1Nombre: "",
        otrasPersonas1Edad: 0,
        otrasPersonas1Parentesco: "",
        otrasPersonas1Ocupacion: "",
      },
    ],
    DatosFamiliares: [
      {
        PaternoMadreNombre: "",
        PaternoPadreNombre: "",
        PaternoMadreEdad: "",
        PaternoPadreEdad: "",
        PaternoMadreNacionalidad: "",
        PaternoPadreNacionalidad: "",
        PaternoDomicilio: "",
        MaternoMadreNombre: "",
        MaternoPadreNombre: "",
        MaternoMadreEdad: "",
        MaternoPadreEdad: "",
        MaternoMadreNacionalidad: "",
        MaternoPadreNacionalidad: "",
        MaternoDomicilio: "",
      },
    ],
  },
];

/* 


La lógica para crear familias, tu vas a crear siempre la primera vez 
primero la petición
1.- la primer petición me va a devolver un id que es el id para el siguiete post 
2.- familia/___ID___/interesados/ (POST)

get
familia/cefrfrtg2345321
post
1.- /familia
{
  clave: "",
  fechaDeCreacion: "",
}

2.- familia/cefrfrtg2345321/interesados/ // solo hacemos un POST porque interesados es un arreglo.
{
    nombre: "",
    fechaNacimiento: "DD/MM/AA",
    lugarNacimiento: "",
    nacionalidad: "",
    estadoCivil: "",
    escolaridad: "",
    profesion: "",
    ocupacion: "",
    religion: "",
    estatura: "",
    genero: "",
    esSoltero: false,
    rolFamiliar: "padre",
    fisico: {
        estatura: 0,
        peso: 0,
        colorOjos: "",
        complexion: "",
        tez: "",
    },
}

put
patch
familia/cefrfrtg2345321/
{
  matrimonio: {
    fecha:"llenas del front"
  }
}
delete
*/
const familias = {
  cefrfrtg2345321: {
    clave: "",
    fechaDeCreacion: "",
    matrimonio: {
      fecha: "DD/MM/AA",
    },
    estado: "pendiente",
    interesados: {
      cefrfrtg2345321: {
        nombre: "",
        fechaNacimiento: "DD/MM/AA",
        lugarNacimiento: "",
        nacionalidad: "",
        estadoCivil: "",
        escolaridad: "",
        profesion: "",
        ocupacion: "",
        religion: "",
        estatura: "",
        genero: "",
        esSoltero: false,
        rolFamiliar: "padre",
        fisico: {
          estatura: 0,
          peso: 0,
          colorOjos: "",
          complexion: "",
          tez: "",
        },
      },
      cefrfrtg234df21: {
        nombre: "",
        fechaNacimiento: "DD/MM/AA",
        lugarNacimiento: "",
        nacionalidad: "",
        estadoCivil: "",
        escolaridad: "",
        profesion: "",
        ocupacion: "",
        religion: "",
        estatura: "",
        genero: "",
        esSoltero: false,
        rolFamiliar: "madre",
        fisico: {
          estatura: 0,
          peso: 0,
          colorOjos: "",
          complexion: "",
          tez: "",
        },
      },
    },
    familiares: {},
    domicilio: {},
  },
};
