
*C Read array from COLA GrADS Data Server (GDS) - http://www.monsoondata.org:9090/index.html
'sdfopen http://monsoondata.org:9090/dods/topo/rose/etopo05' ;*C Relief Of the Surface of the Earth (4320 x 2161 grid)
*'sdfopen http://monsoondata.org:9090/dods/topo/rose/etopo60' ;*C Relief Of the Surface of the Earth (360 x 180 grid)

*C Name: set parea - Specify area for plotting (XY coordinates)
*C Usage: 'set parea <xmin> <xmax> <ymin> <ymax>' - maximum values that can be chosen xmax=11.0, ymax=8.5
*'set parea 0.5 10.0 0.5 7.5' ;*C set parea xmin xmax ymin ymax


* 50.090198, 8.775741 ;*C Offenbach am Main - Google Maps
*'set lon 8.6 8.9' ;* OF
*'set lat 50.0 50.2' ;* OF

'set lon 8.1 9.4' ;* OF - wider area
'set lat 49.5 50.7' ;* OF - wider area

* 50.498056 deg., 9.937778 deg. ;C Wasserkuppe
* 50.232 deg., 8.457278 deg. ;C Grosser Feldberg
* 50.533333 deg., 9.233333 deg. ;C Vogelsberg

*C Draw only map without countours
*'draw map'

*'set gxout shaded'
'set gxout grfill'

'display rose'

cbarn

*C Use function - Results depend on 'set parea <xmin> <xmax> <ymin> <ymax>'
geo2plot ('30. 30. xpos ypos')

*'quit'


function geo2plot (args)

  ;*C Converts world coordinates (lon/lat) to XY coordinates

  ;*C This function requires a scaling environment. Therefore, it can not be run without preparation.
  ;*C The minimum requirement is to use 'display <array>'.
  ;*C Results depend on 'set parea <xmin> <xmax> <ymin> <ymax>' 

  lon = subwrd(args,1)
  lat = subwrd(args,2)

  say 'lon='lon
  say 'lat='lat

  'query w2xy 'lon' 'lat

  xpos = subwrd(result,3)
  ypos = subwrd(result,6)
  say 'xpos='xpos
  say 'ypos='ypos

return
