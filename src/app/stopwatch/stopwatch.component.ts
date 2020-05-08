import { Component, OnInit } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "app-stopwatch",
  templateUrl: "./stopwatch.component.html",
  styleUrls: ["./stopwatch.component.css"],
})
export class StopwatchComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  timer = "00:00:00";
  counter = 0;
  status: boolean = true;
  interval;

  displayTime() {
    this.status = !this.status;
    this.interval = setInterval(() => {
      this.timer = moment()
        .hour(0)
        .minute(0)
        .second(this.counter++)
        .format("HH:mm:ss");
    }, 1000);
  }
  stopTimer() {
    this.status = !this.status;
    clearTimeout(this.interval);
  }
  resetTimer() {
    this.timer = "00:00:00";
    clearInterval(this.interval);

    console.log(this.timer);
  }
}
