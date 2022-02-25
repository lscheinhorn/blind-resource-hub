import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDGXtVpzks1bStAIXKIJH8OE7ezs_Epc3U',
  authDomain: 'blind-resource-hub.firebaseapp.com',
  projectId: 'blind-resource-hub',
  storageBucket: 'blind-resource-hub.appspot.com',
  messagingSenderId: '1024871076821',
  appId: '1:1024871076821:web:248c01f7aa0eed77afe35c',
  measurementId: 'G-8D02WES3C0',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore()
