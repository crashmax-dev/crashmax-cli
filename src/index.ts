#!/usr/bin/env node
import chalk from 'chalk'
import open from 'open'
import image from 'terminal-image'
import { cli } from './cli.js'
import { links } from './links.js'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const flags = Object.entries(cli.flags)
  .map(
    ([
      flag,
      hasBool
    ]) => (hasBool && links[flag]?.link) as string
  )
  .filter(Boolean)

if (flags.length) {
  flags.forEach(async (link) => await open(link))
} else {
  const linksMsg = Object.values(links)
    .map(({ color, icon, link, title }) => {
      const social = color(`${icon} ${chalk.bold(title)}`)
      return `${social} ${chalk.black(link)}`
    })
    .join('\n')

  const logo = await image.file(join(__dirname, 'logo.png'))

  console.log(`
${logo}
${chalk.bgWhite(linksMsg)}
  `)
}
