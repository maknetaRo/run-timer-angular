import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
// export class AppComponent {

//   time: number;
//   stopTime: number;
//   result: number;
//   interval;
//   hour = 0;
//   minute = 0;
//   second = 0;
//   displayHours = "00";
//   displayMinutes = "00";
//   displaySeconds = "00";
//   status: boolean = true;
//   inputBoxStatus: boolean = true;
//   startHour;
//   stopHour;
//   timer;
//   // constructor() {
//   //   setInterval(() => {
//   //     this.time = Date.now();
//   //   }, 1);
//   // }
//   displayTime() {
//     this.timer = new moment.duration(1000).timer(callback);
//     this.timer.start();
//   }
//   displayTime() {
//     this.status = !this.status;
//     this.interval = setInterval(() => {
//       this.second++;
//       if (this.second / 60 === 1) {
//         this.second = 0;
//         this.minute++;
//         if (this.minute / 60 === 1) {
//           this.minute = 0;
//           this.hour++;
//         }
//       }
//       if (this.second < 10) {
//         this.displaySeconds = "0" + this.second.toString();
//       } else {
//         this.displaySeconds = this.second.toString();
//       }
//       if (this.minute < 10) {
//         this.displayMinutes = "0" + this.minute.toString();
//       } else {
//         this.displayMinutes = this.minute.toString();
//       }
//       if (this.hour < 10) {
//         this.displayHours = "0" + this.hour.toString();
//       } else {
//         this.displayHours = this.hour.toString();
//       }
//     }, 1000);
//     moment().startOf("hour");
//     this.startHour = moment().minutes(0).seconds(0);
//     console.log(this.startHour);
//   }
//   stopTimer() {
//     this.status = !this.status;
//     clearTimeout(this.interval);
//     moment().endOf("hour");
//     this.stopHour = moment().minutes(0).seconds(0);
//     console.log(this.stopHour);
//   }
//   resetTimer() {
//     clearTimeout(this.interval);
//     this.second = 0;
//     this.minute = 0;
//     this.hour = 0;
//     this.displaySeconds = "00";
//     this.displayMinutes = "00";
//     this.displayHours = "00";
//   }
//   displayRaceDuration() {
//     this.duration = this.stopHour - this.stopHour;
//   }
// }
export class AppComponent {}
