import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-agregar-editar-mascota',
  templateUrl: './agregar-editar-mascota.component.html',
  styleUrls: ['./agregar-editar-mascota.component.css']
})
export class AgregarEditarMascotaComponent implements OnInit {
  loading : boolean = false;
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _mascotaService: MascotaService,
    private _snackBar: MatSnackBar,
    private router: Router) {
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
    this._mascotaService.postMascota(mascota).subscribe(
      data => {
        this.mensajeExito();
        this.router.navigate(['/listMascotas'])
      }
    )
  }
  mensajeExito(){
    this._snackBar.open("Mascota registrada con exito",'',{
      duration: 4000,
      horizontalPosition: 'right',
    });
  }

}
