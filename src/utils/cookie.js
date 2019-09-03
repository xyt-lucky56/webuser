import Cookies from 'js-cookie'
import store from 'storejs';

//---------------cookie----------------

// 存储cookie
function setCookie(name, value, time) {
  Cookies.set(name, value, time)
}

//获取cookie
function getCookie(name) {
  return Cookies.get(name);
}

// 删除cookie
function removeCookie(name) {
  Cookies.remove(name);
}


//--------------localstorage--------------
//只有版本较高的浏览器中才支持 localstorage，而store.js 是一个兼容所有浏览器的 localStorage 包装器


// 存储localStorage 
function setStorage(name, value) {
  store.set(name, value)
}

// 取出localStorage 
function getStorage(name) {
  store.get(name)
}

//删除localStorage
function removeStorage(name) {
  if (name) {
    store.clear(name) //删除某个
  } else {
    store.clear() //删除所有
  }
}

export { getCookie, setCookie, removeCookie, setStorage, getStorage, removeStorage }