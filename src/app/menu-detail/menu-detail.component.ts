import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../menu/pizza';
import { TestService } from '../test.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {
@Input() pizza: Pizza;


  // constructor(private testService: TestService) { }

   ngOnInit() {
}
  //   this.testService.getEmployers().subscribe((data:any) => {
  //     console.log('from menu', data)
  // })

}


