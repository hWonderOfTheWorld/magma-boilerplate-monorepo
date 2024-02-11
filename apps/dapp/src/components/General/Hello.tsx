"use client"

import CountDown from "@/components/Countdown"
import Link from "next/link"

export default function Hello() {

    const _devDate = (new Date('Tue Jun 25 2024 21:00:00 GMT-0800')).getTime()


    return (   
      <div>
        Hello
        <CountDown activeDate={_devDate} />

        <Link href='page2'>Page 2</Link>
      </div>
    )
  }
  