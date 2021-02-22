/*
 * @Author: yongju
 * @Date: 2021-02-22 15:27:32
 * @LastEditors: yongju
 * @LastEditTime: 2021-02-22 16:51:32
 * @Description: 
 */
// @flow strict

type Config = {|
  API_URL: string,
  EVENTS_URL: ?string,
  FEEDBACK_URL: string,
  REQUIRE_ACCESS_TOKEN: boolean,
  ACCESS_TOKEN: ?string,
  MAX_PARALLEL_IMAGE_REQUESTS: number
|};

const config: Config = {
    API_URL: 'https://api.mapbox.com',
    get EVENTS_URL() {
        if (!this.API_URL) { return null; }
        if (this.API_URL.indexOf('https://api.mapbox.cn') === 0) {
            return 'https://events.mapbox.cn/events/v2';
        } else if (this.API_URL.indexOf('https://api.mapbox.com') === 0) {
            return 'https://events.mapbox.com/events/v2';
        } else {
            return null;
        }
    },
    FEEDBACK_URL: 'https://apps.mapbox.com/feedback',
    REQUIRE_ACCESS_TOKEN: true,
    ACCESS_TOKEN: null,
    MAX_PARALLEL_IMAGE_REQUESTS: 16,
    /**
     * yongju cgcs2000改造
     */
    PROJECTION:3857 //
};

export default config;
