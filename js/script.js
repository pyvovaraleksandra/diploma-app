var options = {valueNames: ['dashboard__status' ]};
var userList = new List('tasks', options);

var updateList = function() {
  var value = $(".dashboard__filter-item.slick-active")[0];
  value = value.innerText;

  if (value !== "All tasks") {
    userList.filter(function(item) {
      return (_(value).contains(item.values().dashboard__status) || !value)
    });
    // if there are not tasks
    if (userList.visibleItems.length == 1)
      $(".no-tasks").css("display", "block");
    else 
      $(".no-tasks").css("display", "none");
  } 
  else {
    userList.filter();
    $(".no-tasks").css("display", "none");
  }
}
                               

$(document).ready(function(){
  // activate slider
  $('.dashboard__filter').slick();

  // filter
  updateList();
  $(".slick-arrow").on("click", updateList);

  // set dashboard__list height
  var marginButtons = 8,
      marginFilter = 7,
      dashboardContainerHeight = $("#dashboard").find(".profile__content-left").height() - marginButtons - marginFilter,
      dashboardFilterHeight = $(".dashboard__filter").height(),
      dashboardListHeight = dashboardContainerHeight - dashboardFilterHeight;
  $(".dashboard__list").css("height", dashboardListHeight);
});