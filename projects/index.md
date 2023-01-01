---
layout: default
title: Projects
permalink: projects
---

<h2>{{ page.title }}</h2>
<p class="text-gray-500">I've not always been the best about following through with my ideas.  Here are some that are finally getting some of my attention.</p>

<div class="mt-4">
  {% assign status = "completed" %}
  {% assign show_divider = true %}
  {% for project in site.data.projects %}
    {% if site.data.projects[forloop.index0].status != status and show_divider == true %}
      {% assign show_divider = false %}
      <div class="mx-auto w-full text-center text-sm pt-8 pb-4 text-indigo-400"> ---- In Progress Below ----</div>
    {% endif %}
    <div class="py-2">
    {% if project.status == "completed" %}
    <div class="align-middle"><a href="{{ project.link }}" class="hover:underline" target="_blank">{{ project.title }}</a></div>
    {% elsif project.status == "incomplete" %}
    <div class="align-middle">{{ project.title }}</div>
    {% endif %}
      <div class="text-sm text-gray-400">{{ project.description }}</div>
    </div>
  {% endfor %}
</div>