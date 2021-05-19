import { VFC } from 'react'
import { RTKitA } from './RTKitA'
import { RTKitB } from './RTKitB'
import { RTKitC } from './RTKitC'
import { RTKitD } from './RTKitD'

export const MainRTKit: VFC = () => {
  return (
    <div className="grid grid-cols-2 gap-40">
      <RTKitA />
      <RTKitB />
      <RTKitC />
      <RTKitD />
    </div>
  )
}
