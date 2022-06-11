import axiosDevgirls from './axios';

/**
 *
 * @param {String} path the real path is basePath + path
 * @param {String} headers it usually use to put auth in headrs
 * @param {String} params the params ?=
 * @param {String} body to put body in request
 * @returns {Promise}
 */
export const Post = (path, headers, queryParams, body) => {
  const params = new URLSearchParams(queryParams);
  return axiosDevgirls.post(`${path}?${params}`, { ...body }, { headers });
}
