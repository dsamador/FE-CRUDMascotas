import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/mascota';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso', 'acciones'];
  dataSource = new MatTableDataSource<Mascota>();
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  constructor(private _snackBar: MatSnackBar,
    private _mascotaService: MascotaService) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if(this.dataSource.data.length > 0){
      this.paginator._intl.itemsPerPageLabel = 'Items por pagina';
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  obtenerMascotas(){
    this.loading = true;
    this._mascotaService.getMascotas().subscribe(
      {next: data=>{
        this.loading =false;
        this.dataSource.data = data;
      }, error: () => {
        this.loading = false
        alert('Ocurrio un error')
      }}
    )
  }

  ngOnInit():void {
    this.obtenerMascotas();
  }

  eliminarMascota(){
    this.loading = true;
    setTimeout(()=>{
      this.loading = false;
      this._snackBar.open("Mascota eliminada",'',{
        duration: 4000,
        horizontalPosition: 'right',
      });
    },2000)
  }



}
