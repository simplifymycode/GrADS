
*C Read array from COLA GrADS Data Server (GDS) - http://www.monsoondata.org:9090/index.html
*'sdfopen http://monsoondata.org:9090/dods/topo/rose/etopo05' ;*C Relief Of the Surface of the Earth (4320 x 2161 grid)
'sdfopen http://monsoondata.org:9090/dods/topo/rose/etopo60' ;*C Relief Of the Surface of the Earth (360 x 180 grid)

*C Specify area for plotting
*'set parea 0.5 10.0 0.5 7.5' ;*C set parea xmin xmax ymin ymax

*C Draw only map without countours
*'draw map'

'display rose'

*C Use function - Results depend on 'set parea <xmin> <xmax> <ymin> <ymax>'
geo2plot ('30. 30. xpos ypos')

'quit'


function geo2plot (args)

  ;*C This function requires a scaling environment. Therefore, it can not be run without preparation.
  ;*C The minimum requirement is to use 'display <array>'.
  ;*C Results depend on 'set parea <xmin> <xmax> <ymin> <ymax>' 

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
