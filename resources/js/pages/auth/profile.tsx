import Header from '@/components/common/Header'
import { Head } from '@inertiajs/react'
import React from 'react'

const profile = () => {
  return (
    <>
        <Head title="Profile" />
        <Header />
        <div>Your Profile</div>
    </>
  )
}

export default profile