var baseUrl = '/api';
// 知乎日报今日新闻
var index = baseUrl + '/api/4/news/latest'
//过往新闻
var pastnews = baseUrl + '/api/4/news/before/'
//新闻详情
var details = baseUrl + '/api/4/news/'
//新闻额外信息
var extra = baseUrl + '/api/4/story-extra/'
// 新闻长评论
var long = baseUrl + '/api/4/story/'
// 新闻短评论
var min = baseUrl + '/api/4/story/'
//收藏新闻获取
var xinwen = baseUrl + 'm/api/4/news/'


export default {
    index,
    pastnews,
    details,
    extra,
    long,
    min,
    xinwen
}