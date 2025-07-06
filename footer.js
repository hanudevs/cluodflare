(function () {
    const allowedDomains = ["yourdomain.com", "dishmovie.com"];

    const currentDomain = window.location.hostname.replace('www.', '');

    if (!allowedDomains.includes(currentDomain)) {
        const modal = document.createElement("div");
        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.background = "rgba(0,0,0,0.85)";
        modal.style.zIndex = "999999";
        modal.style.display = "flex";
        modal.style.flexDirection = "column";
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center";
        modal.style.color = "white";
        modal.style.fontFamily = "sans-serif";
        modal.innerHTML = `
            <h2 style="color: red;">Unverified Domain</h2>
            <p>This domain is not authorized to use this script.</p>
            <p>Please contact <strong>@hanudevs</strong> on Telegram to verify your domain.</p>
        `;
        document.body.appendChild(modal);
    }
})();
