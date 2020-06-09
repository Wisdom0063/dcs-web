export function getTimeLeft(distance){
    let hoursLeft = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutesLeft = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      let secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

      return {hoursLeft, minutesLeft, secondsLeft}
}