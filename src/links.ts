import chalk from 'chalk'
import type { ChalkInstance } from 'chalk'

interface LinkOptions {
  color: ChalkInstance
  icon: string
  title: string
  link: string
}

type Links = Record<string, LinkOptions>

export const links: Links = {
  github: {
    color: chalk.black,
    icon: '',
    title: 'GitHub',
    link: 'https://github.com/crashmax-dev'
  },
  twitch: {
    color: chalk.hex('6441a5'),
    icon: '',
    title: 'Twitch',
    link: 'https://twitch.tv/vs_code'
  },
  telegram: {
    color: chalk.hex('0088cc'),
    icon: '',
    title: 'Telegram',
    link: 'https://t.me/crashmax'
  },
  steam: {
    color: chalk.hex('2a475e'),
    icon: '',
    title: 'Steam',
    link: 'https://steamcommunity.com/id/crashmax'
  }
}
