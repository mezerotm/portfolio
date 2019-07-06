---
title: General Linux Server Hardening Guide
date: 2019-07-06T01:49:23.945Z
tags:
  - linux
  - security
---
## table of contents
### [users](#users)
### [packages](#packages)
### [services](#services)
### [networking](#networking)
---

## users
### change password to current user, and other users
current user
```bash
passwd
```
other users
```bash
passwd <user>
```

### list status of all system users
```bash
passwd -Sa
```
columns described:
- login name
- password usability
  - L = account has a locked password
  - NP = account has no password
  - P = account has usable password
- date of the last password change
- minimum password age
- maximum password age
- password warning period
- password inactivity period

### list users with empty passwords
```bash
awk -F: '($2 == "") {print}' /etc/shadow
```
### lock all users with empty passwords
```bash
passwd -l <user>
```
### unlock users
```bash
passwd -u <user>
```
### lists users and check privileges
```bash
cat /etc/passwd | while read i; do cut -f1 -d: $1 | xargs -I{} sudo -ll -U {}; done
```
### make sure no non-root accounts have UID set to 0
this command will list all users with a UID set to 0, make sure no non root users are on this list.
```bash
awk -F: '($3 == "0") {print}' /etc/passwd
```
### remove <user> from group sudo
```bash
deluser <user> sudo
```
### list all users with group root, depth=1
```bash
cut -d: -f1,4 /etc/group | grep root > /tmp/group_root_list_0
cut -d: -f1 /tmp/group_root_list_0 > /tmp/group_root_list_1
cat /tmp/group_root_list_0 | grep root
cut -d: -f1,4 /etc/group | grep --file /tmp/group_root_list_1
```
### check sudoers file
```bash
vi /etc/sudoers
```
## packages
### determine distribution type
```bash
cat /etc/os*
```
### remove un needed packages
#### ubuntu
```bash
apt-get --purge remove <service>
```
recommended to delete, do research on each one before you delete any.
- xinetd
- nis
- yp-tools
- tftpd
- atfpd
- tftpd-hpa
- telnetd
- rsh-server
- rsh-redone-server

#### centos
```bash
yum erase <service>
```
recommended to delete, do research on each one before you delete any.
- xinetd
- ypserv
- tftp-server
- telnet-server
- rsh-server

### list installed software, get package information, remove package
#### ubuntu
```bash
dpkg --list
apt-cache pkgnames

dpkg -s <package>
apt-cache show <package>

apt-get remove <package>
```
#### centos
```bash
yum list installed

yum list <package>

yum remove <package>
```
### repository location
#### ubuntu
- `/etc/apt/sources.list`

#### centos
- `/etc/yum.conf`
- `/etc/yum.repos.d`

## services
### check which init system your using
take the output with a grain of salt. for backwards compatibility reasons, pid 1 might not be your guy
```bash
ps -p 1 -o comm=
```
### list all services
#### systemd
```bash
systemctl list-units
```
#### system v
```bash
service --status-all
```
### stop a service
#### systemd
```bash
systemctl stop <service>
```
#### system v
```bash
service <service> stop
```
### disable a service
#### systemd
```bash
systemctl disable <service>
```
#### system v
```bash
update-rc.d <service> disable
```
### change system run level
#### systemd
```bash
systemctl set-default <targets>
```
| run level | targets | description |
|-----------|----------------------------------------|-----------------------------------------|
| `0` | `runlevel0.target`, `poweroff.target` | shut down and power off the system |
| `1` | `runlevel1.target`, `multi-user.target` | setup a rescure shell |
| `2` | `runlevel2.target`, `multi-user.target` | setup a non-graphical multi-user system |
| `3` | `runlevel3.target`, `multi-user.target` | setup a non-graphical multi-user system |
| `4` | `runlevel4.target`, `multi-user.target` | setup a non-graphical multi-user system |
| `5` | `runlevel5.target`, `graphical.target` | setup a graphical multi-user system |
| `6` | `runlevel6.target`, `reboot.target` | shut down and reboot the system |
#### system v
```bash
init <level>
```
| run level | description |
|----------|------------------------------------------------------------------|
| `0` | used to halt the system. reserved, cannot be changed |
| `1` | used to run in single-user mode.  reserved, cannot be changed |
| `2` | not used by default, you are free to define it yourself |
| `3` | **used to run in full multi-user mode with command-line** |
| `4` | not used by default, you are free to define it yourself |
| `5` | **used to run in full multi-user mode with graphical interface** |
| `6` | used to reboot system. reserved, cannot be changed |
## networking
### display socket information
```bash
netstat -tulpan
ss -tulpan
```
- `t` - tcp
- `u` - udp
- `l` - display listening server sockets
- `p` - display pid/program name for socket
- `a` - display all sockets (default: connected)
- `n` - don't resolve name

### hostname
display hostname
```bash
hostname
```
set hostname
```bash
hostname <name>
```
### display ip address
```bash
ip -br address
```
- `br` - brief
