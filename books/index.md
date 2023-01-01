---
layout: default
title: Books
permalink: books
---

<h2>{{ page.title }}</h2>

<p class="text-gray-500">List of books I have been reading. I usually read more non-fiction than fiction. I love history, science fiction, sports, and self-help. Anything that sparks the imagination and inspires a more disciplined approach to life.</p>

<div class="mt-4">
  {% for book in site.data.books %}
    <div class="py-2">
      <div class="align-middle inline">
        <a href="{{ book.link }}" class="hover:underline inline" target="_blank">{{ book.title }}</a>
      </div>
      <div class="text-sm text-gray-400">by {{ book.author }}</div>
    </div>
  {% endfor %}
</div>