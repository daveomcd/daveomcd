---
layout: default
title: David McDonald
---

<h2>Blog Posts</h2>

<div class="mt-4">
  {% for post in site.posts %}
    <div class="py-1">
      <h3><a href="{{site.url}}{{ post.url }}">{{ post.title}}</a></h3>
      <div class="text-sm text-gray-400">{{post.date | date: "%B %-d, %Y"}}</div>
    </div>
  {% endfor %}
</div>
