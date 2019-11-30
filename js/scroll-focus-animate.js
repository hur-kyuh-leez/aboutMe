/*
 This js animates the skill bars when scrolled the class bar-expand
 by
 adding each class in skills_array
*/

var skills_array = ["python", "java", "web", "database", "swift", "editing"]
var not_viewed = true; // without this...  "scroll", function () { will keep trigger
var $window = $(window);
var $bar_expand = $(".bar-expand");
var $work = $(".three.columns.header-col"); // .row.work does not work for some reason



function isScrolledIntoView($bar_expand, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $bar_expand.offset().top;
    var elemBottom = elemTop + $bar_expand.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


function isScrolledIntoView($work, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $work.offset().top;
    var elemBottom = elemTop + $work.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(document).on("scroll", function () {
    if (not_viewed && isScrolledIntoView($bar_expand, $window)) {
        $bar_expand.each(function (index, obj) {
            $(obj).addClass(skills_array[index]);
        });
        not_viewed = !not_viewed
        console.log(not_viewed)
    }
});
$(document).on("scroll", function () {
    if (!not_viewed && isScrolledIntoView($work, $window)) {
        console.log('removedclass')
        $bar_expand.each(function (index, obj) {
            $(obj).removeClass(skills_array[index]);
        });
        not_viewed = !not_viewed
    }
});