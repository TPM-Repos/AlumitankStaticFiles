// Update these values to match those of your Server URL & DriveWorks Group Alias

const config = {
    serverUrl: "",
    groupAlias: "",
    // (Optional) Configure ping & update intervals - in seconds
    // A Specification will timeout after a configured period of inactivity (see DriveWorksConfigUser.xml).
    // This function prevents a Specification timing out as long as the page is in view.
    // Disable the ping by setting to 0
    specificationPingInterval: 0,
    // (Optional) Enter custom redirect URLs for login/logout and Project close/cancel
    login: {
        redirectUrl: "projects.html",
    },
    logout: {
        redirectUrl: "index.html",
    },
    project: {
        redirectOnClose: "details.html",
        redirectOnCancel: "projects.html",
    },
    // (Optional) Configure 'Details' view
    details: {
        updateInterval: 5, // Interval to refresh content - in seconds
    },
    // (Optional) Configure the query function
    // Enter a default Group Alias and/or Project name to be used (when none are passed in the query string)
    // Choose how sessions are handled
    query: {
        defaultGroupAlias: "",
        defaultProjectName: "",
        autoLogin: false,
        requireNewSession: false,
        requireExactAlias: false,
    },
    loginReturnUrls: true, // Enable/disable return urls to restore the previous location when redirected to the login form
};
