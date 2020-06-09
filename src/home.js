import React, { useState, useEffect } from "react";
import moment from "moment";
import {
  SpeedControlButton,
  TextInput,
  TimerAlert,
  Button,
  Timer,
  PlayPauseControl,
} from "./components";

import {getTimeLeft} from "./lib"

function Home() {
  const controlvalues = [1, 1.5, 2];
  const [providedMinute, setProvidedMinute] = useState(null);
  const [minute, setMinute] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [intervalId, setIntervalId] = useState(null);
  const [countDownInProgress, setCountDownInProgress] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [pausedAt, setPausedAt] = useState();
  const [isMoreHalf, setIsMoreHalf] = useState(false);
  const [isTimeUp, setTimeUp] = useState(false);
  const [is20Below, setIs20below] = useState(false);
  const [is10Below, setIs10below] = useState(false);
  const [countDownEnd, setCountDownEnd] = useState();

  function handleTimer() {
    var x = setInterval(() => {
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      let actualDistance1 = countDownEnd - now;
      let distance = actualDistance1 * speed;
      //Stop timer if distance is less than zero
      if (distance <= 0) {
        setCountDownInProgress(false);
        clearInterval(x);
        setPausedAt(null)
        setIsPlaying(false)
        setTimeUp(true);
        setIs20below(false);
        setIs10below(false);
        setMinute(0)
        setSeconds(0)
      } else {
          // Get hours, minute and seconds from now to when countdown ends
        let {hoursLeft, minutesLeft, secondsLeft } = getTimeLeft(distance)
        setMinute(hoursLeft * 60 + minutesLeft);
        setSeconds(secondsLeft);


        //Calculate total seconds left
        let totalMinuteLeft = hoursLeft * 60 + minutesLeft;
        let totalScondsLeft = totalMinuteLeft * 60 + secondsLeft;
        let providedMinuteInSeconds = providedMinute * 60
        if (totalScondsLeft < providedMinuteInSeconds / 2) {
          setIsMoreHalf(true);
        }
        if(totalScondsLeft<20){
            setIs20below(true)
        }

        if( totalScondsLeft<10){
            setIs10below(true)
        }
      }
    }, 1000 / speed);

    setIntervalId(x);
  }

  function speedChange(value) {
    return () => {
      clearInterval(intervalId);
      setSpeed(value);
      if (isPlaying) {
        setCountDownEnd(
          moment(new Date().getTime())
            .add((minute * 60 + seconds) / value, "s")
            .toDate()
            .getTime()
        );
      }
    };
  }

  function handlePlayPause() {
    if (isPlaying) {
      clearInterval(intervalId);
      setIsPlaying(false);
      setPausedAt(new Date().getTime());
    } else {
      let pausedDistance = new Date().getTime() - pausedAt;
      setCountDownEnd(countDownEnd + pausedDistance);
      setIsPlaying(true);
    }
  }

  useEffect(() => {
    if (countDownEnd) {
      handleTimer();
    }
  }, [countDownEnd]);

  function handleSetMinute(value) {
    if (!value) {
      return setProvidedMinute(null);
    } else {
      if (parseInt(value) && parseInt(value) > 0) {
        return setProvidedMinute(parseInt(value));
      }
      return;
    }
  }

  function handleStartTimer() {
      setSpeed(1)
    setCountDownEnd(
      moment(new Date().getTime())
    // Adding 2 seconds for timer delay
        .add(providedMinute * 60+2, "s")
        .toDate()
        .getTime()
    );
    setMinute(providedMinute);
    setIsPlaying(true);
    setCountDownInProgress(true);
    setIsMoreHalf(false);
    setTimeUp(false);
    setIs20below(false);
    setIs10below(false);
  }

  return (
    <div className="container">
      <div className="subContainer">
        <div className="subContainerInner">
          <div className="d-flex justify-content-center">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ width: "88%", minWidth:"400px" }}
            >
              <div>
                <span style={{ font: "25px Georgia, serif" }}>CountDown:</span>
              </div>

              <div>
                <TextInput
                  onChange={handleSetMinute}
                  value={providedMinute ? providedMinute : ""}
                />
              </div>

              <div>
                <Button
                  style={{
                    height: "50px",
                    width: "100px",
                    backgroundColor: "#09bba1",
                    fontSize: "18px",
                    color: "#ffffff",
                    
                  }}
                  text="START"
                  onClick={handleStartTimer}
                  disabled={countDownInProgress || !providedMinute}
                />
              </div>
            </div>
          </div>

          <div
            className="d-flex justify-content-center"
            style={{ width: "100%", marginTop: "40px" }}
          >
            <TimerAlert
              isMoreHalf={isMoreHalf}
              isTimeUp={isTimeUp}
            />
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <div style={{ marginRight: "15px" }}>
              <Timer minute={minute} seconds={seconds} is10below={is10Below}
              is20Below={is20Below}/>
            </div>
            <div style={{ marginTop: "25px" }}>
              {countDownInProgress && (
                <PlayPauseControl
                  isPlaying={isPlaying}
                  onClick={handlePlayPause}
                />
              )}
            </div>
          </div>

          <div
            className="d-flex justify-content-center"
            style={{ marginTop: "30px" }}
          >
            <div
              className="d-flex justify-content-between"
              style={{ width: "66%", minWidth:"300px" }}
            >
              {controlvalues.map((value) => (
                <SpeedControlButton
                  key={value}
                  value={value}
                  currentSpeed = {speed}
                  timerActive={isPlaying}
                  onChange={speedChange(value)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
