import * as React from 'react'
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'
import * as config from 'lib/config'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const Footer: React.FC<{
  isDarkMode: boolean
  toggleDarkMode: () => void
}> = ({ isDarkMode, toggleDarkMode }) => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const toggleDarkModeCb = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        Copyright 2021 {config.author} -{' '}
        <a
          href='https://reacher.email'
          rel='noopener noreferrer'
          target='_blank'
        >
          https://reacher.email
        </a>
      </div>

      {hasMounted ? (
        <div className={styles.settings}>
          <a
            className={styles.toggleDarkMode}
            onClick={toggleDarkModeCb}
            title='Tottle dark mode'
          >
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        </div>
      ) : null}

      <div>
        <a
          href='https://vercel.com?utm_source=reacher&utm_campaign=oss'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src='/powered-by-vercel.svg' />
        </a>
      </div>
    </footer>
  )
}
