import DataModel from "../models/data.model.js";

export const getData = async (req, res,next) => {
    try {
      const data = await DataModel.find();
      res.json(data);
    } catch (err) {
next(err)    }
}
 
//helper function
function createFilters(req) {
  const filters = {};
  const allowedFilters = [
    "end_year",
    "intensity",
    "sector",
    "topic",
    "region",
    "start_year",
    "impact",
    "country",
    "relevance",
    "pestle",
    "source",
    "likelihood",
  ];
  for (const key in req.query) {
      const lowerKey = key.toLowerCase();

    if (!allowedFilters.includes(lowerKey)) {
      throw new Error(`Invalid filter: ${key}`);
    }

    filters[lowerKey] = req.query[key];
  }
  return filters;
}

export const getFilterData = async (req, res,next) => {
  try {
    const query = createFilters(req);

    const result = await DataModel.find(query);

    res.json(result);
  } catch (err) {
next(err)  }
}