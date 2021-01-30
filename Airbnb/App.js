import React from 'react'
import Root from "./src/App"
import { StateProvider } from "./store/StateProvider";
import { initialState, reducer } from "./store/reducer";

export default function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Root />
    </StateProvider> )
}
