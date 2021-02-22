/*
 * @Author: yongju
 * @Date: 2021-02-22 15:27:32
 * @LastEditors: yongju
 * @LastEditTime: 2021-02-22 18:44:10
 * @Description: 
 */
// @flow

import window from '../window';
import mapboxgl from '../../';
import config from '../config'

import type {WorkerInterface} from '../web_worker';

export default function (): WorkerInterface {
    return (new window.Worker(mapboxgl.workerUrl(config.PROJECTION)): any);
}
