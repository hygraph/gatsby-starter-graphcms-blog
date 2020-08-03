import React from 'react'

import './src/styles/index.css'

const wrapPageElement = ({ element }) => (
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl">
    <main>{element}</main>
  </div>
)

export { wrapPageElement }
