import cn from 'clsx';
import {  FC } from 'react';
import {  useState } from 'react'
import { useFrame as useRaf } from '@studio-freight/hamo'

interface numProp {
  num: string | number,
  unit: string,
  flip: boolean,
};

export const NumberBox = ({ num, unit, flip }: numProp) => {
  return (
    <span>{num}</span>
  )
}


//Should migrate styles 
interface timeProps {
  days: number | string,
  hours: number | string,
  minutes: number | string,
  seconds: number | string,
  breakWordOnMobile?: boolean
}

export const TimerContainer = ({ days, hours, minutes, seconds, breakWordOnMobile }: timeProps) => {

  let _days = parseFloat(days as string);
  let _hours = parseFloat(hours as string);
  let _minutes = parseFloat(minutes as string);
  let _seconds = parseFloat(seconds as string);

  let daysFlip = false;
  let hoursFlip = false;
  let minutesFlip = false;
  let secondsFlip = true;

  if (_seconds == 0) {
    if (_minutes != 0) {
      _seconds = 59;
    }

    secondsFlip = false;
    minutesFlip = true;
  }
  if (_minutes == 0) {
    if (_hours != 0) {
      _minutes = 59;
    }

    minutesFlip = false;
    hoursFlip = true;
  }

  if (_hours == 0) {
    hoursFlip = false;
    if (_days != 0) {
      daysFlip = true;
    }
  }



  if (_days < 10) {
    days = "0" + _days
  }

  if (_hours < 10) {
    hours = "0" + _hours
  }

  if (_minutes < 10) {
    minutes = "0" + _minutes
  }

  if (_seconds < 10) {
    seconds = "0" + _seconds
  }

  // if (_minutes === 0) minutes = "00"
  // if (_seconds === 0) seconds = "00"
  days = _days.toString().padStart(2, '0');
  hours = _hours.toString().padStart(2, '0');
  minutes = _minutes.toString().padStart(2, '0');
  seconds = _seconds.toString().padStart(2, '0');

  if (_days > 7) {
    return (
      <div>
        <NumberBox num={days} unit="Days" flip={daysFlip} />d{' '}
        <NumberBox num={hours} unit="Hours" flip={hoursFlip} />h
      </div>
    )
  }

  if (_days > 2) {
    return (
      <div>
        <NumberBox num={days} unit="Days" flip={daysFlip} />{' '}days
      </div>
    )
  }

  if (_days === 0) {
    return (
      <div>
        <NumberBox num={hours} unit="Hours" flip={hoursFlip} />:
        <NumberBox num={minutes} unit="Minutes" flip={minutesFlip} />:
        <NumberBox num={seconds} unit="Seconds" flip={secondsFlip} />
      </div>
    )
  }
 
    return (
      <div>
        <NumberBox num={days} unit="Days" flip={daysFlip} />:
        <NumberBox num={hours} unit="Hours" flip={hoursFlip} />:
        <NumberBox num={minutes} unit="Minutes" flip={minutesFlip} />:
        <NumberBox num={seconds} unit="Seconds" flip={secondsFlip} />
      </div>
    )
 
  return (

    <div className="flex pt-1.5">
      {/* <NumberBox num={days} unit="Days" flip={daysFlip} />: */}
      <span className={cn(breakWordOnMobile, 'block md:inline leading-[.8]')}><NumberBox num={days} unit="Days" flip={daysFlip} />:</span>
      <span className={cn(breakWordOnMobile, 'block md:inline leading-[.8]')}><NumberBox num={hours} unit="Hours" flip={hoursFlip} />:</span>
      <span className={cn(breakWordOnMobile, 'block md:inline leading-[.8]')}><NumberBox num={minutes} unit="Minutes" flip={minutesFlip} />:</span>
      <span className={cn(breakWordOnMobile, 'block md:inline leading-[.8]')}><NumberBox num={seconds} unit="Seconds" flip={secondsFlip} /></span>
    </div>

  )
}



interface CountdownProps {
  activeDate: number,
  title?: string;
  color?: string;
  className?: string;
  breakWordOnMobile?: boolean
}

const Countdown: FC<CountdownProps> = ({
  activeDate,
  title,
  color,
  className,
  breakWordOnMobile
}) => {


  const [newTime, setNewTime] = useState<number>(0)
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [message, setMessage] = useState<string>("");



  let countDownDate = activeDate //+ timeToDays;
  useRaf((time: number, delta: number) => {

    var now = new Date().getTime();

    var difference = countDownDate - now;
    if (difference <= 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      return
    }
    var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    var newHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var newMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

    setDays(newDays);
    setHours(newHours);
    setMinutes(newMinutes);
    setSeconds(newSeconds);



  })

  // useEffect(() => {


  //   var updateTime = setInterval(() => {
  //     var now = new Date().getTime();

  //     var difference = countDownDate - now;

  //     var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  //     var newHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //     var newMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  //     var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

  //     setDays(newDays);
  //     setHours(newHours);
  //     setMinutes(newMinutes);
  //     setSeconds(newSeconds);


  //     if (difference <= 0) {
  //       clearInterval(updateTime);
  //       setMessage("The Launch Has Started");
  //       setDays(0);
  //       setHours(0);
  //       setMinutes(0);
  //       setSeconds(0);
  //     }
  //   })

  //   return () => {
  //     clearInterval(updateTime);
  //   }

  // }, [time]);

  return (
    <div className={className}>
      <TimerContainer
        breakWordOnMobile={breakWordOnMobile}
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    </div>
  );
};

export default Countdown;
