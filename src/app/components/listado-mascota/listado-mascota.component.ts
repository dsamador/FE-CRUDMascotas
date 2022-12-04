import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/mascota';


const listMascotas: Mascota[] = [
  {nombre: 'Hydrogen', edad: 1, raza: 'H', color: 'Dorado', peso: 1},
  {nombre: 'Hydrogen1', edad: 1, raza: 'H', color: 'Dorado', peso: 1},
  {nombre: 'Hydrogen2', edad: 1, raza: 'H', color: 'Dorado', peso: 1},
  {nombre: 'Hydrogen3', edad: 1, raza: 'H', color: 'Dorado', peso: 1},
  {nombre: 'Hydrogen4', edad: 1, raza: 'H', color: 'Dorado', peso: 1},
  {nombre: 'Hydrogen5', edad: 1, raza: 'H', color: 'Dorado', peso: 1},
  {nombre: 'Hydrogen6', edad: 1, raza: 'H', color: 'Dorado', peso: 1},
];


@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso'];
  dataSource = new MatTableDataSource<Mascota>(listMascotas);

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  //const initialSelection = [];
  //const allowMultiSelect = true;
  //this.selection = new SelectionModel<Mascota>(allowMultiSelect, initialSelection);


  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Items por pagina';
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
  }

}
