'use strict';
const control = {};

control.pagination = (req, values, model, attributes, query) => {
  const page = req.query.page ? parseInt(req.query.page) : 0;
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 10;
  const limit = pageSize;
  const offset = page * limit;
  const value = req.query.sort ? req.query.sort : 'id';
  const type = req.query.type ? req.query.type.toUpperCase() : 'ASC';
  const order = [[value, type]];
  if (model === null) {
    if (query === null) {
      return {
        offset,
        limit,
        order
      }
    } else {
      return {
        where: query.where,
        offset,
        limit,
        order
      }
    }
  } else {
    // const include = [{ model: model, attributes: attributes, through: { attributes: [] } }];
    const include = query === null
      ? [{ model: model, attributes: attributes, through: { attributes: [] } }] :
      [query, { model: model, attributes: attributes, through: { attributes: [] } }];
    return {
      attributes: { exclude: values },
      offset,
      limit,
      order,
      distinct: true,
      include
    }
  }
}

control.JSONResponse = (req, model) => {
  const page = req.query.page ? parseInt(req.query.page) : 0;
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 10;
  const converter = model.count / 10;
  const pages = converter > Math.round(converter) ? Math.round(converter) + 1 : Math.round(converter);
  const elements = model.count;
  const rows = model.rows;
  return {
    elements,
    page,
    pageSize,
    pages,
    rows
  }
}

module.exports = control;

