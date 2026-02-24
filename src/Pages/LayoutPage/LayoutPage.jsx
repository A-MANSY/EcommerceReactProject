import React from 'react'
import TopHeader from '../../Components/Header/TopHeader/TopHeader'
import BottomHeader from '../../Components/Header/BottomHeader/BottomHeader'
import { Outlet } from 'react-router-dom'
import CategroyProvider from '../../Contexts/CategroyContext/CategroyProvider'
import Toast from '../../Components/Toast/Toast'
import { useCartContext } from '../../Contexts/CartContext/Cart'
export default function LayoutPage() {
  const {toast}=useCartContext()
  return (
    <>
    <header>
      <TopHeader/>
      <BottomHeader/>
    </header>
  <main className='container'>
    <Outlet />
  </main>
  <Toast toast={toast}/>
    </>
  )
}
