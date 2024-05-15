const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
async function fetchProperties() {
  try {
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/properties`, {
      headers: {
        // 'contentType': 'application/json; charset=utf-8',
        accept: "text",
      },
    });

    if (!res.ok) {
      throw new Error("Faild to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function fetchProperty(id) {
  try {
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/properties/${id}`, {
      headers: {
        // 'contentType': 'application/json; charset=utf-8',
        accept: "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Faild to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
export { fetchProperties,fetchProperty };
