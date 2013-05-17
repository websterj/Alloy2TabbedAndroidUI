$.tabGroup.addEventListener('open', function(e) {
    var activity = $.tabGroup.activity;

    if( Alloy.Globals.Android.Api >= 11 ) {
	    activity.actionBar.title = "DemoApp";
		activity.actionBar.displayHomeAsUp = true; 
	    activity.actionBar.onHomeIconItemSelected = function() {
	        alert("Home icon clicked!");
	    };  
    }

	/*
	    Remove/comment out the below function and add this XML to the index view (inside the Window element of one of the tabs) to add the menu that way instead of here
 
		<Menu id="menu" platform="android">
			<MenuItem id="menuItem" title="Item 1" icon="images/action_about.png" showAsAction="Ti.Android.SHOW_AS_ACTION_ALWAYS" />
			<MenuItem id="menuItem" title="Item 2" icon="images/action_settings.png" showAsAction="Ti.Android.SHOW_AS_ACTION_ALWAYS" />
			<MenuItem id="menuItem" title="Item 3" icon="images/action_about.png" showAsAction="Ti.Android.SHOW_AS_ACTION_ALWAYS" />
		</Menu>	 
	 */
    activity.onCreateOptionsMenu = function(e) {
        var menu = e.menu;
        
        // Menu Item 1
        var menuItem1 = menu.add({
            title : "Item 1",
            icon  : "images/action_about.png",
            showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
        });
        menuItem1.addEventListener("click", function(e) {
            alert("I was clicked 1");
        });   
        
        // Menu Item 2
        var menuItem2 = menu.add({
            title : "Item 2",
            icon  : "images/action_settings.png",
            showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
        });
        menuItem2.addEventListener("click", function(e) {
            alert("I was clicked 2");
        });
    };  
});

$.tabGroup.open();