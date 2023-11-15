import { Component, Input } from '@angular/core';

@Component({
  //standalone: true,
  template: `
    <div class="hero-profile">
      <h3>Featured Hero Profile</h3>
      <h4>{{ name }}</h4>
      <p>{{ bio }}</p>
      <strong>Hire this hero today!</strong>
    </div>
  `,
})
export class HeroProfileComponent {
  @Input() name!: string;
  @Input() bio!: string;
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
