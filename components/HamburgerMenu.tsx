import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

type HamburgerMenuProps = {
    onPress: () => void;
}


export default function HamburgerMenu({ onPress }: HamburgerMenuProps) {
  return (
    <Pressable onPress={onPress}>
        <MaterialIcons name='menu' size={24}  />
    </Pressable>
  )
}