
'sdfopen  http://monsoondata.org:9090/dods/topo/rose/etopo05'

*'set parea 0.5 10.0 0.5 7.5'

*'draw map'

'display rose'

geo2plot ('30. 30. xpos ypos')


function geo2plot (args)

  *C This function can not be run without preparation.
  *C Function requires scaling environment.

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
