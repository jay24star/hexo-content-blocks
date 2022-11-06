en-US | [zh-CN](./zh-CN/README.md)

# hexo-content-blocks

A plugin for Hexo, which allows someone to use content block with styles. Customization supported.

(Idea from [OI-Wiki](https://oi-wiki.org/))

It supports foldable content boxes and not-foldable content blocks (in the future). Now, it supports you to custom the color and the icon in a certain type. It will give you several themes to choose in the future.

You can easily use it by writting a Hexo tag.

Demo.

![content-box-demo](https://user-images.githubusercontent.com/95968907/200179232-b434dd4f-ade3-4996-a685-8ee9ee86281f.png)

# Install & Preset

Execute the following command in the working directory:

```sh
$ npm install hexo-content-blocks --save
```

In the universal layout file for `<head>` tags (For example, `themes/next/layout/_partials/head/head.njk` in theme NexT), simply add the following codes:

```njk
{%- if config.content_blocks.enable %}
  <style>{{ content_blocks_css() }}</style>
{%- endif %}
```

In the site config file, simple add the following codes:

```yml
# Content blocks
content_blocks:
  enable: true
  types:
    note: 448aff || \f304
    success: 00c853 || \f00c
    failure: ff5252 || \f00d
    warning: ff9100 || \f071
    info: 00b8d4 || \f05a
    question: 64dd17 || \f059
```

We have prepared 6 types in advance. (note, success, failure, warning, info, question)

# Remove & Clear

Execute the following command in the working directory:

```sh
$ npm uninstall hexo-content-blocks --save
```

Delete the codes you have added into the files. You can find it in [Install & Preset](#install--preset).

# Usage

You can use it just by writing a tag in your Markdown file. Like this:

```
{% content_box type:Type title:Title [open] %}
```

Replace `Type` with the type you want to use, in the 6 preset types and your custom ones. It is `Note` by default.

Replace `Title` with the title word given on the head line. It is the type name by default.

If you add an `open`, it means the content box will be open by default. Otherwise, it will be folded by default.

You can custom type styles as long as you'd like to. Just add below the codes we added to site config file, like this:

```yml
typename: color || icon
```

Set typename as you like. The color needs to be hex RGB codes, like `448aff` or `"#448aff"`. The icon font is Font Awesome 6 Free, so you should look for the Unicode from [Font Awesome](https://fontawesome.com/icons).

# About Author

The author is Sukwants, just an OIer in Chengdu No.7 High School. Well, so weak. And others in Chengdu No.7 High School and Mianyang Dongchen High School is so powerful.

Today is Nov.6, 2022 and NOIP 2022 is on Nov.26, 2022. I don't know where should I go when I am kicked out after NOIP. I want to study better, but I'm wasting time designing such a plugin. I'll cherish the works, as a piece of memories in my life.

However, I have to go to study for OI now. There is no more time for me to waste. Just wish NOIP rp++.

That's all.
