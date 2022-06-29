import meow from 'meow'

export const cli = meow(
  `
  Usage
    $ crashmax <input>

  Options
    --github,   Visit to GitHub profile
    --twitch,   Visit to Twitch channel
    --telegram  Visit to Telegram account
    --steam     Visit to Steam account
`,
  {
    importMeta: import.meta,
    flags: {
      github: {
        type: 'boolean'
      },
      twitch: {
        type: 'boolean'
      },
      telegram: {
        type: 'boolean'
      },
      steam: {
        type: 'boolean'
      }
    }
  }
)
