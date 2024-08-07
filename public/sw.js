// Обработчик события push
self.addEventListener('push', event => {
    if (event.data) {
        console.log('Получено push-сообщение:', event.data.text());
        self.registration.showNotification(event.data.text(), {
            body: 'Push',
            // icon: 'icon.png',
            tag: Math.random().toString()
        });
    } else {
        console.error('Пустое push-сообщение');
    }
});

// Обработчик события активации Service Worker
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});
// // eslint-disable-file no-use-before-define 
// let version = "2.0.3";


// const response = {
//     "notification": {
//         "title": "STUB CREATIVE",
//         "options": {
//             "body": "stub body",
//             "icon": "/06a3d9e51ad0470bb3e3baf648374f76.jpg",
//             "requireInteraction": true,
//             "data": {
//                 "p": "NDzOY292Ru9qurc612PxJvaJq59cifqwgCeTanwze7ot8zCa6HSPoFS3JoIfnLJBhMqXth_cFXHBsQ1Ii4uS2LxYVEdVgOkQTDX650brMpJCu0DtPth7sNXzhw2xdkYv40cqR7dgTWTOnBJDRjPCYCp44prjuHG86sDQH-dO9rjV0Ip2FtVIAFIIA-7hw-j3KWe0PPB-ege-jCvCjzuruMzD7zS5R7tQm6Q2fwRqejL7gA4PZZvDi-X5Bkm9I8ZfQxsd7G7cJYWZmoiqtj-jsVhSU4fdQKDflyVkP-tpyDIfdg==",
//                 "g": "http://127.0.0.1:18080/e",
//                 "t": "http://example.com/?uuid=766f90d7-e93a-4295-a602-8b932d27c3e4"
//             }
//         }
//     }
// }


// self.addEventListener("install", (function(i) {
//     i.waitUntil(self.skipWaiting())
// }));

// self.addEventListener("activate", (function(i) {
//     console.log('activate ', i)
//     i.waitUntil(self.clients.claim())
// }));
// self.addEventListener("push", function(event, swr) {
//     console.log('swr ',swr)
//     console.log('event ', event.data)
//     let push = {};
//     try {
//         push = response;
//     } catch (e) {
//         console.log('e ', e)
//     }

//     let data = push.notification;

//     console.log("received data: ", data);

//     let updated = false;
//     if (data) {
//         self.registration.update().then(
//             //
//         ).catch(error => {
//             console.info("sw err send: ", data, error)
//         });

//         updated = true
//     }

//     if (data) {
//         // console.log("got url to bid: ", data);

//         // event.waitUntil(
//         //     fetch(data.b+"?ver="+version)
//         //         .then(response => {
//         //             if (!response.ok) {
//         //                 throw new Error(`Unexpected status code: ${response.status}`);
//         //             }
//         //             return response.json();
//         //         })
//         //         .then(response => {
//         //             console.log("fetch bid: ", response);
//         //             event = response.notification;

//         //             let data = response.notification.options.data;
//         //             if (data.p && data.g) {
//         //                 let body = {
//         //                     act: 2,
//         //                     p: data.p,
//         //                     updated: updated,
//         //                 };

//         //                 send(data.g, body);
//         //             }

//         //             return self.registration.showNotification(response.notification.title, response.notification.options);
//         //         }).catch(error => {
//         //             console.info("bid err fetch: ", error);
//         //         })
//         // );
//         let data = response.notification.options.data;
//         if (data.p && data.g) {
//             let body = {
//                 act: 2,
//                 p: data.p,
//                 updated: updated,
//             };

//             send(data.g, body);
//         }
//     }
// });

// self.addEventListener("notificationclick", function(event) {
//     event.notification.close();

//     let originalUrl = "/", id = ""
//     console.log('notificationclick id ', id) 
//     console.log('originalUrl ', originalUrl)

//     if (!event.notification.data) {
//         console.log("sw miss data")
//         return
//     }

//     if (event.notification.data.t) {
//         let url = event.notification.data.t
//             console.log('url', url)
//         // event.waitUntil(
//         //     clients.matchAll({ type: "window" })
//         //         .then(clients => clients.filter(client => client.url === originalUrl))
//         //         .then(matchingClients => {
//         //             if (matchingClients[0]) {
//         //                 return matchingClients[0].navigate(url).then(client => client.focus())
//         //             }

//         //             return clients.openWindow(url)
//         //         })
//         // )
//     }

//     let data = event.notification.data;
//     if (data.p && data.g) {
//         let body = {
//             act: 3,
//             p: data.p,
//         };
//         send(data.g, body);
//     }
// });

// self.addEventListener("notificationclose", function (event) {
//     if (!event.notification.data) {
//         console.log("sw miss data")
//         return
//     }

//     let data = event.notification.data;
//     if (data.p && data.g) {
//         let body = {
//             act: 4,
//             p: data.p,
//         };

//         send(data.g, body);
//     }
// })

// function send(gw, data) {
//     fetch(gw+"?ver="+version, {
//         method: "POST",
//         mode: "no-cors",
//         cache: "no-cache",
//         headers: {
//             "Content-Type": "application/json charset=utf-8",
//         },
//         body: JSON.stringify(data),
//     }).then(response => {
//         console.log('response', response)
//     }).catch(error => {
//         console.info("sw err send: ", data, error)
//     })
// }

