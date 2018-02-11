module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'bitnami',
      host: '35.177.190.203',
      key: '/d/LEWIS/AmazonAWS/LightsailDefaultPrivateKey-eu-west-2.pem',
      ref: 'origin/master',
      repo: 'git@github.com:TiffanyTougard/repo.git',
      path: '/home/bitnami/repo',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}