import React, { useState, useEffect } from 'react'

const MouseFollower = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      console.log('effect', { enabled })
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
      console.log('handleMove', clientX, clientY)
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    // limpia subscripciones: se ejecuta cuando el componente se dessmonta y cuando
    // cambian las dependencias - controlar en terminal con getEventListeners(window)
    return () => {
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}

export default MouseFollower
