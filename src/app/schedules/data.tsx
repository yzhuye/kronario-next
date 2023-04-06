import React from "react";
import horarios from "../../assets/horario.json";

const headers = ['Hora', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

const rows = [
    { hora: '6:30', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
    { hora: '7:30', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
    { hora: '8:30', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
    { hora: '9:30', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
    { hora: '10:30', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
    { hora: '11:30', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
    { hora: '12:30', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
    { hora: '13:30', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
    { hora: '14:30', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
    { hora: '15:30', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
    { hora: '16:30', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
    { hora: '17:30', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
    { hora: '18:30', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
    { hora: '19:30', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
];

const colorRows = [
    { lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
    { lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
    { lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
    { lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
    { lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
    { lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
    { lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
    { lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
    { lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
    { lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
    { lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
    { lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
    { lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
    { lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '' },
  ];

function verificarHora(horaString: string): number {
    const horaMap: { [key: string]: number } = {
        "06": 0,
        "07": 1,
        "08": 2,
        "09": 3,
        "10": 4,
        "11": 5,
        "12": 6,
        "13": 7,
        "14": 8,
        "15": 9,
        "16": 10,
        "17": 11,
        "18": 12,
        "19": 13
    };
    return horaMap[horaString] ?? 0;
}

const resetRows = () => {
    rows.forEach(row => {
      row.lunes = '';
      row.martes = '';
      row.miercoles = '';
      row.jueves = '';
      row.viernes = '';
      row.sabado = '';
    });
    colorRows.forEach(row => {
        row.lunes = '';
        row.martes = '';
        row.miercoles = '';
        row.jueves = '';
        row.viernes = '';
        row.sabado = '';
      });
  };

function crearHorario(duration: number, dia: string, salon: string, hora: number, color: number) {
    let nameColor: string = color.toLocaleString();
    switch (dia) {
        case "M":
            rows[hora].lunes = salon;
            colorRows[hora].lunes = nameColor
            if (duration > 100) {
                rows[hora + 1].lunes = salon;
                colorRows[hora + 1].lunes = nameColor;
                if (duration > 200) {
                    rows[hora + 2].lunes = salon;
                    colorRows[hora + 2].lunes = nameColor;
                }
            }
            break;
        case "T":
            rows[hora].martes = salon;
            colorRows[hora].martes = nameColor;
            if (duration > 100) {
                rows[hora + 1].martes = salon;
                colorRows[hora + 1].martes = nameColor;
                if (duration > 200) {
                    rows[hora + 2].martes = salon;
                    colorRows[hora + 2].martes = nameColor;
                }
            }
            break;
        case "W":
            rows[hora].miercoles = salon;
            colorRows[hora].miercoles = nameColor;
            if (duration > 100) {
                rows[hora + 1].miercoles = salon;
                colorRows[hora + 1].miercoles = nameColor;
                if (duration > 200) {
                    rows[hora + 2].miercoles = salon;
                    colorRows[hora + 2].miercoles = nameColor;
                }
            }
            break;
        case "R":
            rows[hora].jueves = salon;
            colorRows[hora].jueves = nameColor;
            if (duration > 100) {
                rows[hora + 1].jueves = salon;
                colorRows[hora + 1].jueves = nameColor;
                if (duration > 200) {
                    rows[hora + 2].jueves = salon;
                    colorRows[hora + 2].jueves = nameColor;
                }
            }
            break;
        case "F":
            rows[hora].viernes = salon;
            colorRows[hora].viernes = nameColor;
            if (duration > 100) {
                rows[hora + 1].viernes = salon;
                colorRows[hora + 1].viernes = nameColor;
                if (duration > 200) {
                    rows[hora + 2].viernes = salon;
                    colorRows[hora + 2].viernes = nameColor;
                }
            }
            break;
        case "S":
            rows[hora].sabado = salon;
            colorRows[hora].sabado = nameColor;
            if (duration > 100) {
                rows[hora + 1].sabado = salon;
                colorRows[hora + 1].sabado = nameColor;
                if (duration > 200) {
                    rows[hora + 2].sabado = salon;
                    colorRows[hora + 2].sabado = nameColor;
                }
            }
            break;
    }
}

interface Horario {
    horario: {
        name: string;
        NRC: string;
        teachers: string[];
        blocks: string[][];
        quotas: string;
    }[];
}

function obtenerHorarios(contador: number): Horario["horario"] {
    return horarios.horarios[contador].horario;
  }
  
export default {
    rows,
    headers
};

export const actualizarTabla = (contador: number) => {
    resetRows();
    const horarios = obtenerHorarios(contador);
    let color: number = 0;
    horarios.forEach((horario) => {
        const blocks = horario.blocks;
        color = color + 1;
        // Recorrer la lista de bloques dentro de cada objeto de horario
        blocks.forEach((bloque) => {
            // Acceder a las propiedades de cada bloque
            const day = bloque[0];
            const horario = bloque[1];
            const salones = bloque[2];

            const hora = verificarHora(horario.substring(0, 2));
            const duration = (parseInt(horario.split(' - ')[1], 10) - parseInt(horario.split(' - ')[0], 10));
            const salon = salones.substring(8)
            crearHorario(duration, day, salon, hora, color);
        });
    });

}


export const longitud = horarios.horarios.length;
