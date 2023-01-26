import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

interface Data {
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  Myurl = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient, private router:Router) { }
  data?: Data[];

  compareData(username: string, email: string): Observable<boolean> {
    return this.http.get<Data[]>(this.Myurl).pipe(
      map(data => {
        for (let user of data) {
          if (user.username === username && user.email === email) {
            this.data = data;
            return true;
          }
        }
        return false;
      })
    );
  }

   logout() {
    Swal.fire({
      title: '¿Desea cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        localStorage.removeItem('usuario');
        this.router.navigate(['/login']);
      }
    });
  }
}

