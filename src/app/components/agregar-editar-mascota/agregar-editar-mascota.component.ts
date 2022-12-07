import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mascota } from 'src/app/interfaces/mascota';

@Component({
  selector: 'app-agregar-editar-mascota',
  templateUrl: './agregar-editar-mascota.component.html',
  styleUrls: ['./agregar-editar-mascota.component.css']
})
export class AgregarEditarMascotaComponent implements OnInit {
  loading : boolean = false;
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      color: ['', Validators.required],
      edad: ['', Validators.required],
      peso: ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  agregarMascota(){
    //dos formas de obtener valores del formulario uno por uno
    //const nombre = this.form.get('nombre')?.value;
    //Armamos el objeto
    const mascota: Mascota = {
      nombre : this.form.value.nombre,
      raza : this.form.value.raza,
      peso : this.form.value.peso,
      edad : this.form.value.edad,
      color : this.form.value.color
    }
    
  }

}
