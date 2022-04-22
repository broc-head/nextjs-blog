---
title: 'When to Use Static Generation v.s. Server-side Rendering'
date: '2020-01-02'
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis elementum ligula, sit amet luctus neque. Fusce quis urna purus. Mauris et pharetra lectus. Maecenas accumsan metus et lorem fermentum, non maximus dolor tempus. Maecenas dictum, velit id feugiat efficitur, elit magna ullamcorper est, ac dignissim risus dui nec enim. Mauris nibh quam, interdum vitae eros et, condimentum tincidunt mauris. Suspendisse non arcu vel justo finibus mattis. Duis fringilla enim metus, sed semper elit euismod eu. In magna ante, auctor non ante eget, cursus placerat urna. Donec venenatis ut lorem lacinia bibendum. Nunc malesuada, dolor non convallis pharetra, ligula sapien mattis mi, eget imperdiet dolor ipsum eget tellus.

Donec auctor pulvinar eros rhoncus lobortis. Curabitur egestas dictum sagittis. Suspendisse vehicula quis elit vitae bibendum. Cras ut dignissim nisi. Nulla tempor, risus ut tempor blandit, massa lectus tincidunt mi, id sodales tortor quam ac lacus. Morbi viverra tortor posuere neque faucibus rhoncus. Ut ac turpis nibh. Aliquam eget sem ac lacus ullamcorper sagittis vitae sed mi. Aliquam bibendum, nulla eu suscipit luctus, odio diam semper ante, venenatis varius diam orci a enim. In hac habitasse platea dictumst. Etiam erat arcu, molestie vitae nisi in, dictum pharetra sapien. In blandit bibendum est, a lacinia dolor auctor eu. Vestibulum neque sapien, mollis sed quam ut, vulputate finibus purus.

Donec egestas non nisi quis sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec viverra ante et diam feugiat lacinia. Nulla faucibus nibh sem, quis pretium odio euismod dapibus. Vestibulum eu ultricies justo. Integer dolor purus, consectetur vel condimentum rhoncus, luctus et orci. Cras id facilisis nisl. Nulla quis luctus lorem, sed porttitor lorem. Duis dapibus, ex a vulputate faucibus, mauris arcu congue erat, in varius nulla ligula vel eros. Proin lobortis sollicitudin ipsum, eu pharetra sem gravida ut. Donec non bibendum enim. Aliquam at libero a leo venenatis placerat. Sed malesuada dictum ultrices.

Mauris et massa eget nunc volutpat sagittis. Vivamus vestibulum, ex eu aliquet congue, neque risus finibus orci, non maximus purus urna sed leo. Suspendisse porta mattis diam id pretium. Fusce elit mauris, dictum id mattis quis, porttitor convallis est. Nam lacinia felis sed risus euismod luctus. Aenean in ipsum vitae justo placerat vehicula. Duis ultricies, metus non cursus blandit, orci justo feugiat libero, nec aliquam purus dolor quis libero.

Aenean pellentesque velit non leo viverra rhoncus. Donec in porta ipsum. Proin ultricies vulputate ultrices. Integer pellentesque ante et sem convallis auctor. Praesent malesuada a tellus eu vestibulum. Morbi ultricies maximus ante vel hendrerit. Maecenas et viverra nunc. Mauris sit amet sapien accumsan quam mollis fringilla. Maecenas et tincidunt libero, et aliquet libero.