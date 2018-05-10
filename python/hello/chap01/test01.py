# -*- encoding:utf-8 -*-
print 'hello word' ;

print '33 * 33= ', 33 * 33;
print '2+2=',2+2;
# 除法需要换成浮点数
print '1/2=',1/2;
print '1.0/2.0=',1.0/2.0;

# input 和 raw_input 强制输出字符串形式
name = raw_input('What is your name?')
print 'hello, '+name+'!'
input("Enter a number: ")
raw_input("Enter a number: ")

# str 合理形式的字符串；repr 强制转化为字符串形式
print str("Hello world!")
print str(1000L)
print repr("Hello world!")
print repr(1000L)
temp = 42;
print "The temperaturn is "+ `temp`
print "The temperaturn is " + repr(temp)
print "The temperautrn is " + str(temp)

# string 长字符串跨行显示时用三个单引号
print '''This is a very long string.
It continues here.
And it's not over yet.
"Hello , world!"
Still here.'''

# 普通字符串跨行时用 \反斜杠 (一行写不下时用反斜杠，但是在控制台显示时是一行显示)
print "Hello, \
world!"
print \
'Hello , world!'

# \n换行显示字符串,含有\n时用再加一个反斜杠进行转译
print 'Hello, \nWorld!'
print "path = 'C:\nowhere' "
print "path = 'C:\\nowhere' "

#有多个反斜杠的时候用r
print 'C:\\Program Files\\fnord\\foo\\bar\\baz\\frozz\\bozz'
print 'C:\Program Files\fnord\foo\bar\baz\frozz\bozz'
print r'C:\Program Files\fnord\foo\bar\baz\frozz\bozz'

















