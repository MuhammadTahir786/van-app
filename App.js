import { View, Text } from 'react-native'
import React from 'react'
import StackNavigation from './src/navigation/Stack/index'
import ContextProvider from './src/components/contextApi/contextApi'

const App = () => {
  return (
    <ContextProvider>
      <StackNavigation />
    </ContextProvider>
     
  )
}

export default App