# HttpServer
Http server made in node and express used for logging data

## Usage

Download compiled version for windows or wine [here](https://github.com/Josakko/HttpServer/releases/tag/v1).

### How do I use this http server outside of my network?
By default, the HttpServer is only accessible within your local network. However, you can make it accessible from outside your network by configuring your router to forward incoming requests to your server.

To do this, follow these steps:

1. Determine the IP address of the computer running the HttpServer. You can do this by opening a command prompt or terminal and typing `ifconfig` for linux (and other unix based operating systems such as mac os) OR `ipconfig` for windows. Look for the IP address listed under "IPv4 Address" or "inet".
2. Log in to your router's admin interface. The address and login credentials should be provided in your router's documentation.
3. Look for the port forwarding or virtual server settings. The exact location and name of this setting varies depending on the router, but it should be under the "Advanced" or "Firewall" section.
4. Add a new rule to forward incoming requests on port 80 (or whatever port your HttpServer is running on) to the IP address of the computer running the server.

Save the settings and restart your router.
Once you've done this, you should be able to access the HttpServer from outside your network by typing your public IP address (which you can find by searching "what is my ip" in Google) into a web browser. Note that your ISP may block incoming traffic on port 80, in which case you may need to use a different port or contact your ISP to request that they unblock it.

## Need Help?

If you need help contact me on my [discord server](https://discord.gg/xgET5epJE6).

## Contributors

Big thanks to all of the amazing people (only me) who have helped by contributing to this project!
