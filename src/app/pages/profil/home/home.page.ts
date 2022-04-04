import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  userName = 'Manon FAUCHER';

  infoPerso = [
    {icon: 'home-outline', info: '57 Boulevard des Tribunes, 44300 Nantes'},
    {icon: 'mail-outline', info: 'manon.faucher.pro@gmail.com'},
    {icon: 'call-outline', info: '06.48.17.32.09'},
    {icon: 'car-outline', info: 'permis B'},
  ];

  public reseaux = [
    {icon: 'logo-linkedin'},
    {icon: 'logo-github'}
  ];

  constructor(
    private alertController: AlertController
    ) {}

  ngOnInit(): void {}

  async openAlert() {
    const myMessage = 'Etes vous sur de vouloir quitter l\'application ?';
    const alert = await this.alertController.create({
      message: myMessage,
      buttons: ['Annuler', 'Valider']
    });

    await alert.present();
    await alert.onDidDismiss();

  }
}
