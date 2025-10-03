function convertQueryToMap(query) {
  let arr = [];

  query = query.split(".");

  for (let i = 0; i < 3; i++) {
    const el = query.find((str) => str.search("=") !== -1);
    query.splice(query.indexOf(el), 1);
    arr.push(el);
  }

  arr = arr.map((el) => {
    return el.split("=")[1].split("&")[0];
  });

  return (obj = {
    user: {
      name: {
        firstname: arr[0],
        lastname: arr[1],
      },
      favoritecolor: arr[2].split("%20").join(" "),
    },
  });
}

console.log(
  convertQueryToMap(
    "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue"
  )
);
