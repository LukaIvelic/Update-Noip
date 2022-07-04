# update-noip
Batch file combined with node.js to update dynamic DNS (Windows Only).

If you have a dynamic DNS, you can use the uploaded batch file 
to change your DNS at 'noip.com'. This script was made
because in order to update your ip address without the script
you would have to pay a certain price. 

In the execute.bat file the first and the fourth line should remian the same. 
The second line can be modified to your preference. 
If you are running the execute.bat file from a directory that contains the .env and the update-noip.js file, there is no need to change the code in the batch file. 
If you want to run the batch file separately from the update-noip.js file, you have to write 'node [full path to your update-noip.js file]' in the second line of execute.bat file. 
You **cannot** run the .bat file without the .env file, execute.bat **must always** be in the same directory as the .env file. 
The third line is optional and it is used when your batch file is executed at startup. 
If you want a certain file or program to run when you turn on the computer, you put it in a Windows Startup folder. 
Since the execute.bat can't be seperated from the .env file, you have to place them both in the startup folder. 
Everything in the folder is started/opened once the computer has began to run, as well as the .env. 
You have to find the program name that opens the file so you can close it (it becomes repetitive and tiring if you have to close it on startup everytime). 
You can find it by typing 'tasklist' in the command prompt and looking for a similar or the exact name of the program.
When you've found the name, the third line should look like this: 'taskkill /IM [your program name]'.

.env file contains your noip username, password and your desired hostname (considering you registered it 
beforehand). 

This is how your .env file should look like. <br><br>
![image](https://user-images.githubusercontent.com/93165250/177046704-f5f86807-9784-4026-98e3-73c69c817b4e.png)

An example for the username: 'johnny93'. <br>
An example for the password: '7mS09D'. <br>
An example for the hostname: 'johnnyssite.ddns.net'

The npm packages you need are http and dotenv.
