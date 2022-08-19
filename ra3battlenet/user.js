async function requestRegister(uname, pwd) {
    req = new Request('http://122.9.150.12/user/create/', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'
                ,'Access-Control-Allow-Origin': 'bakneko.com'}, 
        body: JSON.stringify({uname: uname, pwd: pwd})
    });
    res = await fetch(req);
    json = await res.json();
    console.log(json);
}

async function onSubmit() {
    let uname = document.getElementById('uname').value;
    let pwd = document.getElementById('pwd').value;
    console.log(`Registration requested: ${uname} / ${pwd}`);
    await requestRegister(uname, pwd);
}

function closePopup() {
    document.querySelector('#notice').remove();
}