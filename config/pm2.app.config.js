const NODE_ENV = process.env.NODE_ENV

const config = {
  'name': 'kk-backend',
  'script': './server/entry.js',
  'instances': 1,
  'cwd': './', // app lunched path
  'error_file': 'logs/err.log',
  'out_file': 'logs/out.log',
  'merge_logs': true,
  'log_date_format': 'YYYY-MM-DD HH:mm:ss',
  'env': {
    NODE_ENV,
  },
}

const mqworker = {
  'name': 'kk-sev-worker',
  'script': './server/threads/mqworker.js',
  'instances': 1,
  'cwd': './', // app lunched path
  'error_file': 'logs/mqworker-err.log',
  'out_file': 'logs/mqout.log',
  'merge_logs': true,
  'log_date_format': 'YYYY-MM-DD HH:mm:ss',
  'env': {
    NODE_ENV,
  },
}
let mergeConfig = {}

/**
 * 根据不同的环境，生成不同的配置
 */
switch (NODE_ENV) {
  case 'production':
    mergeConfig = {
      instances: 0, // cluster mode with instances 0 mean spread application across all CPUs
      exec_mode: 'cluster',
    }
    break
  case 'alpha':
    mergeConfig = {
      instances: 1,
    }
    break
  case 'test':
    mergeConfig = {
      instances: 1,
    }
    break
  case 'development':
    mergeConfig = {
      instances: 1,
      'watch': [
        'server',
        'utils',
      ],
      'ignore_watch': [
        'node_modules',
        'logs',
        'client',
      ],
      'watch_options': {
        'followSymlinks': false,
      },
    }
    break
  default:
    mergeConfig = {
      instances: 1,
      'watch': [
        'server',
        'utils',
      ],
      'ignore_watch': [
        'node_modules',
        'logs',
        'client',
      ],
      'watch_options': {
        'followSymlinks': false,
      },
    }
    break
}

let exportConfig = Object.assign({}, config, mergeConfig)
let exportWorkerConfig = Object.assign({}, mqworker, mergeConfig)

module.exports = [exportConfig, exportWorkerConfig]
