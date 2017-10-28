
*C Simple GrADS script

*C Run from commad line
*C 'ga-> hlp'

function hlp(args)

  if (args = '')
    help()
    return
  endif

  say 'This function does nothing'

return


function help()

  say ' Name:'
  say '   main - demonstrate usage of help function'
  say ''
  say ' Usage:'
  say '   hlp arg'
  say ''

return
