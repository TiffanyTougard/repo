module.exports = {
  apps: [{
    name: 'repo',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'bitnami',
      host: '35.177.190.203',
      key: '~/.ssh/id_rsa.pub',
      ref: 'origin/master',
      repo: 'git@github.com:TiffanyTougard/repo.git',
      path: '/home/bitnami/repo',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}