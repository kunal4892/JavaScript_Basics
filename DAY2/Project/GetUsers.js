async function GetUsers(url){
    let res = await fetch(url);
    let users =  await res.json();
    return users;
    // Any operation on users beyond this is futile.
    // The control deosn't wait on await and the manupulations would
    // be done on undefined objects.
}
