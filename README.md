# Fake Redeem Site
The files on this repo are meant solely for entertainment purposes and is not intended for any financial transactions .  The redeem function of this fake site does not redeem or deposit any money.  It merely mimics the gift card redemtion process in order to waste scammers' time so they have less time to steal from actual victims.  It is advised that any users of this site take full precautionary measures while attempting to scam-bait actual scammers. It is highly recommended to run this system on a Virtual Machine (VM).

## Getting Started

These instructions will get your fake website up and running on your local machine.

### Prerequisites

Things you need to install the software on your VM.

```
Access to the VM's HOST file using Administrator privilages

A server running on the local VM.  e.g. XAMPP (if you have the fake bank running, you will already have this or another server)
```

### Installing

1) Edit your local VM's HOST file to add the following entry "googleplay.com"
    127.0.0.1       www.googleplay.com  (actually, this could be anything you want but it must match the directories that will be create in a later step.)

2) Create a directory/folder on the local VM.  This will be the "virtual directory" that will be used for www.googleplay.com
     - Under the XAMPP (or your server directory) create the following directories:
         (C:/XAMPP/virtual/googleplay.com)
     - Navigate to that folder
     - Perform a DIR command to make sure you are in that folder
     
3) Download the files from github.com to this C:/XAMPP/virtual/googleplay.com folder

4) Create the virtual directory in the Server's VIRTUAL HOST FILE
     Stop the XAMPP server and add records to the CONFIG file
      - Click on START
      - Go down to the XAMPP folder
      - Click on the XAMPP Control Panel
      - Under ACTIONS, click STOP for both the APACHE and MYSQL modules
      - Navigate to the server's VIRTUAL HOSTS FILE
            (C:\xampp\apache\conf\extra\httpd-vhosts.conf)
      - Add the following lines to the end of the file
                            
                            <VirtualHost *:80>
                                ServerAdmin webmaster@googleplay.com
                                DocumentRoot "C:/xampp/virtual/googleplay.com"
                                ServerName www.googleplay.com
                                ErrorLog "logs/googleplay.com-error.log"
                                CustomLog "logs/googleplay.com-access.log" common

                                <Directory "C:/xampp/virtual/googleplay.com">
                                  Options Indexes FollowSymLinks Includes ExecCGI
                                  AllowOverride All
                                  Require all granted
                                </Directory>

                            </VirtualHost>
                            
         - Restart the XAMPP APACHE and MYSQL modules
      


5)    Type in http://www.googleplay.com and you should be taken to the fake website


## Built With

* HTML [index.html and showBox.html] (for visual presentation)
* CSS  [styles1.css] (for styling)
* Java Script validate.js (contains site logic)
* .png files (for fake background and logo)

## Known Issues

The following are known defects.  Some will be corrected and others will remain as is.

1) Purely technical - had to create a workaround for the final shown amount to match the amount the user entered.  The fix is to mutiply the displayed amound by .01
2) The logo on the form needs to be properly trimmed
3) There is no "listener" for clicks on the background image
3) Fixed 5/15/21 - Hovering over the buttons do not properly show the pointer.
4) Fixed 5/15/21 - Upon confirming, the CONFIRM button should disappear
