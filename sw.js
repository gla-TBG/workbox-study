importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

// workbox.routing.registerRoute(
//     new RegExp('.*\.js'),
//     new workbox.strategies.NetworkFirst()
// );

/**
 * StaleWhileRevalidate
 */
// workbox.routing.registerRoute(
//     new RegExp('.*\.js'),
//     new workbox.strategies.StaleWhileRevalidate()
// );

/**
 * cacheFirst
 */
// workbox.routing.registerRoute(
//     new RegExp('.*\.js'),
//     new workbox.strategies.CacheFirst()
// );

/**
 * networkFirst
 */
// workbox.routing.registerRoute(
//     new RegExp('.*\.js'),
//     new workbox.strategies.NetworkFirst()
// );

/**
 * networkOnly
 */
// workbox.routing.registerRoute(
//     new RegExp('.*\.js'),
//     new workbox.strategies.NetworkOnly()
// );

/**
 * cacheOnly
 */
// workbox.routing.registerRoute(
//     new RegExp('.*\.js'),
//     new workbox.strategies.CacheOnly()
// );


/**
 * 缓存名字
 */
// workbox.routing.registerRoute(
//     new RegExp('.*\.js'),
//     new workbox.strategies.StaleWhileRevalidate({
//         cacheName: 'js-cache', // 缓存名字
//     })
// );


/**
 * workbox.expiration.Plugin
 */
// workbox.routing.registerRoute(
//     new RegExp('.*\.js'),
//     new workbox.strategies.CacheFirst({
//         cacheName: 'js-cache', // 缓存名字
//         plugins: [
//             new workbox.expiration.Plugin({
//                 maxEntries: 60, // 最大条目限制为60条
//                 maxAgeSeconds: 30 * 24 * 60 * 60, // 过期期限30天
//             }),
//         ]
//     })
// );

/**
 * workbox.cacheableResponse.Plugin
 */
// workbox.routing.registerRoute(
//     new RegExp('.*\.js'),
//     new workbox.strategies.CacheFirst({
//         cacheName: 'js-cache', // 缓存名字
//         plugins: [
//             new workbox.cacheableResponse.Plugin({
//                 // 缓存状态代码为“200”或“404”的所有请求。
//                 statuses: [200, 404],
//                 // 处理符合正则的请求URL的响应时，请查看名为X-Is-Cacheable的标头（将由服务器添加到响应中）。
//                 // 如果该标头存在，并且如果它设置为值'true'，则可以缓存响应
//                 headers: {
//                     'X-Is-Cacheable': 'true',
//                 }
//                 /**
//                  * 注意: 如同时设置了上述条件statuses和headers，则需要两者都满足条件才视为可加入缓存
//                  */
//             })
//         ]
//
//     })
// );

workbox.skipWaiting();
workbox.clientsClaim();

workbox.routing.registerRoute(
    new RegExp(/./),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'cache', // 缓存名字
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 30 * 24 * 60 * 60, // 过期期限30天
            }),
        ]
    })
)

