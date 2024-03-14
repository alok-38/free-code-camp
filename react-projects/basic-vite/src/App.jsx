import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import YouTube from './Youtube'

const PlanckConstantCalculation = () => {
  const planckConstant = 6.62607015e-34; // Planck constant in Joule seconds (J⋅s)
  const frequency = 5e14; // Frequency of the photon in Hertz (Hz)

  // Calculate the energy of the photon using the formula: E = h * f
  const energy = planckConstant * frequency;

  return (
    <div>
      <h2>Photon Energy Calculation:</h2>
      <p>Planck Constant: {planckConstant} J⋅s</p>
      <p>Frequency: {frequency} Hz</p>
      <p>Energy of the photon: {energy.toExponential(4)} Joules</p>
    </div>
  );
}

function App() {
  const planckConstant = 6.62607015e-34;
  return (
    <div>
      <h2>Planck Constant:</h2>
      <p>{planckConstant}</p>
      <PlanckConstantCalculation />
    </div>
  );
}

export default App
