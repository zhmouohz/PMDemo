var Service = require('node-windows').Service
const path = require('path')
// Create a new service object
var svc = new Service({
  name: 'AAAPMSERVER',
  description: 'The nodejs.org example web server.',
  script: path.join(__dirname + '\\src\\server\\server.js'),
})

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function() {
  svc.start()
})
svc.install()
