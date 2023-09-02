import { fireBase } from "firebase/app";
import { fireBaseAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyARkH5UPTnLb011Qle1Kee0ay_RDTMuqKQ",
    authDomain: "catalogo-app-f7511.firebaseapp.com",
    projectId: "catalogo-app-f7511",
    storageBucket: "catalogo-app-f7511.appspot.com",
    messagingSenderId: "166277862551",
    appId: "1:166277862551:web:ed21a8bcef9156a94645d2",
    measurementId: "G-3YFXN4Y90E"
  };
  
const app = fireBase(firebaseConfig);
const analytics = fireBaseAnalytics(app);