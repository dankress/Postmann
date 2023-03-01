export async function fetchAllPackagestations() {
    return await fetch("http://localhost:4000/packagestations", {
      mode: "cors",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res;
      });
  }