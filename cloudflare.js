 const joinLinkURL = 'aHR0cHM6Ly9iaW8ubGluay9oYW51ZGV2cw==';
    const nulledByURL = 'aHR0cHM6Ly9iaW8ubGluay9oYW51ZGV2cw==';

    const joinLinkText = 'Sm9pbiBDb2RlICYgU2NyaXB0IFRlbGVncmFt';
    const nulledByText = 'SGFudWRldnMgQ29kZQ==';

    document.getElementById('joinLink').href = atob(joinLinkURL);
    document.getElementById('joinLink').innerText = atob(joinLinkText);

    document.getElementById('nulledBy').href = atob(nulledByURL);
    document.getElementById('nulledBy').innerText = atob(nulledByText);
