$("h1").click(function (e) {
  $(this).css({ color: "red" });
});

$(".selection").click(function (e) {
  $(this).css({ background: "black" });
  $(this).siblings().css({ background: "white" });
  let target = "." + $(this).attr("id");
  $(target).css({ display: "block" });
  $(target).siblings().css({ display: "none" });
});
