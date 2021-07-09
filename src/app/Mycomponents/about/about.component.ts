import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { translateExpression } from '@angular/compiler-cli/src/ngtsc/translator';
import { Component, OnInit } from '@angular/core';

// Animation: 
// 'void => *' == means from void(normal) state to default(where css apply) state [FADE IN]
// '* => void' == is also possible [FADE OUT]
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fade', [
      transition('* => *', [
        query(":self", style({ opacity: 0 }), { optional: true }),

        query(":self", stagger('3000ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))
        ]))

      ])
    ]),

    trigger('otherdiv', [
      transition('* => *', [
        query(":self", style({ opacity: 0, transform: 'translateX(-40px ' })),

        query(":self", stagger('100ms', [
          animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
        ]))
      ])
    ])

  ]
})
export class AboutComponent implements OnInit {
  name: string;
  name2: string;
  constructor() { }

  ngOnInit(): void {
    this.name2 = this.name
  }


}
