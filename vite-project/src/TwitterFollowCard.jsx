import React, { useState } from 'react'

const TwitterFollowCard = ({ name, userName, formatUserName, initialIsFollowing }) => {
  // estado de seguimiento tipo switch
  const [isFollowing, setFollowing] = useState(initialIsFollowing)

  // renderizado condicional de estilos
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button is--following' : 'tw-followCard-button'

  const handleFollow = () => {
    setFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={`https://unavatar.io/${userName}`}
          alt='avatar'
        />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleFollow}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de Seguir</span>
        </button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard
