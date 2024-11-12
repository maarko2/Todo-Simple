export interface Reminder {
    id?: string;  // ID opcional para que Firebase lo genere automáticamente
    name: string;
    days: string[];  // ["Lunes", "Miércoles", "Viernes"]
    time: string;  // "08:30"
    userId: string;  // UID del usuario que crea el recordatorio
}
