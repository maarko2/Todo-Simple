import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { User } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {getFirestore, setDoc, doc, getDoc } from '@angular/fire/firestore'
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
  setDocument(path: string, data: any){
    return setDoc(doc(getFirestore(), path), data);
  }

  async getDocument(path : string){
    return (await getDoc(doc(getFirestore(), path))).data;

  }


}
