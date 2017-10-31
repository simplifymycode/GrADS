
function townp (args) ;*lon,lat,color,size,name

*** townplot - plot coloured dot
say 'townplot'

x = subwrd(args,1)
y = subwrd(args,2)
col = subwrd(args,3)
size = subwrd(args,4)
name = subwrd(args,5)

*say 'x='x
*say 'y='y

'query w2xy 'x' 'y
xpos = subwrd(result,3)
ypos = subwrd(result,6)
*say 'xpos='xpos
*say 'ypos='ypos
'set line 'col ;*set color
'draw mark 3 'xpos' 'ypos' 'size ;*plot dot
'set line 1' ;*set color black

'set string 1 l 10'
'draw string 'xpos+0.08' 'ypos' 'name

return
