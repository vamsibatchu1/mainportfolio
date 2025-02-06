"use client"
import * as React from "react"
import { TextScramble } from "@/components/ui/text-scramble"
import localFont from 'next/font/local'


export default function Page() {
  return (
    <div className="flex justify-center">
      <TextScramble className="text-md uppercase">
        Text Scramble
      </TextScramble>
    </div>
  )
}
