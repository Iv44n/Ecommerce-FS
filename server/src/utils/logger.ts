import pc from 'picocolors'

const info = (...args: unknown[]) => {
  console.log(pc.blue(pc.bold('INFO:')), ...args)
}

const error = (...args: unknown[]) => {
  console.error(pc.redBright(pc.bold('ERROR:')), ...args)
}

export const logger = { info, error }
