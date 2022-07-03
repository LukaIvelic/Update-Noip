# update-noip
Batch file combined with node.js to update dynamic DNS.

If you have a dynamic DNS, you can use the uploaded batch file 
to change your DNS at 'noip.com'. This script was made
because in order to update your ip address without the script
you would have to pay a certain price. 

In the execute.bat file the first and third line should stay the same.
The second line can be modified to your preference. If you are running
the execute.bat file from a directory that contains the .env and the update-noip.js
file, there is no need to change the code in the batch file. If you want to run the
batch file separately from the update-noip.js file, you have to write 'node [full path to your update-noip.js file]'
in the second line of execute.bat file. You **cannot** run the .bat file without a .env file.

.env file contains your noip username, password and your desired hostname (considering you registered it 
beforehand). 

This is how your .env file should look like. <br><br>
![image](https://user-images.githubusercontent.com/93165250/177046704-f5f86807-9784-4026-98e3-73c69c817b4e.png)

An example for the username: 'johnny93'. <br>
An example for the password: '7mS09D'. <br>
An example for the hostname: 'johnnyssite.ddns.net'

The npm packages you need are http and dotenv.
