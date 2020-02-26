import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  positions: any = [];
  
  consulta: Object;
  constructor(private http: HttpClient,  private router: Router) { }
  public paginaAtual = 1; 

  ngOnInit() {
    this.http.get('http://5e148887bce1d10014baea80.mockapi.io/keycash/challenge')
      .subscribe(data => {  this.consulta = data;   
        
     });
 
     }

     detalhe(id, price, address, bathrooms, bedrooms, parkingSpaces, usableArea, images,
       imgUm, imgDois, imgTres, imgQt, imgCinco) {
      this.router.navigate(['/detalhe/:', {id: id, price:price,address:address, 
        bathrooms:bathrooms, bedrooms:bedrooms, parkingSpaces: parkingSpaces, 
        usableArea:usableArea, images: images, imgUm: imgUm, imgDois: imgDois, imgTres: imgTres, 
        imgQt: imgQt, imgCinco: imgCinco}]);
    }
   

}
