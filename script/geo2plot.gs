
*C This script can not be run from empty command line.
*C Function requires scaling environment.

*geo2plot (30., 30., xpos, ypos)

function geo2plot (args)

  x = subwrd(args,1)
  y = subwrd(args,2)

*  say 'x='x
*  say 'y='y

  'query w2xy 'x' 'y

  xpos = subwrd(result,3)
  ypos = subwrd(result,6)
  say 'xpos='xpos
  say 'ypos='ypos

return
