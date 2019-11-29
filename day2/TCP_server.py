import socket
import threading 

bind_ip = "0.0.0.0"
bind_port = 9999

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

#passing the ip address and port we want the server to listen on
server.bind((bind_ip, bind_port))

#tell the server to start listening with a maximum backlog of connections set to 5
server.listen(5)

print "[*] Listening on %s:d%" % (bind_ip, bind_port)

#this is our client handling thread
def handle_client(client_socket):
    
    #print out what the client sends 
    request = client_socket.recv(1024)
    
    print "[*] Received : %s" % request 
    
    #send back a packet
    client_socket.send("ACK!")
    
    client_socket.close()
#here we put the server into its main loop where it waits for an incoming connection
while True:
    #when a client connects we receive the client socket into the client variable
    #the remote connection details are stored in the addr variable
    client,addr = server.accept()
    
    print "[*] Accepted connection from: %s:%d " % (addr[0], addr[1])
    
    #spin up our client thread to handle incoming data
    client_handler = threading.Thread(target=handle_client, args=(client,))
    client_handler.start() #start the thread to handle the client connection
    
    
