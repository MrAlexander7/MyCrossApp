/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

const gifts = document.querySelectorAll('.gift');

    gifts.forEach(gift => {
        gift.addEventListener('click', () => {
            // Створення повідомлення
            const wishMessage = document.createElement('div');
            wishMessage.textContent = "Вітаю з Новим Роком! Лисенок, я впевнений, цей новий рік буде тільки краще ніж попередній. Не зважаючи на будь-які прегради, я завжди буду поруч та підтримаю тебе) Так, я інколи буває веду себе як дитина, але таке я можу дозволити лише з тобою) З Новим Роком :3";
            wishMessage.style.position = 'absolute';
            wishMessage.style.top = '70px'; // Розташування нижче подарунка
            wishMessage.style.left = '50%'; // Відцентровка
            wishMessage.style.transform = 'translateX(-50%)';
            wishMessage.style.backgroundColor = '#fff';
            wishMessage.style.color = '#800080'; // Темно-фіолетовий колір тексту
            wishMessage.style.padding = '10px'; // Збільшений padding
            wishMessage.style.borderRadius = '10px';
            wishMessage.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
            wishMessage.style.zIndex = '10';
            wishMessage.style.maxWidth = '600px'; // Збільшена ширина
            wishMessage.style.textAlign = 'center'; // Вирівнювання тексту по центру
            wishMessage.style.fontSize = '1.2rem'; // Збільшений шрифт для кращої читабельності


            // Додаємо повідомлення до подарунка
            gift.appendChild(wishMessage);

            // Видаляємо повідомлення через 10 секунд
            setTimeout(() => {
                gift.removeChild(wishMessage);
            }, 20000);
        });
    });
