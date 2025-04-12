import React from 'react'
import { Button } from 'antd'

export default function Login() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Login</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 rounded p-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded p-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition"
          >
            Login
          </button>
          <Button type="primary">Button</Button>
        </form>
      </main>
    </div>
  )
}
