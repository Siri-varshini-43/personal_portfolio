from tkinter import *
root=Tk()
root.geometry("252x260")
root.resizable(0,0)
def click_c():
    global expression
    expression=""
    input_text.set("")
def click_b(s):
    global expression
    expression+=str(s)
    input_text.set(expression)
def click_e():
    global expression
    res=str(eval(expression))
    input_text.set(res)
    expression=""
expression = ""
input_text = StringVar()
f1 = Frame(root, width=252, height=50, highlightbackground="black", highlightcolor="black", highlightthickness=2)
f1.pack(side="top") 
f_ent=Entry(f1,textvariable=input_text,width=50,justify="right")
f_ent.grid(row=0,column=0)
f_ent.pack(ipady=10,ipadx=10)
f2=Frame(root,highlightbackground="black", highlightcolor="black",highlightthickness=2,height=250,width=252) 
b1=Button(f2,text="C",bg="grey",fg="black",cursor="hand2",width=25,height=2,command=lambda:click_c()).grid(row=0,column=0,columnspan = 3,ipadx=1,ipady=1)
b2=Button(f2,text="/",bg="grey",fg="black",cursor="hand2",width=7,height=2,command=lambda:click_b("/")).grid(row=0,column=3,ipadx=1,ipady=1)
b4=Button(f2,text="1",bg="grey",fg="black",cursor="hand2",width=7,height=2,command=lambda:click_b("1")).grid(row=1,column=0,ipadx=1,ipady=1)
b5=Button(f2,text="2",bg="grey",fg="black",cursor="hand2",width=7,height=2,command=lambda:click_b("2")).grid(row=1,column=1,ipadx=1,ipady=1)
b6=Button(f2,text="3",bg="grey",fg="black",cursor="hand2",width=7,height=2,command=lambda:click_b("3")).grid(row=1,column=2,ipadx=1,ipady=1)
b7=Button(f2,text="+",bg="grey",fg="black",cursor="hand2",width=7,height=2,command=lambda:click_b("+")).grid(row=1,column=3,ipadx=1,ipady=1)
b8=Button(f2,text="4",bg="grey",fg="black",cursor="hand2",width=7,height=2,command=lambda:click_b("4")).grid(row=2,column=0,ipadx=1,ipady=1)
b9=Button(f2,text="5",bg="grey",fg="black",cursor="hand2",width=7,height=2,command=lambda:click_b("5")).grid(row=2,column=1,ipadx=1,ipady=1)
b10=Button(f2,text="6",bg="grey",fg="black",cursor="hand2",width=7,height=2,command=lambda:click_b("6")).grid(row=2,column=2,ipadx=1,ipady=1)
b11=Button(f2,text="-",bg="grey",fg="black",cursor="hand2",width=7,height=2,command=lambda:click_b("-")).grid(row=2,column=3,ipadx=1,ipady=1)
b12=Button(f2,text="7",bg="grey",fg="black",cursor="hand2",width=7,height=2,command=lambda:click_b("7")).grid(row=3,column=0,ipadx=1,ipady=1)
b13=Button(f2,text="8",bg="grey",fg="black",cursor="hand2",width=7,height=2,command=lambda:click_b("8")).grid(row=3,column=1,ipadx=1,ipady=1)
b14=Button(f2,text="9",bg="grey",fg="black",cursor="hand2",width=7,height=2,command=lambda:click_b("9")).grid(row=3,column=2,ipadx=1,ipady=1)
b15=Button(f2,text="*",bg="grey",fg="black",cursor="hand2",width=7,height=2,command=lambda:click_b("*")).grid(row=3,column=3,ipadx=1,ipady=1)
b16=Button(f2,text="0",bg="grey",fg="black",cursor="hand2",width=16,height=2,command=lambda:click_b("0")).grid(row=4,column=0,columnspan=2,ipadx=1,ipady=1)
b17=Button(f2,text=".",bg="grey",fg="black",cursor="hand2",width=7,height=2,command=lambda:click_b(".")).grid(row=4,column=2,ipadx=1,ipady=1)
b18=Button(f2,text="=",bg="grey",fg="black",cursor="hand2",width=7,height=2,command=lambda:click_e()).grid(row=4,column=3,ipadx=1,ipady=1)
f2.pack()
root.mainloop()
