import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import {RestapiService} from '../restapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  entities = []
  
  SampleEntities = ["North Weather Station" ,"South Weather Station","East Weather Station","West Weather Station"]

  constructor(public router: Router,  public loadingController: LoadingController,public api:RestapiService,public alertController: AlertController) {
this.Loading()
 //   this.Initization();
  }


  
  async userDetails() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
    //  header: 'Alert',
     subHeader: 'User Details',
      message: '<b>Name : </b>Arun Rajput <br><b>Email : </b>arunrajput@gmail.com',
      buttons: ['OK']
    });

    await alert.present();
  }

  async alertmsg() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
    // subHeader: 'Subtitle',
      message: '<b>NO ACTIVE ALERTS<b>',
      buttons: ['OK']
    });

    await alert.present();
  }

 


  logout(){
    this.router.navigateByUrl('login');
  }

async sendentityName(name){

  const loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
    message: 'Getting '+ name +' data....'
  });
 await loading.present()
 await this.api.getEntityName(name)
        .subscribe(res => { 
        //  for(let i=0;i<res.count;++i){
            console.log(res)
      //    this.entities.push(res.devices[i]['device_id'])
      //    }
         
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
   
 //console.log(name)
}



  async Initization(){
    this.entities=[]
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Fetching Entities....'
    });
   await loading.present()
    await this.api.getDataValue()
          .subscribe(res => { 
            console.log(res)
            // for(let i=0;i<res.count;++i){
            // //  console.log(res.devices[i]['device_id'])
            // this.entities.push(res.devices[i]['device_id'])
            // }
           
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
     
  }

  northws(){
    this.router.navigateByUrl('north-ws');
  }

  southws(){
    this.router.navigateByUrl('south-ws');
  }

  eastws(){
    this.router.navigateByUrl('east-ws');
  }

  westws(){
    this.router.navigateByUrl('west-ws');
  }
  async Loading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading.....',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
