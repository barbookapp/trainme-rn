// import * as React from 'react';
// import * as RN from 'react-native';

// class Calendar extends React.Component {
//   months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];
//   weekDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
//   nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
//   state = {
//     activeDate: new Date(),
//   };
  
//   generateMatrix() {
//     var matrix = [];
//     matrix[0] = this.weekDays;
//   }
//   var year = this.state.activeDate.getFullYear();
//   var month = this.state.activeDate.getMonth();

//   var firstDay = new Date(year, month, 1).getDay();
//   var maxDays = this.nDays[month];
//   if (month == 1) {
//       if ((year % 4 == 0 && year % 100 != 0) || year % 400 = 0) {
//           maxDays+=1;
//       }
//   }
//   var counter = 1;
// for (var row = 1; row < 7; row++) {
//   matrix[row] = [];
//   for (var col = 0; col < 7; col++) {
//     matrix[row][col] = -1;
//     if (row == 1 && col >= firstDay) {
//       // Fill in rows only after the first day of the month
//       matrix[row][col] = counter++;
//     } else if (row > 1 && counter <= maxDays) {
//       // Fill in rows only if the counter's not greater than
//       // the number of days in the month
//       matrix[row][col] = counter++;
//     }
//   }
// }
 
// return matrix;



//   render() {
//     var matrix = this.generateMatrix();
//     return <RN.View style={{
//         fontWeight: 'bold',
//         fontSize: 18,
//         textAlign: 'center'
//       }}>{this.months[this.state.activeDate.getMonth()]} &nbsp;
//     {this.state.activeDate.getFullYear()}</RN.View>;
//   }
// }
