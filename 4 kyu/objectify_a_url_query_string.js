function convertQueryToMap(query) {
  if (!query || query.length === 0) return {};

  const result = {};

  query.split("&").forEach((param) => {
    let [key, value] = param.split("=");
    value = decodeURIComponent(value);

    const parts = key.split(".");
    let current = result;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (i === parts.length - 1) {
        current[part] = value;
      } else {
        if (!current[part]) {
          current[part] = {};
        }
        current = current[part];
      }
    }
  });

  return result;
}

console.log(
  convertQueryToMap(
    "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue"
  )
);
