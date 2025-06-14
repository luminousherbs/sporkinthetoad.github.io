console.log(window.location.pathname);

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    window.confirm("Are you sure? This will kill the connection for all users.")

    fetch("/tools/kill-server/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: null,
    })

})
