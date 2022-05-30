import axiosDevgirls from './axios';

/**
 *
 * @param {String} path the real path is basePath + path
 * @param {String} headers it usually use to put auth in headrs
 * @param {String} params the params ?=
 * @returns {Promise}
 */
export const Get = (path, headers, params) =>
  axiosDevgirls.get(`${path}`, { headers, params });
