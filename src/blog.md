---
title: Blog
layout: article
---

# Blog

<ul>{% for post in collections.posts %}<li>
  <a href="{{ site.url }}{{ post.url }}">{{ post.date | date: '%Y-%m-%d' }}: {{ post.data.title }}</a>
</li>{% endfor %}</ul>
