# -*- coding: utf-8 -*-
from __future__ import division #从某个模块中引入某个函数
import math # 导入整个模块
import cmath

print "1 / 2: ", 1 / 2
print "10 / 3: ", 10 / 3

# 整除操作
print "1 // 2: ", 1 // 2 
print "7 // 2: ", 7 // 2
print "1.0 // 2.0: ", 1.0 // 2.0

# 取模
print "1 % 2: ", 1 % 2
print "2.75 % 0.5: ", 2.75 % 0.5

# 平方
print "2 ** 3: ", 2 ** 3
print "-3 ** 2: ", -3 ** 2
print "(-3) ** 2: ", (-3) ** 2

# 大数字
print "2008 ** 30: ", 2008 ** 30

# 十六进制， 八进制
print "0xAF: ", 0xAF
print "010: ", 010

# 变量
x = 9
print x ** 2

# 函数
print pow(2, 5)
print math.floor(32.9)
print int(math.floor(32.1))

# 函数赋值给变量
foo = math.sqrt
print foo(9)

# 复数操作
print cmath.sqrt(-9)
print (1+3j) * (9+4j) #对复数的支持

# 单双引号没有啥区别
print "hello, world"
print 'hello, world'

print "Let's go !"
print 'Let\'s go !' #转义字符

print 'Let\'s say ' '"Hello, world !"'

# str, repr，两种将其他类型转换为字符串的机制
# str函数：转换为合理的字符串
# repr函数：创建新的字符串，它以合法的Python表达式的形式来表示值
# repr(1000L)和str(1000L)的区别特别明显
print repr("hello, world")
print repr('hello, world')
print str("hello, world")
print "repr(010): ", repr(010)
print "str(010): ", str(010)
print "repr(1000L): ", repr(1000L)
print "str(1000L): ", str(1000L)

# 长字符串输入，两种方式
# 方式一
print """hello,
world !"""
# 方式二
print "hello \
world !"
print \
    "hello, world !"

# 原始字符串
print 'C:\nowhere' # 被换行了
print 'C:\\nowhere' # 转义字符
print r'C:\nowhere' # 原始字符以“r”开头
#原始字符末尾不能有"\"，如果有，那么只能这样变通
print r'C:\nowhere' '\\'

number = input("input a number: ")
print "number: " , number





