[en-US](../README.md) | zh-CN

# hexo-content-blocks

一个为 Hexo 设计的插件，可以使用带有样式的内容块，并且支持自定义哦。

（灵感来源于 [OI-Wiki](https://oi-wiki.org/)）

它支持可折叠的内容框，将来还会支持不可折叠的内容块。现在，你可以自定义指定类型的颜色和图标。当前，我们支持一种主题，以后可能会有更多的主题可供选择。

要用它的话，直接写一个 Hexo 标签就可以啦。

如下。

![content-box-demo](https://user-images.githubusercontent.com/95968907/200179232-b434dd4f-ade3-4996-a685-8ee9ee86281f.png)

# 安装 & 预设

在工作目录下执行以下命令：

```sh
$ npm install hexo-content-blocks --save
```

在适用于所有页面的 `<head>` 标签的布局文件中（比方说 NexT 主题的  `themes/next/layout/_partials/head/head.njk`），加入下面几行：

```njk
{%- if config.content_blocks.enable %}
  <style>{{ content_blocks_css() }}</style>
{%- endif %}
```

在站点配置文件里，加入以下几行：

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

我们预先准备了六种类型。（note, success, failure, warning, info, question）

# 移除 & 清理

在工作目录下执行以下命令：

```sh
$ npm uninstall hexo-content-blocks --save
```

删除你在配置文件中加入的代码。你可以在 [安装 & 预设](#安装--预设) 里找到它们。

# 用法

你只需要在 Markdown 文件中写一个 Hexo 标签，就像这样：

```
{% content_box type:Type title:Title [open] %}
```

将 `Type` 替换为你想要采用的类型，在预设 6 种或是你自定义的类型中选择。默认 `Note`。

将 `Title` 替换为在首部显示的标题文字。默认是类型名。

如果添加了一句 `open`，折叠框就会默认展开。否则默认折叠。

只要你想，你就可以自定义类型。就在站点配置文件里我们添加的代码那里，像这样：

```yml
typename: color || icon
```

typename 随便起一个好听点的名字。color 需要是十六进制 RGB 代码，比方说 `448aff`、`"#448aff"`。图标字体是 Font Awesome 6 Free，所以你需要在[Font Awesome](https://fontawesome.com/icons) 上面找到图标的 Unicode 编码，再把它写到 color 的位置。

# 关于作者

这个插件的作者是 Sukwants，成都市磨子桥职业技术高中的小蒟蒻，当然，森萌和西橙（啊玩小老虎的梗）的其他同学都非常巨。

今天是 2022 年 11 月 6 日，NOIP 2022 是 2022 年 11 月 26 日。我不清楚，在 NOIP 过后我被刷下来以后，将何去何从。我想要学得更好，但是我还在浪费时间编写这个插件。但我会珍惜这些劳动成果，因为这是人生中的一段记忆。

然而，是时候开始卷了，没有更多的时间来躺平了。只希望 NOIP 人品加加加加加。

结束了。
