export interface Reserva{
 id_reserva?: number;
 fecha_inicio?: Date;
 fecha_salida?: Date;
 cant_personas: number;
 tipo_habitacion: string;
 rut: string;
 nombre: string;
 email: string;
 telefono: number;
}