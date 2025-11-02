import db from "../db.json";

export const getPageContent = async (route) => {
  try {
    const segments = route.split("/");
    let current = db;
    for (const seg of segments) {
      if (current && Object.prototype.hasOwnProperty.call(current, seg)) {
        current = current[seg];
      } else {
        current = undefined;
        break;
      }
    }
    if (typeof current === "undefined") {
      return { data: { status: "Not Found" } };
    }
    return { data: current };
  } catch (error) {
    return { data: { status: "Not Found", err: JSON.stringify(error) } };
  }
};

