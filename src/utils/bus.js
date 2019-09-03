export const getActiveNav = function(href){
    let key = href.split('/#/')[1];
    if(key.indexOf('?')!=-1){
        key=key.split('?')[0]
        // console.log(key)
    }
    return key;
}