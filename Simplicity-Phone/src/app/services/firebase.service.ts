import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { User } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore)


  // ======================== Autenticación =================




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

  // ================== Base de Datos  =================


}
