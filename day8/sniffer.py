import socket
import os

#host to listen on
host  = "192.168.43.85"

#create a raw socket and bind it to the public interface
if os.name == "nt":
    socket_protocol = socket.IPPROTO_IP
else:
    socket_protocol = socket.IPPROTO_ICMP
    
sniffer = socket.socket(socket.AF_INET, socket.SOCK_RAW, socket_protocol)

sniffer.bind((host, 80))

#we want the IP headers included in the capture

sniffer.setsockopt(socket.IPPROTO_IP, socket.IP_HDRINCL, 1)

#if we're using windows, we need to send an IOCTL
#to set up promiscous mode


if os.name == "nt":
    sniffer.ioctl(socket.SIO_RCVALL, socket.RCVALL_ON)

#read in a single packer
print (sniffer.recvfrom(65565))

#if we're using Windows, turn off promiscous mode
if os.name == "nt":
    sniffer.ioctl(socket.SIO_RCVALL, socket.RCVALL_OFF)