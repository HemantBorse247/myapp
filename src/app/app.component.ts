import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  pageNo:number = 0;

  buttonClicked(index:number) {
    console.log(index);
    this.pageNo = index;
    
  }
}
