fetch('ver.json')
    .then(response => response.json())
    .then(data => {
        const versionH = document.getElementById('mod-version');
        const updateTimeH = document.getElementById('update-time');
        const changelogH = document.getElementById('changelog');

        var latestVersion = data["latest-version"];

        versionH.innerHTML = "Latest Version: <a href=\"https://github.com/activepass/hole-boi-mod/releases/tag/v" + latestVersion + "\">" + latestVersion + "</a>";
        // Convert from a unix timestamp to the relative format, ex "1 hour ago"

        var relativeTime = timeDifference(new Date().getTime(), data["update-time-unix"]);
        updateTimeH.textContent = "Last updated: " + relativeTime + " (" + new Date(data["update-time-unix"]).toLocaleString() + ")";

        var changelog = data["changelog"];
        if (changelog == "") { changelogH.textContent = "No changes listed."; return; }
        changelogH.textContent = changelog;

})
.catch(error => {
    console.error('Error fetching data:', error);
});


// Source: https://stackoverflow.com/a/6109105
function timeDifference(current, previous) {
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
         return Math.round(elapsed/1000) + ' seconds ago';   
    }

    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes ago';   
    }

    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours ago';   
    }

    else if (elapsed < msPerMonth) {
        return 'approximately ' + Math.round(elapsed/msPerDay) + ' days ago';   
    }

    else if (elapsed < msPerYear) {
        return 'approximately ' + Math.round(elapsed/msPerMonth) + ' months ago';   
    }

    else {
        return 'approximately ' + Math.round(elapsed/msPerYear ) + ' years ago';   
    }
}