
*GrADS script to process data on GrADS Data Server and to create a plot.
*Requires GrADS to be installed with "OPeNDAP gridded data interface ENABLED"

baseURL = 'http://monsoondata.org:9090/dods/_expr_'
datasets = 'ssta'
expr = 'ssta' ;*C function
xlim = '0:360'
ylim = '0:90'
zlim = '0:0'
tlim = 'jan1950:jan1950'

say ' '
say 'sdfopen 'baseURL'{'datasets'}{'expr'}{'xlim','ylim','zlim','tlim'}'
'sdfopen 'baseURL'{'datasets'}{'expr'}{'xlim','ylim','zlim','tlim'}'
say ' '

'd result'

