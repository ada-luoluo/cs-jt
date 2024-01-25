import {request} from "@/network/request";

// 案例
export function casesService(params) {
    return request({
        url: '/cases/v2/'+ params.caseId + '?page=' + params.page
    })
}
// 联络我们
export function contentService(params) {
    return request({
        url: '/contact-us',
        method: 'post',
        data: params,
    })
}

// 联络我们
export function quotationService(params) {
    return request({
        url: '/request-quotation',
        method: 'post',
        data: params,
    })
}