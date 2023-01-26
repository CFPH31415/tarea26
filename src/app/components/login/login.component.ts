import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosService } from 'src/app/services/datos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup;
  constructor(private formBuilder: FormBuilder, private datitosService: DatosService, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: ['',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ]
    })
  }
  get username() {
    return this.formLogin.get('username')!;
  }
  get email() {
    return this.formLogin.get('email')!;
  }

  public validate(): void {
    if (this.formLogin.invalid) {
      for (const control of Object.keys(this.formLogin.controls)) {
        this.formLogin.controls[control].markAsTouched();
      }
      return;
    }
  }

  async validarN() {

    const user = this.formLogin.get('username')?.value;
    const email = this.formLogin.get('email')?.value;

    this.datitosService.compareData(user,email).subscribe(isValid => {
      if (isValid) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Bienvenido(a)',
          showConfirmButton: false,
          timer: 2500
        })
        this.router.navigate(['home']);
        console.log("Datos correctos");
      } else {

        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: 'Usuario/Contraseña incorrecto(s)',
          showConfirmButton: false,
          timer: 2500
        })
        console.log("Incorrectos");
      }
    });
  }}


