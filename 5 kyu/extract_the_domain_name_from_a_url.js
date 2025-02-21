function func(url) {
  let url_ht = url.split("//");
  url_ht = url_ht[url_ht.length - 1];

  return url_ht.split(".")[0] === "www"
    ? url_ht.split(".")[1]
    : url_ht.split(".")[0];
}

console.log(func("http://www.google.com"));
