---
title: Proxmox Install on top of debian (6.4.x)
description: ''
position: 1
category: 'Proxmox'
---


Add an ``/etc/hosts`` entry for your IP address

```bash
nano /etc/hosts
```
<img src="https://media.discordapp.net/attachments/594319330976727060/878344630888980540/unknown.png" >

```bash 
hostname --ip-address
```
should return your IP address here

## Install Proxmox VE

Adapt your sources.list

Add the Proxmox VE repository:
```bash
echo "deb [arch=amd64] http://download.proxmox.com/debian/pve buster pve-no-subscription" > /etc/apt/sources.list.d/pve-install-repo.list
```
Add the Proxmox VE repository key:
```bash
wget http://download.proxmox.com/debian/proxmox-ve-release-6.x.gpg -O /etc/apt/trusted.gpg.d/proxmox-ve-release-6.x.gpg
chmod +r /etc/apt/trusted.gpg.d/proxmox-ve-release-6.x.gpg  # optional, if you have a non-default umask
```

Update your repository and system by running:
```bash
apt update && apt full-upgrade
```
## Install Proxmox VE packages
Install the Proxmox VE packages

```bash
apt install proxmox-ve postfix open-iscsi
````
Recommended: remove the os-prober package
```bash
apt remove os-prober
```

## Connect to the Proxmox VE web interface

Once logged in, create a Linux Bridge called vmbr0, and add your first network interface to it.

<img src='https://media.discordapp.net/attachments/594319330976727060/878347287405944912/unknown.png'>

then just reboot should be done :)