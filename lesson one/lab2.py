# question Number one
row=5
for i in range(1,row+1):
    for k in range(i):
        print(i,end="")
    print("")

# question Number two
row=5
for i in range(1,row+1):
    for j in range((row+1)-i):
        print(i,end="")
    print("")
               
# queston number three
import math # which is alibrary function

def distance(x1,y1,x2,y2):
    
    ds=math.sqrt((x2-x1)**2+(y2-y1)**2)
    return ds
    X1=int(input("enter x1:"))
    Y1=int(input("enter y1:"))
    X2=int(input("enter x2:"))
    Y2=int(input("enter y2:"))
           
