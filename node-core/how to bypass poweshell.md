Run the following command to check the current policy:

To check : 
**Get-ExecutionPolicy**

To change it temporary : 
**Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass**

Do it permanetly :
**Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser**

Reset after work done :
**Set-ExecutionPolicy Restricted**
