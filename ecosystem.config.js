module.exports = {
  apps: [{
    name: 'fec_serachbar_proxy',
    script: './server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-15-228-126.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/tutorial.pem',
      ref: 'origin/master',
      repo: 'git@github.com:ATX-50-Team-Best-Buy/Blom_proxy.git',
      path: '/home/ubuntu/Blom_proxy',
      'post-deploy': 'npm install && cd client && npm install && npm run build && cd .. && pm2 startOrRestart ecosystem.config.js'
    }
  }
}