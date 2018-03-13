const fs              = require('fs');
const cp              = require('child_process');
const exec            = cp.exec;


setInterval(() => {
    exec('svn up', function(err, stdout, stderr) {
	console.log(stdout);
    });
}, 1000 * 60 * 5);
