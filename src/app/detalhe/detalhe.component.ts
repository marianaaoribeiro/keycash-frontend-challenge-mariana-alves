import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {
  consulta: any;
  

  constructor(private http: HttpClient, private route: ActivatedRoute) {  
    // this.trip = navParams.get('id');
    
   }
public id;
public price;
public address;
public bathrooms;
public bedrooms;
public parkingSpaces;
public images;
public imgUm;
public imgDois;
public imgTres;
public imgQt;
public imgCinco;


public usableArea;


  ngOnInit() {
    this.dados();
  }

  dados(){
    this.id = (this.route.snapshot.paramMap.get('id'));
    this.price = (this.route.snapshot.paramMap.get('price'));
    this.address = (this.route.snapshot.paramMap.get('address'));
    this.bathrooms = (this.route.snapshot.paramMap.get('bathrooms'));
    this.bedrooms = (this.route.snapshot.paramMap.get('bedrooms'));
    this.parkingSpaces = (this.route.snapshot.paramMap.get('parkingSpaces'));
    this.images = (this.route.snapshot.paramMap.get('images'));
    this.usableArea = (this.route.snapshot.paramMap.get('usableArea'));
    this.imgUm = (this.route.snapshot.paramMap.get('imgUm'));
    this.imgDois = (this.route.snapshot.paramMap.get('imgDois'));
    this.imgTres = (this.route.snapshot.paramMap.get('imgTres'));
    this.imgQt = (this.route.snapshot.paramMap.get('imgQt'));
    this.imgCinco = (this.route.snapshot.paramMap.get('imgCinco'));
  }

}
