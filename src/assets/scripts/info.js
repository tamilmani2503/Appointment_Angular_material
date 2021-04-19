function checkTime(startTime,endTime) {
    let splitStartTime = startTime.split(":");
    let splitEndTime = endTime.split(":");
    if (splitEndTime[0] > splitStartTime[0]) {
        console.log("Correct Endtime")
    }
    console.log("Incorrect Timings");    
}