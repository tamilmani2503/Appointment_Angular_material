function checkTime(startTime,endTime) {
    let splitStartTime = startTime.split(":");
    let splitEndTime = endTime.split(":");
    console.log(splitStartTime[0], splitEndTime[0]);
    if (splitEndTime[0] > splitStartTime[0]) {
        return true;
    }
    return false;
}