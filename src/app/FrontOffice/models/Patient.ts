export interface Patient {
    idpatient: number;
    user: number;
    typePatient: TypePatient;
    archiver: boolean;
}
export enum TypePatient {
    NORMAL = 'NORMAL',
    URGENT = 'URGENT',
    DECEDE = 'DECEDE'
  }