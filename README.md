# HttpServer
Http server made in node and express used for logging data

## Usage

Download compiled version for windows or wine [here](https://github.com/Josakko/HttpServer/releases/tag/v1).

### How do I use this http server outside of my network?
By default, the HttpServer is only accessible within your local network. However, you can make it accessible from outside your network by configuring your router to forward incoming requests to your server.

To do this, follow these steps:

1. Determine the IP address of the computer running the HttpServer. You can do this by opening a command prompt or terminal and typing `ifconfig` for linux (and other unix based operating systems such as mac os) OR `ipconfig` for windows. Look for the IP address listed under  `Default Gateway` or `inet` and copy it.
2. Next go to your browser and paste copied IP then you will be redirected to login page of your router.
3. Log in to your router's admin interface. The address and login credentials should be provided in your router's documentation.
4. Look for the port forwarding or virtual server settings. The exact location and name of this setting varies depending on the router, but it should be under the `Advanced` or `Firewall` section.
5. Add a new rule to forward incoming requests on port 8080 (or whatever port your HttpServer is listening on) to the IP address of the computer running the server.

Save the settings and restart your router.
Once you've done this, you should be able to access the HttpServer from outside your network by typing your public IP address (which you can find by visiting [this](https://api.ipify.org) website). Note that your ISP may block incoming traffic on port 8080, in which case you may need to use a different port or contact your ISP to request that they unblock it.

- #### Optional configuration

By default, most ISPs assign dynamic IP addresses, which means that your IP address can change each time you connect to the internet. This can be problematic if you want to use your device as a server because it means that the IP address of your server will change each time your ISP assigns a new address to your device.

To avoid this issue, you can ask your ISP for a static IP address. A static IP address is an IP address that doesn't change, which means that you can use it to host services like a web server or a game server without worrying about the IP address changing.

To request a static IP address from your ISP, you will need to contact their customer support or sales department. They will likely ask you to provide some information about your account and the reason why you need a static IP address.

Note that some ISPs may charge an additional fee for a static IP address or only offer it as part of a business-grade internet plan. It's also worth noting that a static IP address can make your device more vulnerable to attacks, so it's important to take appropriate security measures to protect your device and network.

## Need Help?

If you need help contact me on my [discord server](https://discord.gg/xgET5epJE6).

## Contributors

Big thanks to all of the amazing people (only me) who have helped by contributing to this project!
