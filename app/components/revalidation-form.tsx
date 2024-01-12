"use client"

import { revalidateAllPath } from "@/actions/revalidate-all-data"
import React, { useEffect, useRef } from "react"

const RevalidationForm = () => {
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    console.log("USE EFFECT TRIGGERED -> ")
    formRef.current?.requestSubmit()
  }, [])

  return <form action={revalidateAllPath} ref={formRef} method="post" />
}

export default RevalidationForm
