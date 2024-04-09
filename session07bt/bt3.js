"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["MONDAY"] = 1] = "MONDAY";
    WeekDays[WeekDays["TUESDAY"] = 2] = "TUESDAY";
    WeekDays[WeekDays["WEDNESDAY"] = 3] = "WEDNESDAY";
    WeekDays[WeekDays["THURSDAY"] = 4] = "THURSDAY";
    WeekDays[WeekDays["FRIDAY"] = 5] = "FRIDAY";
    WeekDays[WeekDays["SATURDAY"] = 6] = "SATURDAY";
    WeekDays[WeekDays["SUNDAY"] = 7] = "SUNDAY";
})(WeekDays || (WeekDays = {}));
for (let day in WeekDays) {
    console.log(WeekDays[day]);
}
