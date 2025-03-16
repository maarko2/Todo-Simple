import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc, getDoc } from '@angular/fire/firestore';
import { UtilsService } from './utils.service';
import { User } from '../models/user.model';
import { Reminder } from '../models/reminder.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  utilSvc = inject(UtilsService);

  // ======================== Autenticación =================
  getAuth() {
    return getAuth();
  }

  // ================= Guardar Recordatorio ================
  async addReminder(reminder: Reminder) {
    const userId = getAuth().currentUser?.uid;
    if (!userId) throw new Error('Usuario no autenticado');

    const reminderId = this.firestore.createId();
    const path = `users/${userId}/reminders/${reminderId}`;

    try {
      console.log('Guardando recordatorio en Firebase:', reminder); // Log adicional
      await this.setDocument(path, { ...reminder, id: reminderId });
      console.log('Recordatorio guardado con éxito');
    } catch (error) {
      console.error('Error al guardar recordatorio:', error);
    }
  }

  // =================== Obtener Recordatorios ==================
  getReminders() {
    const userId = getAuth().currentUser?.uid;
    if (!userId) {
      console.error("Usuario no autenticado en getReminders");
      return null; // Evita continuar si el usuario no está autenticado
    }

    // Obtener los recordatorios del usuario autenticado
    return this.firestore
      .collection<Reminder>(`users/${userId}/reminders`)
      .valueChanges();
  }

  // ================== Acceder =================
  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  // ================== Registrar Usuario =================
  signUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  // ================== Actualizar Usuario =================
  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, { displayName });
  }

  // ================== Cerrar Sesión =================
  signOut() {
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilSvc.routerLink('/auth');
  }

  // ================== Base de Datos =================
  setDocument(path: string, data: any) {
    const docRef = doc(getFirestore(), path);
    return setDoc(docRef, data);
  }

  async getDocument(path: string) {
    return (await getDoc(doc(getFirestore(), path))).data();
  }
}
