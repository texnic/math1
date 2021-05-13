def take_input():
    global c
    while True:
        if WSJoyStick.Listen_Key(KEY.A):
            c += -1
            if c < 0:
                c = 0
        if WSJoyStick.Listen_Key(KEY.B):
            c += 1
            if c > 25:
                c = 25
        display_c()
def display_c():
    global c
    basic.clear_screen()
    y = 1
    x = 0
    d = 0
    while d < c:
        d += 1
        x += 1
        if x > 5:
            x = 1
            y += 1
    led.plot(x - 1, y - 1)
def new_problem():
    global a, b, c
    a = randint(1, 5)
    b = randint(1, 5)
    basic.show_string("" + str(a))
    basic.show_string("+")
    basic.show_string("" + str(b))
    basic.show_string("=")
    c = 0

def my_function():
    pass
WSJoyStick.on_key(KEY.P, my_function)

b = 0
a = 0
x = 0
d = 0
y = 0
c = 0
WSJoyStick.joy_stick_init()
basic.clear_screen()

def on_forever():
    pass
basic.forever(on_forever)
