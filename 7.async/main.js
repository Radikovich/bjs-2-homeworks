let phoneAlarm = new AlarmClock();
phoneAlarm.addClock('21:50', () => console.log ('New week!'), 1);
phoneAlarm.addClock('21:51', () => console.log ('New week!!'), 2);
phoneAlarm.removeClock(2);
phoneAlarm.addClock('21:52', () => console.log ('Go sleep'), 3);
phoneAlarm.start();
phoneAlarm.stop();
phoneAlarm.printAlarms();