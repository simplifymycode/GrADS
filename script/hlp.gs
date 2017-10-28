
*C Simple GrADS script

*C Run from commad line
*C 'ga-> hlp'

function main(args)

  if (args = '')
    help()
    return
  endif

  say 'This function does nothing'

return


function help()

  say ' Usage:'
  say '   hlp arg'

return
