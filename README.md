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
  <style type="text/css">{{ content_blocks_css() }}</style>
{%- endif %}
```

In the site config file, simple add the following codes:

```yml
# Content blocks
## Docs: https://github.com/Sukwants/hexo-content-blocks
content_blocks:
  enable: true
  open_button: fa fa-chevron-down
  types:
    note: 448aff || fa fa-pen
    success: 00c853 || fa fa-check
    failure: ff5252 || fa fa-xmark
    warning: ff9100 || fa fa-triangle-exclamation
    info: 00b8d4 || fa fa-circle-info
    question: 64dd17 || fa fa-circle-question
    example: 651fff || fa fa-list
    quote: 9e9e9e || fa fa-quote-right
```

We have prepared 8 types in advance. (note, success, failure, warning, info, question, example, quote)

ATTENTION. You need to import Font Awesome in your site, only in this way can we make the icons work. If haven't had, turn to [Font Awesome Docs for HTML + CSS Method](https://fontawesome.com/v6/docs/web/setup/host-yourself/webfonts).

# Remove & Clear

Execute the following command in the working directory:

```sh
$ npm uninstall hexo-content-blocks --save
```

Delete the codes you have added into the files. You can find it in [Install & Preset](#install--preset).

# Usage

You can use it just by writing a tag in your Markdown file. Like this:

```njk
{% contentbox type:Type title:Title [open] %}
Content...
{% endcontentbox %}
```

Replace `Content...` with the body content.

Replace `Type` with the type you want to use, chosen from preset or your custom types. It is `Note` by default.

Replace `Title` with the title word given on the head line. It is the type name by default.

If you add an `open`, it means the content box will be open by default. Otherwise, it will be folded by default.

You can custom type styles as long as you'd like to. Just add below the codes we added to site config file, like this:

```yml
typename: color || icon
```

Set typename as you like. The color needs to be hex RGB codes, like `448aff` or `"#448aff"`. The icon font is Font Awesome, so you should look for the code from [Font Awesome](https://fontawesome.com/icons).

# Update

Execute the following command in the working directory:

```sh
$ npm install hexo-content-blocks --save
```

Then read the following instructions and decide some of them to take. The version numbers mean if you are currently in a version that meets this condition, you need to take the instructions.

## v1.0.0 and before

Modify the codes put in the config file.

## v1.0.0 and before

Modify the codes put in the header file. (Actually, it doesn't matter.)

# About Author

The author is Sukwants, just an OIer in Chengdu No.7 High School. Well, so weak. And others in Chengdu No.7 High School and Mianyang Dongchen High School is so powerful.

Today is Nov.6, 2022 and NOIP 2022 is on Nov.26, 2022. I don't know where should I go when I am kicked out after NOIP. I want to study better, but I'm wasting time designing such a plugin. I'll cherish the works, as a piece of memories in my life.

However, I have to go to study for OI now. There is no more time for me to waste. Just wish NOIP rp++.

That's all.
