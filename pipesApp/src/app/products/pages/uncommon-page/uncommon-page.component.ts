import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
})
export class UncommonPageComponent {
  // i18nSelect
  public name: string = 'Lennon';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    female: 'Invitarla',
    male: 'Invitarlo',
  };

  public changeClient() {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18lnPlural
  public clients: string[] = ['maria', 'pedro', 'Jaimito', 'Pedrito'];
  public clientsMap = {
    '=0': 'no hay clientes esperando',
    '=1': 'hay 1 cliente esperando',
    other: '# clientes esperando',
  };

  public deleteClient() {
    this.clients.pop();
  }

  //keyvalue pipe
  public person = {
    name: 'Moises',
    age: 36,
    address: 'Canada',
  };
}
