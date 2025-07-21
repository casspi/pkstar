interface Config {
  log?: ((...args: any[]) => void) | boolean
  mock?: (...args: any[]) => void
}

// 配置
export const config: Config = {
  log: true,
  mock: undefined,
}

export const defineConfig = (cfg: Config) => Object.assign(config, cfg)
