import { Component ,OnInit,Input} from '@angular/core';
import { divisas } from 'src/entidades/divisasGet';
import { DivisasService } from './services/divisas.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
  public title = 'CambioDivsas' ;
  public dolar:string = "";
  public euro:string = "";
  public entidadDivisa:divisas;
  public cambioActual:number;
  time: number = 0;
  public interval:any;
  public play:boolean;


  constructor(public service:DivisasService){
      console.log("ad");
  }
 
  ngOnInit(): void {
   
  
  }
  startTimer() {
    this.play = true;
    this.interval = setInterval(() => {
      this.time++;
      if(this.time >= 30){
         
          //console.log("VENCIO");
          alert("Se volvera  a calcular la divisas");
          this.ChangeDivisas();
      }
    },1000)
  }
  
  pauseTimer() {
    this.play = false;
    this.time = 0;
    clearInterval(this.interval);
  }
  


  ChangeDivisas(){
    this.pauseTimer();
      this.service.GetDivisas().subscribe(
        (e) => {
          this.entidadDivisa  = <divisas>e;
            console.log(this.entidadDivisa);
            this.startTimer();
            if(this.entidadDivisa != null){
              this.cambioActual = Number(this.entidadDivisa.rates.USD);
              console.log(this.cambioActual);
              this.dolar = (Number(this.euro) * this.cambioActual).toString();
            }
        }
      )
  }
}

