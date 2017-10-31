
#C Some examples for using netcdf with openndap

#C Large data file - this takes quite a while
#C topo1 - 1/60 deg. - 1.852 km ~ 2 km
#time nccopy http://apdrc.soest.hawaii.edu:80/dods/public_data/topography/Smith_Sandwell/topo1 test0.nc C# TOPO_Smith_Sandwell.nc

#ncdump -h http://www.monsoondata.org:9090/dods/topo/W020N90
#time nccopy http://www.monsoondata.org:9090/dods/topo/W020N90 TOPO_W020N90.nc #C 30 arc sec. - 0.5 arc min. ~ 1 km

#time nccopy http://monsoondata.org:9090/dods/topo/rose/etopo05 test2.nc #C 0.042 deg. - 2.52 arc min. ~ 5 km

#let lat=2161-1
#let lon=4320-1

#time nccopy http://monsoondata.org:9090/dods/topo/rose/etopo05?rose[0:1:0][0:1:0][0:1:0] test3.nc # funzt
#time nccopy http://monsoondata.org:9090/dods/topo/rose/etopo05?rose[0:1:0][0:1:0][0:1:0],lon,lat,time test3.nc # funzt
#time nccopy http://monsoondata.org:9090/dods/topo/rose/etopo05?rose[0:1:0][0:1:1][0:1:1],lon,lat,time test3.nc # funzt
#time nccopy http://monsoondata.org:9090/dods/topo/rose/etopo05?rose[0:1:0][0:1:2160][0:1:4319],lon,lat,time test3.nc # funzt

#time nccopy http://apdrc.soest.hawaii.edu:80/dods/public_data/topography/Smith_Sandwell/topo1?topo[0:1:0][0:1:0][0:1:0] test.nc 

#TS this did not yet work 
#time nccopy http://apdrc.soest.hawaii.edu:80/dods/public_data/topography/Smith_Sandwell/topo1?topo[0:1:0][0:1:0][0:1:0],lon[0:1:0],lat[0:1:0] test2.nc 

#time nccopy http://apdrc.soest.hawaii.edu:80/dods/public_data/topography/Smith_Sandwell/topo1?topo[0:1:0][0:1:0][0:1:0] test2.nc # this worked !!!

#time nccopy http://apdrc.soest.hawaii.edu:80/dods/public_data/topography/Smith_Sandwell/topo1?topo[0:1:0][0:1:9][0:1:9] test3.nc # testing ...

