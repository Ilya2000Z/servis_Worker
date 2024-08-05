import { createApp } from 'vue'
import App from './App.vue'
import '../public/sw'

createApp(App).mount('#app')

// Проверяем поддержку Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(registration => {
            console.log('Service Worker зарегистрирован:', registration);
        })
        .catch(error => {
            console.error('Ошибка регистрации Service Worker:', error);
        });
} else {
    console.error('Service Worker не поддерживается');
}

// Запрос разрешения на уведомления
Notification.requestPermission(permission => {
    if (permission === 'granted') {
        console.log('Разрешение на уведомления получено');
    } else {
        console.error('Разрешение на уведомления не получено');
    }
});

// Подписка на push-
const subscribe = document.getElementById('subscribe')
if(subscribe){
document.getElementById('subscribe').addEventListener('click', async () => {
    if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration) {
            const subscription = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: 'YOUR_PUBLIC_KEY_HERE'
            });
            console.log('Подписка на push-сервис:', subscription);
        } else {
            console.error('Service Worker не зарегистрирован');
        }
    } else {
        console.error('Service Worker не поддерживается');
    }
});
}

// Отмена подписки на push-сервис
const unsubscribe = document.getElementById('unsubscribe')

if(unsubscribe) {
document.getElementById('unsubscribe').addEventListener('click', async () => {
    if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration) {
            const subscription = await registration.pushManager.getSubscription();
            if (subscription) {
                await subscription.unsubscribe();
                console.log('Отмена подписки на push-сервис');
            } else {
                console.error('Подписка не найдена');
            }
        } else {
            console.error('Service Worker не зарегистрирован');
        }
    } else {
        console.error('Service Worker не поддерживается');
    }
});
}