import { useState } from 'react'
import './styles/global.css';
import { Logo } from './Logo';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Envelope, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';

export function App() {

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading className="mt-4" size="lg">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Login and start using
        </Text>
      </header>
      <form className="flex flex-col items-stretch w-full max-w-[400px] mt-10 gap-4">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text size="sm" className="font-semibold">
            Email address
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id="email" type="email" placeholder="Type your email">

            </TextInput.Input>
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3">
          <Text size="sm" className="font-semibold">
            Password
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input id="password" type="password" placeholder="Type your password">

            </TextInput.Input>
          </TextInput.Root>
        </label>
        <label className="flex flex-row gap-2 items-center mt-4" htmlFor="remember">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Remember me for next 30 days
          </Text>
        </label>
        <Button type="submit" className="mt-4">
          Sign In
        </Button>
        <footer className="flex flex-col items-center gap-4 mt-8">
          <Text asChild size="sm">
            <a href="" className="text-gray-400 underline hover:text-gray-200">
              Forgot your password?
            </a>
          </Text>
          <Text asChild size="sm">
            <a href="" className="text-gray-400 underline hover:text-gray-200">
              Don't you have an account? Create one!
            </a>
          </Text>
        </footer>
      </form>
    </div>
  )
}
