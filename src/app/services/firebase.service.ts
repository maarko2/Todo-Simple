import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc, getDoc } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { UtilsService } from './utils.service';
import { User } from '../models/user.model';
import { Reminder } from '../models/reminder.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  storage = inject(AngularFireStorage);
  utilSvc = inject(UtilsService);

  // ======================== Autenticación =================
  getAuth() {
    return getAuth();
  }

  // ================= Manejo de Imagen de Perfil =================
  async uploadImage(file: any, path: string): Promise<string> {
    try {
      const storage = getStorage();
      const storageRef = ref(storage, path);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      return url;
    } catch (error) {
      console.log('Error al subir imagen:', error);
      throw error;
    }
  }

  async updateUserPhoto(photoURL: string) {
    try {
      const auth = getAuth();
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { photoURL });
        // Actualizar también en Firestore
        const userId = auth.currentUser.uid;
        await this.setDocument(`users/${userId}`, { photoURL }, true);
      }
    } catch (error) {
      console.log('Error al actualizar foto:', error);
      throw error;
    }
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
  setDocument(path: string, data: any, merge: boolean = false) {
    const docRef = doc(getFirestore(), path);
    return setDoc(docRef, data, { merge });
  }

  async getDocument(path: string) {
    return (await getDoc(doc(getFirestore(), path))).data();
  }
}
