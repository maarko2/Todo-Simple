import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { User } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {getFirestore, setDoc, doc, getDoc, collection, query, where,getDocs, addDoc } from '@angular/fire/firestore'
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  utilSvc = inject(UtilsService);


  // ======================== Autenticación =================
  getAuth(){
    return getAuth();
  }



  // ================== Acceder =================
  signIn(user : User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  // ================== Registrar Usuario =================
  signUp(user : User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }
  // ================== Actualizar Usuario =================
  updateUser(displayName: string){
    return updateProfile(getAuth().currentUser, {displayName})
  }

    // ================== Cerrar Sesión  =================
    signOut(){
      getAuth().signOut();
      localStorage.removeItem('user');
      this.utilSvc.routerLink('/auth');
    }



  // ================== Base de Datos  =================
 
  // ============ Setear un documento  ===========
  setDocument(path: string, data: any) {
    const firestore = getFirestore();
    const docRef = doc(collection(firestore, path));
    return setDoc(docRef, data); // Guarda los datos con el UID incluido
  }

  async getRecordatoriosPorUsuario(uid: string) {
    const firestore = getFirestore();
    const recordatoriosRef = collection(firestore, 'recordatorios');
    const q = query(recordatoriosRef, where('uid', '==', uid)); // Filtra los recordatorios por el UID del usuario
    
    const querySnapshot = await getDocs(q);
    const recordatorios: any[] = [];
    querySnapshot.forEach((doc) => {
      recordatorios.push(doc.data());
    });
    return recordatorios; // Retorna los recordatorios del usuario
  }
  
  async setRecordatorio(recordatorioData: any) {
    try {
      const firestore = getFirestore();
      const recordatoriosRef = collection(firestore, 'recordatorios'); // Colección de recordatorios
      await addDoc(recordatoriosRef, recordatorioData); // Guarda el recordatorio con los datos proporcionados
      console.log("Recordatorio guardado correctamente");
    } catch (error) {
      console.error("Error al guardar el recordatorio:", error);
      throw error;  // Lanza el error para poder manejarlo en el componente
    }
  }
  

  async getDocument(path : string){
    return (await getDoc(doc(getFirestore(), path))).data;

  }


}
