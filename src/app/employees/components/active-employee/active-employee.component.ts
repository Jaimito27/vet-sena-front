import { Component } from '@angular/core';
import { Pet } from 'src/app/pets/interfaces/pet.interface';

@Component({
  selector: 'app-active-employee',
  templateUrl: './active-employee.component.html',
  styleUrls: ['./active-employee.component.scss']
})
export class ActiveEmployeeComponent {

  pets: Pet[] = [
    {
      photo:
        'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg',
      name: 'Danna',
      age: 14,
      type: 'Perro',
      breed: 'Criollo',
      dangerous: true,
    },
    {
      photo:
        'https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067',
      name: 'Estrella',
      age: 3,
      type: 'Gato',
      breed: 'Egipcio',
      dangerous: false,
    },
    {
      photo:
        'https://larepublica.cronosmedia.glr.pe/migration/images/A6Z6ZD3PQ5HKPJQ5PNYAAH6NXM.jpg',
      name: 'Carmelio',
      age: 6,
      type: 'Capibara',
      breed: 'Silvestre',
      dangerous: true,
    },
    {
      photo:
        'https://img.europapress.es/fotoweb/fotonoticia_20170619184504_420.jpg',
      name: 'Braulio',
      age: 9,
      type: 'Marrano',
      breed: 'Mono',
      dangerous: true,
    },
    {
      photo:
        'https://www.nationalgeographic.com.es/medio/2022/06/01/ejemplar-de-eudyptes-schlegeli_b1e836f0_800x800.jpeg',
      name: 'Genovevo',
      age: 4,
      type: 'Pingüino',
      breed: 'Polar',
      dangerous: false,
    },
    {
      photo:
        'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/10/19/16977227924509.jpg',
      name: 'Elergio',
      age: 56,
      type: 'Pato',
      breed: 'Rio',
      dangerous: true,
    },
    {
      photo:
        'https://www.nationalgeographic.com.es/medio/2021/03/04/un-aligator-americano-posa-para-el-fotografo-joel-sartore-exhibiendo-sus-poderosas-mandibulas-entreabiertas-en-el-zoo-de-kansas-city_9f59d82e_800x800.jpg',
      name: 'Tomaso',
      age: 45,
      type: 'Cocodrilo',
      breed: 'Mueco',
      dangerous: false,
    },
  ];
}
