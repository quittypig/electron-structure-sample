setInterval(async () => {
    const n = await window.electronAPI.ping();
    console.log(n);
}, 1000)
