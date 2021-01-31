import * as React from 'react'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'
import * as config from 'lib/config'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const Footer: React.FC<{
  isDarkMode: boolean
  toggleDarkMode: () => void
}> = ({ isDarkMode, toggleDarkMode }) => {
  const toggleDarkModeCb = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

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
        <div className={styles.social}>
          {config.twitter && (
            <a
              className={styles.twitter}
              href={`https://twitter.com/${config.twitter}`}
              title={`Twitter @${config.twitter}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter />
            </a>
          )}

          {config.github && (
            <a
              className={styles.github}
              href={`https://github.com/${config.github}`}
              title={`GitHub @${config.github}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub />
            </a>
          )}

          {config.linkedin && (
            <a
              className={styles.linkedin}
              href={`https://www.linkedin.com/in/${config.linkedin}`}
              title={`LinkedIn ${config.author}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin />
            </a>
          )}
        </div>
      </div>

      <div className={styles.settings}>
        <a
          className={styles.toggleDarkMode}
          onClick={toggleDarkModeCb}
          title='Tottle dark mode'
        >
          {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
        </a>
      </div>

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
