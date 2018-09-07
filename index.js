$(document).ready(()=>{

  //modal is hidden
  $('.modal1').hide()

  $('.modal2').hide()
  $('.modal3').hide()
  $('.modal4').hide()

  //modal displayed after 2sec
  setTimeout(function() {$('.modal1').show()}, 1000)
 
  $('.x').click(function(){
    $('.modal1,.modal2,.modal3,.modal4').hide()

  })

 $('.button1').click(function(){
   $('.modal2').show()
 })

 $('.button2').click(function(){
  $('.modal3').show()
})

$('.button3').click(function(){
  $('.modal4').show()
})


})
