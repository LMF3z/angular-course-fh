import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
})
export class BasicsPageComponent {
  public nameLower: string = 'lennon';
  public nameUpper: string = 'LENNON';
  public fullName: string = 'lEnnOn';

  public customDate: Date = new Date();
}
