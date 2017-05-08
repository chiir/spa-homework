import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title : String = 'My First Angular App';
  today : Date = new Date();
  value : String = "TEXT";
  private timer;

  ngOnInit() {

      this.timer = setInterval(time => {this.today = new Date();}, 1000)
  }

  ngOnDestroy(){
      clearInterval(this.timer);
  }

}
