export interface ResponseAutoresList {
    status: string;
    data:   Datos;
}

export interface Datos {
    registries:    Autor[];
    totalRecords:  number;
    startingPoint: number;
    perPage:       number;
    Pages:         number;
}

export interface Autor {
    id:               number;
    nombre:           string;
    fecha_nacimiento: Date;
    biografia:        string;
    fecha_creacion:   Date;
    id_creador:       number;
}
