# answer for queston number 3
import math # which is alibrary function
X1=int(input("enter x1:"))
Y1=int(input("enter y1:"))
X2=int(input("enter x2:"))
Y2=int(input("enter y2:"))
def distance(x1,y1,x2,y2):
    ds=math.sqrt((x2-x1)**2+(y2-y1)**2)
    return ds
print(distance(3,6,7,9))

# Answer for question number 4

#Y=input("enter alphabetical letter")
#def next_character(char):
    #next_char=chr(ord(char)+1)
    #print(f"the next letter is",next_char)
#next_character(Y)

#Answer for question number 4
def next_char():
    character=input("enter a letter:")
    if character.isalpha() and character.lower()!='z':
        next_letter=chr(ord(character)+1)
        return f"The next letter is(next_letter)."
    else:
        return f"The value you enterd is not a letter or it's the last letter."
    print(next_char())







 
               
               
               
               