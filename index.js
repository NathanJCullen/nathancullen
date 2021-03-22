$(".selection").click(function (e) {
  $(this).css({ background: "lightcyan" });
  $(this).siblings().css({ background: "white" });
  let target = "." + $(this).attr("id");
  $(target).css({ display: "block" });
  $(target).siblings().css({ display: "none" });
});
