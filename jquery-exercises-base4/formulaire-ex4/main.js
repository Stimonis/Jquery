$(".send").click(function() {
  $(".div2").text(
      $("#name").val() + " "
    + $("#lastName").val() + ", né le "
    + $("#birthday").val() + " à " + $("#birthPlace").val()
    + ", actuellement " + $("#job").val()
    + " à " + $("#society").val()
  )
})
