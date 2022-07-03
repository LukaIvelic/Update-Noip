const http = require('http');
require('dotenv').config();

const username = process.env.USERNAME_NOIP;
const password = process.env.PASSWORD_NOIP;
const hostname = process.env.HOSTNAME_NOIP;

function sendHTTPRequest(){
    http.get({ 'host': 'api.ipify.org', 'port': 80, 'path': '/' }, function (resp) {
        resp.on('data', function (ip_external) {
            var exe = (ip_external === undefined) ? false : true;

            var adr = "";
            if (exe) {
                adr = `http://${username}:${password}@dynupdate.no-ip.com/nic/update?hostname=${hostname}&myip=${ip_external}`;
                http.get(adr, (resp) => {
                    console.log(resp.headers);
                });
            } else {
                console.log("Something went wrong.");
            }
        });
    });
}

sendHTTPRequest();
