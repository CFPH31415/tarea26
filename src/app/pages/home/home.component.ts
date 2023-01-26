import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data!: Data['username'];

  constructor(private datitosService: DatosService) {
    this.data = this.datitosService.data;
  }
}
